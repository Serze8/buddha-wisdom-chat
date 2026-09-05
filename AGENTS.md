# AGENTS.md — Buddha-Chakravartin

## Project Overview

Next.js 16 + React 19 + Tailwind v4 Buddhist educational platform with AI chat.
Deployed on Vercel, auth via Supabase (GitHub OAuth), AI via Google Gemini.

## Tone of Voice & Content Guide

**Миссия (по фактам проекта):** буддийская образовательная платформа — сериалы, учения, AI-чат с героями Дхармы, сангха. Говорим о глубоком спокойно, ясно и современно — без «инфоцыганщины».

### Принципы ToV
- Спокойный, мудрый, уважительный тон. Обращаемся к человеку как к равному.
- О глубоком — просто, но без упрощения и искажения смысла.
- Фокус на практике, ясности и традиции; современный язык вместо жаргона.
- Не выдумывать отзывы, кейсы, цифры, цитаты и источники.

### Жёстко запрещено
- Инфоцыганские формулы: «измени жизнь за 7 дней», «секретные техники», «успешный успех».
- Обещания просветления или гарантированных результатов.
- Упрощение Дхармы до «медитации от стресса» без контекста.
- Агрессивные CTA («Купи сейчас!», «Только сегодня!»).
- Эзотерический жаргон без пояснения.

### Разрешённые CTA
- «Начать практику», «Посмотреть серии», «Поговорить с героем», «Присоединиться к сангхе», «Поддержать проект».
- Честные формулировки: «Это требует времени», «Практика — это путь».

### Проверенные факты для маркетинговых текстов
- Интерфейс на **18 языках** (`src/lib/i18n.ts`), переводы проверяются по смыслу, а не дословно.
- Сериал «Будда» — 55 серий; сериал «Чакравартин» (Ашока) — 442 серии.
- Три поворота колеса: Видение (4 Благородные истины), Путь (Срединный путь, Восьмеричный путь), Вращение (Дхармачакра).
- AI-чат с персонажами: `/dharma-chats/ai`.
- Разделы: учения, практики, ретриты, сообщество, галерея, викторина.
- Поддержка проекта — пожертвования (`/donate`), платных курсов нет.

## Quick Start

```bash
git clone https://github.com/Serze8/buddha-wisdom-chat.git
cd buddha-wisdom-chat
npm install
cp .env.example .env.local   # or create manually
npm run dev                   # http://localhost:3000
```

## Environment Variables (.env.local)

```env
NEXT_PUBLIC_SUPABASE_URL=https://kefxzykpvejbmjznljkq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_CliwiZL0JL9NhN9-ueOuRw_m63ktyZh
```

## Deploy to Vercel

### Option A: Auto-deploy via GitHub (recommended)
```bash
git add .
git commit -m "your message"
git push origin main
```
Vercel auto-deploys from `main` branch. Wait 1-2 minutes.

### Option B: Manual deploy via CLI
```bash
npx vercel --prod
```
Select project `buddha-chakravartin` when prompted.

**Production URL:** `https://buddha-chakravartin.vercel.app`

## Build & Lint

```bash
npm run build       # must pass with 0 errors
npm run lint        # check code style
```

## Project Structure

