'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Loader2 } from 'lucide-react'

export default function AuthCallbackPage() {
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        router.push('/teachings/practice')
        router.refresh()
      }
    })
  }, [])

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
    </div>
  )
}
