import { generatePageMetadata } from '@/lib/seo'
import ChatPageClient from './ChatPageClient'

export const metadata = generatePageMetadata('/chat')

export default function ChatPage() {
  return <ChatPageClient />
}
