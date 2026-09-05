import { generatePageMetadata } from '@/lib/seo'
import SeriesPageClient from './SeriesPageClient'

export const metadata = generatePageMetadata('/chakravartin/series')

export default function SeriesPage() {
  return <SeriesPageClient />
}
