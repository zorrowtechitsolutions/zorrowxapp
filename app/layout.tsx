import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

import './globals.css'
import { AIWidgetWrapper } from '@/components/features/ai-widget-wrapper'
import { ToastNotifications } from '@/components/features/toast-notifications'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ZORROW X - Premium Streetwear',
  description: 'Experience premium streetwear fashion with AI-powered personalization',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
        <ToastNotifications />
        <AIWidgetWrapper />
      </body>
    </html>
  )
}
