/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.themoviedb.org"],
  },
  env: {
    TOKEN: process.env.TOKEN,
    API_KEY: process.env.API_KEY,
  },
};

module.exports = nextConfig;
