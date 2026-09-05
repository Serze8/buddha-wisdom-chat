'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { useLanguage } from '@/contexts/LanguageContext'
import { Eye, EyeOff, Loader2, Mail, ArrowLeft } from 'lucide-react'

export default function AuthPage() {
  const { t } = useLanguage()
  const router = useRouter()
  const supabase = createClient()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const [showReset, setShowReset] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      } else {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: { display_name: displayName, language: localStorage.getItem('preferred_language') || 'en' },
          },
        })
        if (error) throw error
      }
      router.push('/')
      router.refresh()
    } catch (err: any) {
      setError(err.message || t.auth.error)
    } finally {
      setLoading(false)
    }
  }

  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/auth/update-password`,
      })
      if (error) throw error
      setResetSent(true)
    } catch (err: any) {
      setError(err.message || t.auth.error)
    } finally {
      setLoading(false)
    }
  }

  const handleOAuth = async (provider: string) => {
    setLoading(true)
    try {
      await supabase.auth.signInWithOAuth({
        provider: provider as any,
        options: { redirectTo: `${window.location.origin}/auth/callback` },
      })
    } catch (err: any) {
      setError(err.message || t.auth.error)
      setLoading(false)
    }
  }

  if (showReset) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <span className="text-5xl">🪷</span>
            <h1 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-700 mt-4">
              {resetSent ? 'Письмо отправлено' : 'Восстановление пароля'}
            </h1>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-amber-200 dark:border-amber-800/30 p-8 space-y-5">
            {resetSent ? (
              <div className="text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mx-auto">
                  <Mail className="w-8 h-8 text-amber-600" />
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Проверьте почту <strong className="text-amber-600 dark:text-amber-400">{email}</strong>.<br />
                  Мы отправили ссылку для сброса пароля.
                </p>
                <button
                  onClick={() => { setShowReset(false); setResetSent(false) }}
                  className="text-amber-700 dark:text-amber-400 hover:underline text-sm"
                >
                  Вернуться ко входу
                </button>
              </div>
            ) : (
              <form onSubmit={handleResetPassword} className="space-y-5">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Введите email, привязанный к аккаунту, и мы отправим ссылку для сброса пароля.
                </p>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                    {t.auth.email}
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-amber-500 dark:text-amber-600 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                    required
                  />
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
                  {loading ? 'Отправка...' : 'Отправить ссылку'}
                </button>

                <button
                  type="button"
                  onClick={() => { setShowReset(false); setError('') }}
                  className="w-full text-center text-sm text-gray-500 dark:text-gray-400 hover:text-amber-600 transition-colors flex items-center justify-center gap-1"
                >
                  <ArrowLeft className="w-3 h-3" /> Вернуться ко входу
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-5xl">🪷</span>
          <h1 className="font-[var(--font-cormorant)] text-3xl font-bold text-amber-900 dark:text-amber-700 mt-4">
            {isLogin ? t.auth.login : t.auth.register}
          </h1>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-amber-200 dark:border-amber-800/30 p-8 space-y-5">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                {t.auth.displayName}
              </label>
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-amber-800 dark:text-amber-500 font-medium focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
                required={!isLogin}
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              {t.auth.email}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-amber-500 dark:text-amber-600 font-semibold focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
              {t.auth.password}
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
            {isLogin && (
              <button
                type="button"
                onClick={() => { setShowReset(true); setError('') }}
                className="mt-1.5 text-xs text-gray-400 hover:text-amber-500 transition-colors"
              >
                Забыли пароль?
              </button>
            )}
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
            {loading ? (isLogin ? t.auth.loggingIn : t.auth.registering) : (isLogin ? t.auth.loginButton : t.auth.registerButton)}
          </button>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white dark:bg-gray-900 px-3 text-gray-400">или</span>
            </div>
          </div>

          <div className="space-y-3">
            <button
              type="button"
              onClick={() => handleOAuth('google')}
              disabled={loading}
              className="w-full py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              Google
            </button>

            <button
              type="button"
              onClick={() => handleOAuth('yandex')}
              disabled={loading}
              className="w-full py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#FC3F1D"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="14" fontWeight="bold" fontFamily="Arial">Я</text></svg>
              Яндекс
            </button>

            <button
              type="button"
              onClick={() => handleOAuth('mailru')}
              disabled={loading}
              className="w-full py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium text-sm transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24"><rect width="24" height="24" rx="4" fill="#005FF9"/><text x="12" y="16" textAnchor="middle" fill="white" fontSize="13" fontWeight="bold" fontFamily="Arial">Mail</text></svg>
              Mail.ru
            </button>
          </div>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400 pt-2">
            {isLogin ? t.auth.noAccount : t.auth.hasAccount}{' '}
            <button
              type="button"
              onClick={() => { setIsLogin(!isLogin); setError('') }}
              className="text-amber-700 dark:text-amber-400 font-medium hover:underline"
            >
              {isLogin ? t.auth.register : t.auth.login}
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
