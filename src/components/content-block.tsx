interface ContentBlockProps {
  id: string
  title: string
  children: React.ReactNode
}

export function ContentBlock({ id, title, children }: ContentBlockProps) {
  return (
    <section id={id} className="scroll-mt-20">
      <h2 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-amber-700 mb-6">
        {title}
      </h2>
      {children}
    </section>
  )
}
