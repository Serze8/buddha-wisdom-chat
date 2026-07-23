'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function Footer() {
  const { locale } = useLanguage()

  const links = [
    { href: '/about', label: locale === 'ru' ? 'О проекте' : 'About' },
    { href: '/teachings', label: locale === 'ru' ? 'Учения' : 'Teachings' },
    { href: '/contact', label: locale === 'ru' ? 'Контакт' : 'Contact' },
    { href: '/donate', label: locale === 'ru' ? 'Поддержать' : 'Donate' },
  ]

  return (
    <footer className="relative mt-auto">
      <div className="golden-divider" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="font-[var(--font-cormorant)] text-lg text-amber-400/60 mb-1">
              Buddha&apos;s Wisdom Chat
            </p>
            <p className="text-amber-200/25 text-sm">
              © {new Date().getFullYear()} {locale === 'ru' ? 'Сделано с ❤️ для всех ищущих' : 'Made with ❤️ for all seekers'}
            </p>
          </div>

          <nav className="flex gap-6 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-amber-200/30 hover:text-amber-400 transition-colors duration-300 text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
