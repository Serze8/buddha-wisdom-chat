import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import ThesesPageClient from './ThesesPageClient'

export const metadata = generatePageMetadata('/theses')

export default function ThesesPage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/theses')} />
      <ThesesPageClient />
    </>
  )
}
