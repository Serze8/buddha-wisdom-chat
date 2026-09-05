import { generatePageMetadata } from '@/lib/seo'
import TeachingsPageClient from './TeachingsPageClient'

export const metadata = generatePageMetadata('/teachings')

export default function TeachingsPage() {
  return <TeachingsPageClient />
}
