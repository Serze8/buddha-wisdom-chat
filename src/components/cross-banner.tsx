import Link from 'next/link'

interface CrossBannerProps {
  href: string
  label: string
  title: string
  variant?: 'buddha' | 'chakravartin'
}

const gradients = {
  buddha: 'from-amber-500 to-amber-700',
  chakravartin: 'from-teal-500 to-teal-700',
}

export function CrossBanner({ href, label, title, variant = 'buddha' }: CrossBannerProps) {
  return (
    <Link
      href={href}
      className="group block golden-card rounded-2xl overflow-hidden hover:shadow-xl transition-all"
    >
      <div className={`h-1.5 bg-gradient-to-r ${gradients[variant]}`} />
      <div className="p-6">
        <span className={`text-[11px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${gradients[variant]} text-white/95`}>
          {label}
        </span>
        <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-700 mt-3 group-hover:text-golden-gradient transition-colors">
          {title}
        </h3>
      </div>
    </Link>
  )
}
