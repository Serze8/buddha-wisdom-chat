'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/contexts/LanguageContext'
import { Feather, Mountain, BookOpen, Brain, Compass, Check, ArrowRight, ArrowLeft, X, Bell, Sparkles, Flower2 } from 'lucide-react'
import { cn } from '@/lib/utils'

const STORAGE_KEY = 'buddha_onboarded'
const INTERESTS_KEY = 'buddha_interests'

const interests = [
  { id: 'calm', key: 'interestCalm', icon: Feather },
  { id: 'difficult', key: 'interestDifficult', icon: Mountain },
  { id: 'learn', key: 'interestLearn', icon: BookOpen },
  { id: 'ideas', key: 'interestIdeas', icon: Brain },
  { id: 'explore', key: 'interestExplore', icon: Compass },
]

function urlBase64ToUint8Array(base64String: string) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const rawData = window.atob(base64)
  const outputArray = new Uint8Array(rawData.length)
  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i)
  }
  return outputArray
}

export default function Onboarding({ onDone }: { onDone?: () => void }) {
  const { t, locale } = useLanguage()
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  const [show, setShow] = useState(false)
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [leaving, setLeaving] = useState(false)
  const [pushState, setPushState] = useState<'idle' | 'busy' | 'enabled' | 'denied'>('idle')
  const busyRef = useRef(false)

  useEffect(() => {
    setMounted(true)
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setShow(true)
        document.body.style.overflow = 'hidden'
      }
    } catch {}
    return () => { document.body.style.overflow = '' }
  }, [])

  const toggle = (id: string) => {
    setSelected(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  const dismiss = () => {
    setLeaving(true)
    setTimeout(() => {
      setShow(false)
      document.body.style.overflow = ''
      onDone?.()
    }, 300)
  }

  const finish = (path?: string) => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
      if (selected.length) localStorage.setItem(INTERESTS_KEY, JSON.stringify(selected))
    } catch {}
    dismiss()
    if (path) setTimeout(() => router.push(path), 350)
  }

  const enableDailyQuotes = async () => {
    if (busyRef.current) return
    busyRef.current = true
    setPushState('busy')
    try {
      if (!('Notification' in window) || !('serviceWorker' in navigator)) {
        setPushState('denied')
        return
      }
      const permission = await Notification.requestPermission()
      if (permission !== 'granted') {
        setPushState('denied')
        return
      }
      const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY
      if (!publicKey) {
        setPushState('denied')
        return
      }
      const registration = await navigator.serviceWorker.ready
      const subscription = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      })
      try {
        await fetch('/api/push/subscribe', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            endpoint: subscription.endpoint,
            keys: subscription.toJSON().keys,
            locale,
          }),
        })
      } catch {}
      localStorage.setItem('buddha_quotes_enabled', '1')
      setPushState('enabled')
    } catch {
      setPushState('denied')
    } finally {
      busyRef.current = false
    }
  }

  if (!mounted || !show) return null

  const stepTitles = [t.onboarding.title, t.onboarding.dailyQuotesTitle, t.onboarding.understandTitle, t.onboarding.practiceTitle]

  return (
    <div className={cn(
      'fixed inset-0 z-[100] overflow-y-auto animate-fade-in',
      leaving && 'opacity-0 transition-opacity duration-300'
    )} style={{ background: 'radial-gradient(ellipse at 50% 0%, #1c1308 0%, #0F0E0A 60%)' }}>
      <div className="min-h-full flex flex-col items-center justify-center px-5 py-10">
        <div className="w-full max-w-md">
          {/* Progress dots */}
          <div className="flex items-center justify-center gap-2 mb-8">
            {[0, 1, 2, 3].map(i => (
              <button
                key={i}
                onClick={() => { if (i < step) setStep(i) }}
                className={cn('h-1.5 rounded-full transition-all duration-300', i <= step ? 'bg-amber-500 w-8' : 'bg-amber-800/40 w-4')}
              />
            ))}
          </div>

          {/* Back arrow for steps > 0 */}
          {step > 0 && (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-1 text-amber-200/40 hover:text-amber-200/70 text-sm mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
          )}

          {step === 0 && (
            <>
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                  <span className="text-3xl">🪷</span>
                </div>
                <h1 className="font-[var(--font-cormorant)] text-3xl md:text-4xl font-bold text-golden-gradient mb-3">
                  {t.onboarding.title}
                </h1>
                <p className="text-amber-200/50 leading-relaxed" style={{ fontFamily: 'var(--font-cormorant)' }}>
                  {t.onboarding.subtitle}
                </p>
              </div>

              <div className="space-y-3">
                {interests.map(({ id, key, icon: Icon }) => {
                  const active = selected.includes(id)
                  return (
                    <button
                      key={id}
                      onClick={() => toggle(id)}
                      className={cn('w-full flex items-center gap-4 p-4 rounded-2xl text-left transition-all active:scale-[0.98] golden-card', active && 'ring-1 ring-amber-400/60')}
                      style={active ? { background: 'rgba(245, 158, 11, 0.12)', boxShadow: '0 0 0 1px rgba(245, 158, 11, 0.4), 0 8px 30px rgba(245, 158, 11, 0.1)' } : undefined}
                    >
                      <span className="w-11 h-11 shrink-0 rounded-xl flex items-center justify-center" style={{ background: 'rgba(245, 158, 11, 0.08)', border: '1px solid rgba(245, 158, 11, 0.18)' }}>
                        <Icon className={cn('w-5 h-5 transition-colors', active ? 'text-amber-400' : 'text-amber-300/50')} />
                      </span>
                      <span className={cn('flex-1 text-base transition-colors', active ? 'text-amber-100' : 'text-amber-200/60')}>
                        {t.onboarding[key as keyof typeof t.onboarding]}
                      </span>
                      <span className={cn('w-6 h-6 shrink-0 rounded-full flex items-center justify-center transition-all', active ? 'bg-amber-500' : 'border border-amber-800/50')}>
                        {active && <Check className="w-4 h-4 text-white" />}
                      </span>
                    </button>
                  )
                })}
              </div>
            </>
          )}

          {step === 1 && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 mx-auto" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                <Bell className="w-7 h-7 text-amber-400" />
              </div>
              <h1 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient mb-3">
                {t.onboarding.dailyQuotesTitle}
              </h1>
              <p className="text-amber-200/50 leading-relaxed mb-6" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {t.onboarding.dailyQuotesSubtitle}
              </p>

              <button
                onClick={enableDailyQuotes}
                disabled={pushState === 'busy' || pushState === 'enabled'}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all active:scale-[0.98] disabled:opacity-60 btn-glow"
                style={{
                  background: 'linear-gradient(135deg, #b45309, #92400e)',
                  color: '#fde68a',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
                }}
              >
                {pushState === 'enabled' ? (
                  <><Check className="w-5 h-5" /> Enabled</>
                ) : (
                  <><Bell className="w-5 h-5" /> {t.onboarding.enableDailyQuotes}</>
                )}
              </button>

              <p className="text-amber-200/30 text-xs mt-3">
                {pushState === 'denied' ? 'Notifications are off — you can enable them later in your browser settings.' : ''}
              </p>

              <button
                onClick={() => setStep(2)}
                className="mt-6 flex items-center justify-center gap-2 text-amber-200/60 hover:text-amber-200 text-base transition-colors"
              >
                {t.onboarding.continue}
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {step === 2 && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 mx-auto" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                <Sparkles className="w-7 h-7 text-amber-400" />
              </div>
              <h1 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient mb-3">
                {t.onboarding.understandTitle}
              </h1>
              <p className="text-amber-200/50 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {t.onboarding.understandSubtitle}
              </p>
              <div className="golden-card rounded-2xl p-6 text-left mb-8">
                <span className="text-amber-500/60 text-xs tracking-widest uppercase font-medium">{t.onboarding.quoteOfDay}</span>
                <p className="font-[var(--font-cormorant)] text-xl text-amber-100/80 mt-2 leading-relaxed italic">
                  «Hatred does not cease by hatred, but only by love.»
                </p>
                <p className="text-amber-200/50 text-sm mt-3 leading-relaxed">
                  Anger feeds on anger. The only way to break the cycle is to respond with kindness.
                </p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5 mx-auto" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.25)' }}>
                <Flower2 className="w-7 h-7 text-amber-400" />
              </div>
              <h1 className="font-[var(--font-cormorant)] text-2xl md:text-3xl font-bold text-golden-gradient mb-3">
                {t.onboarding.practiceTitle}
              </h1>
              <p className="text-amber-200/50 leading-relaxed mb-8" style={{ fontFamily: 'var(--font-cormorant)' }}>
                {t.onboarding.practiceSubtitle}
              </p>

              <button
                onClick={() => finish('/teachings/practice')}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all active:scale-[0.98] btn-glow"
                style={{
                  background: 'linear-gradient(135deg, #b45309, #92400e)',
                  color: '#fde68a',
                  border: '1px solid rgba(245, 158, 11, 0.3)',
                  boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
                }}
              >
                {t.onboarding.begin}
                <ArrowRight className="w-5 h-5" />
              </button>

              <button onClick={() => finish('/')} className="mt-6 text-amber-200/40 hover:text-amber-200/70 transition-colors text-sm">
                {t.onboarding.skip}
              </button>
            </div>
          )}

          {/* Primary action for steps 0 and 2 */}
          {step === 0 && (
            <button
              onClick={() => setStep(1)}
              disabled={selected.length === 0}
              className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed btn-glow"
              style={{
                background: 'linear-gradient(135deg, #b45309, #92400e)',
                color: '#fde68a',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
              }}
            >
              {t.onboarding.next}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}
          {step === 2 && (
            <button
              onClick={() => setStep(3)}
              className="mt-8 w-full flex items-center justify-center gap-2 px-8 py-4 rounded-full font-medium text-lg transition-all active:scale-[0.98] btn-glow"
              style={{
                background: 'linear-gradient(135deg, #b45309, #92400e)',
                color: '#fde68a',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                boxShadow: '0 4px 30px rgba(245, 158, 11, 0.2), inset 0 1px 0 rgba(253, 230, 138, 0.2)',
              }}
            >
              {t.onboarding.next}
              <ArrowRight className="w-5 h-5" />
            </button>
          )}

          {step === 0 && (
            <button onClick={() => finish('/')} className="mt-4 w-full flex items-center justify-center gap-1 text-sm text-amber-200/40 hover:text-amber-200/70 transition-colors py-2">
              <X className="w-4 h-4" />
              {t.onboarding.skip}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
