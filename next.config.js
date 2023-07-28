/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    DEV: "https://reqres.in",
    DUMMY: "https://dummyjson.com",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.dummyjson.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "reqres.in",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
