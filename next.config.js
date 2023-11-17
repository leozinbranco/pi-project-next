/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/auth',
        permanent: false
      },
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'x-api-key',
            value: '(?<authorized>yes|true)',
          },
        ],
        permanent: false,
        destination: '/home/serviceOrder',
      },
    ]
  },
}

module.exports = nextConfig
