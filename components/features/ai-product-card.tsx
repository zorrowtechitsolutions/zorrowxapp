'use client'

import { ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useCartStore } from '@/lib/store'
import { Product } from '@/lib/types'

interface AIProductCardProps {
  product: Product
}

export function AIProductCard({ product }: AIProductCardProps) {
  const addToCart = useCartStore((state) => state.addToCart)

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      size: product.size?.[0] || '',
      color: product.color?.[0] || '',
    })
  }

  return (
    <div className="glass my-3 p-3 rounded-lg max-w-sm overflow-hidden">
      <div className="flex gap-3">
        <img src={product.image} alt={product.name} className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h4 className="text-sm font-semibold text-white truncate">{product.name}</h4>
            <p className="text-xs text-primary">₹{product.price.toLocaleString()}</p>
            <p className="text-xs text-white/60 truncate">{product.category}</p>
          </div>
          <Button
            size="sm"
            className="h-7 w-full bg-primary hover:bg-primary/90 text-background text-xs gap-1"
            onClick={handleAddToCart}
          >
            <ShoppingBag className="w-3 h-3" />
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  )
}
