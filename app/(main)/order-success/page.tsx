'use client'

import { Suspense } from 'react'
import Link from 'next/link'
import { CheckCircle, Package, Truck, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { OrderSuccessContent } from './order-success-content'

export default function OrderSuccessPage() {
  return (
    <Suspense fallback={<OrderSuccessLoading />}>
      <OrderSuccessContent />
    </Suspense>
  )
}

function OrderSuccessLoading() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-background via-background to-background/80 flex flex-col items-center justify-center p-4">
      <div className="animate-pulse text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
        <div className="h-8 bg-white/20 rounded w-32 mx-auto mb-4"></div>
      </div>
    </div>
  )
}

