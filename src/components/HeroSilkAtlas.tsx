'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

const heroQuotes: Record<string, string[]> = {
  en: [
    'Peace comes from within. Do not seek it without.',
    'The mind is everything. What you think you become.',
    'Health is the greatest gift, contentment the greatest wealth.',
    'You are what you think. All that you are arises from your thoughts.',
    'The only way to find true peace is to let go of attachment.',
    'Hatred does not cease by hatred, but only by love.',
    'All that we are is the result of what we have thought.',
    'Better than a thousand hollow words is one word that brings peace.',
  ],
  ru: [
    'Мир приходит изнутри. Не ищи его снаружи.',
    'Ум — это всё. Чем ты думаешь, тем ты становишься.',
    'Здоровье — величайший дар, довольство — величайшее богатство.',
    'Ты — то, что ты думаешь. Всё, чем ты являешься, возникает из твоих мыслей.',
    'Единственный способ обрести истинный покой — отпустить привязанности.',
    'Ненависть не прекращается ненавистью, а лишь любовью.',
    'Всё, чем мы являемся, — это результат того, о чём мы думали.',
    'Лучше одно слово, приносящее покой, чем тысяча пустых слов.',
  ],
  hi: [
    'शांति भीतर से आती है। इसे बाहर मत खोजो।',
    'मन ही सब कुछ है। जो तुम सोचते हो, वही बन जाते हो।',
    'स्वास्थ्य सबसे बड़ा उपहार है, संतोष सबसे बड़ा धन है।',
    'तुम वही हो जो तुम सोचते हो। तुम्हारे विचारों से तुम्हारा अस्तित्व बनता है।',
    'सच्ची शांति पाने का एकमात्र तरीका है आसक्ति छोड़ना।',
  ],
  zh: [
    '平静来自内心。不要向外寻找。',
    '心是一切。你所想的，你就会成为。',
    '健康是最大的礼物，满足是最大的财富。',
    '你就是你所想的。你的一切都源于你的思想。',
    '找到真正平静的唯一方法是放下执着。',
  ],
  ja: [
    '平和は内面から来る。外に求めるな。',
    '心がすべて。考えることが、あなたの存在になる。',
    '健康は最大の贈り物、満足は最大の富。',
    'あなたはあなたの考えそのもの。すべては思考から生まれる。',
    '真の平和を見つける唯一の方法は執着を手放すこと。',
  ],
}

const thesisToday: Record<string, { title: string; text: string }> = {
  en: { title: 'Anattā — Non-Self', text: 'One of the Three Marks of Existence. There is no permanent, unchanging self in anything — neither in humans nor in the world.' },
  ru: { title: 'Анатман — Не-Я', text: 'Одна из трёх фундаментальных характеристик бытия. Ни в человеке, ни во всём мире нет никакой постоянной, вечной и неизменной субстанции.' },
  hi: { title: 'अनात्मा — अ-मैं', text: 'अस्तित्व के तीन चिह्नों में से एक। किसी भी चीज़ में कोई स्थायी, अपरिवर्तनशील आत्मा नहीं है।' },
  zh: { title: '无我 — Anattā', text: '存在的三个特征之一。任何事物中都没有永恒不变的自我——无论是在人身上还是在世界中。' },
  ja: { title: '無我 — Anattā', text: '存在の三つの特徴の一つ。何もものに永遠に変化しない自己はない。' },
}

