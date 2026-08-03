import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import JourneyPageClient from './JourneyPageClient'

export const metadata = generatePageMetadata('/journey')

export default function JourneyPage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/journey')} />
      <JourneyPageClient />
    </>
  )
}
