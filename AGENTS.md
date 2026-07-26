# AGENTS.md — Buddha's Wisdom Chat

## Project Overview

Next.js 16 + React 19 + Tailwind v4 Buddhist educational platform with AI chat.
Deployed on Vercel, auth via Supabase (GitHub OAuth), AI via Google Gemini.

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
Select project `buddha-wisdom-two` when prompted.

**Production URL:** `https://buddha-wisdom-teal.vercel.app`

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
│   ├── HomePageClient.tsx          # Home (client) — 3 blocks: Buddha, Dharma, Zen
│   ├── layout.tsx                  # Root layout, dark class, Analytics
│   ├── LanguageProviderBlock.tsx   # Wraps Header + Footer + LanguageProvider
│   ├── episodes/                   # 55 episodes of Buddha series (2013)
│   ├── teachings/                  # Dharmachakra, 8 teachings, Chakravartin link
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
│   ├── theses/                     # Buddhist theses
│   ├── about/                      # About project
│   ├── contact/                    # Contact form
│   ├── donate/                     # Support page
│   ├── auth/                       # Login/register
│   ├── profile/                    # User profile
│   ├── admin/translations/         # Translation management
│   └── api/chat/route.ts           # AI chat API endpoint
├── components/
│   ├── HeroSilkAtlas.tsx           # Canvas falling-text hero
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

### Three Paths (Homepage Blocks)
1. **Путь Будды** (`/episodes`) — Buddha series (2013, 55 episodes)
2. **Дхарма и Дхармачакра** (`/teachings`) — Dharmachakra, teachings, Chakravartin
3. **Возникновение Дзен** (`/zen-martial`) — Bodhidharma, martial arts, Shaolin

### i18n (18 Languages)
- Context: `useLanguage()` from `LanguageContext`
- Keys: `t.nav.*`, `t.home.*`, `t.zen.*`, `t.chakravartin.*`, etc.
- Cookie: `preferred_language` + localStorage
- Always add new keys to ALL 18 locales

### Golden Buddhist Dark Theme
- Body: `#0F0E0A` background, `#e8dcc8` text
- CSS class: `dark` on `<html>`
- Components: `.golden-card`, `.btn-glow`, `.quote-mark`, `.scroll-reveal`
- Animations: `animate-fade-in`, `stagger-children`

### Video IDs
- Shorts: `P04rX4-1TNo`
- Full-screen: `P6Binwp6t0k`
- Playlist: `https://rutube.ru/plst/825387/`

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
- Vercel: `https://buddha-wisdom-teal.vercel.app`
- Supabase project: `Serze8`
- Vercel team: `serze8`
