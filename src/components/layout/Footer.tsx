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
            <p className="font-[var(--font-jakarta)] text-lg text-blue-600/60 mb-1">
              Buddha-Chakravartin Chat
            </p>
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} {locale === 'ru' ? 'Будда • Чакравартин • Дхарма • Майтрея' : 'Buddha • Chakravartin • Dharma • Maitreya'}
            </p>
          </div>

          <nav className="flex gap-6 md:gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-500 hover:text-blue-600 transition-colors duration-300 text-sm"
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
