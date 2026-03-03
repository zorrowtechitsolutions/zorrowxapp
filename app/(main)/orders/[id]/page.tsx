'use client'

import { useParams, useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeft, Clock, Package, Truck, CheckCircle } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

// Mock order details
const MOCK_ORDER_DETAILS: Record<string, any> = {
  ZX20240315001: {
    id: 'ZX20240315001',
    date: 'Mar 15, 2024',
    total: 4299,
    status: 'Delivered',
    items: [
      { name: 'Premium Oversized Hoodie', price: 1299, quantity: 1, image: '/products/01-hoodie.jpg' },
      { name: 'Classic Canvas Sneakers', price: 2499, quantity: 1, image: '/products/06-sneakers.jpg' },
      { name: 'Cargo Pants', price: 1499, quantity: 1, image: '/products/02-cargo-pants.jpg' },
    ],
    billingAddress: {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 98765 43210',
      address: '123 Fashion Street, New York, NY 10001',
    },
    paymentMethod: 'Credit Card (****1234)',
    timeline: [
      { status: 'Ordered', date: 'Mar 15, 2024', completed: true },
      { status: 'Shipped', date: 'Mar 16, 2024', completed: true },
      { status: 'Out for Delivery', date: 'Mar 18, 2024', completed: true },
      { status: 'Delivered', date: 'Mar 19, 2024', completed: true },
    ],
  },
}

export default function OrderDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const orderId = params.id as string

  const order = MOCK_ORDER_DETAILS[orderId]

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4">
        <h1 className="text-2xl font-bold text-white mb-4">Order Not Found</h1>
        <Link href="/orders">
          <Button className="bg-primary text-background hover:bg-primary/90">Back to Orders</Button>
        </Link>
      </div>
    )
  }

  const subtotal = order.items.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0)
  const tax = Math.floor(subtotal * 0.1)
  const shipping = 99

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="sticky top-16 z-40 glass backdrop-blur-md border-b border-white/10 px-4 py-4 flex items-center gap-3">
        <button onClick={() => router.back()} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <h1 className="text-2xl font-bold text-white">Order Details</h1>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Order Info */}
        <Card className="glass p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/60 text-sm">Order ID</p>
              <p className="text-white font-mono font-semibold">{order.id}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm font-semibold bg-green-500/20 text-green-400">{order.status}</span>
          </div>
          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10">
            <div>
              <p className="text-white/60 text-sm">Date</p>
              <p className="text-white">{order.date}</p>
            </div>
            <div className="text-right">
              <p className="text-white/60 text-sm">Total</p>
              <p className="text-primary font-bold text-lg">₹{order.total.toLocaleString('en-IN')}</p>
            </div>
          </div>
        </Card>

        {/* Timeline */}
        <div className="space-y-3">
          <h2 className="text-white font-semibold">Delivery Timeline</h2>
          <div className="space-y-4">
            {order.timeline.map((step: any, idx: number) => (
              <div key={idx} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step.completed ? 'bg-green-500/20' : 'bg-white/10'
                    }`}
                  >
                    {step.completed ? (
                      <CheckCircle className="w-5 h-5 text-green-400" />
                    ) : (
                      <Clock className="w-5 h-5 text-white/40" />
                    )}
                  </div>
                  {idx !== order.timeline.length - 1 && <div className="w-0.5 h-8 bg-white/10 my-2" />}
                </div>
                <div className="pt-1">
                  <p className={`font-semibold ${step.completed ? 'text-white' : 'text-white/60'}`}>{step.status}</p>
                  <p className="text-white/50 text-sm">{step.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Items */}
        <div className="space-y-3">
          <h2 className="text-white font-semibold">Items</h2>
          <div className="space-y-2">
            {order.items.map((item: any, idx: number) => (
              <Card key={idx} className="glass p-3 flex gap-3">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-white/60 text-xs">Qty: {item.quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-primary font-semibold">₹{item.price.toLocaleString('en-IN')}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bill Summary */}
        <Card className="glass p-4 space-y-2">
          <div className="flex justify-between text-sm text-white/80">
            <span>Subtotal</span>
            <span>₹{subtotal.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-sm text-white/80">
            <span>Tax (10%)</span>
            <span>₹{tax.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-sm text-white/80 border-t border-white/10 pt-2">
            <span>Shipping</span>
            <span>₹{shipping.toLocaleString('en-IN')}</span>
          </div>
          <div className="flex justify-between text-white font-bold text-lg border-t border-white/10 pt-2">
            <span>Total</span>
            <span className="text-primary">₹{order.total.toLocaleString('en-IN')}</span>
          </div>
        </Card>

        {/* Billing Address */}
        <div className="space-y-3">
          <h2 className="text-white font-semibold">Billing Address</h2>
          <Card className="glass p-4 space-y-1 text-sm">
            <p className="text-white font-semibold">{order.billingAddress.name}</p>
            <p className="text-white/80">{order.billingAddress.address}</p>
            <p className="text-white/80">{order.billingAddress.phone}</p>
            <p className="text-white/80">{order.billingAddress.email}</p>
          </Card>
        </div>

        {/* Payment Method */}
        <Card className="glass p-4">
          <p className="text-white/60 text-sm mb-1">Payment Method</p>
          <p className="text-white font-semibold">{order.paymentMethod}</p>
        </Card>
      </div>
    </div>
  )
}
