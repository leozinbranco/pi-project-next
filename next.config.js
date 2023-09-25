/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: true,
      },
      {
        source: '/',
        destination: '/login',
        permanent: false,
      }
    ]
  },
}

module.exports = nextConfig
