'use client'

import { useState, useEffect } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { createClient } from '@/lib/supabase/client'
import { MapPin, Calendar, ExternalLink, Star, Loader2, Plus, X } from 'lucide-react'
import Image from 'next/image'
import PromoBanner from '@/components/ui/PromoBanner'

interface Retreat {
  id: string
  name: string
  location: string
  description: string | null
  start_date: string | null
  end_date: string | null
  url: string | null
}

interface Story {
  id: string
  title: string
  content: string
  rating: number | null
  created_at: string
  profiles?: { display_name: string | null } | null
  retreat_id: string
}

const retreatImageMap: Record<string, string> = {
  '1': '/images/retreats/dhamma-giri.jpg',
  '2': '/images/retreats/plum-village.jpg',
  '3': '/images/retreats/ims.jpg',
  '4': '/images/retreats/spirit-rock.jpg',
  '5': '/images/retreats/suan-mokkh.jpg',
  '6': '/images/retreats/tushita.jpg',
  '7': '/images/retreats/kopan.jpg',
  '8': '/images/retreats/root-institute.jpg',
}

const defaultRetreatImage = '/images/retreats/dhamma-giri.jpg'

const defaultRetreats: Retreat[] = [
  { id: '1', name: 'Dhamma Giri', location: 'Igatpuri, Maharashtra, India', description: 'One of the world\'s largest Vipassana meditation centers.', start_date: null, end_date: null, url: 'https://www.dhamma.org' },
  { id: '2', name: 'Plum Village', location: 'Dordogne, France', description: 'Thich Nhat Hanh\'s community. Mindfulness in the French countryside.', start_date: null, end_date: null, url: 'https://plumvillage.org' },
  { id: '3', name: 'Insight Meditation Society', location: 'Barre, Massachusetts, USA', description: 'Founded in 1975. Vipassana and Metta retreats.', start_date: null, end_date: null, url: 'https://dharma.org' },
  { id: '4', name: 'Spirit Rock', location: 'Woodacre, California, USA', description: 'West Coast vipassana center.', start_date: null, end_date: null, url: 'https://spiritrock.org' },
  { id: '5', name: 'Suan Mokkh', location: 'Surat Thani, Thailand', description: 'Traditional Thai forest monastery.', start_date: null, end_date: null, url: 'https://suanmokkh.org' },
  { id: '6', name: 'Tushita', location: 'Dharamsala, Himachal Pradesh, India', description: 'FPMT center near Dalai Lama\'s residence.', start_date: null, end_date: null, url: 'https://tushita.info' },
  { id: '7', name: 'Kopan Monastery', location: 'Kathmandu, Nepal', description: 'Tibetan Buddhist monastery. Annual November course.', start_date: null, end_date: null, url: 'https://kopanmonastery.com' },
  { id: '8', name: 'Root Institute', location: 'Bodh Gaya, Bihar, India', description: 'FPMT center near the Mahabodhi Temple.', start_date: null, end_date: null, url: 'https://rootinstitute.com' },
]

