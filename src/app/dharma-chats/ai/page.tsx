'use client'

import { useState } from 'react'
import CharacterGrid from '@/components/CharacterGrid'
import ChatPanel from './ChatPanel'

export default function DharmaChatAIPage() {
  const [selectedChar, setSelectedChar] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-[#ffffff]">
      <div className="max-w-5xl mx-auto px-4 pt-8 pb-12">
        {!selectedChar ? (
          <CharacterGrid onSelect={setSelectedChar} />
        ) : (
          <ChatPanel
            initialCharacterId={selectedChar}
            onBack={() => setSelectedChar(null)}
            fullPage
          />
        )}
      </div>
    </div>
  )
}
