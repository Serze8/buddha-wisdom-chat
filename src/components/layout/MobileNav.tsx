'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { Home, Flower2, Compass, BookOpen, Settings } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function MobileNav() {
  const { t } = useLanguage()
  const pathname = usePathname()

  const items = [
    { key: 'home', label: t.nav.home, href: '/', icon: Home },
    { key: 'practice', label: t.teachings.sectionPractices || 'Practice', href: '/teachings/practice', icon: Flower2 },
    { key: 'journey', label: t.nav.journey, href: '/journey', icon: Compass },
    { key: 'knowledge', label: t.nav.knowledge, href: '/knowledge', icon: BookOpen },
    { key: 'settings', label: t.nav.settings, href: '/profile', icon: Settings },
  ]

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-50 border-t border-amber-800/40 bg-[#0F0E0A]/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-5">
        {items.map(({ key, label, href, icon: Icon }) => {
          const active = isActive(href)
          return (
            <Link
              key={key}
              href={href}
              className={cn(
                'flex flex-col items-center gap-1 py-2.5 pt-3 transition-colors',
                active ? 'text-amber-400' : 'text-amber-200/50 hover:text-amber-200/80'
              )}
            >
              <Icon className={cn('w-6 h-6 transition-transform', active && 'scale-110')} />
              <span className={cn('text-[10px] leading-none', active && 'font-medium')}>{label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
