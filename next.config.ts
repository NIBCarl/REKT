import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  trailingSlash: false,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/staking/',
        destination: '/staking',
        permanent: true,
      },
      {
        source: '/loss-claim/',
        destination: '/loss-claim',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/staking',
        destination: '/staking',
      },
      {
        source: '/loss-claim',
        destination: '/loss-claim',
      },
    ];
  },
};

export default nextConfig;
