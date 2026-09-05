import { generatePageMetadata } from '@/lib/seo'
import GalleryPageClient from './GalleryPageClient'

export const metadata = generatePageMetadata('/gallery')

export default function GalleryPage() {
  return <GalleryPageClient />
}