export default function RetreatsPage() {
  const { t, locale } = useLanguage()
  const [retreats, setRetreats] = useState<Retreat[]>(defaultRetreats)
  const [stories, setStories] = useState<Story[]>([])
  const [tab, setTab] = useState<'centers' | 'stories'>('centers')
  const [showStoryForm, setShowStoryForm] = useState(false)
  const [storyTitle, setStoryTitle] = useState('')
  const [storyContent, setStoryContent] = useState('')
  const [storyRating, setStoryRating] = useState(5)
  const [storyRetreatId, setStoryRetreatId] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const supabase = createClient()

  useEffect(() => {
    supabase.from('retreats').select('*').then(({ data }) => {
      if (data && data.length > 0) setRetreats(data)
    })
    supabase.from('retreat_stories').select('*, profiles(display_name)').order('created_at', { ascending: false }).then(({ data }) => {
      if (data) setStories(data as any[])
    })
  }, [])

  const handleStorySubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const { data: { user } } = await supabase.auth.getUser()
    if (!user || !storyRetreatId) return

    setSubmitting(true)
    await supabase.from('retreat_stories').insert({
      user_id: user.id,
      retreat_id: storyRetreatId,
      title: storyTitle,
      content: storyContent,
      rating: storyRating,
    })
    setStoryTitle('')
    setStoryContent('')
    setShowStoryForm(false)
    setSubmitting(false)
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-8">
        {t.nav.retreats}
      </h1>

      {/* Tabs */}
      <div className="flex justify-center gap-2 mb-8">
        <button
          onClick={() => setTab('centers')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            tab === 'centers' ? 'bg-amber-700 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-amber-400'
          }`}
        >
          {locale === 'ru' ? 'Центры' : 'Centers'}
        </button>
        <button
          onClick={() => setTab('stories')}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
            tab === 'stories' ? 'bg-amber-700 text-white' : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-amber-400'
          }`}
        >
          {locale === 'ru' ? 'Истории' : 'Stories'}
        </button>
      </div>

      {/* Centers */}
      {tab === 'centers' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {retreats.map((r) => (
            <div key={r.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all">
              <div className="relative h-40">
                <Image src={retreatImageMap[r.id] || defaultRetreatImage} alt={r.name} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{r.name}</h3>
              <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 mb-2">
                <MapPin className="w-3.5 h-3.5" /> {r.location}
              </div>
              {r.description && <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{r.description}</p>}
              {r.url && (
                <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline text-sm flex items-center gap-1">
                  <ExternalLink className="w-3 h-3" /> Website
                </a>
              )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Stories */}
      {tab === 'stories' && (
        <div>
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setShowStoryForm(!showStoryForm)}
              className="px-4 py-2 rounded-xl bg-amber-700 hover:bg-amber-600 text-white text-sm font-medium transition-colors flex items-center gap-1"
            >
              <Plus className="w-4 h-4" /> {locale === 'ru' ? 'Добавить историю' : 'Add Story'}
            </button>
          </div>

          {showStoryForm && (
            <form onSubmit={handleStorySubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 mb-6 space-y-4">
              <select
                value={storyRetreatId}
                onChange={(e) => setStoryRetreatId(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              >
                <option value="">{locale === 'ru' ? 'Выберите центр' : 'Select center'}</option>
                {retreats.map(r => <option key={r.id} value={r.id}>{r.name}</option>)}
              </select>
              <input
                type="text"
                value={storyTitle}
                onChange={(e) => setStoryTitle(e.target.value)}
                placeholder={locale === 'ru' ? 'Заголовок' : 'Title'}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                required
              />
              <textarea
                value={storyContent}
                onChange={(e) => setStoryContent(e.target.value)}
                placeholder={locale === 'ru' ? 'Ваша история...' : 'Your story...'}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 resize-none"
                rows={4}
                required
              />
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{locale === 'ru' ? 'Оценка:' : 'Rating:'}</span>
                {[1, 2, 3, 4, 5].map(n => (
                  <button key={n} type="button" onClick={() => setStoryRating(n)}>
                    <Star className={`w-5 h-5 ${n <= storyRating ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <button type="submit" disabled={submitting} className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-amber-800 text-white font-medium transition-colors flex items-center gap-2">
                  {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
                  {locale === 'ru' ? 'Опубликовать' : 'Publish'}
                </button>
                <button type="button" onClick={() => setShowStoryForm(false)} className="px-6 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium transition-colors">
                  {t.common.cancel}
                </button>
              </div>
            </form>
          )}

          <div className="space-y-4">
            {stories.map((s) => (
              <div key={s.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map(n => (
                      <Star key={n} className={`w-4 h-4 ${n <= (s.rating || 0) ? 'text-amber-500 fill-amber-500' : 'text-gray-300'}`} />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">•</span>
                  <span className="text-sm text-gray-500">{(s as any).profiles?.display_name || 'Anonymous'}</span>
                </div>
                <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-1">{s.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{s.content}</p>
              </div>
            ))}
            {stories.length === 0 && (
              <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
                <p className="text-gray-500 dark:text-gray-400">
                  {locale === 'ru' ? 'Пока нет историй. Поделитесь своим опытом!' : 'No stories yet. Share your experience!'}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <div className="mt-10">
        <PromoBanner page="retreats" />
      </div>
    </div>
  )
}
