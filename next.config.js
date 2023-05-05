/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    kakaoJavaScriptKey: 'f3a4bb7bae4e518350182a657da0470e',
  },
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
