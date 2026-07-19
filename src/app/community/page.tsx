import { generatePageMetadata } from '@/lib/seo'
import CommunityPageClient from './CommunityPageClient'

export const metadata = generatePageMetadata('/community')

export default function CommunityPage() {
  return <CommunityPageClient />
}
