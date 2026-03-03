'use client'

import Link from 'next/link'
import { useState, useMemo } from 'react'
import { Trash2, Plus, Minus, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { useCartStore } from '@/lib/store'
import { PRODUCTS } from '@/lib/mock-data'

export default function CartPage() {
  const { items, removeFromCart, updateQuantity, applyDiscount, appliedDiscount, removedDiscount } = useCartStore()
  const [promoCode, setPromoCode] = useState('')
  const [promoError, setPromoError] = useState('')

  // Create a map of products for efficient lookup
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

  const handleApplyPromo = () => {
    setPromoError('')
    if (promoCode === 'SAVE10') {
      applyDiscount('SAVE10')
      setPromoCode('')
    } else {
      setPromoError('Invalid promo code')
    }
  }

  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="glass backdrop-blur-md p-4 border-b border-white/10 sticky top-0 z-30">
        <h1 className="text-2xl font-bold text-white">Shopping Cart</h1>
        <p className="text-white/60 text-sm mt-1">{items.length} item{items.length !== 1 ? 's' : ''}</p>
      </div>

      <div className="px-4 py-6 space-y-6">
        {items.length > 0 ? (
          <>
            {/* Cart Items */}
            <div className="space-y-3">
              {items.map((item) => {
                const product = productsMap.get(item.productId)
                if (!product) return null

                const itemTotal = product.price * item.quantity

                return (
                  <Card key={`${item.productId}-${item.size}-${item.color}`} className="glass p-4 flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-white/10">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 space-y-2">
                      <div>
                        <Link href={`/product/${product.id}`}>
                          <h3 className="text-white font-semibold hover:text-primary transition-colors line-clamp-2">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-white/60 text-xs mt-1">
                          {item.size && `Size: ${item.size}`}
                          {item.size && item.color && ' • '}
                          {item.color && `Color: ${item.color}`}
                        </p>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQuantity(product.id, item.quantity - 1)}
                            className="p-1 hover:bg-white/10 rounded transition-colors"
                          >
                            <Minus className="w-4 h-4 text-white/60" />
                          </button>
                          <span className="text-white font-semibold w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(product.id, item.quantity + 1)}
                            className="p-1 hover:bg-white/10 rounded transition-colors"
                          >
                            <Plus className="w-4 h-4 text-white/60" />
                          </button>
                        </div>

                        {/* Price and Remove */}
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            <p className="text-primary font-bold">₹{itemTotal.toLocaleString()}</p>
                            <p className="text-white/50 text-xs">₹{product.price} each</p>
                          </div>
                          <button
                            onClick={() => removeFromCart(product.id)}
                            className="p-2 hover:bg-red-500/20 rounded transition-colors"
                          >
                            <Trash2 className="w-4 h-4 text-red-400" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Promo Code */}
            <Card className="glass p-4 space-y-3">
              <div className="flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                <label className="text-white font-semibold flex-1">Promo Code</label>
                {appliedDiscount && (
                  <button
                    onClick={removedDiscount}
                    className="text-xs text-primary hover:underline"
                  >
                    Remove
                  </button>
                )}
              </div>
              {appliedDiscount ? (
                <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-400 text-sm font-semibold">
                  ✓ {appliedDiscount} applied - Save ₹{calculations.discount.toLocaleString()}
                </div>
              ) : (
                <div className="flex gap-2">
                  <Input
                    type="text"
                    placeholder="Enter code (try SAVE10)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                  <Button
                    onClick={handleApplyPromo}
                    className="bg-primary text-background hover:bg-primary/90 px-6"
                  >
                    Apply
                  </Button>
                </div>
              )}
              {promoError && <p className="text-red-400 text-sm">{promoError}</p>}
            </Card>

            {/* Order Summary */}
            <Card className="glass p-6 space-y-3 sticky bottom-24 z-20">
              <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>

              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-white/60">
                  <span>Subtotal</span>
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
                    <span>Discount</span>
                    <span>-₹{calculations.discount.toLocaleString()}</span>
                  </div>
                )}
              </div>

              <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-lg text-white">
                <span>Total</span>
                <span className="text-primary">₹{calculations.total.toLocaleString()}</span>
              </div>

              <Link href="/checkout" className="block">
                <Button className="w-full h-12 bg-primary text-background hover:bg-primary/90 font-semibold mt-2">
                  Proceed to Checkout
                </Button>
              </Link>
            </Card>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="p-6 rounded-full bg-white/10">
              <svg className="w-8 h-8 text-primary/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 10m10 0l2 10m0 0h2m-2 0h-2" />
              </svg>
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold text-white">Cart is empty</h2>
              <p className="text-white/60 text-sm">
                Add some items to get started with your purchase
              </p>
            </div>
            <Link href="/explore">
              <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 mt-4">
                Continue Shopping
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
