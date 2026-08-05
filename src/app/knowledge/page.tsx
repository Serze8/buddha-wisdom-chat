import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import KnowledgePageClient from './KnowledgePageClient'

export const metadata = generatePageMetadata('/knowledge')

export default function KnowledgePage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/knowledge')} />
      <KnowledgePageClient />
    </>
  )
}
