import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      {
        source: '/index.aspx.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/blogs.aspx.html',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog-:slug.aspx.html',
        destination: '/blogs/blog-:slug',
        permanent: true,
      },
      {
        source: '/:service(pet-relocation|pet-relocation.aspx.html)',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/services/pet-relocation',
        destination: '/services',
        permanent: true,
      },
      {
        source: '/:service(household-goods-shifting|office-goods-shifting|loading-and-unloading|packing-and-unpacking-services|moving-services|car-transportation|bike-transportation).aspx.html',
        destination: '/services/:service',
        permanent: true,
      },
      {
        source: '/:page(about|services|faq|gallery|contact).aspx.html',
        destination: '/:page',
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
