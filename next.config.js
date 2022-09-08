const path = require("path");
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["educationsnapshots.com"],
    formats: ["image/webp", "image/avif"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  optimizeFonts: false,
};

module.exports = nextConfig;
