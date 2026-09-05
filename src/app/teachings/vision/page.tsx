import { generatePageMetadata } from '@/lib/seo'
import VisionPageClient from './VisionPageClient'

export const metadata = generatePageMetadata('/teachings/vision')

export default function VisionPage() {
  return <VisionPageClient />
}
