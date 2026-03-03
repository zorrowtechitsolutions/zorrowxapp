'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ArrowLeft } from 'lucide-react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    // Basic validation
    if (!email || !password) {
      setError('Please fill in all fields')
      setIsLoading(false)
      return
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email')
      setIsLoading(false)
      return
    }

    // Simulate login (in real app, this would call an API)
    setTimeout(() => {
      try {
        // Store user info in localStorage
        const userData = {
          email,
          name: email.split('@')[0],
        }
        localStorage.setItem('user', JSON.stringify(userData))
        
        // Redirect to home
        router.push('/home')
      } catch (err) {
        setError('Login failed. Please try again.')
        setIsLoading(false)
      }
    }, 500)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-black via-background to-background/80 flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md space-y-6">
        {/* Header */}
        <div className="space-y-2">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors text-sm font-semibold mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <h1 className="text-4xl font-bold text-white">Welcome Back</h1>
          <p className="text-white/60">Sign in to your ZORROW X account</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="space-y-2">
            <label className="text-white text-sm font-semibold">Email Address</label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 bg-white/5 border-primary/30 text-white placeholder:text-white/40 rounded-lg"
              disabled={isLoading}
            />
          </div>

          <div className="space-y-2">
            <label className="text-white text-sm font-semibold">Password</label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-12 bg-white/5 border-primary/30 text-white placeholder:text-white/40 rounded-lg"
              disabled={isLoading}
            />
          </div>

          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-12 bg-gradient-to-r from-primary to-primary/80 text-background hover:from-primary/90 hover:to-primary/70 font-bold rounded-lg mt-6"
          >
            {isLoading ? 'Signing in...' : 'Sign In'}
          </Button>
        </form>

        {/* Sign up link */}
        <div className="text-center space-y-3">
          <p className="text-white/60 text-sm">
            Don't have an account?{' '}
            <Link href="/signup" className="text-primary hover:text-primary/80 font-semibold transition-colors">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
