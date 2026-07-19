import { generatePageMetadata } from '@/lib/seo'
import CharactersPageClient from './CharactersPageClient'

export const metadata = generatePageMetadata('/characters')

export default function CharactersPage() {
  return <CharactersPageClient />
}
