import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import TeachingsPageClient from './TeachingsPageClient'

export const metadata = generatePageMetadata('/teachings')

export default function TeachingsPage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/teachings')} />
      <TeachingsPageClient />
    </>
  )
}
