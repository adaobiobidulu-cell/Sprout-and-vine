import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'sproutandvine.ca' }],
        destination: 'https://sproutandvinecare.ca/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.sproutandvine.ca' }],
        destination: 'https://sproutandvinecare.ca/:path*',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
