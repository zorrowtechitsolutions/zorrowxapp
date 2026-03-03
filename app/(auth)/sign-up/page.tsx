'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ArrowLeft, Check } from 'lucide-react'

export default function SignUpPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      if (formData.email && formData.password && formData.name) {
        localStorage.setItem('user', JSON.stringify({ email: formData.email, name: formData.name }))
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
        <h1 className="text-2xl font-bold text-white">Create Account</h1>
      </div>

      {/* Form Card */}
      <div className="flex-1 flex items-center justify-center">
        <Card className="glass w-full max-w-md p-8 space-y-6 max-h-[90vh] overflow-y-auto">
          <div className="space-y-2 text-center">
            <h2 className="text-2xl font-bold text-white">Join ZORROW X</h2>
            <p className="text-white/60">Create your account to get started</p>
          </div>

          <form onSubmit={handleSignUp} className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Full Name</label>
              <Input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Password</label>
              <Input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Confirm Password</label>
              <Input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            {error && <div className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm">{error}</div>}

            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-11 bg-primary text-background hover:bg-primary/90 font-semibold"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>
          </form>

          {/* Terms */}
          <div className="space-y-3 text-center text-xs text-white/60">
            <p>
              By signing up, you agree to our{' '}
              <Link href="#" className="text-primary hover:underline">
                Terms
              </Link>{' '}
              and{' '}
              <Link href="#" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </p>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-primary" />
              <span>Free shipping on first order</span>
            </div>
          </div>

          <div className="text-center text-sm text-white/60">
            Already have an account?{' '}
            <Link href="/sign-in" className="text-primary hover:text-primary/80 font-semibold">
              Sign In
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
