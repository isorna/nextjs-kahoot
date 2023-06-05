/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['domain', 'infrastructure', 'services']
  }
}

module.exports = nextConfig
