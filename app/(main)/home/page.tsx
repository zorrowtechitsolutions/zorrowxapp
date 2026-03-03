'use client'

import { useState, useEffect } from 'react'
import { Search, MessageCircle, Shirt, Footprints, Crown, Clock, Zap } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { ProductCard } from '@/components/features/product-card'
import { StoriesCarousel } from '@/components/features/stories-carousel'
import { PRODUCTS, getTrendingProducts, getAIRecommendedProducts, getProductsByCategory, getCategoryTrending } from '@/lib/mock-data'
import { useCartStore } from '@/lib/store'

export default function HomePage() {
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

  if (!mounted) return null

  const trendingProducts = getTrendingProducts()
  const recommendedProducts = getAIRecommendedProducts()

  // Filter products based on search query
  const searchedTrendingProducts = searchQuery.trim()
    ? trendingProducts.filter((p) => {
        const query = searchQuery.toLowerCase()
        return (
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query)
        )
      })
    : trendingProducts

  const searchedRecommendedProducts = searchQuery.trim()
    ? recommendedProducts.filter((p) => {
        const query = searchQuery.toLowerCase()
        return (
          p.name.toLowerCase().includes(query) ||
          p.category.toLowerCase().includes(query) ||
          p.description?.toLowerCase().includes(query)
        )
      })
    : recommendedProducts

  return (
    <div className="w-full bg-background pb-4">
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
            <MessageCircle className="w-5 h-5 text-primary glow-cyan" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-8">
        {/* Welcome Banner */}
        <Card className="glass p-6 space-y-2">
          <p className="text-white/60 text-sm">Welcome back to</p>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            ZORROW X
          </h1>
          <p className="text-white/50 text-sm">Your lifestyle fashion marketplace</p>
        </Card>

        {/* Stories Section */}
        <div className="space-y-2 -mx-4 px-4">
          <h3 className="text-sm font-semibold text-white/60">Stories</h3>
          <StoriesCarousel />
        </div>

        {/* Category Chips */}
        <div className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4">
          {[
            { label: 'Men', icon: Shirt },
            { label: 'Women', icon: Shirt },
            { label: 'Shoes', icon: Footprints },
            { label: 'Caps', icon: Crown },
            { label: 'Accessories', icon: Clock },
            { label: 'Gadgets', icon: Zap },
          ].map((cat) => (
            <button
              key={cat.label}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-primary/30 border border-primary/30 text-white text-sm font-semibold transition-all whitespace-nowrap flex items-center gap-2"
            >
              <cat.icon className="w-4 h-4" />
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Results Header */}
        {searchQuery && (
          <div className="space-y-2 px-2">
            <p className="text-white/60 text-sm">Search results for:</p>
            <h2 className="text-2xl font-bold text-white">{searchQuery}</h2>
            <p className="text-white/60 text-sm">{searchedTrendingProducts.length} products found</p>
          </div>
        )}

        {/* AI Recommended Section */}
        {!searchQuery && (
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-xl font-bold text-white">AI Recommended</h2>
              <button className="text-primary text-sm hover:underline">See all</button>
            </div>
            <div className="overflow-x-auto pb-2 -mx-4 px-4">
              <div className="flex gap-4 w-max">
                {recommendedProducts.map((product) => (
                  <div key={product.id} className="w-40 flex-shrink-0">
                    <ProductCard
                      product={product}
                      onWishlistToggle={handleWishlistToggle}
                      isWishlisted={isWishlisted(product.id)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Flash Sale Section */}
        {!searchQuery && (
          <div className="space-y-4">
            <div className="glass p-4 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-xl font-bold text-primary">Flash Sale</h2>
                <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-semibold">
                  12h left
                </span>
              </div>
              <p className="text-white/60 text-sm">Up to 30% off on selected items</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {PRODUCTS.slice(0, 4).map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onWishlistToggle={handleWishlistToggle}
                  isWishlisted={isWishlisted(product.id)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Trending Now Section / Search Results */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">
              {searchQuery ? 'Search Results' : 'Trending Now'}
            </h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {searchedTrendingProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          {searchQuery && searchedTrendingProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-white/60">No products found matching "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* Men's Trending */}
        {!searchQuery && (
          <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">Men's Trending</h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTrending('Men').slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          </div>
        )}

        {/* Women's Trending */}
        {!searchQuery && (
          <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">Women's Trending</h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTrending('Women').slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          </div>
        )}

        {/* Top Shoes */}
        {!searchQuery && (
          <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">Top Shoes</h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTrending('Shoes').slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          </div>
        )}

        {/* Popular Caps */}
        {!searchQuery && (
          <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">Popular Caps</h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTrending('Caps').slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          </div>
        )}

        {/* Accessories Picks */}
        {!searchQuery && (
          <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">Accessories Picks</h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTrending('Accessories').slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          </div>
        )}

        {/* Trending Gadgets */}
        {!searchQuery && (
          <div className="space-y-4">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-xl font-bold text-white">Trending Gadgets</h2>
            <button className="text-primary text-sm hover:underline">See all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {getCategoryTrending('Gadgets').slice(0, 4).map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onWishlistToggle={handleWishlistToggle}
                isWishlisted={isWishlisted(product.id)}
              />
            ))}
          </div>
          </div>
        )}

        {/* AI Chat Widget Preview */}
        {!searchQuery && (
          <Card className="glass p-4 border-primary/30 bg-primary/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-white font-semibold text-sm">Need style advice?</p>
              <p className="text-white/60 text-xs">Chat with our AI stylist</p>
            </div>
            <button className="text-primary text-sm font-semibold hover:underline">Try</button>
          </div>
        </Card>
        )}
      </div>
    </div>
  )
}
