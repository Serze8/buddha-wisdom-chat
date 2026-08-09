import { generatePageMetadata } from '@/lib/seo'
import DesignToolsPageClient from './DesignToolsPageClient'

export const metadata = generatePageMetadata('/design-tools')

export default function DesignToolsPage() {
  return <DesignToolsPageClient />
}
