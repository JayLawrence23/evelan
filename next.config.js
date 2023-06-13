/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEV: process.env.SERVER_URL || '',
  },
  images: {
    remotePatterns: [
      {
        protocol: process.env.PROTOCOL || '',
        hostname: process.env.HOSTNAME || '',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
