import { generatePageMetadata } from '@/lib/seo'
import AlliancesPageClient from './AlliancesPageClient'

export const metadata = generatePageMetadata('/alliances')

export default function AlliancesPage() {
  return <AlliancesPageClient />
}