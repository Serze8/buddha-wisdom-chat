import { generatePageMetadata } from '@/lib/seo'
import AboutPageClient from './AboutPageClient'

export const metadata = generatePageMetadata('/about')

export default function AboutPage() {
  return <AboutPageClient />
}