export default function HeroSilkAtlas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { locale } = useLanguage()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted || !canvasRef.current) return
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = window.innerWidth
    let height = window.innerHeight
    let animationId: number

    const COLUMN_COUNT = Math.min(Math.max(Math.floor(width / 45), 15), 35)
    const FONT_SIZE = Math.min(Math.max(width / 70, 10), 18)
    const BASE_SPEED = 0.4

    interface Column {
      x: number
      y: number
      speed: number
      chars: string[]
      headIndex: number
    }

    const allQuotes = heroQuotes[locale] || heroQuotes.en
    const allChars = allQuotes.flatMap(q => [...q, ' '])

    const shuffled = [...allChars]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }

    const columns: Column[] = []
    for (let i = 0; i < COLUMN_COUNT; i++) {
      const colLength = 12 + Math.floor(Math.random() * 18)
      const chars: string[] = []
      for (let j = 0; j < colLength; j++) {
        chars.push(shuffled[(i + j * 7) % shuffled.length] || ' ')
      }
      columns.push({
        x: (i + 0.5) * (width / COLUMN_COUNT),
        y: -Math.random() * height * 0.8 - 50,
        speed: BASE_SPEED * (0.6 + Math.random() * 0.8),
        chars,
        headIndex: Math.floor(Math.random() * colLength),
      })
    }

    const handleResize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    let lastTime = 0
    const TARGET_FPS = 30
    const FRAME_INTERVAL = 1000 / TARGET_FPS

    const draw = (timestamp: number) => {
      animationId = requestAnimationFrame(draw)

      if (timestamp - lastTime < FRAME_INTERVAL) return
      lastTime = timestamp

      ctx.clearRect(0, 0, width, height)

      ctx.fillStyle = '#0F0E0A'
      ctx.fillRect(0, 0, width, height)

      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'

      columns.forEach((col) => {
        col.y += col.speed

        if (col.y > height + 50) {
          col.y = -col.chars.length * FONT_SIZE * 1.2 - 50
          for (let i = col.chars.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [col.chars[i], col.chars[j]] = [col.chars[j], col.chars[i]]
          }
          col.speed = BASE_SPEED * (0.6 + Math.random() * 0.8)
          col.headIndex = 0
        }

        const yStart = col.y
        for (let i = 0; i < col.chars.length; i++) {
          const char = col.chars[i]
          const yPos = yStart + i * FONT_SIZE * 1.2

          if (yPos < -FONT_SIZE || yPos > height + FONT_SIZE) continue

          const distFromHead = col.headIndex - i
          let opacity: number

          if (i <= col.headIndex && i > col.headIndex - 4) {
            opacity = 0.9
          } else if (distFromHead > 0 && distFromHead < 12) {
            opacity = Math.max(0.08, 0.7 * (1 - distFromHead / 12))
          } else if (distFromHead >= 12) {
            opacity = 0.05 + Math.random() * 0.03
          } else {
            opacity = 0.15
          }

          const hue = 40
          const sat = 60 + 15 * Math.sin(i * 0.3 + timestamp * 0.001)
          const light = 25 + 30 * Math.max(0, 1 - distFromHead / col.chars.length)

          ctx.fillStyle = `hsla(${hue}, ${sat}%, ${light}%, ${opacity})`
          ctx.font = `${FONT_SIZE}px 'Inter', monospace`
          ctx.fillText(char, col.x, yPos)
        }

        col.headIndex += 0.12
        if (col.headIndex > col.chars.length + 3) {
          const newChar = shuffled[Math.floor(Math.random() * shuffled.length)] || ' '
          col.chars.push(newChar)
          if (col.chars.length > 22) col.chars.shift()
          col.headIndex = 0
          col.speed = BASE_SPEED * (0.6 + Math.random() * 0.8)
        }
      })
    }

    animationId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMounted, locale])

  if (!isMounted) return null

  const thesis = thesisToday[locale] || thesisToday.en

  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '90vh' }}>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 40%, rgba(245, 158, 11, 0.06) 0%, transparent 60%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-24 md:py-32 flex flex-col items-center justify-center min-h-[90vh] text-center">
        <div className="mb-8 opacity-80">
          <svg viewBox="0 0 120 160" className="w-20 h-28 md:w-28 md:h-36 drop-shadow-lg" style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.15))' }}>
            <defs>
              <linearGradient id="stupaGold" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f5d78e" />
                <stop offset="100%" stopColor="#c9a84c" />
              </linearGradient>
            </defs>
            <rect x="35" y="130" width="50" height="12" rx="3" fill="url(#stupaGold)" opacity="0.7" />
            <rect x="40" y="118" width="40" height="12" rx="3" fill="url(#stupaGold)" opacity="0.7" />
            <ellipse cx="60" cy="100" rx="30" ry="22" fill="url(#stupaGold)" stroke="#b38b3a" strokeWidth="1" />
            <rect x="53" y="68" width="14" height="32" fill="url(#stupaGold)" stroke="#b38b3a" strokeWidth="0.8" />
            <circle cx="60" cy="58" r="11" fill="url(#stupaGold)" stroke="#b38b3a" strokeWidth="1" />
            <circle cx="60" cy="58" r="3.5" fill="#b38b3a" />
            <path d="M47 54 Q60 42 73 54" stroke="#f5d78e" strokeWidth="2" fill="none" opacity="0.8" />
          </svg>
        </div>

        <h1 className="font-[var(--font-cormorant)] text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-golden-gradient" style={{ textShadow: '0 2px 40px rgba(245, 158, 11, 0.15)' }}>
          {locale === 'ru' ? 'Мудрость Будды' : "Buddha's Wisdom"}
        </h1>

        <p className="text-amber-200/50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
          {locale === 'ru'
            ? 'Исследуйте учения Будды через диалог с ИИ'
            : 'Explore the teachings of the Buddha through AI-powered conversations'}
        </p>

        <Link
          href="/chat"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 btn-glow"
          style={{
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fde68a',
            boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          <MessageCircle className="w-5 h-5" />
          {locale === 'ru' ? 'Начать чат' : 'Start Chat'}
        </Link>
      </div>

      <div className="absolute bottom-6 left-4 right-4 md:left-8 md:right-8 flex flex-col md:flex-row justify-between gap-3 pointer-events-none z-20">
        <div className="golden-card rounded-xl p-4 max-w-xs pointer-events-auto">
          <span className="text-amber-500/60 text-xs tracking-widest uppercase font-medium">
            {locale === 'ru' ? 'Тезис дня' : 'Thesis of the Day'}
          </span>
          <p className="text-amber-100/70 font-[var(--font-cormorant)] text-sm mt-1 leading-relaxed">
            {thesis.title}
          </p>
        </div>
        <div className="golden-card rounded-xl p-4 max-w-xs pointer-events-auto">
          <span className="text-amber-500/60 text-xs tracking-widest uppercase font-medium">
            {locale === 'ru' ? 'Слова мудрости' : 'Words of Wisdom'}
          </span>
          <p className="text-amber-100/70 font-[var(--font-cormorant)] text-sm mt-1 leading-relaxed italic">
            {(heroQuotes[locale] || heroQuotes.en)[0]}
          </p>
        </div>
      </div>
    </section>
  )
}
