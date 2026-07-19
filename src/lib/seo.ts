import type { Metadata } from 'next'

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://buddha-wisdom-two.vercel.app'

const pages: Record<string, { title: string; description: string; keywords: string[] }> = {
  '': {
    title: "Buddha's Wisdom Chat — AI Buddhist Wisdom",
    description: 'Explore Buddhist teachings through AI-powered conversations. Chat with Buddha, learn the Four Noble Truths, and discover the path to enlightenment.',
    keywords: ['buddha', 'buddhism', 'meditation', 'dhamma', 'vipassana', 'wisdom', 'AI chat', 'buddhist teachings'],
  },
  about: {
    title: 'About — Buddha\'s Wisdom Chat',
    description: 'Learn about our mission to preserve and share the wisdom of the Buddha through modern technology and AI.',
    keywords: ['about buddha wisdom', 'buddhist project', 'AI dhamma'],
  },
  chat: {
    title: 'Chat with Buddha — AI Dhamma Advisor',
    description: 'Have a conversation with Buddha through AI. Ask questions about meditation, the Four Noble Truths, karma, and the path to enlightenment.',
    keywords: ['chat with buddha', 'AI buddhist advisor', 'dhamma chat', 'meditation guidance'],
  },
  characters: {
    title: 'Characters — Buddha TV Series',
    description: 'Meet the characters from the Buddha TV series: Siddhartha Gautama, Yashodhara, Devadatta, and others.',
    keywords: ['buddha tv series', 'sidharth kumar', 'characters', 'indian series'],
  },
  episodes: {
    title: 'Episodes — Buddha TV Series',
    description: 'Full episode guide for the Buddha TV series. Follow Prince Siddhartha\'s journey from palace to enlightenment.',
    keywords: ['buddha episodes', 'tv series guide', 'sidharth kumar episodes'],
  },
  teachings: {
    title: 'Buddhist Teachings — Dhamma',
    description: 'Core Buddhist teachings: Four Noble Truths, Noble Eightfold Path, Anattā, Karma, and Nirvana explained.',
    keywords: ['buddhist teachings', 'four noble truths', 'eightfold path', 'dhamma', 'anatman', 'karma', 'nirvana'],
  },
  theses: {
    title: 'Key Theses — Buddhist Philosophy',
    description: 'Fundamental theses of Buddhism: impermanence, suffering, non-self, dependent origination, and the Middle Way.',
    keywords: ['buddhist philosophy', 'three marks', 'impermanence', 'dependent origination'],
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
      siteName: "Buddha's Wisdom Chat",
      type: 'website',
      locale: 'en_US',
      alternateLocale: ['ru_RU', 'hi_IN', 'es_ES', 'fr_FR', 'de_DE', 'zh_CN', 'ja_JP'],
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
