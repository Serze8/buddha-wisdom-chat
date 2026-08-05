import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import GlossaryPageClient from './GlossaryPageClient'

export const metadata = generatePageMetadata('/glossary')

export default function GlossaryPage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/glossary')} />
      <GlossaryPageClient />
    </>
  )
}
