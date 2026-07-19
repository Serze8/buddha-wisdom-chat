import { generatePageMetadata } from '@/lib/seo'
import EpisodesPageClient from './EpisodesPageClient'

export const metadata = generatePageMetadata('/episodes')

export default function EpisodesPage() {
  return <EpisodesPageClient />
}
