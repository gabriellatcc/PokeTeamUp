import type { NextConfig } from "next";

const nextConfig: NextConfig = {
async rewrites() {
    return [
      {
        source: '/api/teams/:path*',
        destination: 'http://localhost:8000/api/teams/:path*',
      },
    ];
  },
};

export default nextConfig;
