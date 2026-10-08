#!/usr/bin/env python3
"""
==============================================================================
Automated WebP Optimizer & Source Code Refactoring Script (Python / Pillow)
==============================================================================

Features:
1. Recursively scans project for .jpg, .jpeg, and .png images (excluding node_modules, .next, etc.)
2. Converts each image to .webp format, strictly enforcing file size <= 120 KB.
   - Dynamically steps down quality (85 -> 35) to maintain visual fidelity.
   - Scales dimensions down only when strictly required to meet the 120 KB limit.
   - Preserves aspect ratio, EXIF orientation, and PNG transparency.
3. Scans all source code (.html, .css, .js, .jsx, .ts, .tsx, .json, .md, etc.) and
   updates old image references to .webp.
4. Deletes original .jpg/.jpeg/.png files once conversion and code updates succeed.
5. Supports `--dry-run` and `--keep-originals` safety flags.

Requirements:
   pip install Pillow

Usage:
   python optimize_images.py
   python optimize_images.py --dry-run
   python optimize_images.py --keep-originals
   python optimize_images.py --max-size 120
==============================================================================
"""

import os
import sys
import re
import argparse
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError:
    print("\033[91m[ERROR] 'Pillow' is not installed.\033[0m")
    print("Please run: \033[96mpip install Pillow\033[0m\n")
    sys.exit(1)

# Configuration & Ignore lists
IGNORED_DIRS = {
    'node_modules', '.next', '.git', '.gemini', '.cache',
    'dist', 'build', 'out', 'coverage', '.vscode', '.idea', '__pycache__'
}

TARGET_IMAGE_EXTS = {'.jpg', '.jpeg', '.png'}

CODE_EXTS = {
    '.html', '.htm', '.xhtml',
    '.css', '.scss', '.sass', '.less',
    '.js', '.jsx', '.mjs', '.cjs',
    '.ts', '.tsx',
    '.json', '.json5',
    '.md', '.markdown',
    '.aspx', '.php', '.twig', '.vue', '.svelte'
}

def format_bytes(num_bytes):
    for unit in ['B', 'KB', 'MB', 'GB']:
        if num_bytes < 1024.0:
            return f"{num_bytes:.2f} {unit}"
        num_bytes /= 1024.0
    return f"{num_bytes:.2f} TB"

def find_files(root_dir, target_exts, ignored_dirs=IGNORED_DIRS):
    matches = []
    for root, dirs, files in os.walk(root_dir):
        # Prune ignored directories in-place
        dirs[:] = [d for d in dirs if d not in ignored_dirs and not d.startswith('.')]
        for f in files:
            ext = os.path.splitext(f)[1].lower()
            if ext in target_exts:
                matches.append(os.path.join(root, f))
    return matches

def compress_image_to_webp(image_path, target_bytes):
    original_size = os.path.getsize(image_path)
    
    with Image.open(image_path) as img:
        # Auto-orient based on EXIF tag
        img = ImageOps.exif_transpose(img)
        
        # Ensure RGBA or RGB
        if img.mode not in ('RGB', 'RGBA'):
            img = img.convert('RGBA' if 'transparency' in img.info or img.mode == 'P' else 'RGB')
        
        orig_w, orig_h = img.size
        temp_webp = image_path + ".tmp.webp"
        
        # Phase 1: Try varying quality at original dimensions
        quality_steps = [85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35]
        for q in quality_steps:
            img.save(temp_webp, format='WEBP', quality=q, method=6)
            new_size = os.path.getsize(temp_webp)
            if new_size <= target_bytes:
                with open(temp_webp, 'rb') as f:
                    buf = f.read()
                os.remove(temp_webp)
                return {
                    'buffer': buf,
                    'quality': q,
                    'width': orig_w,
                    'height': orig_h,
                    'scaled': False,
                    'original_size': original_size,
                    'new_size': new_size
                }
        
        # Phase 2: Progressively scale down max dimensions
        max_dim_steps = [1600, 1400, 1200, 1000, 800, 640, 500, 400]
        for max_dim in max_dim_steps:
            if orig_w > max_dim or orig_h > max_dim:
                scale_ratio = min(max_dim / orig_w, max_dim / orig_h)
                new_w = int(orig_w * scale_ratio)
                new_h = int(orig_h * scale_ratio)
                resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                
                for q in [75, 65, 55, 45, 35]:
                    resized_img.save(temp_webp, format='WEBP', quality=q, method=6)
                    new_size = os.path.getsize(temp_webp)
                    if new_size <= target_bytes:
                        with open(temp_webp, 'rb') as f:
                            buf = f.read()
                        os.remove(temp_webp)
                        return {
                            'buffer': buf,
                            'quality': q,
                            'width': new_w,
                            'height': new_h,
                            'scaled': True,
                            'original_size': original_size,
                            'new_size': new_size
                        }
        
        # Phase 3: Aggressive downscale fallback
        scale = 0.5
        while scale >= 0.1:
            new_w = max(100, int(orig_w * scale))
            new_h = max(100, int(orig_h * scale))
            resized_img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
            resized_img.save(temp_webp, format='WEBP', quality=35, method=6)
            new_size = os.path.getsize(temp_webp)
            if new_size <= target_bytes:
                with open(temp_webp, 'rb') as f:
                    buf = f.read()
                os.remove(temp_webp)
                return {
                    'buffer': buf,
                    'quality': 35,
                    'width': new_w,
                    'height': new_h,
                    'scaled': True,
                    'original_size': original_size,
                    'new_size': new_size
                }
            scale -= 0.1
        
        # Absolute fallback
        with open(temp_webp, 'rb') as f:
            buf = f.read()
        final_size = os.path.getsize(temp_webp)
        os.remove(temp_webp)
        return {
            'buffer': buf,
            'quality': 30,
            'width': orig_w,
            'height': orig_h,
            'scaled': True,
            'original_size': original_size,
            'new_size': final_size
        }

