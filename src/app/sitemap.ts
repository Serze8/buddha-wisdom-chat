import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-chakravartin.vercel.app'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['en', 'ru', 'hi', 'es', 'fr', 'de', 'zh', 'ja']

  const staticPages = [
    '', '/auth', '/dharma-chats/ai', '/characters', '/episodes',
    '/teachings', '/teachings/vision', '/teachings/path', '/teachings/wheel',
    '/gallery', '/quiz',
    '/community', '/videos', '/retreats', '/profile',
  ]

  const entries: MetadataRoute.Sitemap = []

  for (const page of staticPages) {
    for (const locale of locales) {
      entries.push({
        url: `${BASE_URL}${page}?lang=${locale}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      })
    }
  }

  return entries
}
