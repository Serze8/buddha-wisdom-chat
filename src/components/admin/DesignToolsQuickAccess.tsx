'use client'

import Link from 'next/link'
import { ExternalLink } from 'lucide-react'

const tools = [
  { id: 'recraft', emoji: '🎨', name: 'Recraft', url: 'https://www.recraft.ai' },
  { id: 'vectorizer', emoji: '🔀', name: 'Vectorizer', url: 'https://vectorizer.ai' },
  { id: 'ideogram', emoji: '🖼️', name: 'Ideogram', url: 'https://ideogram.ai' },
  { id: 'pixlr', emoji: '✏️', name: 'Pixlr', url: 'https://pixlr.com' },
  { id: 'firefly', emoji: '🔥', name: 'Firefly', url: 'https://firefly.adobe.com' },
]

export default function DesignToolsQuickAccess() {
  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 p-4">
      <h2 className="mb-3 font-semibold text-gray-800 dark:text-gray-200">
        Design tools
      </h2>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool) => (
          <a
            key={tool.id}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            title={tool.url}
            className="inline-flex items-center gap-1.5 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 px-3 py-1.5 text-xs font-medium text-gray-600 dark:text-gray-300 hover:border-amber-400 dark:hover:border-amber-500 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
          >
            <span>{tool.emoji}</span>
            {tool.name}
            <ExternalLink className="w-3 h-3 opacity-50" />
          </a>
        ))}
      </div>
      <Link
        href="/design-tools"
        className="mt-3 inline-block text-xs text-gray-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
      >
        Open catalog page →
      </Link>
    </div>
  )
}
