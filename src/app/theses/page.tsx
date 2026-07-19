import { generatePageMetadata } from '@/lib/seo'
import ThesesPageClient from './ThesesPageClient'

export const metadata = generatePageMetadata('/theses')

export default function ThesesPage() {
  return <ThesesPageClient />
}
