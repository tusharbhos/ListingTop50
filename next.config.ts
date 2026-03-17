import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'img.icons8.com',
      'cdn-icons-png.flaticon.com',
      'cdn-icons-png.freepik.com',
      'images.unsplash.com',
      'via.placeholder.com'
    ],
  },
}

module.exports = nextConfig

export default nextConfig;
