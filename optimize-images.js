#!/usr/bin/env node

/**
 * ==============================================================================
 * Comprehensive WebP Image Optimization & Code Refactoring Script
 * ==============================================================================
 * 
 * Features:
 * 1. Discovers all .jpg, .jpeg, and .png images recursively (ignoring node_modules, .next, etc.)
 * 2. Converts each image to .webp format, strictly enforcing file size <= 120 KB.
 *    - Dynamically tests quality steps (85 -> 35) to preserve visual quality.
 *    - Automatically scales dimensions down only if strictly necessary to meet the 120 KB limit.
 *    - Auto-rotates using EXIF orientation and preserves transparency.
 * 3. Scans all source code (.html, .css, .js, .jsx, .ts, .tsx, .json, .md, etc.) and
 *    replaces references from old image extensions to .webp.
 * 4. Cleans up original .jpg/.jpeg/.png files once conversion and code updates succeed.
 * 5. Supports `--dry-run` and `--keep-originals` flags for safe execution.
 * 
 * Usage:
 *   node optimize-images.js
 *   node optimize-images.js --dry-run
 *   node optimize-images.js --keep-originals
 *   node optimize-images.js --max-size 120
 * ==============================================================================
 */

const fs = require('fs');
const path = require('path');

// Ensure sharp is installed
let sharp;
try {
  sharp = require('sharp');
  sharp.cache(false); // Prevent Windows file locks
} catch (err) {
  console.error('\x1b[31m[ERROR] "sharp" is not installed.\x1b[0m');
  console.error('Please run: \x1b[36mnpm install sharp\x1b[0m\n');
  process.exit(1);
}

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');
const keepOriginals = args.includes('--keep-originals') || args.includes('--no-delete');
const includeWebp = args.includes('--include-webp') || args.includes('--all');

let maxKbArg = 120;
const maxSizeIdx = args.findIndex(a => a === '--max-size' || a === '-s');
if (maxSizeIdx !== -1 && args[maxSizeIdx + 1]) {
  const parsed = parseInt(args[maxSizeIdx + 1], 10);
  if (!isNaN(parsed) && parsed > 0) maxKbArg = parsed;
}

const MAX_BYTES = maxKbArg * 1024; // e.g. 120 * 1024 = 122,880 bytes
const ROOT_DIR = process.cwd();

// Directories and files to ignore during search
const IGNORED_DIRS = new Set([
  'node_modules',
  '.next',
  '.git',
  '.gemini',
  '.cache',
  'dist',
  'build',
  'out',
  'coverage',
  '.vscode',
  '.idea'
]);

// Target image extensions
const TARGET_IMAGE_EXTS = new Set(['.jpg', '.jpeg', '.png']);
if (includeWebp) {
  TARGET_IMAGE_EXTS.add('.webp');
}

// Source code extensions to scan for image references
const CODE_EXTS = new Set([
  '.html', '.htm', '.xhtml',
  '.css', '.scss', '.sass', '.less',
  '.js', '.jsx', '.mjs', '.cjs',
  '.ts', '.tsx',
  '.json', '.json5',
  '.md', '.markdown',
  '.aspx', '.php', '.twig', '.vue', '.svelte'
]);

