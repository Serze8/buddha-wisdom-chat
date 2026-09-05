import { generatePageMetadata } from '@/lib/seo'
import BuddhaPageClient from './BuddhaPageClient'

export const metadata = generatePageMetadata('/buddha')

export default function BuddhaPage() {
  return <BuddhaPageClient />
}
