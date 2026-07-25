import { generatePageMetadata } from '@/lib/seo'
import ZenMartialPageClient from './ZenMartialPageClient'

export const metadata = generatePageMetadata('/zen-martial')

export default function ZenMartialPage() {
  return <ZenMartialPageClient />
}
