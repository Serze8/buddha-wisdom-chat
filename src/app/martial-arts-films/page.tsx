import { generatePageMetadata } from '@/lib/seo'
import MartialArtsFilmsClient from './MartialArtsFilmsClient'

export const metadata = generatePageMetadata('/martial-arts-films')

export default function MartialArtsFilmsPage() {
  return <MartialArtsFilmsClient />
}
