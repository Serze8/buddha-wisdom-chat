import { generatePageMetadata } from '@/lib/seo'
import PastPageClient from './PastPageClient'

export const metadata = generatePageMetadata('/past')

export default function PastPage() {
  return <PastPageClient />
}
