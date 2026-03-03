'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Heart, Star } from 'lucide-react'
import { Product } from '@/lib/types'
import { useCartStore } from '@/lib/store'
import { useToastStore } from '@/lib/toast-store'

interface ProductCardProps {
  product: Product
  onWishlistToggle?: (productId: string) => void
  isWishlisted?: boolean
}

export function ProductCard({ product, onWishlistToggle, isWishlisted: propIsWishlisted }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const addToWishlist = useCartStore((state) => state.addToWishlist)
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist)
  const isWishlisted = useCartStore((state) => state.isWishlisted(product.id))
  const addToast = useToastStore((state) => state.addToast)

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (isWishlisted) {
      removeFromWishlist(product.id)
      addToast('Removed from Wishlist', 'info', 2000)
    } else {
      addToWishlist(product.id)
      addToast('Saved to Wishlist ❤️', 'success', 2000)
    }

    // Also call legacy callback if provided
    onWishlistToggle?.(product.id)
  }

  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer">
        {/* Image Container - Square aspect ratio */}
        <div
          className="relative aspect-square bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden mb-3 glass transition-all duration-300 hover:glass-dark"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Image */}
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />

          {/* Wishlist Button */}
          <button
            onClick={handleWishlistClick}
            className="absolute top-2 right-2 p-2 rounded-full bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors z-10"
          >
            <Heart
              className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-primary text-primary' : 'text-white/60'}`}
            />
          </button>

          {/* Stock Badge */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
              <span className="text-white font-semibold text-sm">Out of Stock</span>
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="space-y-1.5 px-1">
          <h3 className="text-white font-semibold text-xs line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-2.5 h-2.5 ${i < Math.round(product.rating) ? 'fill-primary text-primary' : 'text-white/20'}`}
                />
              ))}
            </div>
            <span className="text-xs text-white/60">({product.rating})</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold text-primary">₹{product.price.toLocaleString()}</span>
            <span className="text-xs text-white/40 line-through">₹{Math.round(product.price * 1.15).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