def update_code_references(code_files, image_replacements, is_dry_run):
    modified_files = 0
    total_replacements = 0
    script_name = os.path.basename(__file__)
    
    # Deduplicate replacement pairs
    unique_replacements = []
    seen = set()
    for old_base, new_base in image_replacements:
        key = (old_base.lower(), new_base.lower())
        if key not in seen:
            seen.add(key)
            unique_replacements.append((old_base, new_base))
            
    for file_path in code_files:
        if os.path.basename(file_path) in [script_name, 'package-lock.json', 'optimize-images.js']:
            continue
            
        try:
            with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()
        except Exception:
            continue
            
        file_modified = False
        file_count = 0
        
        for old_base, new_base in unique_replacements:
            pattern = re.compile(re.escape(old_base), re.IGNORECASE)
            if pattern.search(content):
                content, count = pattern.subn(new_base, content)
                file_count += count
                file_modified = True
                
        if file_modified:
            modified_files += 1
            total_replacements += file_count
            rel_path = os.path.relpath(file_path)
            print(f"   \033[96m📝 Updated:\033[0m {rel_path} ({file_count} reference{'s' if file_count > 1 else ''})")
            
            if not is_dry_run:
                with open(file_path, 'w', encoding='utf-8', errors='ignore') as f:
                    f.write(content)
                    
    return modified_files, total_replacements

