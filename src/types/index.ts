export interface Profile {
  id: string
  display_name: string | null
  country: string | null
  preferred_language: string
  avatar_url: string | null
  role: 'user' | 'admin'
  created_at: string
}

export interface ChatMessage {
  id: string
  user_id: string
  character_id: string
  content: string
  role: 'user' | 'assistant'
  language: string
  created_at: string
}

export interface Translation {
  id: string
  user_id: string
  message_id: string
  target_language: string
  translated_content: string
  created_at: string
}

export interface CommunityPost {
  id: string
  user_id: string
  title: string
  content: string | null
  media_url: string | null
  media_type: 'youtube' | 'image' | 'link' | null
  created_at: string
}

export interface Retreat {
  id: string
  name: string
  location: string
  description: string | null
  start_date: string | null
  end_date: string | null
  url: string | null
  created_at: string
}

export type Locale = 'ru' | 'en' | 'hi' | 'es' | 'fr' | 'de' | 'zh' | 'ja'

export interface Character {
  id: string
  name: Record<Locale, string>
  systemPrompt: Record<Locale, string>
  suggestedQuestions: Record<Locale, string[]>
  avatar: string
  color: string
}
