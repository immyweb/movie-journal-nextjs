/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themoviedb.org"],
  },
  env: {
    TOKEN: process.env.TOKEN,
  },
};

module.exports = nextConfig;
