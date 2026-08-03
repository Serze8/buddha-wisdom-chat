import { generatePageMetadata } from '@/lib/seo'
import JourneyPageClient from './JourneyPageClient'

export const metadata = generatePageMetadata('/journey')

export default function JourneyPage() {
  return <JourneyPageClient />
}
