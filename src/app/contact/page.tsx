import { generatePageMetadata } from '@/lib/seo'
import ContactPageClient from './ContactPageClient'

export const metadata = generatePageMetadata('/contact')

export default function ContactPage() {
  return <ContactPageClient />
}
