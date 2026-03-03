'use client'

import { usePathname } from 'next/navigation'
import { FloatingAIWidget } from './floating-ai-widget'

export function AIWidgetWrapper() {
  const pathname = usePathname()

  // Hide AI on public pages (splash, entry, login, signup)
  const isPublicPage =
    pathname === '/' ||
    pathname === '/splash' ||
    pathname === '/entry' ||
    pathname === '/login' ||
    pathname === '/signup'

  if (isPublicPage) {
    return null
  }

  return <FloatingAIWidget />
}
