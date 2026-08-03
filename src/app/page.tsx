import { generatePageMetadata, generateJsonLd } from '@/lib/seo'
import JsonLd from '@/components/JsonLd'
import HomePageClient from './HomePageClient'

export const metadata = generatePageMetadata('/')

export default function HomePage() {
  return (
    <>
      <JsonLd data={generateJsonLd('/')} />
      <HomePageClient />
    </>
  )
}
