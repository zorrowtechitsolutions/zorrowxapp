'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function SplashScreen() {
  const router = useRouter()
  const [logoVisible, setLogoVisible] = useState(false)
  const [glowVisible, setGlowVisible] = useState(false)
  const [taglineVisible, setTaglineVisible] = useState(false)

  useEffect(() => {
    // Logo appears immediately
    setLogoVisible(true)

    // Glow appears immediately
    setGlowVisible(true)

    // Tagline appears immediately
    setTaglineVisible(true)

    // Navigate to entry screen after 2 seconds
    const navigationTimer = setTimeout(() => {
      router.replace('/entry')
    }, 2000)

    return () => {
      clearTimeout(navigationTimer)
    }
  }, [router])

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-background to-background/80 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Logo with animations */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo Container */}
        <div
          className={`relative transition-all duration-700 transform ${
            logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          {/* Animated glow effect */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-3xl blur-2xl opacity-0 transition-opacity duration-1000 ${
              glowVisible ? 'opacity-60' : ''
            }`}
          />

          {/* Logo box */}
          <div className="relative bg-gradient-to-br from-primary to-primary/60 glow-cyan p-6 rounded-3xl backdrop-blur-xl border border-primary/40">
            <img src="/logo.png" alt="ZORROW X" className="w-24 h-24 object-contain" />
          </div>
        </div>

        {/* Tagline */}
        <div
          className={`text-center transition-opacity duration-700 ${
            taglineVisible ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <h1 className="text-5xl font-bold text-white mb-2">ZORROW X</h1>
          <p className="text-xl text-primary font-semibold tracking-widest">WEAR THE FUTURE</p>
        </div>
      </div>

      {/* Add CSS animations */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  )
}
