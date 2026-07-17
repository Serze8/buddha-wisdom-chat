'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { createClient } from '@/lib/supabase/client'
import { Send, Loader2, Heart, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import PromoBanner from '@/components/ui/PromoBanner'

interface Post {
  id: string
  user_id: string
  title: string
  content: string | null
  media_url: string | null
  media_type: string | null
  created_at: string
  profiles?: { display_name: string | null } | null
}

export default function CommunityPage() {
  const { t, locale } = useLanguage()
  const [posts, setPosts] = useState<Post[]>([])
  const [newTitle, setNewTitle] = useState('')
  const [newContent, setNewContent] = useState('')
  const [newMediaUrl, setNewMediaUrl] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [userId, setUserId] = useState<string | null>(null)
  const supabase = createClient()
  const postsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUserId(data.user?.id ?? null))

    const fetchPosts = async () => {
      const { data } = await supabase
        .from('community_posts')
        .select('*, profiles(display_name)')
        .order('created_at', { ascending: false })
        .limit(50)
      if (data) setPosts(data as any[])
      setLoading(false)
    }
    fetchPosts()

    const channel = supabase
      .channel('community')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'community_posts' }, async (payload) => {
        const { data } = await supabase
          .from('community_posts')
          .select('*, profiles(display_name)')
          .eq('id', payload.new.id)
          .single()
        if (data) setPosts(prev => [data as any, ...prev])
      })
      .subscribe()

    return () => { supabase.removeChannel(channel) }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle.trim() || !userId) return
    setSubmitting(true)

    await supabase.from('community_posts').insert({
      user_id: userId,
      title: newTitle,
      content: newContent || null,
      media_url: newMediaUrl || null,
      media_type: newMediaUrl ? 'link' : null,
    })

    setNewTitle('')
    setNewContent('')
    setNewMediaUrl('')
    setSubmitting(false)
  }

  const formatDate = (dateStr: string) => {
    return new Date(dateStr).toLocaleDateString(locale, { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' } as any)
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-900 dark:text-amber-100 text-center mb-10">
        {t.nav.community}
      </h1>

      {/* New Post Form */}
      {userId && (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6 mb-8 space-y-4">
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            placeholder={locale === 'ru' ? 'Заголовок поста...' : 'Post title...'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
            required
          />
          <textarea
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            placeholder={locale === 'ru' ? 'Расскажите что-нибудь...' : 'Share something...'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none"
            rows={3}
          />
          <input
            type="url"
            value={newMediaUrl}
            onChange={(e) => setNewMediaUrl(e.target.value)}
            placeholder={locale === 'ru' ? 'Ссылка на видео/изображение (необязательно)' : 'Video/image link (optional)'}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
          />
          <button
            type="submit"
            disabled={submitting || !newTitle.trim()}
            className="px-6 py-2.5 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-amber-800 text-white font-medium transition-colors flex items-center gap-2"
          >
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />}
            {locale === 'ru' ? 'Опубликовать' : 'Publish'}
          </button>
        </form>
      )}

      {/* Posts Feed */}
      <div ref={postsRef} className="space-y-4">
        {loading && (
          <div className="text-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-amber-600 mx-auto" />
          </div>
        )}

        {!loading && posts.length === 0 && (
          <div className="text-center py-12 bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700">
            <MessageCircle className="w-12 h-12 text-amber-300 mx-auto mb-4" />
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {locale === 'ru' ? 'Пока нет сообщений.' : 'No posts yet.'}
            </p>
            <Link
              href="/auth"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-amber-700 hover:bg-amber-600 text-white font-medium text-sm transition-colors"
            >
              {locale === 'ru' ? 'Будьте первым! Зарегистрируйтесь' : 'Be the first! Sign up'}
            </Link>
          </div>
        )}

        {posts.map((post) => (
          <div key={post.id} className="bg-white dark:bg-gray-900 rounded-2xl shadow border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-amber-700 dark:text-amber-200 font-bold">
                {(post as any).profiles?.display_name?.[0]?.toUpperCase() || '?'}
              </div>
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 text-sm">
                  {(post as any).profiles?.display_name || 'Anonymous'}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{formatDate(post.created_at)}</p>
              </div>
            </div>
            <h3 className="font-bold text-gray-900 dark:text-gray-100 mb-2">{post.title}</h3>
            {post.content && <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{post.content}</p>}
            {post.media_url && (
              <a href={post.media_url} target="_blank" rel="noopener noreferrer" className="text-amber-600 dark:text-amber-400 hover:underline text-sm">
                🔗 {post.media_url}
              </a>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10">
        <PromoBanner page="community" />
      </div>
    </div>
  )
}