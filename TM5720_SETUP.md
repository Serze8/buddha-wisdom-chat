## 🪷 Buddha's Wisdom Chat — настройка на TravelMate 5720

Текущий ПК: **TravelMate 5720** (Windows). Проект уже склонирован и настроен
локально — повторно клонировать/устанавливать не нужно.

### 📍 Пути

| Что | Путь |
|-----|------|
| Проект | `D:\ProTotal\Soft\doc\OpenCodeProekts\BuddhaChat\buddha-wisdom` |
| Запуск бота/веба | из папки проекта (`buddha-wisdom`) |
| Файл ключей | `.env.local` (в корне проекта) |

### ✅ Что уже готово

- Node.js `20.18.1`, npm `10.8.2`
- `node_modules` установлены
- `.env.local` настроен:
  - `NEXT_PUBLIC_SUPABASE_URL` + `NEXT_PUBLIC_SUPABASE_ANON_KEY` (Supabase)
  - `GOOGLE_AI_API_KEY` — ключ OpenRouter (`sk-or-v1-...`)
  - `ANTHROPIC_API_KEY` + `ANTHROPIC_MODEL=claude-sonnet-4-5` (fallback)

### 1️⃣ Запуск

```bash
cd D:\ProTotal\Soft\doc\OpenCodeProekts\BuddhaChat\buddha-wisdom
npm run dev
```

Открой `http://localhost:3000`.

> Скрипт `dev` использует `next dev --webpack` (на TM 5720 это стабильнее).

### 2️⃣ Как работает чат

1. Сначала запрос идёт в **OpenRouter** (модель `openrouter/free`) —
   ключ берётся из `GOOGLE_AI_API_KEY`.
2. Если OpenRouter не отвечает — fallback на **Anthropic**
   (`claude-sonnet-4-5`), ключ из `ANTHROPIC_API_KEY`.
3. Нужна авторизация в Supabase — без входа в чат нельзя.

### 3️⃣ Проверка функций

| Функция | Где |
|---------|-----|
| Чат с Буддой | `/chat` — выбери персонажа, задай вопрос |
| Метта-аудио | `/teachings/practice` — нажми «Play Metta» |
| 18 языков | Флаг в хедере |
| Дыхание | `/teachings/practice` — блок «Резонансное дыхание» |

### 4️⃣ Если что-то не работает

| Проблема | Решение |
|----------|---------|
| `npm install` ошибка | `npm install --legacy-peer-deps` |
| Порт занят | `npm run dev -- -p 3001` |
| Чат не отвечает | Проверь `GOOGLE_AI_API_KEY` (OpenRouter) и `ANTHROPIC_API_KEY` в `.env.local` |
| Аудио не играет | F12 → Network — проверь загрузку MP3 |

### 5️⃣ Смена ключей

Ключи лежат в `.env.local` (в git не попадает — `.env*` в `.gitignore`).
Реальный ключ OpenRouter: `sk-or-v1-...` на сайте openrouter.ai → Keys.

### Ссылки:

| Ресурс | URL |
|--------|-----|
| Продакшен | `https://buddha-wisdom-two.vercel.app` |
| OpenRouter Keys | `https://openrouter.ai/settings/keys` |
