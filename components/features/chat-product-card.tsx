'use client'

import { useState } from 'react'
import { ShoppingBag, Check, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store'
import { useToastStore } from '@/lib/toast-store'
import type { ChatProduct } from '@/lib/chat-products'

interface ChatProductCardProps {
  product: ChatProduct
}

export function ChatProductCard({ product }: ChatProductCardProps) {
  const [isAdded, setIsAdded] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)
  const addToWishlist = useCartStore((state) => state.addToWishlist)
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist)
  const isWishlisted = useCartStore((state) => state.isWishlisted(product.id))
  const addToast = useToastStore((state) => state.addToast)

  const handleAddToCart = () => {
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: 'Accessories',
        size: [],
        color: [],
        description: product.name,
        rating: 4.8,
        inStock: true,
      },
      1
    )
    setIsAdded(true)
    setTimeout(() => setIsAdded(false), 2000)
  }

  const handleWishlist = () => {
    if (isWishlisted) {
      removeFromWishlist(product.id)
      addToast('Removed from Wishlist', 'info', 2000)
    } else {
      addToWishlist(product.id)
      addToast('Saved to Wishlist ❤️', 'success', 2000)
    }
  }

  return (
    <div className="glass p-3 rounded-lg mb-2 inline-block max-w-xs w-full">
      {/* Product Image */}
      <div className="relative h-32 rounded-lg overflow-hidden mb-2 bg-white/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-2 right-2 bg-primary/80 text-background px-2 py-1 rounded text-xs font-semibold">
          {product.category}
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <h4 className="font-semibold text-sm text-white truncate">
          {product.name}
        </h4>
        <p className="text-primary font-bold text-lg">₹{product.price.toLocaleString('en-IN')}</p>

        {/* Buttons */}
        <div className="flex gap-2">
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            className={`flex-1 h-8 text-sm transition-all duration-300 ${
              isAdded
                ? 'bg-green-500 hover:bg-green-500 text-white'
                : 'bg-primary hover:bg-primary/90 text-background'
            }`}
            size="sm"
          >
            {isAdded ? (
              <>
                <Check className="w-3 h-3 mr-1" />
                Added!
              </>
            ) : (
              <>
                <ShoppingBag className="w-3 h-3 mr-1" />
                Cart
              </>
            )}
          </Button>

          {/* Wishlist Button */}
          <Button
            onClick={handleWishlist}
            className={`h-8 px-3 transition-all duration-300 ${
              isWishlisted
                ? 'bg-primary/30 hover:bg-primary/40 text-primary'
                : 'bg-white/10 hover:bg-white/20 text-white/60'
            }`}
            size="sm"
          >
            <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-primary' : ''}`} />
          </Button>
        </div>
      </div>
    </div>
  )
}
