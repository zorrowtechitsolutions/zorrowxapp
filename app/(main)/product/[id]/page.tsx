'use client'

import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import { ArrowLeft, Heart, ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { useCartStore } from '@/lib/store'
import { PRODUCTS } from '@/lib/mock-data'
import { useParams } from 'next/navigation'

export default function ProductDetailPage() {
  const router = useRouter()
  const params = useParams()
  const productId = params.id as string
  const product = PRODUCTS.find((p) => p.id === productId)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const addToCart = useCartStore((state) => state.addToCart)

  useEffect(() => {
    if (product) {
      setSelectedSize(product.size?.[0] || '')
      setSelectedColor(product.color?.[0] || '')
    }
  }, [product])

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white/60">Product not found</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize, selectedColor)
    router.push('/cart')
  }

  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 glass backdrop-blur-md sticky top-0 z-30">
        <button
          onClick={() => router.back()}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>
        <h1 className="text-lg font-semibold text-white flex-1 text-center px-4">Product Details</h1>
        <button
          onClick={() => setIsWishlisted(!isWishlisted)}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-primary text-primary' : 'text-white/60'}`}
          />
        </button>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* Product Image */}
        <div className="relative h-96 rounded-2xl overflow-hidden glass">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 glass px-3 py-1 rounded-full text-xs font-semibold text-primary">
            {product.category}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-4">
          <div>
            <h1 className="text-2xl font-bold text-white mb-2">{product.name}</h1>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${i < Math.round(product.rating) ? 'fill-primary text-primary' : 'text-white/20'}`}
                  />
                ))}
              </div>
              <span className="text-white/60 text-sm">({product.rating} rating)</span>
            </div>
          </div>

          {/* Price */}
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-bold text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-lg text-white/50 line-through">₹{Math.round(product.price * 1.15).toLocaleString()}</span>
              <span className="text-sm px-2 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                Save 13%
              </span>
            </div>
          </div>

          {/* Description */}
          <Card className="glass p-4">
            <p className="text-white/80 text-sm leading-relaxed">{product.description}</p>
          </Card>
        </div>

        {/* Size Selection */}
        {product.size && product.size.length > 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-white font-semibold">Size</label>
              <button className="text-primary text-xs hover:underline">Size guide</button>
            </div>
            <div className="grid grid-cols-4 gap-2">
              {product.size.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`py-3 rounded-lg font-semibold transition-all ${
                    selectedSize === size
                      ? 'bg-primary text-background'
                      : 'bg-white/10 border border-white/20 text-white hover:border-primary/50'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Color Selection */}
        {product.color && product.color.length > 0 && (
          <div className="space-y-3">
            <label className="text-white font-semibold">Color</label>
            <div className="flex gap-3">
              {product.color.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    selectedColor === color
                      ? 'bg-primary text-background'
                      : 'bg-white/10 border border-white/20 text-white hover:border-primary/50'
                  }`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Quantity */}
        <div className="space-y-3">
          <label className="text-white font-semibold">Quantity</label>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              −
            </button>
            <span className="text-white font-semibold text-lg w-12 text-center">{quantity}</span>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-4 py-2 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        {/* Stock Status */}
        <div className={`p-3 rounded-lg text-sm font-medium ${product.inStock ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {product.inStock ? '✓ In Stock' : '✗ Out of Stock'}
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={!product.inStock}
          className="w-full h-14 bg-primary text-background hover:bg-primary/90 font-bold text-lg flex items-center justify-center gap-2"
        >
          <ShoppingBag className="w-5 h-5" />
          Add to Cart
        </Button>
      </div>
    </div>
  )
}