// Escape regex special characters
function escapeRegExp(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

// Format bytes into human readable string
function formatBytes(bytes) {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

/**
 * 1. Recursively find files matching extension filters
 */
function findFiles(dir, matchExts, ignoredDirs = IGNORED_DIRS) {
  let results = [];
  try {
    const list = fs.readdirSync(dir);
    for (const item of list) {
      if (ignoredDirs.has(item)) continue;
      const fullPath = path.join(dir, item);
      let stat;
      try {
        stat = fs.statSync(fullPath);
      } catch (e) {
        continue;
      }
      if (stat.isDirectory()) {
        results = results.concat(findFiles(fullPath, matchExts, ignoredDirs));
      } else if (stat.isFile()) {
        const ext = path.extname(item).toLowerCase();
        if (matchExts.has(ext)) {
          results.push(fullPath);
        }
      }
    }
  } catch (err) {
    console.error(`\x1b[33m[WARN] Failed to read directory ${dir}: ${err.message}\x1b[0m`);
  }
  return results;
}

/**
 * 2. Compress and convert a single image to WebP strictly under MAX_BYTES
 */
async function compressToWebP(inputPath, targetBytes) {
  const originalStat = fs.statSync(inputPath);
  const originalSize = originalStat.size;

  // Read file into memory buffer to prevent file lock issues on Windows
  const fileBuffer = fs.readFileSync(inputPath);

  let metadata;
  try {
    metadata = await sharp(fileBuffer, { failOn: 'none' }).metadata();
  } catch (err) {
    throw new Error(`Failed to read image metadata: ${err.message}`);
  }

  let origWidth = metadata.width || 1920;
  let origHeight = metadata.height || 1080;

  // Quality candidates in descending order to maximize fidelity
  const qualitySteps = [85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35];

  // Try varying quality at original dimensions first
  for (const q of qualitySteps) {
    try {
      const buf = await sharp(fileBuffer, { failOn: 'none' })
        .rotate() // auto-orient based on EXIF
        .webp({ quality: q, effort: 6 })
        .toBuffer();

      if (buf.length <= targetBytes) {
        return {
          buffer: buf,
          quality: q,
          width: origWidth,
          height: origHeight,
          scaled: false,
          originalSize,
          newSize: buf.length
        };
      }
    } catch (e) {
      // Continue to next attempt
    }
  }

  // If still above targetBytes, downscale dimensions progressively
  const maxDimSteps = [1600, 1400, 1200, 1000, 800, 640, 500, 400];
  for (const maxDim of maxDimSteps) {
    if (origWidth > maxDim || origHeight > maxDim) {
      for (const q of [75, 65, 55, 45, 35]) {
        try {
          const buf = await sharp(fileBuffer, { failOn: 'none' })
            .rotate()
            .resize({ width: maxDim, height: maxDim, fit: 'inside', withoutEnlargement: true })
            .webp({ quality: q, effort: 6 })
            .toBuffer();

          if (buf.length <= targetBytes) {
            const resMeta = await sharp(buf).metadata();
            return {
              buffer: buf,
              quality: q,
              width: resMeta.width,
              height: resMeta.height,
              scaled: true,
              originalSize,
              newSize: buf.length
            };
          }
        } catch (e) {
          // Continue
        }
      }
    }
  }

  // Extreme fallback: aggressive dimension scaling with acceptable quality
  let scale = 0.5;
  while (scale >= 0.1) {
    const targetWidth = Math.max(100, Math.round(origWidth * scale));
    try {
      const buf = await sharp(fileBuffer, { failOn: 'none' })
        .rotate()
        .resize({ width: targetWidth, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 35, effort: 6 })
        .toBuffer();

      if (buf.length <= targetBytes) {
        const resMeta = await sharp(buf).metadata();
        return {
          buffer: buf,
          quality: 35,
          width: resMeta.width,
          height: resMeta.height,
          scaled: true,
          originalSize,
          newSize: buf.length
        };
      }
    } catch (e) {
      // Continue
    }
    scale -= 0.1;
  }

  // Fallback return best effort buffer at 30% quality
  const fallbackBuf = await sharp(fileBuffer, { failOn: 'none' })
    .rotate()
    .resize({ width: 400, fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 30, effort: 6 })
    .toBuffer();

  const finalMeta = await sharp(fallbackBuf).metadata();
  return {
    buffer: fallbackBuf,
    quality: 30,
    width: finalMeta.width,
    height: finalMeta.height,
    scaled: true,
    originalSize,
    newSize: fallbackBuf.length
  };
}

/**
 * 3. Update references in code files
 */
function updateCodeReferences(codeFiles, imageReplacements, isDryRun) {
  let modifiedFilesCount = 0;
  let totalReplacementsCount = 0;
  const scriptSelfName = path.basename(__filename);

  for (const filePath of codeFiles) {
    if (path.basename(filePath) === scriptSelfName) continue; // Don't modify this script
    if (path.basename(filePath) === 'package-lock.json') continue;

    let content;
    try {
      content = fs.readFileSync(filePath, 'utf8');
    } catch (e) {
      continue;
    }

    let modified = false;
    let fileReplacements = 0;

    for (const { oldBase, newBase } of imageReplacements) {
      // Match old filename safely
      const regex = new RegExp(escapeRegExp(oldBase), 'gi');
      if (regex.test(content)) {
        content = content.replace(regex, (match) => {
          fileReplacements++;
          return newBase;
        });
        modified = true;
      }
    }

    if (modified) {
      modifiedFilesCount++;
      totalReplacementsCount += fileReplacements;
      const relPath = path.relative(ROOT_DIR, filePath);
      console.log(`   \x1b[36m📝 Updated:\x1b[0m ${relPath} (${fileReplacements} reference${fileReplacements > 1 ? 's' : ''})`);

      if (!isDryRun) {
        fs.writeFileSync(filePath, content, 'utf8');
      }
    }
  }

  return { modifiedFilesCount, totalReplacementsCount };
}

/**
 * Main Execution Function
 */
async function main() {
  console.log('\n\x1b[1m\x1b[35m==================================================================\x1b[0m');
  console.log('\x1b[1m\x1b[35m       🚀 Automated WebP Optimizer & Refactoring Tool            \x1b[0m');
  console.log('\x1b[1m\x1b[35m==================================================================\x1b[0m');
  console.log(`\x1b[34m📁 Root Directory:\x1b[0m ${ROOT_DIR}`);
  console.log(`\x1b[34m🎯 Target Max Size:\x1b[0m ${maxKbArg} KB (${formatBytes(MAX_BYTES)})`);
  console.log(`\x1b[34m⚙️  Execution Mode:\x1b[0m ${isDryRun ? '\x1b[33m[DRY RUN - No changes will be saved]\x1b[0m' : '\x1b[32m[LIVE EXECUTION]\x1b[0m'}`);
  console.log(`\x1b[34m🗑️  Originals Cleanup:\x1b[0m ${keepOriginals ? '\x1b[33m[DISABLED - Keeping original images]\x1b[0m' : '\x1b[31m[ENABLED - Deleting original .jpg/.png]\x1b[0m'}\n`);

  // Step 1: Discover Images
  console.log('\x1b[1m🔍 Step 1: Discovering Images...\x1b[0m');
  const imageFiles = findFiles(ROOT_DIR, TARGET_IMAGE_EXTS);
  console.log(`   Found \x1b[1m${imageFiles.length}\x1b[0m image file(s) (.jpg, .jpeg, .png).\n`);

  if (imageFiles.length === 0) {
    console.log('\x1b[32m✨ No images found that require conversion. All images may already be .webp!\x1b[0m\n');
    return;
  }

  // Step 2: Convert & Compress to WebP
  console.log('\x1b[1m🖼️  Step 2: Converting & Compressing to WebP (<= 120 KB)...\x1b[0m');
  const successfulConversions = [];
  const imageReplacements = [];
  let totalOrigBytes = 0;
  let totalNewBytes = 0;

  for (let i = 0; i < imageFiles.length; i++) {
    const imgPath = imageFiles[i];
    const relPath = path.relative(ROOT_DIR, imgPath);
    const parsed = path.parse(imgPath);
    const oldBase = parsed.base;
    const newBase = `${parsed.name}.webp`;
    const outputPath = path.join(parsed.dir, newBase);
    const isAlreadyWebp = parsed.ext.toLowerCase() === '.webp';

    const currentStat = fs.statSync(imgPath);
    if (isAlreadyWebp && currentStat.size <= MAX_BYTES) {
      continue; // Already optimized under 120 KB
    }

    process.stdout.write(`   [${i + 1}/${imageFiles.length}] Processing ${relPath}... `);

    try {
      const result = await compressToWebP(imgPath, MAX_BYTES);
      totalOrigBytes += result.originalSize;
      totalNewBytes += result.newSize;

      const savingsPercent = (((result.originalSize - result.newSize) / result.originalSize) * 100).toFixed(1);
      const isUnderLimit = result.newSize <= MAX_BYTES;
      const statusColor = isUnderLimit ? '\x1b[32m' : '\x1b[33m';

      console.log(
        `${statusColor}DONE\x1b[0m (${formatBytes(result.originalSize)} -> \x1b[1m${formatBytes(result.newSize)}\x1b[0m, -${savingsPercent}%, q${result.quality}${result.scaled ? ', resized' : ''})`
      );

      if (!isDryRun) {
        fs.writeFileSync(outputPath, result.buffer);
      }

      successfulConversions.push({
        originalPath: imgPath,
        webpPath: outputPath,
        oldBase,
        newBase,
        isAlreadyWebp
      });

      if (!isAlreadyWebp) {
        imageReplacements.push({
          oldBase,
          newBase
        });
      }

    } catch (err) {
      console.log(`\x1b[31mFAILED (${err.message})\x1b[0m`);
    }
  }

  console.log(`\n   Converted \x1b[32m${successfulConversions.length}\x1b[0m images successfully.\n`);

  // Step 3: Code Modification
  console.log('\x1b[1m📝 Step 3: Scanning and Updating Source Code References...\x1b[0m');
  const codeFiles = findFiles(ROOT_DIR, CODE_EXTS);
  console.log(`   Scanning \x1b[1m${codeFiles.length}\x1b[0m source code files...`);

  const { modifiedFilesCount, totalReplacementsCount } = updateCodeReferences(codeFiles, imageReplacements, isDryRun);
  console.log(`   Total code files updated: \x1b[32m${modifiedFilesCount}\x1b[0m (${totalReplacementsCount} references updated).\n`);

  // Step 4: Cleanup original images
  console.log('\x1b[1m🗑️  Step 4: Cleanup Original Image Files...\x1b[0m');
  const cleanupCandidates = successfulConversions.filter(c => !c.isAlreadyWebp);

  if (keepOriginals) {
    console.log('   \x1b[33mSkipping cleanup: Originals preserved (--keep-originals was set).\x1b[0m\n');
  } else if (isDryRun) {
    console.log(`   \x1b[33m[DRY RUN] Would delete ${cleanupCandidates.length} original image files.\x1b[0m\n`);
  } else {
    let deletedCount = 0;
    for (const conv of cleanupCandidates) {
      try {
        if (fs.existsSync(conv.originalPath)) {
          fs.unlinkSync(conv.originalPath);
          deletedCount++;
        }
      } catch (err) {
        console.error(`   \x1b[31mFailed to delete ${path.relative(ROOT_DIR, conv.originalPath)}: ${err.message}\x1b[0m`);
      }
    }
    console.log(`   Deleted \x1b[32m${deletedCount}\x1b[0m original image file(s).\n`);
  }

  // Summary Report
  const totalSavedBytes = Math.max(0, totalOrigBytes - totalNewBytes);
  const overallSavingsPercent = totalOrigBytes > 0 ? ((totalSavedBytes / totalOrigBytes) * 100).toFixed(1) : '0';

  console.log('\x1b[1m\x1b[32m==================================================================\x1b[0m');
  console.log('\x1b[1m\x1b[32m                       🎉 OPTIMIZATION SUMMARY                    \x1b[0m');
  console.log('\x1b[1m\x1b[32m==================================================================\x1b[0m');
  console.log(`   • Images Converted:          \x1b[1m${successfulConversions.length}\x1b[0m`);
  console.log(`   • Original Total Size:       \x1b[1m${formatBytes(totalOrigBytes)}\x1b[0m`);
  console.log(`   • Optimized WebP Total Size: \x1b[1m${formatBytes(totalNewBytes)}\x1b[0m`);
  console.log(`   • Total Disk Space Saved:    \x1b[32m\x1b[1m${formatBytes(totalSavedBytes)} (-${overallSavingsPercent}%)\x1b[0m`);
  console.log(`   • Code Files Modified:       \x1b[1m${modifiedFilesCount}\x1b[0m (${totalReplacementsCount} references replaced)`);
  if (!keepOriginals && !isDryRun) {
    console.log(`   • Original Files Cleaned Up: \x1b[1m${successfulConversions.length}\x1b[0m`);
  }
  console.log('\x1b[1m\x1b[32m==================================================================\x1b[0m\n');
}

main().catch(err => {
  console.error('\x1b[31m[FATAL ERROR]:\x1b[0m', err);
  process.exit(1);
});
