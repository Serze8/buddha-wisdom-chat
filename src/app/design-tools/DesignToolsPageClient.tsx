'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { ExternalLink, Check } from 'lucide-react'

interface Tool {
  id: string
  emoji: string
  name: string
  url: string
  description: Record<'ru' | 'en', string>
  free: Record<'ru' | 'en', string>
  useCase: Record<'ru' | 'en', string>
  limitations: Record<'ru' | 'en', string>
}

const tools: Tool[] = [
  {
    id: 'recraft',
    emoji: '🎨',
    name: 'Recraft.ai',
    url: 'https://www.recraft.ai',
    description: {
      ru: 'Векторная графика, логотипы, дизайн «с настроением».',
      en: 'Vector graphics, logos, and "vibe" design.',
    },
    free: {
      ru: '≈30–50 генераций в день',
      en: '≈30–50 generations per day',
    },
    useCase: {
      ru: 'Логотипы, иконки, иллюстрации',
      en: 'Logos, icons, illustrations',
    },
    limitations: {
      ru: 'Изображения публичны и не для коммерции.',
      en: 'Images are public, not for commercial use.',
    },
  },
  {
    id: 'vectorizer',
    emoji: '🔀',
    name: 'Vectorizer.ai',
    url: 'https://vectorizer.ai',
    description: {
      ru: 'Конвертация растровых изображений в вектор (SVG, PDF).',
      en: 'Convert raster images to vector (SVG, PDF).',
    },
    free: {
      ru: 'Бесплатный интерактивный превью',
      en: 'Free interactive preview',
    },
    useCase: {
      ru: 'Логотипы из картинок, масштабируемая графика',
      en: 'Logos from images, scalable graphics',
    },
    limitations: {
      ru: 'Скачивание результата — по подписке.',
      en: 'Downloading the result requires a subscription.',
    },
  },
  {
    id: 'ideogram',
    emoji: '🖼️',
    name: 'Ideogram.ai',
    url: 'https://ideogram.ai',
    description: {
      ru: 'Генерация изображений с идеальным текстом.',
      en: 'Image generation with perfect text rendering.',
    },
    free: {
      ru: '10 «медленных» кредитов в неделю',
      en: '10 slow credits per week',
    },
    useCase: {
      ru: 'Постеры, обложки, картинки с надписями',
      en: 'Posters, covers, images with captions',
    },
    limitations: {
      ru: 'Мало кредитов, медленная генерация.',
      en: 'Few credits, slow generation.',
    },
  },
  {
    id: 'pixlr',
    emoji: '✏️',
    name: 'Pixlr',
    url: 'https://pixlr.com',
    description: {
      ru: 'Онлайн-фоторедактор уровня Photoshop в браузере.',
      en: 'A Photoshop-grade photo editor in the browser.',
    },
    free: {
      ru: 'Полный редактор + 50 AI-кредитов в месяц',
      en: 'Full editor + 50 AI credits per month',
    },
    useCase: {
      ru: 'Ретушь, обработка фото без установки',
      en: 'Retouching and photo editing without installs',
    },
    limitations: {
      ru: 'Реклама, лимит 3 сохранения в день.',
      en: 'Ads, limit of 3 saves per day.',
    },
  },
  {
    id: 'firefly',
    emoji: '🔥',
    name: 'Adobe Firefly',
    url: 'https://firefly.adobe.com',
    description: {
      ru: 'Генерация и редактирование изображений и видео (Adobe).',
      en: 'Image and video generation and editing (Adobe).',
    },
    free: {
      ru: 'Ежедневные бесплатные кредиты',
      en: 'Daily free credits',
    },
    useCase: {
      ru: 'Генерация, стилизация, объекты',
      en: 'Generation, stylization, objects',
    },
    limitations: {
      ru: 'Кредиты быстро расходуются.',
      en: 'Credits run out quickly.',
    },
  },
]

const STORAGE_PREFIX = 'design_tool_account_'

