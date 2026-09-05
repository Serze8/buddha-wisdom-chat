import { generatePageMetadata } from '@/lib/seo'
import SanghaPageClient from './SanghaPageClient'

export const metadata = generatePageMetadata('/dharma-chats/sangha')

export default function SanghaPage() {
  return <SanghaPageClient />
}
