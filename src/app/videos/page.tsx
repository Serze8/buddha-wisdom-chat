import { generatePageMetadata } from '@/lib/seo'
import VideosPageClient from './VideosPageClient'

export const metadata = generatePageMetadata('/videos')

export default function VideosPage() {
  return <VideosPageClient />
}
