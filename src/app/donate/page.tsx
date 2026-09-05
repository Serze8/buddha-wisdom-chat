import { generatePageMetadata } from '@/lib/seo'
import DonatePageClient from './DonatePageClient'

export const metadata = generatePageMetadata('/donate')

export default function DonatePage() {
  return <DonatePageClient />
}
