/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/:path*/",
        destination: "/:path*",
        basePath: false,
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
