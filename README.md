# Buddha's Wisdom Chat

AI-powered chat platform for exploring Buddhist wisdom through conversations with historical Buddhist characters.

## Features

- **Character Chat** — Talk with Buddha, Dalai Lama, Thich Nhat Hanh, Nagarjuna and other Buddhist figures
- **8 Languages** — RU, EN, HI, ES, FR, DE, ZH, JA
- **Voice I/O** — Speech-to-text and text-to-speech
- **Community** — Share posts, YouTube videos, images and links
- **Retreats** — Find Vipassana centers worldwide
- **Quiz** — Test your Buddhist knowledge
- **AI Translations** — Translate chat messages on the fly

## Tech Stack

- Next.js 16 + React 19
- Tailwind CSS v4
- Supabase (Auth + PostgreSQL)
- Google AI (Gemini)
- Vercel (deployment)

## Getting Started

```bash
git clone https://github.com/Serze8/buddha-wisdom-chat.git
cd buddha-wisdom-chat
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
GOOGLE_AI_API_KEY=your_google_ai_key
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Serze8/buddha-wisdom-chat)

## Support

- [Boosty](https://boosty.to/serze8) — Donate
- [GitHub Issues](https://github.com/Serze8/buddha-wisdom-chat/issues)

## License

MIT
