import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import AboutPageClient from './AboutPageClient'

export const metadata = generatePageMetadata('/about')

export default function AboutPage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/about')} />
      <AboutPageClient />
    </>
  )
}
