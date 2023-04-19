/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.smartdeploy.dev',
          },
        ],
        destination: 'https://smartdeploy.dev/:path*',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
