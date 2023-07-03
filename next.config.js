/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true, domains: ["lh3.googleusercontent.com"] },
  experimental: {
    appDir: true,
  },

}

module.exports = nextConfig
