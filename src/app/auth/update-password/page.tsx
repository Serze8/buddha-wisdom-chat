'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2, Eye, EyeOff } from 'lucide-react'

export default function UpdatePasswordPage() {
  const router = useRouter()
  const supabase = createClient()
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        router.push('/auth')
      }
    })
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.updateUser({ password })
      if (error) throw error
      setDone(true)
      setTimeout(() => router.push('/'), 2000)
    } catch (err: any) {
      setError(err.message || 'Ошибка')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-5xl">🪷</span>
          <h1 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-700 mt-4">
            {done ? 'Пароль изменён' : 'Новый пароль'}
          </h1>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-amber-200 dark:border-amber-800/30 p-8">
          {done ? (
            <div className="text-center text-gray-600 dark:text-gray-300">
              Пароль успешно изменён. Перенаправляем...
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Новый пароль
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-amber-600/60 dark:text-amber-500/40 focus:text-amber-700/80 dark:focus:text-amber-500/60 focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all pr-12"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-amber-800 text-white font-medium transition-colors flex items-center justify-center gap-2"
              >
                {loading && <Loader2 className="w-4 h-4 animate-spin" />}
                {loading ? 'Сохранение...' : 'Сохранить пароль'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
