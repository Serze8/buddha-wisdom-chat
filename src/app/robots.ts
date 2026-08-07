import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://wisdom-buddha-and-chat.vercel.app'

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/auth', '/profile'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
