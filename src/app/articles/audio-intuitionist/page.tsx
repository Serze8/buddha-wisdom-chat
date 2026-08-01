import { generatePageMetadata } from '@/lib/seo'
import ArticleClient from './ArticleClient'

export const metadata = generatePageMetadata('/articles/audio-intuitionist')

export default function ArticlePage() {
  return <ArticleClient />
}
