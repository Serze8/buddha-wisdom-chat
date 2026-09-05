import { generatePageMetadata } from '@/lib/seo'
import PracticePageClient from './PracticePageClient'

export const metadata = generatePageMetadata('/teachings/practice')

export default function PracticePage() {
  return <PracticePageClient />
}
