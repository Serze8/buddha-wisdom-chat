'use client'

import { usePathname } from 'next/navigation'
import Header from '@/components/layout/Header'
import { MinimalHeader } from '@/components/MinimalHeader'

export function HeaderWrapper() {
  const pathname = usePathname()

  if (pathname === '/') {
    return <MinimalHeader />
  }

  return <Header />
}
