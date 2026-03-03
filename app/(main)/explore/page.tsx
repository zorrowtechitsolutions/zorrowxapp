'use client'

import { useState, useEffect } from 'react'
import { Sliders, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ProductCard } from '@/components/features/product-card'
import { PRODUCTS } from '@/lib/mock-data'
import { useCartStore } from '@/lib/store'

type Category = 'All' | 'Men' | 'Women' | 'Shoes' | 'Caps' | 'Accessories' | 'Gadgets'

export default function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')
  const [mounted, setMounted] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const isWishlisted = useCartStore((state) => state.isWishlisted)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleWishlistToggle = (productId: string) => {
    if (isWishlisted(productId)) {
      useCartStore.getState().removeFromWishlist(productId)
    } else {
      useCartStore.getState().addToWishlist(productId)
    }
  }

  const filteredProducts = PRODUCTS.filter((p) => {
    // Filter by category
    if (selectedCategory !== 'All' && p.category !== selectedCategory) {
      return false
    }
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      return (
        p.name.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.description?.toLowerCase().includes(query)
      )
    }
    return true
  })

  if (!mounted) return null

  return (
    <div className="w-full bg-background pb-32">
      {/* Header */}
      <div className="sticky top-16 z-30 glass backdrop-blur-md p-4 border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/50"
            />
          </div>
          <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
            <Sliders className="w-5 h-5 text-primary" />
          </button>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Category Buttons */}
        <div className="flex gap-2 overflow-x-auto pb-3">
          {['All', 'Men', 'Women', 'Shoes', 'Caps', 'Accessories', 'Gadgets'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as Category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-all ${
                selectedCategory === cat
                  ? 'bg-primary text-background'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-white/60 text-sm">
              {filteredProducts.length} items
            </p>
            <select className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-2">
              <option>Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* Products Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No products found in this category</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
