# Buddha's Wisdom Chat

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

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
# fill in your keys in .env.local
npm run dev
```

Open http://localhost:3000

## Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key |
| `GOOGLE_AI_API_KEY` | Google AI (Gemini) API key |

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the [MIT License](LICENSE).

## Support

- [Boosty](https://boosty.to/serze8) — Donate
- [GitHub Issues](https://github.com/Serze8/buddha-wisdom-chat/issues) — Report bugs or request features
