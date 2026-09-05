interface HeroPairProps {
  beforeLabel: string
  beforeTitle: string
  beforeText: string
  afterLabel: string
  afterTitle: string
  afterText: string
}

export function HeroPair({ beforeLabel, beforeTitle, beforeText, afterLabel, afterTitle, afterText }: HeroPairProps) {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="golden-card rounded-3xl p-8 md:p-10 relative noise-overlay scroll-reveal">
        <span className="absolute right-5 top-5 text-6xl opacity-[0.06] select-none pointer-events-none">?</span>
        <span className="inline-block rounded-full bg-amber-800/60 border border-amber-700/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500">
          {beforeLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient">
          {beforeTitle}
        </h2>
        <p className="mt-3 text-amber-600/60 leading-relaxed">{beforeText}</p>
      </div>
      <div className="golden-card rounded-3xl p-8 md:p-10 relative noise-overlay scroll-reveal scroll-reveal-delay-1">
        <span className="absolute right-5 top-5 text-6xl opacity-[0.06] select-none pointer-events-none">??</span>
        <span className="inline-block rounded-full bg-amber-800/60 border border-amber-700/40 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-500">
          {afterLabel}
        </span>
        <h2 className="mt-4 font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient">
          {afterTitle}
        </h2>
        <p className="mt-3 text-amber-600/60 leading-relaxed">{afterText}</p>
      </div>
    </section>
  )
}
