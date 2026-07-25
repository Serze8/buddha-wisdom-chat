import { generatePageMetadata } from '@/lib/seo'
import ChakravartinPageClient from './ChakravartinPageClient'

export const metadata = generatePageMetadata('/chakravartin')

export default function ChakravartinPage() {
  return <ChakravartinPageClient />
}
