'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import episodesData from './episodesData.json'

interface Episode {
  id: number
  title: string
  description: string
  videoId: string
  thumbnail: string
}

const periods = [
  { key: 'all', ru: 'Все', en: 'All', from: 1, to: 55 },
  { key: 'birth', ru: 'Рождение и отречение', en: 'Birth & Renunciation', from: 1, to: 18 },
  { key: 'path', ru: 'Путь к просветлению', en: 'Path to Enlightenment', from: 19, to: 36 },
  { key: 'teaching', ru: 'Учение и уход', en: 'Teaching & Departure', from: 37, to: 55 },
]

export default function EpisodesPageClient() {
  const { t, locale } = useLanguage()
  const [search, setSearch] = useState('')
  const [activePeriod, setActivePeriod] = useState('all')

  const currentPeriod = periods.find(p => p.key === activePeriod)!
  const filteredEpisodes = episodesData.filter((ep: Episode) =>
    ep.id >= currentPeriod.from &&
    ep.id <= currentPeriod.to &&
    (ep.title.toLowerCase().includes(search.toLowerCase()) ||
     ep.description.toLowerCase().includes(search.toLowerCase()))
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-center mb-6 text-golden-gradient">
        {t.nav.episodes} <span className="text-lg font-normal text-amber-500/50">(55)</span>
      </h1>

      <p className="text-amber-200/40 text-center max-w-3xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
        {locale === 'ru'
          ? 'Все серии сериала «Будда» (2013) с описанием и ссылками на RuTube'
          : 'All 55 episodes of the Buddha TV series (2013) — stream on RuTube'}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {periods.map(p => (
          <button
            key={p.key}
            onClick={() => setActivePeriod(p.key)}
            className="px-4 py-2 rounded-full text-sm font-medium transition-all"
            style={{
              background: activePeriod === p.key ? 'rgba(245, 158, 11, 0.2)' : 'rgba(20, 14, 8, 0.6)',
              border: `1px solid ${activePeriod === p.key ? 'rgba(245, 158, 11, 0.4)' : 'rgba(245, 158, 11, 0.1)'}`,
              color: activePeriod === p.key ? '#fbbf24' : 'rgba(232, 220, 200, 0.5)',
            }}
          >
            {locale === 'ru' ? p.ru : p.en}
          </button>
        ))}
      </div>

      <div className="max-w-md mx-auto mb-10">
        <input
          type="text"
          placeholder={locale === 'ru' ? 'Поиск по сериям...' : 'Search episodes...'}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-sm transition-colors"
          style={{
            background: 'rgba(20, 14, 8, 0.8)',
            border: '1px solid rgba(245, 158, 11, 0.15)',
            color: '#e8dcc8',
            outline: 'none',
          }}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6 stagger-children">
        {filteredEpisodes.map((ep: Episode) => (
          <a
            key={ep.id}
            href={ep.videoId ? `https://rutube.ru/video/${ep.videoId}/?playlist=825387` : undefined}
            target={ep.videoId ? '_blank' : undefined}
            rel={ep.videoId ? 'noopener noreferrer' : undefined}
            className={`group golden-card rounded-2xl overflow-hidden ${!ep.videoId ? 'opacity-50' : ''}`}
          >
            <div className="aspect-video relative overflow-hidden" style={{ background: '#0F0E0A' }}>
              {ep.thumbnail ? (
                <img
                  src={ep.thumbnail}
                  alt={ep.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-4xl" style={{ color: 'rgba(245, 158, 11, 0.15)' }}>
                  🪷
                </div>
              )}

              {ep.videoId && (
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(15, 14, 10, 0.4)' }}>
                  <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.9)', boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#0F0E0A">
                      <polygon points="6,3 20,12 6,21" />
                    </svg>
                  </div>
                </div>
              )}

              <div className="absolute top-2 left-2 px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: 'rgba(15, 14, 10, 0.8)', color: '#fbbf24', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
                {ep.id}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-[var(--font-cormorant)] text-base font-bold text-amber-100/80 group-hover:text-amber-300 transition-colors line-clamp-1">
                {ep.title}
              </h3>
              <p className="text-amber-200/30 text-xs mt-1.5 line-clamp-2 leading-relaxed">
                {ep.description}
              </p>
            </div>
          </a>
        ))}
      </div>

      {filteredEpisodes.length === 0 && (
        <div className="text-center py-16">
          <span className="text-4xl block mb-4">🔍</span>
          <p className="text-amber-200/40 text-lg" style={{ fontFamily: 'var(--font-cormorant)' }}>
            {locale === 'ru' ? 'Ничего не найдено' : 'No episodes found'}
          </p>
        </div>
      )}
    </div>
  )
}
