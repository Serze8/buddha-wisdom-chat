import type { ReactNode } from 'react'

interface ContentBlockProps {
  title: string
  children: ReactNode
  banner?: ReactNode
  id?: string
}

export function ContentBlock({ title, children, banner, id }: ContentBlockProps) {
  return (
    <section id={id} className="max-w-3xl mx-auto scroll-mt-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="golden-divider flex-1" />
        <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient text-center whitespace-nowrap">
          {title}
        </h2>
        <div className="golden-divider flex-1" />
      </div>
      <div className="space-y-5 text-lg leading-relaxed text-amber-600/70">
        {children}
      </div>
      {banner && <div className="mt-10">{banner}</div>}
    </section>
  )
}
