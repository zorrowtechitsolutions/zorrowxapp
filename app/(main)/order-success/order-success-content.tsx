'use client'

import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle, Package, Truck, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export function OrderSuccessContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId') || 'ZX' + Math.random().toString(36).substring(2, 11).toUpperCase()

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-background/80 flex flex-col items-center justify-center p-4">
      {/* Success Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-md mx-auto space-y-8">
        {/* Success Icon */}
        <div className="inline-block">
          <div className="p-6 rounded-full bg-green-500/20 mb-4 animate-pulse">
            <CheckCircle className="w-16 h-16 text-green-400 animate-pulse" />
          </div>
        </div>

        {/* Success Message */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white">Order Confirmed!</h1>
          <p className="text-white/80 text-base">Your order has been placed successfully.</p>
        </div>

        {/* Order ID */}
        <Card className="glass p-6 space-y-2">
          <p className="text-white/60 text-sm">Order ID</p>
          <p className="text-2xl font-mono font-bold text-primary break-all">{orderId}</p>
          <button
            onClick={() => navigator.clipboard.writeText(orderId)}
            className="text-xs text-white/50 hover:text-white/80 transition-colors"
          >
            Click to copy
          </button>
        </Card>

        {/* Timeline */}
        <div className="space-y-3">
          <div className="flex items-start gap-4">
            <div className="p-2 rounded-lg bg-primary/20 flex-shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Order Confirmed</p>
              <p className="text-white/60 text-xs">Your order is confirmed and processing</p>
            </div>
          </div>

          <div className="flex items-start gap-4 opacity-50">
            <div className="p-2 rounded-lg bg-white/10 flex-shrink-0">
              <Package className="w-5 h-5 text-white/50" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">Packed</p>
              <p className="text-white/60 text-xs">Your items will be packed soon</p>
            </div>
          </div>

          <div className="flex items-start gap-4 opacity-50">
            <div className="p-2 rounded-lg bg-white/10 flex-shrink-0">
              <Truck className="w-5 h-5 text-white/50" />
            </div>
            <div className="text-left">
              <p className="text-white font-semibold text-sm">On the Way</p>
              <p className="text-white/60 text-xs">Your order will be delivered within 3-5 days</p>
            </div>
          </div>
        </div>

        {/* What's Next */}
        <Card className="glass p-4 bg-primary/10 border-primary/30">
          <h3 className="text-white font-semibold text-sm mb-2">What's Next?</h3>
          <ul className="text-white/70 text-xs space-y-1 text-left">
            <li>✓ Check your email for order confirmation</li>
            <li>✓ Track your order from your profile</li>
            <li>✓ Receive updates via SMS</li>
          </ul>
        </Card>

        {/* Actions */}
        <div className="space-y-3 pt-6">
          <Link href="/home" className="block">
            <Button className="w-full h-12 bg-primary text-background hover:bg-primary/90 font-semibold">
              Continue Shopping
            </Button>
          </Link>

          <Link href="/profile" className="block">
            <Button
              variant="outline"
              className="w-full border-primary/50 text-primary hover:bg-primary/10 font-semibold"
            >
              View My Orders
            </Button>
          </Link>
        </div>

        {/* Footer */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-white/50 text-xs">
            Thank you for shopping at ZORROW X!
          </p>
          <p className="text-white/40 text-xs mt-1">
            We're excited to get your order to you soon.
          </p>
        </div>
      </div>
    </div>
  )
}
