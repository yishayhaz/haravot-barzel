/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    additionalData: `@use "src/styles/abstracts" as *;`,
  },
  images: {
    domains: ["images.unsplash.com", "source.unsplash.com"],
  },
};

module.exports = nextConfig;
