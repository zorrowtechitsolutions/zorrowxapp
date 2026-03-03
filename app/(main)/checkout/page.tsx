'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { useCartStore } from '@/lib/store'
import { PRODUCTS } from '@/lib/mock-data'

export default function CheckoutPage() {
  const router = useRouter()
  const { items, appliedDiscount, clearCart } = useCartStore()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
  })

  const [paymentMethod, setPaymentMethod] = useState('upi')
  const [isLoading, setIsLoading] = useState(false)

  // Create products map
  const productsMap = useMemo(() => {
    const map = new Map()
    PRODUCTS.forEach((p) => map.set(p.id, p))
    return map
  }, [])

  // Calculate totals
  const calculations = useMemo(() => {
    const subtotal = items.reduce((total, item) => {
      const product = productsMap.get(item.productId)
      return total + (product?.price || 0) * item.quantity
    }, 0)

    const gst = Math.round(subtotal * 0.18 * 100) / 100
    const shipping = subtotal > 1999 ? 0 : 99
    const discount = appliedDiscount === 'SAVE10' ? Math.round(subtotal * 0.1 * 100) / 100 : 0
    const total = subtotal + gst + shipping - discount

    return { subtotal, gst, shipping, discount, total: Math.round(total * 100) / 100 }
  }, [items, appliedDiscount, productsMap])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate order processing
    setTimeout(() => {
      const orderId = Math.random().toString(36).substring(2, 11).toUpperCase()
      clearCart()
      router.push(`/order-success?orderId=${orderId}`)
    }, 1500)
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-4">
        <p className="text-white/60">Your cart is empty</p>
        <Link href="/explore">
          <Button className="bg-primary text-background hover:bg-primary/90">Continue Shopping</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="w-full bg-background pb-6">
      {/* Header */}
      <div className="flex items-center gap-4 p-4 border-b border-white/10 glass backdrop-blur-md sticky top-0 z-30">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-2xl font-bold text-white">Checkout</h1>
      </div>

      <div className="px-4 py-6 space-y-6 max-w-2xl mx-auto">
        <form onSubmit={handlePlaceOrder} className="space-y-6">
          {/* Billing Information */}
          <Card className="glass p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Billing Information</h2>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">First Name</label>
                <Input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">Last Name</label>
                <Input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Email</label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Phone</label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="10-digit mobile number"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Address</label>
              <Input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="Street address"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">City</label>
                <Input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white">State</label>
                <Input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Pincode</label>
              <Input
                type="text"
                name="pincode"
                value={formData.pincode}
                onChange={handleChange}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                placeholder="6-digit pincode"
                required
              />
            </div>
          </Card>

          {/* Payment Method */}
          <Card className="glass p-6 space-y-4">
            <h2 className="text-lg font-bold text-white">Payment Method</h2>

            <div className="space-y-3">
              {[
                { id: 'upi', label: 'UPI', description: 'Google Pay, PhonePe, Paytm' },
                { id: 'card', label: 'Debit/Credit Card', description: 'Visa, Mastercard, Amex' },
                { id: 'netbanking', label: 'Net Banking', description: 'All major banks' },
                { id: 'cod', label: 'Cash on Delivery', description: 'Pay when you receive' },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    paymentMethod === method.id
                      ? 'border-primary bg-primary/10'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={paymentMethod === method.id}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="cursor-pointer"
                  />
                  <div>
                    <p className="font-semibold text-white">{method.label}</p>
                    <p className="text-xs text-white/60">{method.description}</p>
                  </div>
                </label>
              ))}
            </div>
          </Card>

          {/* Order Summary */}
          <Card className="glass p-6 space-y-3">
            <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>

            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-white/60">
                <span>Subtotal ({items.length} items)</span>
                <span>₹{calculations.subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>GST (18%)</span>
                <span>₹{calculations.gst.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-white/60">
                <span>Shipping</span>
                <span className={calculations.shipping === 0 ? 'text-green-400' : ''}>
                  {calculations.shipping === 0 ? 'FREE' : `₹${calculations.shipping}`}
                </span>
              </div>
              {calculations.discount > 0 && (
                <div className="flex justify-between text-green-400">
                  <span>Discount (SAVE10)</span>
                  <span>-₹{calculations.discount.toLocaleString()}</span>
                </div>
              )}
            </div>

            <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-lg text-white">
              <span>Total Amount</span>
              <span className="text-primary">₹{calculations.total.toLocaleString()}</span>
            </div>
          </Card>

          {/* Place Order Button */}
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full h-14 bg-primary text-background hover:bg-primary/90 font-bold text-lg sticky bottom-0"
          >
            {isLoading ? 'Processing...' : `Place Order • ₹${calculations.total.toLocaleString()}`}
          </Button>
        </form>

        <p className="text-center text-white/50 text-xs">
          Your payment is secure and encrypted. We never store your card details.
        </p>
      </div>
    </div>
  )
}
