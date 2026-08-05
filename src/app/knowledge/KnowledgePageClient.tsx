'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/LanguageContext'
import { BookOpen, Tv, Users, HelpCircle, ScrollText, Image as ImageIcon, Video } from 'lucide-react'

export default function KnowledgePageClient() {
  const { t } = useLanguage()

  const sections = [
    { key: 'teachings', icon: BookOpen, href: '/teachings' },
    { key: 'episodes', icon: Tv, href: '/episodes' },
    { key: 'characters', icon: Users, href: '/characters' },
    { key: 'quiz', icon: HelpCircle, href: '/quiz' },
    { key: 'theses', icon: ScrollText, href: '/theses' },
    { key: 'gallery', icon: ImageIcon, href: '/gallery' },
    { key: 'videos', icon: Video, href: '/videos' },
  ]

  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-12">
      <div className="text-center mb-8 md:mb-10 scroll-reveal">
        <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-golden-gradient mb-3">
          {t.knowledge.title}
        </h1>
        <p className="text-amber-200/50 text-sm md:text-base max-w-xl mx-auto leading-relaxed">
          {t.knowledge.subtitle}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 stagger-children">
        {sections.map(({ key, icon: Icon, href }) => (
          <Link
            key={key}
            href={href}
            className="group golden-card rounded-2xl p-6 flex items-center gap-4 active:scale-[0.98] transition-transform"
          >
            <div
              className="p-3 rounded-xl transition-transform duration-300 group-hover:scale-110 shrink-0"
              style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.15)' }}
            >
              <Icon className="w-6 h-6 text-amber-400/70 group-hover:text-amber-400 transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-[var(--font-cormorant)] text-xl text-amber-100/80 group-hover:text-amber-100 transition-colors">
                {(t.nav as any)[key] || key}
              </p>
            </div>
            <span className="text-amber-400/40 group-hover:text-amber-400 group-hover:translate-x-1 transition-all">→</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
