'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'
import { cn } from '@/lib/utils'
import { Menu, X, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useEffect } from 'react'

const navItems = [
  'home', 'chat', 'characters', 'episodes', 'teachings',
  'community', 'retreats', 'about', 'contact', 'donate', 'profile',
] as const

const navHrefs: Record<string, string> = {
  home: '/',
  chat: '/chat',
  characters: '/characters',
  episodes: '/episodes',
  teachings: '/teachings',
  community: '/community',
  retreats: '/retreats',
  about: '/about',
  contact: '/contact',
  donate: '/donate',
  profile: '/profile',
}

export default function Header() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [user, setUser] = useState<any>(null)
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user ?? null)
    })
    return () => subscription.unsubscribe()
  }, [])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    window.location.href = '/auth'
  }

  return (
    <header className="sticky top-0 z-50 bg-amber-950/95 backdrop-blur-md border-b border-amber-800/30">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg text-amber-100">
          <span className="text-2xl">🪷</span>
          <span className="hidden sm:inline">Buddha&apos;s Wisdom</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.filter(n => n !== 'profile').map((item) => (
            <Link
              key={item}
              href={navHrefs[item]}
              className={cn(
                'px-3 py-1.5 rounded-lg text-sm transition-colors',
                pathname === navHrefs[item]
                  ? 'bg-amber-800/50 text-amber-100 font-medium'
                  : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-800/30'
              )}
            >
              {t.nav[item]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />

          {user ? (
            <div className="flex items-center gap-2">
              <Link href="/profile" className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-amber-100 transition-colors">
                <User className="w-4 h-4" />
              </Link>
              <button
                onClick={handleLogout}
                className="hidden sm:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-sm text-amber-100 transition-colors"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <Link
              href="/auth"
              className="px-4 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-500 text-sm font-medium text-white transition-colors"
            >
              {t.auth.login}
            </Link>
          )}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-amber-100"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav className="lg:hidden border-t border-amber-800/30 bg-amber-950/98 px-4 py-3">
          {navItems.map((item) => (
            <Link
              key={item}
              href={navHrefs[item]}
              onClick={() => setMobileOpen(false)}
              className={cn(
                'block px-3 py-2 rounded-lg text-sm transition-colors',
                pathname === navHrefs[item]
                  ? 'bg-amber-800/50 text-amber-100 font-medium'
                  : 'text-amber-200/80 hover:text-amber-100 hover:bg-amber-800/30'
              )}
            >
              {t.nav[item]}
            </Link>
          ))}
          {user && (
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 rounded-lg text-sm text-red-300 hover:bg-red-900/20 mt-2"
            >
              {t.nav.profile} → Logout
            </button>
          )}
        </nav>
      )}
    </header>
  )
}
