'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const ENTRIES = [
  {
    id: 'east',
    label: { ru: 'Учение', en: 'Teachings' },
    icon: '📚',
    href: '/teachings',
    desc: { ru: 'Три поворота колеса', en: 'Three Turnings of the Wheel' },
    color: [59, 130, 246] as [number, number, number],
    gridArea: 'east',
  },
  {
    id: 'south',
    label: { ru: 'Практика', en: 'Practice' },
    icon: '🧘',
    href: '/teachings/practice',
    desc: { ru: 'Здесь и сейчас', en: 'Here and now' },
    color: [14, 165, 233] as [number, number, number],
    gridArea: 'south',
  },
  {
    id: 'west',
    label: { ru: 'История', en: 'History' },
    icon: '🏺',
    href: '/past',
    desc: { ru: 'Будда и Чакравартин', en: 'Buddha and Chakravartin' },
    color: [244, 63, 94] as [number, number, number],
    gridArea: 'west',
  },
  {
    id: 'north',
    label: { ru: 'Сангха', en: 'Sangha' },
    icon: '💬',
    href: '/future',
    desc: { ru: 'Сообщество и обет', en: 'Community and vow' },
    color: [139, 92, 246] as [number, number, number],
    gridArea: 'north',
  },
]

const rgba = (c: [number, number, number], a: number) =>
  `rgba(${c[0]}, ${c[1]}, ${c[2]}, ${a})`

function Dharmachakra({ size, spinning }: { size: number; spinning: boolean }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size}>
{/* Outer ring */}
      <circle
        cx="60" cy="60" r="54"
        fill="none"
        stroke="rgba(245, 158, 11, 0.25)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        style={{
          transformOrigin: '60px 60px',
          animation: spinning ? 'sd-rotate-reverse 40s linear infinite' : 'none',
        }}
      />
      {/* Lotus petals */}
      <g
        style={{
          transformOrigin: '60px 60px',
          animation: spinning ? 'sd-rotate-reverse 50s linear infinite' : 'none',
        }}
      >
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <ellipse
            key={angle}
            cx="60" cy="12"
            rx="4" ry="9"
            fill="rgba(245, 158, 11, 0.12)"
            transform={`rotate(${angle} 60 60)`}
          />
        ))}
      </g>
      {/* Main wheel */}
      <g
        style={{
          transformOrigin: '60px 60px',
          animation: spinning ? 'sd-rotate 30s linear infinite' : 'none',
        }}
      >
        <circle cx="60" cy="60" r="42" fill="none" stroke="rgba(245, 158, 11, 0.4)" strokeWidth="2" />
        {/* 8 spokes */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
          <line
            key={angle}
            x1="60" y1="60"
            x2={60 + 42 * Math.cos((angle * Math.PI) / 180)}
            y2={60 + 42 * Math.sin((angle * Math.PI) / 180)}
            stroke="rgba(245, 158, 11, 0.3)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        ))}
        {/* Hub */}
        <circle cx="60" cy="60" r="8" fill="rgba(245, 158, 11, 0.6)" />
        <circle cx="60" cy="60" r="4" fill="rgba(255, 255, 255, 0.9)" />
      </g>
    </svg>
  )
}

export default function StupaDome() {
  const router = useRouter()
  const { locale } = useLanguage()
  const ru = locale === 'ru'
  const lang = ru ? 'ru' : 'en'
  const [hovered, setHovered] = useState<string | null>(null)

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const spinning = !prefersReduced

  return (
    <section className="w-full py-8 md:py-12">
      <style>{`
        @keyframes sd-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes sd-rotate-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
      `}</style>

      {/* Desktop: cross layout */}
      <div
        className="mx-auto hidden md:grid gap-4 md:gap-6 px-4"
        style={{
          maxWidth: 700,
          gridTemplateAreas: `
            ".     north  ."
            "west  center east"
            ".     south  ."
          `,
          gridTemplateColumns: '1fr 1fr 1fr',
          gridTemplateRows: 'auto auto auto',
        }}
      >
        {ENTRIES.map((entry) => {
          const isHovered = hovered === entry.id
          return (
            <a
              key={entry.id}
              href={entry.href}
              className="group relative rounded-2xl p-5 md:p-6 transition-all duration-300 cursor-pointer"
              style={{
                gridArea: entry.gridArea,
                background: isHovered
                  ? `linear-gradient(135deg, ${rgba(entry.color, 0.15)}, ${rgba(entry.color, 0.05)})`
                  : 'rgba(255, 255, 255, 0.85)',
                border: `1.5px solid ${isHovered ? rgba(entry.color, 0.5) : '#e7e5e4'}`,
                boxShadow: isHovered
                  ? `0 0 30px ${rgba(entry.color, 0.15)}`
                  : '0 4px 20px rgba(69, 26, 3, 0.06)',
                transform: isHovered ? 'scale(1.03)' : 'scale(1)',
              }}
              onMouseEnter={() => setHovered(entry.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="flex flex-col items-center text-center gap-2">
                <span className="text-2xl md:text-3xl">{entry.icon}</span>
                <h3
                  className="text-base md:text-lg font-bold transition-colors"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    color: isHovered ? rgba(entry.color, 1) : '#292524',
                  }}
                >
                  {entry.label[lang]}
                </h3>
                <p className="text-xs md:text-sm" style={{ color: 'rgba(69, 26, 3, 0.45)' }}>
                  {entry.desc[lang]}
                </p>
              </div>
            </a>
          )
        })}

        {/* Center: Dharmachakra */}
        <div
          className="flex items-center justify-center cursor-pointer"
          style={{ gridArea: 'center' }}
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
          <div
            className="transition-transform duration-500 hover:scale-110"
            style={{ filter: 'drop-shadow(0 0 20px rgba(245, 158, 11, 0.3))' }}
          >
            <Dharmachakra size={160} spinning={spinning} />
          </div>
        </div>
      </div>

      {/* Mobile: vertical layout */}
      <div className="md:hidden px-4">
        <div className="flex justify-center mb-6">
          <div style={{ filter: 'drop-shadow(0 0 15px rgba(245, 158, 11, 0.3))' }}>
            <Dharmachakra size={120} spinning={spinning} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {ENTRIES.map((entry) => {
            const isHovered = hovered === entry.id
            return (
              <a
                key={entry.id}
                href={entry.href}
                className="group rounded-xl p-4 transition-all duration-300"
                style={{
                  background: isHovered
                    ? `linear-gradient(135deg, ${rgba(entry.color, 0.15)}, ${rgba(entry.color, 0.05)})`
                    : 'rgba(255, 255, 255, 0.85)',
                  border: `1px solid ${isHovered ? rgba(entry.color, 0.4) : '#e7e5e4'}`,
                }}
                onClick={() => setHovered(entry.id)}
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl">{entry.icon}</span>
                  <div>
                    <h3
                      className="text-sm font-bold"
                      style={{
                        fontFamily: 'var(--font-cormorant)',
                        color: isHovered ? rgba(entry.color, 1) : '#292524',
                      }}
                    >
                      {entry.label[lang]}
                    </h3>
                    <p className="text-[11px]" style={{ color: 'rgba(69, 26, 3, 0.4)' }}>
                      {entry.desc[lang]}
                    </p>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