```
src/
├── app/
│   ├── page.tsx                    # Home (server)
│   ├── HomePageClient.tsx          # Home (client) — Stupa of Time widget, thesis, quick links
│   ├── layout.tsx                  # Root layout, dark class, Analytics
│   ├── LanguageProviderBlock.tsx   # Wraps Header + Footer + LanguageProvider
│   ├── episodes/                   # 55 episodes of Buddha series (2013)
│   ├── teachings/                  # Three turnings hub: vision, path, wheel
│   ├── teachings/vision/           # First turning — Four Noble Truths
│   ├── teachings/path/             # Second turning — Middle Way & Eightfold Path
│   ├── teachings/wheel/            # Third turning — Dharmachakra, glossary, video
│   ├── teachings/practice/         # Metta, breathing, anger reminder
│   ├── zen-martial/                # Bodhidharma, Water Margin, Shaolin films
│   ├── chakravartin/               # Emperor Ashoka series (442 episodes)
│   ├── chat/                       # AI chat with Buddha characters
│   ├── characters/                 # Character profiles
│   ├── gallery/                    # Buddhist art gallery
│   ├── quiz/                       # Buddhist quiz
│   ├── community/                  # Community page
│   ├── retreats/                   # Meditation retreats
│   ├── videos/                     # Video page
│   ├── about/                      # About project
│   ├── contact/                    # Contact form
│   ├── donate/                     # Support page
│   ├── auth/                       # Login/register
│   ├── profile/                    # User profile
│   ├── admin/translations/         # Translation management
│   └── api/chat/route.ts           # AI chat API endpoint
├── components/
│   ├── HeroSilkAtlas.tsx           # Canvas falling-text hero
│   ├── StupaWheel.tsx              # Stupa of Time SVG widget (4 gates, 3 tiers)
│   ├── DharmachakraVideo.tsx       # Video section with 18-language descriptions
│   ├── layout/Header.tsx           # Navigation (sticky, mobile menu)
│   ├── layout/Footer.tsx           # Footer with golden divider
│   ├── layout/LanguageSwitcher.tsx  # 18-language switcher
│   ├── BreathingPractice.tsx       # Breathing exercise with Aum
│   ├── MettaPlayer.tsx             # Metta audio player
│   ├── TeacherQuotes.tsx           # Decorative teacher quotes
│   └── ui/                         # Shared UI components
├── contexts/LanguageContext.tsx     # i18n React Context (18 languages)
├── lib/
│   ├── i18n.ts                     # All translations (18 locales)
│   ├── seo.ts                      # generatePageMetadata() helper
│   ├── utils.ts                    # cn() helper
│   └── supabase/                   # Supabase client + middleware
└── types/index.ts                  # Shared types
```

## Key Concepts

### Three Turnings of the Wheel (teachings hub)
1. **Видение** (`/teachings/vision`) — Four Noble Truths
2. **Путь** (`/teachings/path`) — Middle Way & Eightfold Path
3. **Вращение** (`/teachings/wheel`) — Dharmachakra, glossary, video

### Homepage Stupa of Time
- `StupaWheel.tsx` — SVG: 4 gates (East=Teaching, South=Practice, West=History, North=Sangha), 3 tiers (Future/Present/Past), center = Wheel of Dharma.

### i18n (18 Languages)
- Context: `useLanguage()` from `LanguageContext`
- Keys: `t.nav.*`, `t.home.*`, `t.zen.*`, `t.chakravartin.*`, etc.
- Cookie: `preferred_language` + localStorage
- Always add new keys to ALL 18 locales

### Design System: Light Parchment Theme (Актуально)

**Цветовая палитра:** Светлая, пергаментная, с тёплыми природными акцентами.
- **Background**: `#fbfaf9` / `hsl(36 45% 96%)` (кремовый пергамент)
- **Foreground**: `#292524` / `hsl(24 30% 12%)` (тёплый тёмно-коричневый текст)
- **Primary**: `#d97706` / `hsl(32 78% 38%)` (янтарно-коричневый / золотистый)
- **Card / пергамент**: `#fffaf0` / `hsl(38 50% 98%)` (класс `.golden-card` с текстурой `--parchment-paper`)
- **Muted**: `hsl(34 30% 92%)` (приглушённый фон)
- **Кольцо героя**: `.teacher-ring` — тройной shadow: пергаментный зазор (3px) + янтарное кольцо (5px) + мягкая тень
- **Кружок монограммы**: `.monogram-circle` — янтарный radial/linear градиент, белая буква
- **Тексты-заголовки**: `.text-golden-gradient` (янтарь/терракота градиент текста)
- Шрифты: Cormorant (заголовки, `--font-cormorant`) + Plus Jakarta Sans (основной, `--font-jakarta`)

