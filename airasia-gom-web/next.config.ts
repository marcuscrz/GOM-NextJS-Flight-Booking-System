import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
    // domains: ['images.squarespace-cdn.com'],
    remotePatterns: [ {
        protocol: 'https',
        hostname: 'images.squarespace-cdn.com',
        pathname: '**',
      },],
  },
};

export default nextConfig;