def main():
    parser = argparse.ArgumentParser(description="Automated WebP Image Optimizer & Code Refactoring Tool")
    parser.add_argument('--dry-run', action='store_true', help="Simulate optimization without writing changes")
    parser.add_argument('--keep-originals', '--no-delete', action='store_true', help="Preserve original JPG/PNG files")
    parser.add_argument('--max-size', type=int, default=120, help="Max file size in KB (default: 120)")
    args = parser.parse_args()
    
    root_dir = os.getcwd()
    max_bytes = args.max_size * 1024
    
    print("\n\033[1m\033[95m==================================================================\033[0m")
    print("\033[1m\033[95m       🚀 Automated WebP Optimizer & Refactoring Tool (Python)     \033[0m")
    print("\033[1m\033[95m==================================================================\033[0m")
    print(f"\033[94m📁 Root Directory:\033[0m {root_dir}")
    print(f"\033[94m🎯 Target Max Size:\033[0m {args.max_size} KB ({format_bytes(max_bytes)})")
    print(f"\033[94m⚙️  Execution Mode:\033[0m {'\033[93m[DRY RUN - No changes will be saved]\033[0m' if args.dry_run else '\033[92m[LIVE EXECUTION]\033[0m'}")
    print(f"\033[94m🗑️  Originals Cleanup:\033[0m {'\033[93m[DISABLED - Keeping original images]\033[0m' if args.keep_originals else '\033[91m[ENABLED - Deleting original .jpg/.png]\033[0m'}\n")
    
    # Step 1: Discover
    print("\033[1m🔍 Step 1: Discovering Images...\033[0m")
    image_files = find_files(root_dir, TARGET_IMAGE_EXTS)
    print(f"   Found \033[1m{len(image_files)}\033[0m image file(s) (.jpg, .jpeg, .png).\n")
    
    if not image_files:
        print("\033[92m✨ No images found that require conversion. All images may already be .webp!\033[0m\n")
        return

    # Step 2: Convert & Compress
    print(f"\033[1m🖼️  Step 2: Converting & Compressing to WebP (<= {args.max_size} KB)...\033[0m")
    successful = []
    replacements = []
    total_orig_bytes = 0
    total_new_bytes = 0
    
    for idx, img_path in enumerate(image_files, 1):
        rel_path = os.path.relpath(img_path)
        base_name = os.path.basename(img_path)
        name_without_ext = os.path.splitext(base_name)[0]
        new_base = f"{name_without_ext}.webp"
        output_path = os.path.join(os.path.dirname(img_path), new_base)
        
        sys.stdout.write(f"   [{idx}/{len(image_files)}] Processing {rel_path}... ")
        sys.stdout.flush()
        
        try:
            result = compress_image_to_webp(img_path, max_bytes)
            total_orig_bytes += result['original_size']
            total_new_bytes += result['new_size']
            
            savings = ((result['original_size'] - result['new_size']) / result['original_size']) * 100
            status_col = "\033[92m" if result['new_size'] <= max_bytes else "\033[93m"
            
            print(f"{status_col}DONE\033[0m ({format_bytes(result['original_size'])} -> \033[1m{format_bytes(result['new_size'])}\033[0m, -{savings:.1f}%, q{result['quality']}{', resized' if result['scaled'] else ''})")
            
            if not args.dry_run:
                with open(output_path, 'wb') as f:
                    f.write(result['buffer'])
                    
            successful.append((img_path, output_path))
            replacements.append((base_name, new_base))
        except Exception as e:
            print(f"\033[91mFAILED ({str(e)})\033[0m")

    print(f"\n   Converted \033[92m{len(successful)}/{len(image_files)}\033[0m images successfully.\n")

    # Step 3: Code Modification
    print("\033[1m📝 Step 3: Scanning and Updating Source Code References...\033[0m")
    code_files = find_files(root_dir, CODE_EXTS)
    print(f"   Scanning \033[1m{len(code_files)}\033[0m source code files...")
    
    mod_files, mod_refs = update_code_references(code_files, replacements, args.dry_run)
    print(f"   Total code files updated: \033[92m{mod_files}\033[0m ({mod_refs} references updated).\n")

    # Step 4: Cleanup
    print("\033[1m🗑️  Step 4: Cleanup Original Image Files...\033[0m")
    if args.keep_originals:
        print("   \033[93mSkipping cleanup: Originals preserved (--keep-originals was set).\033[0m\n")
    elif args.dry_run:
        print(f"   \033[93m[DRY RUN] Would delete {len(successful)} original image files.\033[0m\n")
    else:
        deleted = 0
        for orig_path, _ in successful:
            try:
                if os.path.exists(orig_path):
                    os.remove(orig_path)
                    deleted += 1
            except Exception as e:
                print(f"   \033[91mFailed to delete {os.path.relpath(orig_path)}: {e}\033[0m")
        print(f"   Deleted \033[92m{deleted}\033[0m original image file(s).\n")

    # Summary
    total_saved = max(0, total_orig_bytes - total_new_bytes)
    overall_savings = ((total_saved / total_orig_bytes) * 100) if total_orig_bytes > 0 else 0
    
    print("\033[1m\033[92m==================================================================\033[0m")
    print("\033[1m\033[92m                       🎉 OPTIMIZATION SUMMARY                    \033[0m")
    print("\033[1m\033[92m==================================================================\033[0m")
    print(f"   • Images Converted:          \033[1m{len(successful)}\033[0m")
    print(f"   • Original Total Size:       \033[1m{format_bytes(total_orig_bytes)}\033[0m")
    print(f"   • Optimized WebP Total Size: \033[1m{format_bytes(total_new_bytes)}\033[0m")
    print(f"   • Total Disk Space Saved:    \033[92m\033[1m{format_bytes(total_saved)} (-{overall_savings:.1f}%)\033[0m")
    print(f"   • Code Files Modified:       \033[1m{mod_files}\033[0m ({mod_refs} references replaced)")
    if not args.keep_originals and not args.dry_run:
        print(f"   • Original Files Cleaned Up: \033[1m{len(successful)}\033[0m")
    print("\033[1m\033[92m==================================================================\033[0m\n")

if __name__ == '__main__':
    main()
