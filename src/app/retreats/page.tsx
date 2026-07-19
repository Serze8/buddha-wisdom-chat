import { generatePageMetadata } from '@/lib/seo'
import RetreatsPageClient from './RetreatsPageClient'

export const metadata = generatePageMetadata('/retreats')

export default function RetreatsPage() {
  return <RetreatsPageClient />
}
