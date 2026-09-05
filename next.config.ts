import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/theses',
        destination: '/teachings/vision',
        statusCode: 301,
      },
      {
        source: '/theses/:slug',
        destination: '/teachings/vision',
        statusCode: 301,
      },
      {
        source: '/chat',
        destination: '/dharma-chats/ai',
        statusCode: 301,
      },
      {
        source: '/community-chat',
        destination: '/dharma-chats/sangha',
        statusCode: 301,
      },
    ]
  },
}

export default nextConfig
