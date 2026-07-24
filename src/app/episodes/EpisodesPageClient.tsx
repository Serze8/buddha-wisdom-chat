'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import episodesData from './episodesData.json'

interface Episode {
  id: number
  title: string
  description: string
  highlight: string
  videoId: string
  thumbnail: string
}

const periods = [
  { key: 'all', ru: 'Все', en: 'All', from: 1, to: 55 },
  { key: 'birth', ru: 'Рождение', en: 'Birth', from: 1, to: 18 },
  { key: 'path', ru: 'Путь', en: 'Path', from: 19, to: 36 },
  { key: 'teaching', ru: 'Учение', en: 'Teaching', from: 37, to: 55 },
]

const PLAYLIST_URL = 'https://rutube.ru/plst/825387/'

export default function EpisodesPageClient() {
  const { locale } = useLanguage()
  const [search, setSearch] = useState('')
  const [activePeriod, setActivePeriod] = useState('all')

  const currentPeriod = periods.find(p => p.key === activePeriod)!
  const filteredEpisodes = episodesData.filter((ep: Episode) =>
    ep.id >= currentPeriod.from &&
    ep.id <= currentPeriod.to &&
    (ep.title.toLowerCase().includes(search.toLowerCase()) ||
     ep.description.toLowerCase().includes(search.toLowerCase()) ||
     ep.highlight.toLowerCase().includes(search.toLowerCase()))
  )

  const getVideoUrl = (ep: Episode) => {
    if (ep.videoId) return `https://rutube.ru/video/${ep.videoId}/`
    return PLAYLIST_URL
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-center mb-6 text-golden-gradient">
        {locale === 'ru' ? 'Сериал «Будда»' : 'Buddha TV Series'} <span className="text-lg font-normal text-amber-500/50">(55)</span>
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
            href={getVideoUrl(ep)}
            target="_blank"
            rel="noopener noreferrer"
            className="group golden-card rounded-2xl overflow-hidden"
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
                <div className="w-full h-full flex items-center justify-center text-5xl" style={{ color: 'rgba(245, 158, 11, 0.12)' }}>
                  🪷
                </div>
              )}

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(15, 14, 10, 0.4)' }}>
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.9)', boxShadow: '0 0 30px rgba(245, 158, 11, 0.4)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0F0E0A">
                    <polygon points="6,3 20,12 6,21" />
                  </svg>
                </div>
              </div>

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
              {ep.highlight && (
                <div className="mt-2 flex items-start gap-1.5">
                  <span className="text-[10px] mt-0.5" style={{ color: 'rgba(245, 158, 11, 0.5)' }}>✦</span>
                  <p className="text-[11px] leading-snug" style={{ color: 'rgba(245, 158, 11, 0.6)' }}>
                    {ep.highlight}
                  </p>
                </div>
              )}
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

      <div className="mt-16 text-center">
        <div className="inline-block p-8 rounded-2xl golden-card">
          <p className="text-amber-200/40 mb-4">
            {locale === 'ru' ? 'Смотреть все серии подряд в плейлисте RuTube' : 'Watch all episodes in the RuTube playlist'}
          </p>
          <a
            href={PLAYLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-glow inline-flex items-center gap-3 px-8 py-4 rounded-full text-[#0F0E0A] font-medium tracking-wide transition-all duration-500"
            style={{ background: 'linear-gradient(135deg, #c9a84c, #b87333)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#0F0E0A">
              <polygon points="6,3 20,12 6,21" />
            </svg>
            {locale === 'ru' ? 'Открыть плейлист на RuTube' : 'Open RuTube Playlist'}
          </a>
          <p className="text-amber-200/20 text-xs mt-4">
            {locale === 'ru' ? '55 серий • Индия, 2013 • Режиссёр: Дхармеш Шах' : '55 episodes • India, 2013 • Director: Dharmesh Shah'}
          </p>
        </div>
      </div>
    </div>
  )
}
