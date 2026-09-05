import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-chakravartin.vercel.app'

const pages: Record<string, { title: string; description: string; keywords: string[] }> = {
  '': {
    title: 'Buddha-Chakravartin Chat — Three Times of Dharma',
    description: 'Buddha • Chakravartin • Dharma • Maitreya — three times of one Dharmachakra. Explore Buddhist teachings through AI-powered conversations.',
    keywords: ['buddha', 'chakravartin', 'dharma', 'maitreya', 'buddhism', 'meditation', 'dhamma', 'AI chat', 'buddhist teachings'],
  },
  about: {
    title: 'About — Buddha-Chakravartin Chat',
    description: 'Learn about our mission to preserve and share the wisdom of the Buddha through modern technology and AI.',
    keywords: ['about buddha wisdom', 'buddhist project', 'AI dhamma'],
  },
  past: {
    title: 'Прошлое — Будда и Чакравартин | Past',
    description: 'Siddhartha Gautama and Ashoka Chakravartin — the historical roots of the Dharma. Two paths, one Dharmachakra.',
    keywords: ['buddha', 'ashoka', 'chakravartin', 'history', 'siddhartha', 'past'],
  },
  now: {
    title: 'Настоящее — Практика и Сангха | Now',
    description: 'Bodhidharma, meditation practice, and the living Sangha. The Dharma turns here and now.',
    keywords: ['bodhidharma', 'zen', 'practice', 'meditation', 'sangha', 'now'],
  },
  future: {
    title: 'Будущее — Майтрея | Future',
    description: 'Maitreya — the Buddha of the future. The promise that the Dharma will return when the world is ready.',
    keywords: ['maitreya', 'future buddha', 'bodhisattva', 'golden age', 'future'],
  },
  chat: {
    title: 'Chat with Buddha — AI Dhamma Advisor',
    description: 'Have a conversation with Buddha through AI. Ask questions about meditation, the Four Noble Truths, karma, and the path to enlightenment.',
    keywords: ['chat with buddha', 'AI buddhist advisor', 'dhamma chat', 'meditation guidance'],
  },
  characters: {
    title: 'Герои из сериала Будда 2013 — Heroes from Buddha TV Series',
    description: 'Meet the characters from the Buddha 2013 TV series: Siddhartha Gautama, Yashodhara, Ananda, Devadatta, and others. Chat with each character via AI.',
    keywords: ['buddha tv series 2013', 'characters', 'siddhartha', 'yashodhara', 'ananda', 'devadatta', 'indian series'],
  },
  episodes: {
    title: 'Сериал «Будда» (55) — TV Series "Buddha" Episodes Guide',
    description: 'All 55 episodes of the Buddha TV series (2013, India). Episode guide, synopsis, highlights, and links to watch on RuTube. Starring: Kabir Bedi, Sameer Dharmadhikari, Kajal Jain, and more.',
    keywords: ['buddha tv series', 'buddha episodes', '55 episodes', 'indian series', 'zee tv', 'buddha 2013', 'episode guide', 'cast'],
  },
  teachings: {
    title: 'Three Turnings of the Wheel of Dharma — Buddha\'s Teachings',
    description: 'The Dharma was turned three times: Vision, Path, and Wheel. Explore the Four Noble Truths, the Eightfold Path, and the Dharmachakra through the stories of the Buddha and Ashoka.',
    keywords: ['buddhist teachings', 'three turnings of the wheel', 'dharmachakra', 'four noble truths', 'eightfold path', 'dhamma', 'karma', 'nirvana', 'chakravartin'],
  },
  'teachings/vision': {
    title: 'The First Turning: Vision — Four Noble Truths',
    description: 'Siddhartha saw old age, sickness, and death — and understood that power cannot save. The Four Noble Truths as a diagnosis and a cure. The three marks of existence: anicca, dukkha, anatta.',
    keywords: ['first turning', 'four noble truths', 'vision', 'dukkha', 'benares', 'three marks', 'anatman', 'impermanence'],
  },
  'teachings/path': {
    title: 'The Second Turning: The Path — Middle Way & Eightfold Path',
    description: 'Ashoka did not renounce the world — he changed it, walking the same path. The Middle Way, the Noble Eightfold Path, and how a monk and a Chakravartin walk it together.',
    keywords: ['second turning', 'eightfold path', 'middle way', 'right view', 'ashoka', 'practice', 'buddhist path'],
  },
  'teachings/wheel': {
    title: 'The Third Turning: The Wheel — Dharmachakra & Sangha',
    description: 'The Dharmachakra is not a symbol — it is an invitation. The three turnings in tradition, the wheel with eight spokes, and the community that turns it today.',
    keywords: ['third turning', 'dharmachakra', 'wheel of dharma', 'sangha', 'glossary', 'buddhist symbols', 'community'],
  },
  gallery: {
    title: 'Gallery — Buddhist Art & Sacred Places',
    description: 'Sacred Buddhist art: Bodhi Tree, stupas, meditation scenes, Dharma Wheel, and holy sites.',
    keywords: ['buddhist art', 'sacred images', 'bodhi tree', 'stupa', 'dharma wheel'],
  },
  quiz: {
    title: 'Buddhist Quiz — Which Path is Yours?',
    description: 'Take our Buddhist quiz to discover which teaching resonates with your personality and spiritual journey.',
    keywords: ['buddhist quiz', 'spiritual test', 'which buddhist path'],
  },
  videos: {
    title: 'Videos — Buddha Series & Meditation',
    description: 'Watch episodes of the Buddha series and guided meditation videos from our community.',
    keywords: ['buddha series video', 'meditation videos', 'dhamma talks'],
  },
  retreats: {
    title: 'Meditation Retreats — Centers Worldwide',
    description: 'Discover Vipassana and meditation retreat centers around the world: India, France, USA, Thailand, Nepal.',
    keywords: ['meditation retreat', 'vipassana center', 'dhamma giri', 'plum village', 'ims'],
  },
  community: {
    title: 'Community — Buddhist Sangha',
    description: 'Join our Buddhist community. Share stories, discuss teachings, and connect with fellow practitioners.',
    keywords: ['buddhist community', 'sangha', 'dhamma discussion'],
  },
  donate: {
    title: 'Support Us — Buddha\'s Wisdom Chat',
    description: 'Support the preservation of Buddhist wisdom. Every contribution helps us improve and expand the project.',
    keywords: ['donate buddhism', 'support dhamma', 'buddhist project donation'],
  },
  contact: {
    title: 'Contact — Buddha\'s Wisdom Chat',
    description: 'Get in touch with the Buddha\'s Wisdom Chat team. Questions, suggestions, and collaboration.',
    keywords: ['contact', 'feedback', 'support'],
  },
  'teachings/practice': {
    title: 'The Body of the Path — Practice',
    description: 'Practice is not a preparation for the path — it is the path itself. Breathing, meditation, working with anger, and developing compassion through mettā practice.',
    keywords: ['buddhist practice', 'meditation guide', 'loving-kindness', 'metta', 'breathing', 'mindfulness'],
  },
  'zen-martial': {
    title: 'Chan & Zen — Bodhidharma, Dharmachakra, Shaolin',
    description: 'The story of Bodhidharma (Daruma) who received the name Dharma from Prajñātāra in India. Dharmachakra symbol, Shaolin films, and martial arts as spiritual practice.',
    keywords: ['zen buddhism', 'chan buddhism', 'bodhidharma', 'daruma', 'dharmachakra', 'shaolin', 'martial arts', 'prajñatāra'],
  },
  'martial-arts-films': {
    title: 'Martial Arts Films — Buddhist Cinema & Philosophy',
    description: 'A curated collection of martial arts films where fighting techniques intertwine with spiritual practices and Buddhist philosophy.',
    keywords: ['martial arts films', 'kung fu movies', 'shaolin', 'buddhist cinema', 'wuxia', 'action films'],
  },
  'community-chat': {
    title: 'Community Chat — Buddha\'s Wisdom Chat',
    description: 'Chat with AI characters from the Buddha TV series and connect with the Buddhist community. Ask questions, share insights, and discuss teachings.',
    keywords: ['community chat', 'buddhist community', 'AI chat buddha', 'sangha', 'dhamma discussion'],
  },
  'dharma-chats': {
    title: 'Wisdom Dharma Chats — Conversations on Wisdom and Dharma',
    description: 'Chat with AI characters, join the sangha, and explore the archive of Dharma talks and interviews.',
    keywords: ['dharma chats', 'buddhist community', 'AI chat buddha', 'sangha', 'dhamma discussion', 'wisdom publications'],
  },
  'dharma-chats/ai': {
    title: 'Chat with Buddha — AI Dhamma Advisor',
    description: 'Have a conversation with Buddha, Ashoka, Chanakya, and other characters through AI. Ask questions about meditation, the Four Noble Truths, karma, and the path to enlightenment.',
    keywords: ['chat with buddha', 'AI buddhist advisor', 'dhamma chat', 'meditation guidance', 'ashoka', 'chanakya'],
  },
  'dharma-chats/sangha': {
    title: 'The Sangha — Community Chat',
    description: 'Join the Buddhist sangha. Share stories, discuss teachings, and connect with fellow practitioners.',
    keywords: ['sangha', 'buddhist community', 'community chat', 'dhamma discussion'],
  },
  'dharma-chats/talks': {
    title: 'Dharma Talk Archive — Wisdom Dharma Chats',
    description: 'Archive of Dharma talks, lectures, and interviews on Buddhist wisdom.',
    keywords: ['dharma talks', 'buddhist lectures', 'wisdom publications', 'bhikkhu bodhi', 'interviews'],
  },
  'dharma-chats/talks/bhikkhu-bodhi-noble-truths': {
    title: 'Interview with Bhikkhu Bodhi — Noble Truths, Noble Paths | Wisdom Dharma Chats',
    description: 'Bhikkhu Bodhi on the structure of the Pali Canon, the nature of Nirvana, dependent origination, and the path to liberation.',
    keywords: ['bhikkhu bodhi', 'noble truths', 'noble paths', 'pari Canon', 'nirvana', 'dependent origination', 'wisdom publications'],
  },
  'buddha': {
    title: 'Siddhartha Gautama — Why the Buddha Did Not Become a Chakravartin',
    description: 'He could have ruled the world. He chose to liberate it. The story of renunciation, enlightenment, and the first turning of the Wheel of Dharma.',
    keywords: ['buddha', 'siddhartha gautama', 'renunciation', 'enlightenment', 'first turning of the wheel', 'four noble truths', 'chakravartin'],
  },
  'chakravartin': {
    title: 'Ashoka the Great — The Chakravartin Who Chose the Dharma',
    description: 'He conquered with the sword. He ruled with the Dharma. The story of Emperor Ashoka, the Battle of Kalinga, his edicts, and the spread of Buddhism.',
    keywords: ['chakravartin', 'emperor ashoka', 'ashoka', 'kalinga', 'dharma', 'maurya empire', 'ashoka edicts', 'buddhist history'],
  },
  'chakravartin/series': {
    title: 'Chakravartin — Emperor Ashoka (Chinese Drama)',
    description: 'The 442-episode Chinese historical drama about Emperor Ashoka who united India under the Dharma and spread Buddhist teachings across Asia.',
    keywords: ['chakravartin', 'emperor ashoka', 'ashoka', 'buddhist history', 'dharma', 'maurya empire', 'chinese drama'],
  },
  'alliances': {
    title: 'Три союза Дхармы — Будда-Чакравартин',
    description: 'Альянсы героев: Чанакья, Биндусара, Ашока и их союзники — четыре сердца Дхармы, хранители и юность. Три союза: Биндусара + Чанакья, Чанакья + Ашока, Биндусара · Ашока · Радогупта.',
    keywords: ['chakravartin', 'ashoka', 'chanakya', 'bindusara', 'subhadrangi', 'radhagupta', 'siamak', 'akromak', 'dharma', 'alliances'],
  },
  'auth/update-password': {
    title: 'Update Password — Buddha\'s Wisdom Chat',
    description: 'Set a new password for your account.',
    keywords: ['password reset', 'update password'],
  },
  'articles/audio-intuitionist': {
    title: 'Audioinductionist — Buddha\'s Wisdom Chat',
    description: 'An article exploring the concept of audioinductionism through the lens of Buddhist practice: listening as practice, dreams as guidance, and dawn as enlightenment.',
    keywords: ['audioinductionist', 'induction', 'buddhist practice', 'listening', 'dream interpretation', 'dawn', 'enlightenment'],
  },
}

export function generatePageMetadata(path: string): Metadata {
  const slug = path.replace(/^\//, '')
  const page = pages[slug] || pages['']
  const url = `${baseUrl}${path}`

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url,
      siteName: 'Buddha-Chakravartin Chat',
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['ru_RU', 'hi_IN', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP', 'pt_PT', 'th_TH', 'vi_VN', 'ko_KR', 'id_ID', 'ms_MY', 'si_LK', 'my_MM', 'ne_NP', 'bo_CN'],
      images: [
        {
          url: `${baseUrl}/og?title=${encodeURIComponent(page.title)}&subtitle=${encodeURIComponent('Buddha\'s Wisdom Chat')}`,
          width: 1200,
          height: 630,
          alt: page.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: page.title,
      description: page.description,
      images: [`${baseUrl}/og?title=${encodeURIComponent(page.title)}&subtitle=${encodeURIComponent('Buddha\'s Wisdom Chat')}`],
    },
  }
}
