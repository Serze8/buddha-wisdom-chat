import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <p className="text-6xl mb-4">🪷</p>
      <h1 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-100 mb-2">
        Page not found
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mb-6 max-w-md">
        This page does not exist or has been moved. Like impermanence itself, nothing stays forever.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-amber-600 hover:bg-amber-500 text-white font-medium transition-colors"
      >
        Return home
      </Link>
    </div>
  )
}
