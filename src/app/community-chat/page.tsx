import { generatePageMetadata } from '@/lib/seo'
import CommunityChatPageClient from './CommunityChatPageClient'

export const metadata = generatePageMetadata('/community-chat')

export default function CommunityChatPage() {
  return <CommunityChatPageClient />
}
