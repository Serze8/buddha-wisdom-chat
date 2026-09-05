import { generatePageMetadata } from '@/lib/seo'
import PathPageClient from './PathPageClient'

export const metadata = generatePageMetadata('/teachings/path')

export default function PathPage() {
  return <PathPageClient />
}
