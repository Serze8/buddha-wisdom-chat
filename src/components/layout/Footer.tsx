import { Heart } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-amber-950 border-t border-amber-800/30 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-amber-200/60 text-sm">
            © {new Date().getFullYear()} Buddha&apos;s Wisdom Chat. Made with{' '}
            <Heart className="w-3 h-3 inline text-red-400" fill="currentColor" />{' '}
            for all seekers.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-amber-200/60 hover:text-amber-200 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-amber-200/60 hover:text-amber-200 transition-colors">
              Contact
            </Link>
            <Link href="/donate" className="text-amber-200/60 hover:text-amber-200 transition-colors">
              Donate
            </Link>
            <Link href="/admin/translations" className="text-amber-200/60 hover:text-amber-200 transition-colors">
              Admin
            </Link>
          </div>
        </div>
        <p className="text-amber-200/40 text-xs mt-4 text-center">
          Inspired by the 2013 TV series &quot;Buddha&quot; by B.K. Modi
        </p>
      </div>
    </footer>
  )
}
