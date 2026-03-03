'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function SplashScreen() {
  const [particlesLoaded, setParticlesLoaded] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setParticlesLoaded(true)
    
    // Check if user is logged in
    const user = localStorage.getItem('user')
    if (user) {
      router.replace('/home')
    }
  }, [router])

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-br from-black via-background to-background/80 flex flex-col items-center justify-center overflow-hidden">
      {/* Animated background with floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary glow orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />

        {/* Floating particles */}
        {particlesLoaded && (
          <>
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-primary/40 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
          </>
        )}
      </div>

      {/* Content - Centered premium container */}
      <div className="relative z-10 w-full max-w-[380px] mx-auto px-6 text-center flex flex-col items-center justify-center">
        {/* Logo/Brand with glow */}
        <div className="space-y-3 animate-fade-in">
          <div className="inline-block relative">
            {/* Animated glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary/60 rounded-2xl blur-xl opacity-50 animate-pulse" />
            <div className="relative bg-gradient-to-br from-primary to-primary/60 glow-cyan p-4 rounded-2xl backdrop-blur-xl border border-primary/40">
              <img src="/logo.png" alt="ZORROW X" className="w-16 h-16 object-contain" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white">ZORROW X</h1>
          <p className="text-lg text-primary font-semibold tracking-widest">WEAR THE FUTURE</p>
        </div>

        {/* Tagline with style */}
        <div className="space-y-2 mt-6">
          <p className="text-base text-white/90 leading-relaxed font-light">
            The future of fashion discovery
          </p>
          <p className="text-sm text-primary/80">Instagram meets Luxury Fashion</p>
        </div>

        {/* Social-style CTA Buttons */}
        <div className="flex flex-col gap-3.5 mt-7 w-full max-w-[320px]">
          <button
            onClick={() => router.push('/home')}
            className="h-13 bg-gradient-to-r from-primary to-primary/80 text-background hover:from-primary/90 hover:to-primary/70 font-semibold transition-all duration-300 text-base rounded-full shadow-lg hover:shadow-xl glow-cyan flex items-center justify-center active:scale-95"
          >
            Continue as Guest
          </button>

          <Link href="/login" className="block">
            <Button
              variant="outline"
              className="w-full h-13 border-2 border-primary/50 text-primary hover:bg-primary/10 font-semibold transition-all duration-300 text-base rounded-full backdrop-blur-sm active:scale-95"
              size="lg"
            >
              Sign In
            </Button>
          </Link>

          <Link href="/signup" className="block">
            <Button
              className="w-full h-13 bg-white/10 text-white hover:bg-white/20 border border-white/20 font-semibold transition-all duration-300 text-base rounded-full backdrop-blur-sm active:scale-95"
              size="lg"
            >
              Create Account
            </Button>
          </Link>
        </div>

        {/* Browse collection link */}
        <button
          onClick={() => router.push('/home')}
          className="text-primary hover:text-primary/80 text-sm font-semibold transition-colors mt-6"
        >
          Explore Collection →
        </button>
      </div>

      {/* Footer tagline - absolute positioned at bottom */}
      <div className="absolute bottom-5 left-0 right-0 text-center px-6">
        <p className="text-white/50 text-xs tracking-wide">
          PREMIUM FASHION • FAST SHIPPING • AI POWERED
        </p>
      </div>

      {/* Add CSS for floating animation */}
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
        
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </div>
  )
}
