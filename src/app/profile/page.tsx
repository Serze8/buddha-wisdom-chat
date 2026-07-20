'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useLanguage } from '@/contexts/LanguageContext'
import { Locale } from '@/types'
import { Loader2 } from 'lucide-react'

const localeLabels: Record<Locale, string> = {
  en: '🇬🇧 English', ru: '🇷🇺 Русский', hi: '🇮🇳 हिन्दी', es: '🇪🇸 Español',
  fr: '🇫🇷 Français', de: '🇩🇪 Deutsch', zh: '🇨🇳 中文', ja: '🇯🇵 日本語',
  pt: '🇵🇹 Português', th: '🇹🇭 ไทย', vi: '🇻🇳 Tiếng Việt', ko: '🇰🇷 한국어',
  id: '🇮🇩 Indonesia', ms: '🇲🇾 Melayu', si: '🇱🇰 සිංහල', my: '🇲🇲 မြန်မာ',
  ne: '🇳🇵 नेपाली', bo: '🏔️ བོད་སྐད།',
}

export default function ProfilePage() {
  const { t, locale, setLocale } = useLanguage()
  const router = useRouter()
  const supabase = createClient()
  const [displayName, setDisplayName] = useState('')
  const [country, setCountry] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (!data.user) { router.push('/auth'); return }
      supabase.from('profiles').select('*').eq('id', data.user.id).single().then(({ data: profile }) => {
        if (profile) {
          setDisplayName(profile.display_name || '')
          setCountry(profile.country || '')
        }
        setLoading(false)
      })
    })
  }, [])

  const handleSave = async () => {
    setSaving(true)
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return

    await supabase.from('profiles').update({
      display_name: displayName,
      country,
      preferred_language: locale,
    }).eq('id', user.id)

    setSaving(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  if (loading) return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
    </div>
  )

  return (
    <div className="max-w-lg mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {t.nav.profile}
      </h1>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-8 space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            {t.auth.displayName}
          </label>
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            {locale === 'ru' ? 'Страна' : 'Country'}
          </label>
          <input
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
            {locale === 'ru' ? 'Предпочитаемый язык' : 'Preferred Language'}
          </label>
          <select
            value={locale}
            onChange={(e) => setLocale(e.target.value as Locale)}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          >
            {Object.entries(localeLabels).map(([code, label]) => (
              <option key={code} value={code}>{label}</option>
            ))}
          </select>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="w-full py-3 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-amber-800 text-white font-medium transition-colors flex items-center justify-center gap-2"
        >
          {saving && <Loader2 className="w-4 h-4 animate-spin" />}
          {saved ? '✓' : t.common.save}
        </button>
      </div>
    </div>
  )
}
