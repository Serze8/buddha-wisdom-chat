'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { l } from '@/lib/lang'

interface SubmenuItem {
  label: { ru: string; en: string }
  href: string
}

interface MenuItem {
  id: string
  label: { ru: string; en: string }
  color: [number, number, number]
  href: string
  angle: number
  distance: number
  submenu?: SubmenuItem[]
}

const MENU_ITEMS: MenuItem[] = [
  {
    id: 'east',
    label: { ru: 'Учение', en: 'Teaching' },
    color: [245, 158, 11],
    href: '/teachings',
    angle: 90,
    distance: 190,
    submenu: [
      { label: { ru: 'Видение', en: 'Vision' }, href: '/teachings/vision' },
      { label: { ru: 'Путь', en: 'Path' }, href: '/teachings/path' },
      { label: { ru: 'Вращение', en: 'Wheel' }, href: '/teachings/wheel' },
      { label: { ru: 'Практика', en: 'Practice' }, href: '/teachings/practice' },
    ],
  },
  {
    id: 'south',
    label: { ru: 'Практика', en: 'Practice' },
    color: [20, 184, 166],
    href: '/teachings/practice',
    angle: 180,
    distance: 190,
    submenu: [
      { label: { ru: 'Dharma Chats', en: 'Dharma Chats' }, href: '/dharma-chats' },
      { label: { ru: 'Сангха', en: 'Sangha' }, href: '/dharma-chats/sangha' },
    ],
  },
  {
    id: 'west',
    label: { ru: 'История', en: 'History' },
    color: [225, 29, 72],
    href: '/buddha',
    angle: 270,
    distance: 190,
    submenu: [
      { label: { ru: 'Чакравартин', en: 'Chakravartin' }, href: '/chakravartin' },
      { label: { ru: 'Сериал', en: 'Series' }, href: '/episodes' },
      { label: { ru: 'Галерея', en: 'Gallery' }, href: '/gallery' },
    ],
  },
  {
    id: 'north',
    label: { ru: 'Сангха', en: 'Sangha' },
    color: [139, 92, 246],
    href: '/dharma-chats/sangha',
    angle: 0,
    distance: 190,
    submenu: [
      { label: { ru: 'Беседы', en: 'Talks' }, href: '/dharma-chats/talks' },
      { label: { ru: 'Ретриты', en: 'Retreats' }, href: '/retreats' },
    ],
  },
]

const rgba = (c: [number, number, number], a: number) =>
  `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`

function getItemPosition(angle: number, distance: number) {
  const rad = (angle - 90) * (Math.PI / 180)
  const x = Math.cos(rad) * distance
  const y = Math.sin(rad) * distance
  return { x, y }
}

