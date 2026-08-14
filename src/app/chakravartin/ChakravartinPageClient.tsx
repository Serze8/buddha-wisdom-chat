'use client'

import { useLanguage } from '@/contexts/LanguageContext'
import Link from 'next/link'

export default function ChakravartinPageClient() {
  const { t, locale } = useLanguage()

  const seasons = [
    { season: 1, episodes: 50, desc: { ru: 'Детство и юность Ашоки', en: 'Childhood and youth of Ashoka' } },
    { season: 2, episodes: 50, desc: { ru: 'Восхождение к власти', en: 'Rise to power' } },
    { season: 3, episodes: 50, desc: { ru: 'Объединение Индии', en: 'Unification of India' } },
    { season: 4, episodes: 50, desc: { ru: 'Принятие Дхармы', en: 'Embracing the Dharma' } },
    { season: 5, episodes: 50, desc: { ru: 'Распространение буддизма', en: 'Spreading Buddhism' } },
    { season: 6, episodes: 50, desc: { ru: 'Закат империи', en: 'Twilight of the empire' } },
    { season: 7, episodes: 52, desc: { ru: 'Наследие Дхармы', en: 'Legacy of the Dharma' } },
  ]

  const keyPoints = [
    { glyph: '꧁•✤•꧂', title: locale === 'ru' ? 'Империя Маурьев' : 'Maurya Empire', desc: locale === 'ru' ? 'Ашока объединил почти всю Индию под одним знаменем' : 'Ashoka united almost all of India under one banner' },
    { glyph: 'ॐ', title: locale === 'ru' ? 'Принятие Дхармы' : 'Embracing the Dharma', desc: locale === 'ru' ? 'После кровавой битвы при Калинге Ашока отказался от насилия' : 'After the bloody Battle of Kalinga, Ashoka renounced violence' },
    { glyph: '✦', title: locale === 'ru' ? 'Колонны Ашоки' : 'Ashoka Pillars', desc: locale === 'ru' ? 'Каменные колонны с указами, разбросанные по всей Индии' : 'Stone pillars with edicts scattered across India' },
    { glyph: '✧', title: locale === 'ru' ? 'Распространение буддизма' : 'Spreading Buddhism', desc: locale === 'ru' ? 'Ашока отправлял миссионеров в Шри-Ланку, Цейлон, Центральную Азию' : 'Ashoka sent missionaries to Sri Lanka, Ceylon, Central Asia' },
  ]

  const characters = [
    {
      phases: [
        { glyph: 'सि', label: locale === 'ru' ? 'Детство · Сиамак' : 'Childhood · Siymak' },
        { glyph: 'रा', label: locale === 'ru' ? 'С Ашокой · Радогупта' : 'With Ashoka · Radhagupta' },
      ],
      era: locale === 'ru' ? 'Детство → Правление' : 'Childhood → Reign',
      glyph: 'रा',
      name: locale === 'ru' ? 'Радогупта' : 'Radhagupta',
      role: locale === 'ru' ? 'Верный соратник · щит Дхармы' : 'Loyal companion · shield of Dharma',
      desc: locale === 'ru'
        ? 'Друг детства Ашоки, прошедший с ним путь от дворца до трона. Щит, опора и первая защита Дхармы.'
        : "Ashoka's childhood friend who walked with him from the palace to the throne. A shield, a pillar and the first guard of the Dharma.",
      tags: locale === 'ru' ? 'ДРУЖБА · ВЕРНОСТЬ · ЩИТ' : 'FRIENDSHIP · LOYALTY · SHIELD',
      traits: locale === 'ru' ? ['Верный соратник', 'Щит Дхармы'] : ['Loyal companion', 'Shield of Dharma'],
    },
    {
      phases: [{ glyph: 'च', label: locale === 'ru' ? 'Начало' : 'The Beginning' }],
      era: locale === 'ru' ? 'Начало' : 'The Beginning',
      glyph: 'च',
      name: locale === 'ru' ? 'Чанакья' : 'Chanakya',
      role: locale === 'ru' ? 'Главный наставник Дхармы' : 'Great master of Dharma',
      desc: locale === 'ru'
        ? 'Сердце и разум Дхармы. Всегда рядом: сначала с Биндусарой, затем с Ашокой. Учитель, стратег и хранитель справедливости.'
        : 'The heart and mind of Dharma. Always by the side — first of Bindusara, then of Ashoka. Teacher, strategist and guardian of justice.',
      tags: locale === 'ru' ? 'МУДРОСТЬ · СТРАТЕГИЯ · ДХАРМА' : 'WISDOM · STRATEGY · DHARMA',
      traits: locale === 'ru' ? ['Наставник', 'Стратег', 'Дхарма'] : ['Mentor', 'Strategist', 'Dharma'],
    },
    {
      phases: [{ glyph: 'बि', label: locale === 'ru' ? 'Начало' : 'The Beginning' }],
      era: locale === 'ru' ? 'Начало' : 'The Beginning',
      glyph: 'बि',
      name: locale === 'ru' ? 'Биндусара' : 'Bindusara',
      role: locale === 'ru' ? 'Император Магадхи' : 'Emperor of Magadha',
      desc: locale === 'ru'
        ? 'Великий правитель Магадхи. Вместе с Чанакьей держит империю. Отец Ашоки, чья судьба связана с будущим Дхармы.'
        : 'The great ruler of Magadha. Together with Chanakya he holds the empire. Father of Ashoka, whose fate is bound to the future of Dharma.',
      tags: locale === 'ru' ? 'ВЛАСТЬ · ДОЛГ · ОТЕЦ' : 'POWER · DUTY · FATHER',
      traits: locale === 'ru' ? ['Император', 'Отец', 'Сила'] : ['Emperor', 'Father', 'Strength'],
    },
    {
      phases: [{ glyph: 'अ', label: locale === 'ru' ? 'Юность → Правление' : 'Youth → Reign' }],
      era: locale === 'ru' ? 'Юность → Правление' : 'Youth → Reign',
      glyph: 'अ',
      name: locale === 'ru' ? 'Ашока' : 'Ashoka',
      role: locale === 'ru' ? 'Юный принц · будущий Чакравартин' : 'Young prince · future Chakravartin',
      desc: locale === 'ru'
        ? 'Молодой Ашока — пылкий, смелый, верный Дхарме. Учится у Чанакьи, любит мать Шубхадранги и растёт в тени трона.'
        : 'Young Ashoka — fiery, brave, devoted to the Dharma. Learns from Chanakya, loves his mother Shubhadrangi and grows in the shadow of the throne.',
      tags: locale === 'ru' ? 'ОГОНЬ · СПРАВЕДЛИВОСТЬ · ПУТЬ' : 'FIRE · JUSTICE · PATH',
      traits: locale === 'ru' ? ['Принц', 'Воин', 'Дхарма'] : ['Prince', 'Warrior', 'Dharma'],
    },
    {
      phases: [{ glyph: 'शु', label: locale === 'ru' ? 'Все эпохи' : 'All Ages' }],
      era: locale === 'ru' ? 'Все эпохи' : 'All Ages',
      glyph: 'शु',
      name: locale === 'ru' ? 'Шубхадранги' : 'Shubhadrangi',
      role: locale === 'ru' ? 'Мать Ашоки · царица сердца' : 'Mother of Ashoka · queen of the heart',
      desc: locale === 'ru'
        ? 'Мать Ашоки. Тихая сила Дхармы во дворце. Рядом с сыном в самые трудные моменты, хранит доброту и правду.'
        : 'The mother of Ashoka. The quiet strength of Dharma in the palace. Beside her son in his hardest moments, she keeps kindness and truth.',
      tags: locale === 'ru' ? 'ЛЮБОВЬ · ЗАЩИТА · ЖЕРТВА' : 'LOVE · PROTECTION · SACRIFICE',
      traits: locale === 'ru' ? ['Мать', 'Защитница'] : ['Mother', 'Protector'],
    },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div className="text-center mb-16">
        <span className="text-5xl block mb-4 text-golden-gradient">꧁•✤•꧂</span>
        <h1 className="font-[var(--font-cormorant)] text-4xl md:text-5xl font-bold text-golden-gradient mb-4">
          {t.chakravartin.title}
        </h1>
        <p className="text-amber-500/60 text-sm mb-4">{t.chakravartin.episodes}</p>
        <p className="text-amber-200/50 text-lg max-w-2xl mx-auto leading-relaxed">
          {t.chakravartin.intro}
        </p>
      </div>

      {/* Video embed */}
      <section className="rounded-3xl p-8 md:p-12 mb-4" style={{ background: 'linear-gradient(180deg, rgba(20,14,8,0.9) 0%, rgba(15,14,10,0.95) 100%)', border: '1px solid rgba(245, 158, 11, 0.08)' }}>
        <div className="relative w-full rounded-2xl overflow-hidden mb-8" style={{ boxShadow: '0 0 60px rgba(245, 158, 11, 0.08)', border: '2px solid rgba(245, 158, 11, 0.15)', paddingBottom: '56.25%' }}>
          <iframe
            src="https://www.youtube.com/embed/P6Binwp6t0k"
            title="Chakravartin — Emperor Ashoka"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </section>

      {/* Golden divider */}
      <div className="flex items-center justify-center my-8">
        <div className="golden-divider flex-1" />
        <span className="px-4 text-2xl">☸</span>
        <div className="golden-divider flex-1" />
      </div>

      {/* Key Points */}
      <section className="mb-8">
        <div className="grid md:grid-cols-2 gap-4">
          {keyPoints.map((point, i) => (
            <div key={i} className="golden-card rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <span className="text-2xl shrink-0">{point.glyph}</span>
                <div>
                  <h3 className="font-[var(--font-cormorant)] text-lg font-bold text-amber-100/80 mb-1">{point.title}</h3>
                  <p className="text-amber-200/40 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Golden divider */}
      <div className="flex items-center justify-center my-8">
        <div className="golden-divider flex-1" />
        <span className="px-4 text-2xl">ॐ</span>
        <div className="golden-divider flex-1" />
      </div>

      {/* Characters */}
      <section className="mb-8">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-8 text-golden-gradient">
          {locale === 'ru' ? 'Персонажи' : 'Characters'}
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {characters.map((c, i) => (
            <div key={i} className="golden-card rounded-2xl p-6 md:p-8 relative overflow-hidden">
              <span
                className="absolute -top-8 -right-6 text-[8rem] leading-none text-amber-500/5 select-none pointer-events-none font-[var(--font-cormorant)]"
                aria-hidden
              >
                {c.glyph}
              </span>
              <span className="text-[11px] uppercase tracking-widest text-amber-500/50">{c.era}</span>
              <div className="flex items-start gap-4 mt-2">
                <span className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full text-2xl font-[var(--font-cormorant)] border border-amber-500/20 bg-amber-500/5 text-golden-gradient">
                  {c.glyph}
                </span>
                <div>
                  <h3 className="font-[var(--font-cormorant)] text-2xl font-bold text-amber-100/90 leading-tight">{c.name}</h3>
                  <p className="text-amber-500/60 text-sm mt-1">{c.role}</p>
                </div>
              </div>
              {c.phases.length > 1 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {c.phases.map((p, j) => (
                    <span key={j} className="inline-flex items-center gap-1.5 text-[11px] text-amber-400/60 px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.06)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                      <span className="text-amber-300/80">{p.glyph}</span>
                      {p.label}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-[11px] tracking-[0.2em] text-amber-400/40 mt-4">{c.tags}</p>
              <p className="text-amber-200/50 text-sm leading-relaxed mt-2">{c.desc}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {c.traits.map((t, j) => (
                  <span key={j} className="text-[11px] text-amber-400/60 px-3 py-1 rounded-full" style={{ background: 'rgba(245, 158, 11, 0.06)', border: '1px solid rgba(245, 158, 11, 0.15)' }}>
                    {t}
                  </span>
                ))}
              </div>
              <a
                href="#"
                data-coming-soon
                className="inline-flex items-center gap-2 text-amber-400/70 text-sm font-medium mt-5 hover:text-amber-400 transition-colors"
              >
                {locale === 'ru' ? 'Нажмите, чтобы открыть биографию' : 'Click to open the biography'} →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Seasons */}
      <section className="mb-8">
        <h2 className="font-[var(--font-cormorant)] text-3xl font-bold text-center mb-8 text-golden-gradient">
          {locale === 'ru' ? 'Сезоны сериала' : 'Series Seasons'}
        </h2>
        <div className="space-y-3">
          {seasons.map((s) => (
            <div
              key={s.season}
              className="flex items-center gap-4 px-6 py-4 rounded-xl transition-colors"
              style={{ background: 'rgba(245, 158, 11, 0.03)', border: '1px solid rgba(245, 158, 11, 0.08)' }}
            >
              <span className="text-amber-500/60 font-mono text-sm w-16 shrink-0">
                {locale === 'ru' ? 'Сезон' : 'Season'} {s.season}
              </span>
              <span className="text-amber-100/60 text-sm flex-1">
                {(s.desc as any)[locale] || s.desc.en}
              </span>
              <span className="text-amber-500/40 text-xs">{s.episodes} {locale === 'ru' ? 'серий' : 'episodes'}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Link to teachings */}
      <div className="text-center mt-10 space-y-4">
        <Link
          href="/teachings"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, #b45309, #92400e)',
            color: '#fde68a',
            boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2)',
            border: '1px solid rgba(245, 158, 11, 0.3)',
          }}
        >
          ॐ {locale === 'ru' ? 'Изучить Дхарму' : 'Study the Dharma'} →
        </Link>
        <div>
          <Link
            href="/community"
            className="inline-flex items-center gap-1 text-amber-400/70 font-medium text-sm hover:text-amber-400 transition-colors"
          >
            ✧ {locale === 'ru' ? 'Обсудить в сообществе' : 'Discuss in Community'} →
          </Link>
        </div>
      </div>
    </div>
  )
}
