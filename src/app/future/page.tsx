import { generatePageMetadata } from '@/lib/seo'
import FuturePageClient from './FuturePageClient'

export const metadata = generatePageMetadata('/future')

export default function FuturePage() {
  return <FuturePageClient />
}
