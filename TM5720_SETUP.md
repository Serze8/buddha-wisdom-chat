## 🪷 Как запустить Buddha's Wisdom Chat на TravelMate 5720

### 1️⃣ Подготовка системы

- **Node.js 20.x+** — скачай с [nodejs.org](https://nodejs.org/)
- **Git** — скачай с [git-scm.com](https://git-scm.com/)
- Убедись, что порт 3000 свободен

### 2️⃣ Клонирование и установка

```bash
git clone https://github.com/Serze8/buddha-wisdom-chat.git
cd buddha-wisdom-chat
npm install
```

> На TM 5720 с 2-3 ГБ ОЗУ установка может занять 5-10 минут.

### 3️⃣ Создай `.env.local` в корне проекта

```env
NEXT_PUBLIC_SUPABASE_URL=https://kefxzykpvejbmjznljkq.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sb_publishable_CliwiZL0JL9NhN9-ueOuRw_m63ktyZh
GOOGLE_AI_API_KEY=YOUR_KEY_HERE
```

### 4️⃣ Запуск

```bash
npm run dev
```

Открой `http://localhost:3000` — всё работает.

---

### Проверка функций:

| Функция | Где |
|---------|-----|
| Чат с Буддой | `/chat` — выбери персонажа, задай вопрос |
| Метта-аудио | `/teachings/practice` — нажми «Play Metta» |
| 18 языков | Флаг в хедере |
| Дыхание | `/teachings/practice` — блок «Резонансное дыхание» |

### Если что-то не работает:

| Проблема | Решение |
|----------|---------|
| `npm install` ошибка | `npm install --legacy-peer-deps` |
| Порт занят | `npm run dev -- -p 3001` |
| Чат не отвечает | Проверь `GOOGLE_AI_API_KEY` в `.env.local` |
| Аудио не играет | F12 → Network — проверь загрузку MP3 |

### Ссылки:

| Ресурс | URL |
|--------|-----|
| Репозиторий | `https://github.com/Serze8/buddha-wisdom-chat` |
| Продакшен | `https://buddha-wisdom-two.vercel.app` |
