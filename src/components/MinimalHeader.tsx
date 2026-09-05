'use client'

import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/types'

interface NavItem {
  label: { ru: string; en: string }
  href: string
  children?: { label: { ru: string; en: string }; href: string; desc?: { ru: string; en: string } }[]
}

const NAV: NavItem[] = [
  {
    label: { ru: 'Будда', en: 'Buddha' },
    href: '/buddha',
    children: [
      { label: { ru: 'Прошлое', en: 'Past' }, href: '/past', desc: { ru: 'Ярус истории', en: 'Time of history' } },
      { label: { ru: 'Сиддхартха Гаутама', en: 'Siddhartha Gautama' }, href: '/buddha', desc: { ru: 'Жизнь и путь', en: 'Life and path' } },
      { label: { ru: 'Ашока Чакравартин', en: 'Ashoka Chakravartin' }, href: '/chakravartin', desc: { ru: 'Царь и Дхарма', en: 'King and Dharma' } },
      { label: { ru: 'Герои', en: 'Characters' }, href: '/characters', desc: { ru: 'Персонажи', en: 'Cast' } },
      { label: { ru: 'Сериал', en: 'Series' }, href: '/episodes', desc: { ru: '55 серий', en: '55 episodes' } },
    ],
  },
  {
    label: { ru: 'Дхарма', en: 'Dharma' },
    href: '/teachings',
    children: [
      { label: { ru: 'Настоящее', en: 'Now' }, href: '/now', desc: { ru: 'Ярус практики', en: 'Time of practice' } },
      { label: { ru: 'Три поворота колеса', en: 'Three Turnings' }, href: '/teachings', desc: { ru: 'Хаб учений', en: 'Teachings hub' } },
      { label: { ru: 'Видение', en: 'Vision' }, href: '/teachings/vision', desc: { ru: 'Четыре Истины', en: 'Four Noble Truths' } },
      { label: { ru: 'Путь', en: 'Path' }, href: '/teachings/path', desc: { ru: 'Восьмеричный путь', en: 'Eightfold Path' } },
      { label: { ru: 'Вращение', en: 'Wheel' }, href: '/teachings/wheel', desc: { ru: 'Дхармачакра', en: 'Dharmachakra' } },
      { label: { ru: 'Практика', en: 'Practice' }, href: '/teachings/practice', desc: { ru: 'Дыхание и медитация', en: 'Breathing and meditation' } },
      { label: { ru: 'Дзен и боевые искусства', en: 'Zen & Martial Arts' }, href: '/zen-martial', desc: { ru: 'Бодхидхарма', en: 'Bodhidharma' } },
    ],
  },
  {
    label: { ru: 'Сангха', en: 'Sangha' },
    href: '/dharma-chats',
    children: [
      { label: { ru: 'Будущее', en: 'Future' }, href: '/future', desc: { ru: 'Ярус обета', en: 'Time of vow' } },
      { label: { ru: 'Беседы о Мудрости', en: 'Wisdom Chats' }, href: '/dharma-chats', desc: { ru: 'Dharma Chats', en: 'Dharma Chats' } },
      { label: { ru: 'AI-диалоги', en: 'AI Dialogues' }, href: '/dharma-chats/ai', desc: { ru: 'Будда, Ашока, Чанакья', en: 'Buddha, Ashoka, Chanakya' } },
      { label: { ru: 'Общий чат', en: 'Community' }, href: '/dharma-chats/sangha', desc: { ru: 'Сообщество', en: 'Community' } },
      { label: { ru: 'Архив бесед', en: 'Talks Archive' }, href: '/dharma-chats/talks', desc: { ru: 'Интервью и лекции', en: 'Interviews and lectures' } },
      { label: { ru: 'Ретритные центры', en: 'Retreat Centers' }, href: '/retreats', desc: { ru: 'Места практики', en: 'Practice places' } },
    ],
  },
]

