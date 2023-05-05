/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        destination: 'https://openapi.naver.com/:path*',
        source: '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