Градиенты героев (персонализация карточек, намеренно цветные, НЕ тёплые):
- Чанакья/Ашока/Ясодхара/Сиамак: голубые/индиго/изумрудные (`from-indigo-950 via-blue-700 to-sky-400` и т.п.), у `buddhaSeriesCast` — `from-indigo-500/blue-, pink-, sky-, red-, purple-, emerald-`.
- Намеренно разноцветные — каждый герой со своей палитрой, сохранять.

Принципы:
1. Никаких резких тёмных фонов (кроме оверлеев модальных окон).
2. Градиенты мягкие, природные (amber, stone, rose, emerald), без кислотных цветов.
3. Аватары и монограммы — тёплый фон (`.monogram-circle`), тройное кольцо `.teacher-ring` / `.portrait-ring`.
4. При задачах на вёрстку UI автоматически применяй скилы: `agent-frontend-spa-ts`, `agent-visual-feedback`.
5. Анимации: `animate-fade-in`, `stagger-children`, `scroll-reveal`, `.quote-mark`; для задания дефолтной скорости используй токены/классы проекта, не переопределяй без необходимости.

### Video IDs
- Shorts: `P04rX4-1TNo`
- Full-screen: `P6Binwp6t0k`
- Playlist: `https://rutube.ru/plst/825387/`

## AI: Автоактивация скилов при работе

При задачах на вёрстку/UI/дизайн автоматически загружать и применять скилы:

- **`agent-frontend-spa-ts`** — любые правки компонентов, роутинга, клиентской логики (React/TS). Требует прогона `tsc --noEmit` + `eslint` перед завершением.
- **`agent-visual-feedback`** — проверка вёрстки через Playwright/скриншоты (окна, геометрия, computed-стили). Пользователь не читает код «в уме» — нужен живой рендер.
- **`agent-refactoring-policy`** — реорганизация кода без изменения поведения, мелкими проверяемыми шагами.
- **`agent-testing-baseline`** — подготовка/проверка тестов перед сдачей.

Триггеры для явного вызова: «сверстай», «переделай карточки», «поправь UI», «скриншот», «кружок/монограмма», «палитра», «дизайн», «вёрстка».
Дополнительные триггеры: «пергамент/parchment», «тёплый/warm/earthy», «янтарь/amber», «карточки героев/hero cards», «градиент/gradient», «портрет/portrait».

Правила применения:
- После любой UI-правки обязательно `npx tsc --noEmit` и `npx eslint <файл>`, затем живой скриншот (Playwright из `C:\Temp\opencode`, MCP-тулы недоступны вне папки проекта при текущем запуске).
- Дизайн-система сейчас **светлая пергаментная** (фон `#fbfaf9`, пергамент-золото, Cormorant + Jakarta), а НЕ тёмная. Не возвращать к тёмной теме без явного запроса.
- При работе с UI-компонентами (карточки, кнопки, модальные окна) всегда использовать светлую пергаментную тему с тёплыми коричневыми/янтарными тонами. Никаких тёмных фонов (кроме оверлеев модальных окон). Градиенты — природные, не кислотные. Аватары героев — в кружочках с тройным кольцом `.teacher-ring` (фон → первичный цвет → тень).

## Important Rules

- **Never commit `.env.local`** — it's in `.gitignore`
- **Always run `npm run build`** before committing to catch TypeScript errors
- **New pages** must be added to `src/lib/supabase/middleware.ts` PUBLIC_PAGES list
- **New pages** must have SEO entry in `src/lib/seo.ts`
- **Footer** renders inside `LanguageProviderBlock` only (not directly in layout.tsx)
- **All pages** use server component (page.tsx) + client component (PageClient.tsx) pattern for SEO metadata

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16.2.10 (Turbopack) |
| UI | React 19, Tailwind CSS v4 |
| Auth | Supabase (GitHub OAuth) |
| AI | Google Gemini 2.5 Flash |
| Deploy | Vercel (auto from GitHub) |
| Package | npm (Node 24+) |

## Contacts

- GitHub: `https://github.com/Serze8/buddha-wisdom-chat`
- Vercel: `https://buddha-chakravartin.vercel.app`
- Supabase project: `Serze8`
- Vercel team: `serze8`
