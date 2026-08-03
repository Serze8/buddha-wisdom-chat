import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import PracticePageClient from './PracticePageClient'

export const metadata = generatePageMetadata('/teachings/practice')

export default function PracticePage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/teachings/practice')} />
      <PracticePageClient />
    </>
  )
}
