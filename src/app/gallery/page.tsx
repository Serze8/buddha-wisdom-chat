'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import PromoBanner from '@/components/ui/PromoBanner'

const sampleImages = [
  { id: 1, src: '/gallery/buddha-bodhi.jpg', title: { en: 'Buddha under the Bodhi Tree', ru: 'Будда под деревом Бодхи' }, category: 'bodhi' },
  { id: 2, src: '/gallery/stupa.jpg', title: { en: 'Sacred Stupa', ru: 'Священная ступа' }, category: 'stupa' },
  { id: 3, src: '/gallery/meditation.jpg', title: { en: 'Meditation', ru: 'Медитация' }, category: 'meditation' },
  { id: 4, src: '/gallery/dharma-wheel.jpg', title: { en: 'Dharma Wheel', ru: 'Колесо Дхармы' }, category: 'symbols' },
  { id: 5, src: '/gallery/lotus.jpg', title: { en: 'Sacred Lotus', ru: 'Священный лотос' }, category: 'symbols' },
  { id: 6, src: '/gallery/bodh-gaya.jpg', title: { en: 'Bodh Gaya Temple', ru: 'Храм Бодхгаи' }, category: 'stupa' },
]

const categories = {
  en: { all: 'All', bodhi: 'Bodhi Tree', meditation: 'Meditation', stupa: 'Stupas', symbols: 'Symbols' },
  ru: { all: 'Все', bodhi: 'Дерево Бодхи', meditation: 'Медитация', stupa: 'Ступы', symbols: 'Символы' },
}

export default function GalleryPage() {
  const { locale } = useLanguage()
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState<number | null>(null)

  const cat = (categories as any)[locale] || categories.en
  const filtered = filter === 'all' ? sampleImages : sampleImages.filter(img => img.category === filter)

  const openLightbox = (id: number) => setLightbox(id)
  const closeLightbox = () => setLightbox(null)
  const prev = () => setLightbox(lightbox !== null ? (lightbox - 1 + filtered.length) % filtered.length : null)
  const next = () => setLightbox(lightbox !== null ? (lightbox + 1) % filtered.length : null)

  const currentImage = lightbox !== null ? filtered[lightbox] : null

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-8">
        {locale === 'ru' ? 'Галерея' : 'Gallery'}
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {Object.entries(cat).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === key
                ? 'bg-amber-700 text-white'
                : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 hover:border-amber-400'
            }`}
          >
            {label as string}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <div
            key={img.id}
            className="break-inside-avoid cursor-pointer group"
            onClick={() => openLightbox(i)}
          >
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 flex items-center justify-center">
                <span className="text-6xl opacity-40">🪷</span>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="font-medium">{(img.title as any)[locale] || img.title.en}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={closeLightbox}>
          <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/80 hover:text-white z-10">
            <X className="w-8 h-8" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); prev() }} className="absolute left-4 text-white/80 hover:text-white z-10">
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); next() }} className="absolute right-4 text-white/80 hover:text-white z-10">
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 dark:from-amber-900/30 dark:to-amber-800/30 rounded-2xl flex items-center justify-center min-w-[300px]">
              <span className="text-8xl opacity-40">🪷</span>
            </div>
            <p className="text-white text-center mt-4 font-[var(--font-cormorant)] text-xl">
              {(currentImage.title as any)[locale] || currentImage.title.en}
            </p>
          </div>
        </div>
      )}

      <div className="mt-10">
        <PromoBanner page="gallery" />
      </div>
    </div>
  )
}
