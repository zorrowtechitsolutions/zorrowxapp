'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ArrowLeft } from 'lucide-react'

export default function SignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        localStorage.setItem('user', JSON.stringify({ email, name: email.split('@')[0] }))
        router.push('/home')
      }
      setIsLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-background/80 flex flex-col p-4">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-2xl font-bold text-white">Sign In</h1>
      </div>

      {/* Form Card */}
      <div className="flex-1 flex items-center justify-center">
        <Card className="glass w-full max-w-md p-8 space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
            <p className="text-white/60">Sign in to your ZORROW X account</p>
          </div>

          <form onSubmit={handleSignIn} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <Input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Password</label>
              <Input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-primary text-background hover:bg-primary/90 font-semibold"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-transparent text-white/50">or continue with</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full border-white/20 text-white hover:bg-white/10"
          >
            Google
          </Button>

          <div className="text-center text-sm text-white/60">
            Don't have an account?{' '}
            <Link href="/sign-up" className="text-primary hover:text-primary/80 font-semibold">
              Sign Up
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
