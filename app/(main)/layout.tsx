'use client'

import { TopHeader } from '@/components/layout/top-header'
import { BottomNavigation } from '@/components/layout/bottom-navigation'
import { SwipeNavigation } from '@/components/features/swipe-navigation'

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <TopHeader />
      <SwipeNavigation>
        {children}
      </SwipeNavigation>
      <div className="h-20" />
      <BottomNavigation />
    </div>
  )
}
