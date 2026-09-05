import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CrossBannerProps {
  href: string
  label: string
  title: string
  variant?: 'buddha' | 'chakravartin'
}

export function CrossBanner({ href, label, title, variant = 'buddha' }: CrossBannerProps) {
  return (
    <Link href={href} className="group block w-full">
      <div className="golden-card rounded-2xl p-6 md:p-7 relative overflow-hidden">
        <span className="absolute -right-4 -top-4 text-7xl opacity-[0.05] select-none pointer-events-none">
          {variant === 'buddha' ? '??' : '??'}
        </span>
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-amber-500/80 text-xs font-semibold uppercase tracking-widest">{label}</p>
            <p className="mt-1.5 font-[var(--font-cormorant)] text-xl md:text-2xl text-amber-700/90 leading-snug">
              {title}
            </p>
          </div>
          <ArrowRight className="h-6 w-6 text-amber-500/50 shrink-0 transition-transform group-hover:translate-x-1.5 group-hover:text-amber-400" />
        </div>
      </div>
    </Link>
  )
}
