import { generatePageMetadata } from '@/lib/seo'
import NowPageClient from './NowPageClient'

export const metadata = generatePageMetadata('/now')

export default function NowPage() {
  return <NowPageClient />
}
