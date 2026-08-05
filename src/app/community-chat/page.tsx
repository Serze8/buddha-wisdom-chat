import { generatePageMetadata } from '@/lib/seo'
import CommunityChatPageClient from './CommunityChatPageClient'

export const metadata = generatePageMetadata('/community-chat')

interface PageProps {
  searchParams: Promise<{ character?: string }>
}

export default async function CommunityChatPage({ searchParams }: PageProps) {
  const { character } = await searchParams
  return <CommunityChatPageClient initialCharacterId={character || null} />
}
