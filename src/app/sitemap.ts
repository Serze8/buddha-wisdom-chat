import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/server'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-wisdom.chat'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ['en', 'ru', 'hi', 'es', 'fr', 'de', 'zh', 'ja']

  const staticPages = [
    '', '/auth', '/chat', '/characters', '/episodes',
    '/teachings', '/theses', '/gallery', '/quiz',
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
