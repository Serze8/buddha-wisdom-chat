import { generatePageMetadata } from '@/lib/seo'
import WheelPageClient from './WheelPageClient'

export const metadata = generatePageMetadata('/teachings/wheel')

export default function WheelPage() {
  return <WheelPageClient />
}