const LANGUAGES: { code: Locale; label: string; flag: string }[] = [
  { code: 'ru', label: 'Русский', flag: '🇷🇺' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
]

export function MinimalHeader() {
  const { locale, setLocale, t } = useLanguage()
  const lang = locale === 'ru' ? 'ru' : 'en'

  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null)
  const [langDropdownOpen, setLangDropdownOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const langRef = useRef<HTMLDivElement>(null)

  const currentLang = LANGUAGES.find((l) => l.code === locale) || LANGUAGES[0]

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('halcyon-theme', next ? 'dark' : 'light')
    } catch {}
  }

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) setLangDropdownOpen(false)
    }
    document.addEventListener('mousedown', onClick)
    return () => document.removeEventListener('mousedown', onClick)
  }, [])

  return (
    <header
      className="sticky top-0 z-50 h-14 border-b backdrop-blur-md"
      style={{ background: 'rgba(250, 250, 249, 0.92)', borderColor: '#e7e5e4' }}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <span className="text-xl transition-transform duration-700 group-hover:rotate-180">☸</span>
          <span
            className="hidden text-base font-bold sm:inline"
            style={{ fontFamily: 'var(--font-jakarta)', color: '#292524' }}
          >
            Buddha-Chakravartin
          </span>
        </Link>

        {/* Desktop: Three Jewels */}
        <nav className="hidden md:flex items-center gap-1" aria-label="Navigation">
          {NAV.map((item) => (
            <div
              key={item.label.en}
              className="relative"
              onMouseEnter={() => setOpenDropdown(item.label.en)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium transition-colors"
                style={{
                  background: openDropdown === item.label.en ? '#e7e5e4' : 'transparent',
                  color: openDropdown === item.label.en ? '#b45309' : '#78716c',
                }}
              >
                {item.label[lang]}
                {item.children && (
                  <svg className="h-3 w-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>

              {item.children && openDropdown === item.label.en && (
                <div
                  className="absolute top-full left-0 mt-1 w-64 rounded-xl border p-2 shadow-2xl"
                  style={{ background: 'rgba(255, 255, 255, 0.97)', borderColor: '#e7e5e4', backdropFilter: 'blur(20px)' }}
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      onClick={() => setOpenDropdown(null)}
                      className="flex flex-col rounded-lg px-3 py-2.5 transition-colors hover:bg-blue-50 group/lc"
                    >
                      <span className="text-sm font-medium" style={{ color: '#292524' }}>
                        {child.label[lang]}
                      </span>
                      {child.desc && (
                        <span className="text-[11px] mt-0.5" style={{ color: '#8a8175' }}>
                          {child.desc[lang]}
                        </span>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right: Theme + Language + Login + Hamburger */}
        <div className="flex items-center gap-2 shrink-0">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="hidden sm:inline-flex items-center justify-center w-8 h-8 rounded-lg border transition hover:bg-slate-100"
            style={{ borderColor: '#e7e5e4', color: '#78716c' }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* Language dropdown */}
          <div className="relative hidden sm:block" ref={langRef}>
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition border"
              style={{ background: '#f5f5f4', borderColor: '#e7e5e4', color: '#292524' }}
            >
              <span>{currentLang.flag}</span>
              <span className="uppercase">{currentLang.code}</span>
              <svg className="h-3 w-3 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langDropdownOpen && (
              <div
                className="absolute right-0 mt-2 w-40 rounded-xl border shadow-2xl overflow-hidden z-50 max-h-64 overflow-y-auto"
                style={{ background: '#ffffff', borderColor: '#e7e5e4' }}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLocale(lang.code)
                      setLangDropdownOpen(false)
                    }}
                    className="w-full text-left px-3 py-2 text-xs transition flex items-center gap-2 hover:bg-blue-50"
                    style={{ color: locale === lang.code ? '#d97706' : '#292524' }}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/auth"
            className="hidden sm:block rounded-lg px-3 py-1.5 text-xs font-medium text-white transition hover:bg-[#b45309] shadow-sm"
            style={{ background: '#d97706' }}
          >
            {t.auth.login}
          </Link>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg transition hover:bg-slate-100"
            style={{ color: '#292524' }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              {mobileMenuOpen ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <>
                  <path d="M4 12h16" />
                  <path d="M4 6h16" />
                  <path d="M4 18h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div
          className="md:hidden absolute top-14 left-0 right-0 border-b p-4 shadow-2xl z-40"
          style={{ background: '#ffffff', borderColor: '#e7e5e4' }}
        >
          <nav className="flex flex-col gap-2">
            {NAV.map((item) => (
              <div key={item.label.en} className="border-b pb-2 last:border-0" style={{ borderColor: '#e7e5e4' }}>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.href}
                    className="text-base font-bold py-2"
                    style={{ color: '#292524', fontFamily: 'var(--font-jakarta)' }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label[lang]}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() => setMobileAccordion(mobileAccordion === item.label.en ? null : item.label.en)}
                      className="p-1 rounded hover:bg-slate-100"
                      style={{ color: '#292524' }}
                    >
                      <svg
                        className={`h-4 w-4 transition-transform ${mobileAccordion === item.label.en ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                  )}
                </div>

                {item.children && mobileAccordion === item.label.en && (
                  <div className="pl-4 flex flex-col gap-1.5 mt-1 mb-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="text-sm py-1.5 block hover:text-blue-600 transition"
                        style={{ color: '#78716c' }}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.label[lang]}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <div className="flex gap-2 mt-4 pt-2 border-t" style={{ borderColor: '#e7e5e4' }}>
              <button
                onClick={() => setLocale(locale === 'ru' ? 'en' : 'ru')}
                className="flex-1 flex items-center justify-center gap-2 rounded-lg py-2 text-sm"
                style={{ background: '#f5f5f4', color: '#292524' }}
              >
                {currentLang.flag} {currentLang.code.toUpperCase()}
              </button>
              <Link
                href="/auth"
                className="flex-1 text-center rounded-lg py-2 text-sm font-medium text-white"
                style={{ background: '#d97706' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.auth.login}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}