export default function DesignToolsPageClient() {
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const pick = (r: Record<'ru' | 'en', string>) => r[ru ? 'ru' : 'en']

  const [accounts, setAccounts] = useState<Record<string, string>>({})
  const [mounted, setMounted] = useState(false)
  const [saved, setSaved] = useState<string | null>(null)

  useEffect(() => {
    setMounted(true)
    const stored: Record<string, string> = {}
    try {
      for (const tool of tools) {
        const value = localStorage.getItem(STORAGE_PREFIX + tool.id)
        if (value) stored[tool.id] = value
      }
    } catch {}
    setAccounts(stored)
  }, [])

  const saveAccount = (id: string, url: string) => {
    const next = { ...accounts, [id]: url }
    setAccounts(next)
    try {
      if (url.trim()) localStorage.setItem(STORAGE_PREFIX + id, url.trim())
      else localStorage.removeItem(STORAGE_PREFIX + id)
    } catch {}
    setSaved(id)
    setTimeout(() => setSaved(null), 1500)
  }

  if (!mounted) return null

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-golden-gradient text-center mb-4">
        {ru ? 'Инструменты для дизайна' : 'Design Tools'}
      </h1>
      <p className="text-center text-amber-200/50 text-lg mb-3 max-w-2xl mx-auto leading-relaxed">
        {ru
          ? 'Бесплатные сервисы, которые помогают создавать картинки, логотипы и иллюстрации для сайта.'
          : 'Free services for creating images, logos, and illustrations for the site.'}
      </p>
      <p className="text-center text-amber-400/70 text-sm mb-10 max-w-2xl mx-auto">
        {ru
          ? 'У каждого свой вход: войдите в сервис под своим аккаунтом и используйте собственные бесплатные лимиты генераций. Сохраните ссылку на свой профиль ниже, чтобы открывать его в один клик.'
          : 'Everyone has their own login: sign in with your own account and use your own free generation limits. Save a link to your profile below to open it in one click.'}
      </p>

      <div className="grid gap-6 md:grid-cols-2 stagger-children">
        {tools.map((tool) => {
          const account = accounts[tool.id] || ''
          return (
            <div key={tool.id} className="golden-card rounded-2xl p-6 relative noise-overlay">
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.18)' }}>
                    {tool.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100">
                      {tool.name}
                    </h3>
                    <p className="text-amber-200/50 text-sm mt-1 leading-relaxed">
                      {pick(tool.description)}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full font-medium" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)', color: '#fbbf24' }}>
                    {ru ? 'Бесплатно:' : 'Free:'} {pick(tool.free)}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full text-amber-200/60" style={{ background: 'rgba(20, 14, 8, 0.5)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                    {pick(tool.useCase)}
                  </span>
                </div>

                <p className="text-xs text-amber-200/35 mb-4">
                  {pick(tool.limitations)}
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all active:scale-[0.98] btn-glow"
                    style={{ background: 'linear-gradient(135deg, #b45309, #92400e)', color: '#fde68a', border: '1px solid rgba(245, 158, 11, 0.3)' }}
                  >
                    {ru ? 'Открыть сервис' : 'Open service'}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  {account && (
                    <a
                      href={account}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border border-amber-400/40 text-amber-300 hover:bg-amber-500/10 transition-all"
                    >
                      {ru ? 'Мой аккаунт' : 'My account'}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <input
                    value={account}
                    onChange={(e) => saveAccount(tool.id, e.target.value)}
                    placeholder={ru ? 'Ссылка на мой профиль…' : 'Link to my profile…'}
                    className="flex-1 px-3 py-2 rounded-lg text-sm outline-none bg-black/30 border border-amber-800/30 text-amber-100 placeholder-amber-200/30 focus:border-amber-500/60 transition-colors"
                  />
                  <span className="text-amber-400/80 w-5 h-5 shrink-0">
                    {saved === tool.id && <Check className="w-5 h-5" />}
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-12 p-6 rounded-2xl" style={{ background: 'rgba(20, 14, 8, 0.6)', border: '1px solid rgba(245, 158, 11, 0.1)' }}>
        <h2 className="font-[var(--font-cormorant)] text-xl font-bold text-amber-100/80 mb-3">
          {ru ? 'Как выбрать инструмент' : 'How to choose a tool'}
        </h2>
        <ul className="space-y-2 text-sm text-amber-200/50 leading-relaxed">
          <li>🪷 {ru ? 'Логотип, иконки, вектор — Recraft или Vectorizer.' : 'Logos, icons, vector — Recraft or Vectorizer.'}</li>
          <li>🖼️ {ru ? 'Картинка с точным текстом — Ideogram.' : 'An image with exact text — Ideogram.'}</li>
          <li>✏️ {ru ? 'Обработка фото в браузере — Pixlr.' : 'Photo editing in the browser — Pixlr.'}</li>
          <li>🎬 {ru ? 'Генерация и видео — Adobe Firefly.' : 'Generation and video — Adobe Firefly.'}</li>
        </ul>
      </div>
    </div>
  )
}
