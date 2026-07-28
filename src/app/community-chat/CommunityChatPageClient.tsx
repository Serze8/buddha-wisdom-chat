'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import ChatPanel from './ChatPanel'
import CommunityPanel from './CommunityPanel'

export default function CommunityChatPageClient() {
  const { t, locale } = useLanguage()
  const [tab, setTab] = useState<'chat' | 'community'>('chat')

  return (
    <div className="min-h-screen bg-[#0F0E0A]">
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-12">
        <h1 className="font-[var(--font-cormorant)] text-4xl font-bold text-amber-100 text-center mb-8">
          {t.nav.communityChat}
        </h1>

        <div className="flex justify-center gap-2 mb-8">
          <button
            onClick={() => setTab('chat')}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              tab === 'chat'
                ? 'bg-amber-700 text-white shadow-lg'
                : 'bg-amber-900/30 text-amber-200/80 hover:bg-amber-800/40'
            }`}
          >
            {t.communityChat.chatTab}
          </button>
          <button
            onClick={() => setTab('community')}
            className={`px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              tab === 'community'
                ? 'bg-amber-700 text-white shadow-lg'
                : 'bg-amber-900/30 text-amber-200/80 hover:bg-amber-800/40'
            }`}
          >
            {t.communityChat.communityTab}
          </button>
        </div>

        {tab === 'chat' ? <ChatPanel /> : <CommunityPanel />}
      </div>
    </div>
  )
}
