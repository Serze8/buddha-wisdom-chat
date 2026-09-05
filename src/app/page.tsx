import { generatePageMetadata } from '@/lib/seo'
import HomePageClient from './HomePageClient'

export const metadata = generatePageMetadata('/')

export default function HomePage() {
  return <HomePageClient />
}
