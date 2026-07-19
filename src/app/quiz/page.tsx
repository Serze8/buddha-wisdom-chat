import { generatePageMetadata } from '@/lib/seo'
import QuizPageClient from './QuizPageClient'

export const metadata = generatePageMetadata('/quiz')

export default function QuizPage() {
  return <QuizPageClient />
}
