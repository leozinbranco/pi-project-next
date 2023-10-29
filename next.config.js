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
      },
      {
        source: '/',
        destination: '/upload',
        permanent: false,
      },
      {
        source: '/',
        destination: '/home',
        permanent: false
      }
    ]
  },
}

module.exports = nextConfig