export default function QuakeStupa() {
  const router = useRouter()
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'

  const [hovered, setHovered] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [prefersReduced, setPrefersReduced] = useState(
    typeof window !== 'undefined'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  )
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const onMqChange = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    check()
    window.addEventListener('resize', check)
    mq.addEventListener('change', onMqChange)
    return () => {
      window.removeEventListener('resize', check)
      mq.removeEventListener('change', onMqChange)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    containerRef.current?.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
    containerRef.current?.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setHovered(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const toggleItem = (id: string) => {
    setHovered((prev) => (prev === id ? null : id))
  }

  return (
    <>
      <style>{`
        @keyframes qs-pulse {
          0%, 100% { opacity: 0.25; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 0.5; transform: translate(-50%, -50%) scale(1.04); }
        }
        @keyframes qs-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes qs-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        @keyframes qs-gem-pulse {
          0%, 100% { opacity: 0.85; r: 4; }
          50% { opacity: 1; r: 5.5; }
        }
        @media (prefers-reduced-motion: reduce) {
          .qs-ring, .qs-spokes, .qs-lotus { animation: none !important; }
        }
      `}</style>

      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-full select-none"
        style={{
          aspectRatio: '1',
          maxWidth: 'min(850px, 95vw)',
          margin: '0 auto',
          '--mouse-x': '50%',
          '--mouse-y': '50%',
        } as React.CSSProperties}
        role="navigation"
        aria-label={ru ? 'Навигация по разделам' : 'Section navigation'}
      >
        {/* Background: grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, rgba(245, 158, 11, 0.12) 0%, transparent 50%),
              repeating-linear-gradient(0deg, rgba(245, 158, 11, 0.04) 0px, transparent 1px, transparent 40px),
              repeating-linear-gradient(90deg, rgba(245, 158, 11, 0.04) 0px, transparent 1px, transparent 40px)
            `,
          }}
        />

        {/* Mouse glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(300px circle at var(--mouse-x) var(--mouse-y), rgba(245, 158, 11, 0.06), transparent 70%)',
          }}
        />

        {/* Glow rings */}
        {!prefersReduced && (
          <>
            <div
              className="qs-ring absolute rounded-full"
              style={{
                width: '80%',
                aspectRatio: '1',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1.5px solid rgba(245, 158, 11, 0.2)',
                boxShadow: '0 0 40px rgba(245, 158, 11, 0.12)',
                animation: 'qs-pulse 5s ease-in-out infinite',
              }}
            />
            <div
              className="qs-ring absolute rounded-full"
              style={{
                width: '115%',
                aspectRatio: '1',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                border: '1px solid rgba(245, 158, 11, 0.1)',
                animation: 'qs-pulse 5s ease-in-out infinite 2.5s',
              }}
            />
          </>
        )}

        {/* Central stupa */}
        <div
          className="absolute z-10 cursor-pointer"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.35))',
          }}
          onClick={() => router.push('/teachings')}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault()
              router.push('/teachings')
            }
          }}
          aria-label={ru ? 'Дхарма — учения' : 'Dharma — teachings'}
        >
          <svg viewBox="0 0 120 120" style={{ width: '35%', height: '35%', minWidth: 220, maxWidth: 320 }}>
            {/* Outer base ring (reverse rotate) */}
            <circle
              cx="60"
              cy="60"
              r="52"
              fill="none"
              stroke="rgba(245, 158, 11, 0.15)"
              strokeWidth="1"
              strokeDasharray="4 4"
              className="qs-lotus"
              style={{
                transformOrigin: '60px 60px',
                animation: prefersReduced ? 'none' : 'qs-rotate-reverse 40s linear infinite',
              }}
            />
            {/* Lotus petals */}
            <g
              className="qs-lotus"
              style={{
                transformOrigin: '60px 60px',
                animation: prefersReduced ? 'none' : 'qs-rotate-reverse 50s linear infinite',
              }}
            >
              {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                <ellipse
                  key={angle}
                  cx="60"
                  cy="12"
                  rx="4"
                  ry="9"
                  fill="rgba(245, 158, 11, 0.12)"
                  stroke="rgba(245, 158, 11, 0.25)"
                  strokeWidth="0.5"
                  transform={`rotate(${angle} 60 60)`}
                />
              ))}
            </g>
            {/* Dome */}
            <ellipse
              cx="60"
              cy="60"
              rx="30"
              ry="36"
              fill="rgba(245, 158, 11, 0.05)"
              stroke="rgba(245, 158, 11, 0.4)"
              strokeWidth="1.5"
            />
            {/* Spire */}
            <line
              x1="60"
              y1="24"
              x2="60"
              y2="12"
              stroke="rgba(245, 158, 11, 0.6)"
              strokeWidth="1.5"
            />
            <circle cx="60" cy="10" r="2.5" fill="rgba(245, 158, 11, 0.7)" />
            {/* Base */}
            <rect
              x="36"
              y="84"
              width="48"
              height="10"
              rx="2"
              fill="rgba(245, 158, 11, 0.06)"
              stroke="rgba(245, 158, 11, 0.3)"
              strokeWidth="1"
            />
            {/* Dharmachakra — 8-spoke wheel */}
            <g transform="translate(60, 60)">
              {/* Rotating group — CSS animation only, no SVG transform */}
              <g
                className="qs-spokes"
                style={{
                  transformOrigin: '0 0',
                  animation: prefersReduced ? 'none' : 'qs-rotate 25s linear infinite',
                }}
              >
                {/* Outer rim */}
                <circle r="20" fill="none" stroke="rgba(245, 158, 11, 0.65)" strokeWidth="2.5" />
                {/* Inner dashed rim */}
                <circle
                  r="20"
                  fill="none"
                  stroke="rgba(245, 158, 11, 0.4)"
                  strokeWidth="1"
                  strokeDasharray="3 3"
                  opacity="0.6"
                />
                {/* 8 spokes — Noble Eightfold Path */}
                <g stroke="rgba(245, 158, 11, 0.75)" strokeWidth="1.5" strokeLinecap="round">
                  {[0, 45, 90, 135].map((deg) => (
                    <line
                      key={deg}
                      x1={0}
                      y1={-20}
                      x2={0}
                      y2={20}
                      transform={`rotate(${deg})`}
                    />
                  ))}
                </g>
              </g>
              {/* Hub — static, outside rotating group */}
              <circle r="7" fill="rgba(245, 158, 11, 0.25)" stroke="rgba(245, 158, 11, 0.85)" strokeWidth="1.5" />
              {/* Mani gem — pulsing center */}
              <circle
                r="4"
                fill="rgba(245, 158, 11, 0.9)"
                style={{
                  animation: prefersReduced ? 'none' : 'qs-gem-pulse 3s ease-in-out infinite',
                }}
              />
            </g>
          </svg>
        </div>

        {/* Center label */}
        <div
          className="absolute z-10 pointer-events-none text-center"
          style={{
            top: 'calc(50% + 100px)',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          <span
            className="text-[10px] font-medium uppercase tracking-[0.2em]"
            style={{ color: 'rgba(245, 158, 11, 0.65)', fontFamily: 'var(--font-cormorant)' }}
          >
            {ru ? 'Дхармачакра' : 'Dharmachakra'}
          </span>
        </div>

        {/* Menu items */}
        {MENU_ITEMS.map((item) => {
          const { x, y } = getItemPosition(item.angle, item.distance)
          const isActive = hovered === item.id
          const subVisible = isActive && item.submenu

          return (
            <div
              key={item.id}
              className="absolute z-20"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
              }}
              onMouseEnter={() => !isMobile && setHovered(item.id)}
              onMouseLeave={() => !isMobile && setHovered(null)}
            >
              {/* Main label */}
              <button
                onClick={() => {
                  if (isMobile) {
                    toggleItem(item.id)
                  } else if (!item.submenu) {
                    router.push(item.href)
                  }
                }}
                className="relative whitespace-nowrap transition-all duration-200"
                style={{
                  padding: '10px 20px',
                  background: isActive ? rgba(item.color, 0.18) : 'rgba(255, 255, 255, 0.85)',
                  border: `1px solid ${rgba(item.color, isActive ? 0.8 : 0.35)}`,
                  color: rgba(item.color, isActive ? 1 : 0.8),
                  fontSize: 13,
                  fontWeight: 500,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-cormorant)',
                  cursor: 'pointer',
                  boxShadow: isActive ? `0 0 16px ${rgba(item.color, 0.3)}` : 'none',
                  transform: isActive ? 'scale(1.08)' : 'scale(1)',
                }}
                aria-expanded={subVisible ? true : undefined}
                aria-label={`${l(item.label, lang)} — ${item.submenu ? (ru ? 'есть подменю' : 'has submenu') : l(item.label, lang)}`}
              >
                {l(item.label, lang)}
                {item.submenu && (
                  <span
                    className="inline-block ml-1 transition-transform duration-200"
                    style={{ transform: isActive ? 'rotate(90deg)' : 'rotate(0deg)', fontSize: 10 }}
                  >
                    ▸
                  </span>
                )}
              </button>

              {/* Submenu */}
              {subVisible && (
                <div
                  className="absolute z-30"
                  style={{
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: 8,
                    minWidth: 180,
                    background: 'rgba(10, 10, 15, 0.95)',
                    border: `1.5px solid ${rgba(item.color, 0.45)}`,
                    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px ${rgba(item.color, 0.1)}`,
                    padding: '6px 0',
                    opacity: 1,
                  }}
                >
                  {/* Arrow */}
                  <div
                    style={{
                      position: 'absolute',
                      top: -6,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 0,
                      borderLeft: '6px solid transparent',
                      borderRight: '6px solid transparent',
                      borderBottom: `6px solid ${rgba(item.color, 0.45)}`,
                    }}
                  />
                   {item.submenu!.map((sub) => (
                    <a
                      key={sub.href}
                      href={sub.href}
                      className="block transition-all duration-150"
                      style={{
                        padding: '9px 16px',
                        color: 'rgba(69, 26, 3, 0.7)',
                        fontSize: 12,
                        textDecoration: 'none',
                        borderBottom: '1px solid rgba(245, 158, 11, 0.1)',
                        fontFamily: 'var(--font-cormorant)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = rgba(item.color, 1)
                        e.currentTarget.style.background = rgba(item.color, 0.08)
                        e.currentTarget.style.paddingLeft = '20px'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'rgba(69, 26, 3, 0.7)'
                        e.currentTarget.style.background = 'transparent'
                        e.currentTarget.style.paddingLeft = '16px'
                      }}
                    >
                      {l(sub.label, lang)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          )
        })}

        {/* Mobile backdrop */}
        {isMobile && hovered && (
          <div
            className="fixed inset-0 z-15 bg-black/40"
            style={{ zIndex: 15 }}
            onClick={() => setHovered(null)}
          />
        )}

        {/* Mobile bottom sheet */}
        {isMobile && hovered && (() => {
          const item = MENU_ITEMS.find((i) => i.id === hovered)
          if (!item?.submenu) return null
          return (
            <div
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-2xl"
              style={{
                background: 'rgba(255, 255, 255, 0.97)',
                border: `1.5px solid ${rgba(item.color, 0.4)}`,
                borderBottom: 'none',
                padding: '20px 16px 32px',
                boxShadow: `0 -8px 40px rgba(0, 0, 0, 0.6), 0 0 30px ${rgba(item.color, 0.08)}`,
              }}
            >
              <div
                className="w-10 h-1 rounded-full mx-auto mb-4"
                style={{ background: 'rgba(245, 158, 11, 0.3)' }}
              />
              <h3
                className="text-sm font-medium uppercase tracking-wider mb-3 text-center"
                style={{ color: rgba(item.color, 0.9), fontFamily: 'var(--font-cormorant)' }}
              >
                {l(item.label, lang)}
              </h3>
              {item.submenu.map((sub) => (
                <a
                  key={sub.href}
                  href={sub.href}
                  className="block py-3 px-4 rounded-lg mb-1 transition-colors"
                  style={{
                    color: 'rgba(69, 26, 3, 0.75)',
                    fontSize: 14,
                    textDecoration: 'none',
                    borderBottom: `1px solid ${rgba(item.color, 0.12)}`,
                    fontFamily: 'var(--font-cormorant)',
                  }}
                >
                  {l(sub.label, lang)}
                </a>
              ))}
              <a
                href={item.href}
                className="block py-3 px-4 rounded-lg mt-2 text-center font-medium transition-colors"
                style={{
                  color: rgba(item.color, 0.9),
                  border: `1px solid ${rgba(item.color, 0.3)}`,
                  fontSize: 13,
                  textDecoration: 'none',
                  fontFamily: 'var(--font-cormorant)',
                }}
              >
                {ru ? 'Перейти' : 'Go to'} {l(item.label, lang)} →
              </a>
            </div>
          )
        })()}
      </div>

      {/* Hint */}
      <p className="mt-6 text-center text-xs tracking-wide" style={{ color: 'rgba(245, 158, 11, 0.4)' }}>
        {ru ? 'Наведите на раздел — кликните, чтобы исследовать' : 'Hover a section — click to explore'}
      </p>
    </>
  )
}
