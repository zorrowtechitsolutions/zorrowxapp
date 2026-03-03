'use client'

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/features/product-card'
import { PRODUCTS } from '@/lib/mock-data'
import { useCartStore } from '@/lib/store'

export default function WishlistPage() {
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set())
  const [mounted, setMounted] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    // Load wishlist from localStorage if needed
    setMounted(true)
  }, [])

  const handleWishlistToggle = (productId: string) => {
    setWishlisted((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(productId)) {
        newSet.delete(productId)
      } else {
        newSet.add(productId)
      }
      return newSet
    })
  }

  const wishlistedProducts = PRODUCTS.filter((p) => wishlisted.has(p.id))

  if (!mounted) return null

  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="glass backdrop-blur-md p-4 border-b border-white/10 sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <h1 className="text-2xl font-bold text-white">Wishlist</h1>
          {wishlistedProducts.length > 0 && (
            <span className="ml-auto text-white/60 text-sm">
              {wishlistedProducts.length} item{wishlistedProducts.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>

      <div className="px-4 py-6">
        {wishlistedProducts.length > 0 ? (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {wishlistedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onWishlistToggle={handleWishlistToggle}
                  isWishlisted={wishlisted.has(product.id)}
                />
              ))}
            </div>

            <div className="space-y-2">
              <Button className="w-full h-12 bg-primary text-background hover:bg-primary/90 font-semibold">
                Add All to Cart
              </Button>
              <p className="text-center text-white/60 text-xs">
                Your items are saved and ready to purchase
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 space-y-4">
            <div className="p-6 rounded-full bg-white/10">
              <Heart className="w-8 h-8 text-primary/50" />
            </div>
            <div className="text-center space-y-2">
              <h2 className="text-lg font-semibold text-white">No items yet</h2>
              <p className="text-white/60 text-sm">
                Start adding products to your wishlist to save them for later
              </p>
            </div>
            <Button
              variant="outline"
              className="border-primary/50 text-primary hover:bg-primary/10 mt-4"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
