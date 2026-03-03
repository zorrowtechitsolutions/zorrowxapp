'use client'

import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export function AIStylistButton() {
  return (
    <Link href="/ai-chat">
      <button className="fixed bottom-24 right-6 z-40 flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 hover:from-primary/90 hover:to-primary/50 text-background shadow-2xl transition-all duration-300 hover:scale-110 glow-cyan">
        <Sparkles className="w-7 h-7" />
      </button>
    </Link>
  )
}
