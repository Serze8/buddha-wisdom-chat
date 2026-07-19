'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { createClient } from '@/lib/supabase/client'
import { Play, ExternalLink, Loader2 } from 'lucide-react'
import PromoBanner from '@/components/ui/PromoBanner'

interface Video {
  id: string
  url: string
  title: string
  addedBy: string
  platform: 'youtube' | 'instagram' | 'tiktok'
}

function extractYouTubeId(url: string): string | null {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&?/]+)/)
  return match?.[1] || null
}

function extractPlatform(url: string): Video['platform'] {
  if (url.includes('youtube.com') || url.includes('youtu.be')) return 'youtube'
  if (url.includes('instagram.com')) return 'instagram'
  if (url.includes('tiktok.com')) return 'tiktok'
  return 'youtube'
}

export default function VideosPageClient() {
  const { t, locale } = useLanguage()
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const sampleVideos: Video[] = [
    { id: '1', url: 'https://www.youtube.com/watch?v=abc123', title: locale === 'ru' ? 'Будда — Просветление' : 'Buddha — Enlightenment', addedBy: 'Admin', platform: 'youtube' },
    { id: '2', url: 'https://www.youtube.com/watch?v=def456', title: locale === 'ru' ? 'Медитация Випассана' : 'Vipassana Meditation', addedBy: 'Admin', platform: 'youtube' },
    { id: '3', url: 'https://www.youtube.com/watch?v=ghi789', title: locale === 'ru' ? '4 Благородные Истины' : 'Four Noble Truths', addedBy: 'Admin', platform: 'youtube' },
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) return
    setSubmitting(true)

    const supabase = createClient()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) { setSubmitting(false); return }

    await supabase.from('community_posts').insert({
      user_id: user.id,
      title: title || url,
      content: url,
      media_url: url,
      media_type: extractPlatform(url),
    })

    setUrl('')
    setTitle('')
    setShowForm(false)
    setSubmitting(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-10">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100">
          {locale === 'ru' ? 'Видео' : 'Videos'}
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium transition-colors"
        >
          {locale === 'ru' ? '+ Добавить' : '+ Add Video'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 mb-8 space-y-4">
          <input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="https://youtube.com/watch?v=..."
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            required
          />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder={locale === 'ru' ? 'Название (необязательно)' : 'Title (optional)'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          />
          <div className="flex gap-2">
            <button type="submit" disabled={submitting} className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-amber-800 text-white font-medium transition-colors flex items-center gap-2">
              {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
              {locale === 'ru' ? 'Добавить' : 'Add'}
            </button>
            <button type="button" onClick={() => setShowForm(false)} className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
              {t.common.cancel}
            </button>
          </div>
        </form>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {sampleVideos.map((video) => {
          const ytId = extractYouTubeId(video.url)
          return (
            <div key={video.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 overflow-hidden group hover:shadow-xl transition-all">
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 relative">
                {ytId ? (
                  <img
                    src={`https://img.youtube.com/vi/${ytId}/mqdefault.jpg`}
                    alt={video.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <Play className="w-12 h-12 text-amber-500/50" />
                  </div>
                )}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-14 h-14 rounded-full bg-amber-600 flex items-center justify-center shadow-lg">
                    <Play className="w-6 h-6 text-white ml-1" fill="white" />
                  </div>
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-medium text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">{video.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 dark:text-gray-400">{video.addedBy}</span>
                  <a href={video.url} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline text-sm flex items-center gap-1">
                    <ExternalLink className="w-3 h-3" /> YouTube
                  </a>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-10">
        <PromoBanner page="videos" />
      </div>
    </div>
  )
}
