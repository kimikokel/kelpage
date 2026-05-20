/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async rewrites() {
    return {
      // These rewrites are for proxying to Amplify
      beforeFiles: [
        {
          source: '/bookstore/:path*',
          destination: 'https://main.d7qiai7u4ok60.amplifyapp.com/bookstore/:path*',
        },
        {
          source: '/macaucalendar/:path*',
          destination: 'https://main.d7qiai7u4ok60.amplifyapp.com/macaucalendar/:path*',
        },
        {
          source: '/kelist/:path*',
          destination: 'https://main.d7qiai7u4ok60.amplifyapp.com/kelist/:path*',
        },
        {  
          "source": "/520jayden/:path*",
          "destination": "https://main.d7qiai7u4ok60.amplifyapp.com/520jayden/:path*"
        }
      ],
    }
  },
}


export default nextConfig
