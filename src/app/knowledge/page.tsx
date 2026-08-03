import { generatePageMetadata } from '@/lib/seo'
import KnowledgePageClient from './KnowledgePageClient'

export const metadata = generatePageMetadata('/knowledge')

export default function KnowledgePage() {
  return <KnowledgePageClient />
}
