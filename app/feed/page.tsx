'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import {
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ShoppingBag,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { StoriesCarousel } from '@/components/features/stories-carousel'
import { PRODUCTS } from '@/lib/mock-data'
import { useCartStore } from '@/lib/store'
import { useToastStore } from '@/lib/toast-store'

// Generate deterministic feed posts
const FEED_POSTS = PRODUCTS.map((product, index) => {
  const likesSeeds = [2843, 3521, 1923, 4102, 2756, 3334, 2198, 4567]
  const commentSeeds = [156, 287, 95, 312, 178, 203, 145, 267]
  const timestampSeeds = [2, 4, 6, 8, 10, 12, 14, 16]

  return {
    id: product.id,
    author: `@${product.category.toLowerCase()}lover${index + 1}`,
    avatar: product.image,
    image: product.image,
    caption: `Check out this amazing ${product.category} item: ${product.name}.`,
    likes: likesSeeds[index % likesSeeds.length],
    comments: commentSeeds[index % commentSeeds.length],
    timestamp: `${timestampSeeds[index % timestampSeeds.length]}h ago`,
  }
})

export default function FeedPage() {
  const [savedPosts, setSavedPosts] = useState<string[]>([])
  const [showHeartAnimation, setShowHeartAnimation] = useState<string | null>(null)

  const doubleTapTimers = useRef<Record<string, NodeJS.Timeout>>({})

  const addToWishlist = useCartStore((state) => state.addToWishlist)
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist)
  const isWishlisted = useCartStore((state) => state.isWishlisted)
  const addToCart = useCartStore((state) => state.addToCart)
  const addToast = useToastStore((state) => state.addToast)

  const handleShopNow = (productId: string) => {
    const product = PRODUCTS.find((p) => p.id === productId)
    if (product) {
      addToCart(product, 1)
      addToast('Added to Cart', 'success', 2000)
    }
  }

  // DOUBLE TAP = LIKE ONLY (Instagram behavior)
  const handleImageDoubleTap = (postId: string) => {
    if (doubleTapTimers.current[postId]) {
      clearTimeout(doubleTapTimers.current[postId])

      if (!isWishlisted(postId)) {
        addToWishlist(postId)
        addToast('Saved to Wishlist ❤️', 'success', 2000)
      }

      setShowHeartAnimation(postId)
      setTimeout(() => setShowHeartAnimation(null), 600)

      delete doubleTapTimers.current[postId]
    } else {
      doubleTapTimers.current[postId] = setTimeout(() => {
        delete doubleTapTimers.current[postId]
      }, 300)
    }
  }

  const toggleLike = (postId: string) => {
    if (isWishlisted(postId)) {
      removeFromWishlist(postId)
    } else {
      addToWishlist(postId)
    }
  }

  const toggleSave = (postId: string) => {
    setSavedPosts((prev) =>
      prev.includes(postId)
        ? prev.filter((id) => id !== postId)
        : [...prev, postId]
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* HEADER */}
      <div className="sticky top-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-xl">
        <div className="max-w-2xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-2xl font-bold text-primary">ZX</div>
            <span className="text-sm text-white/60">Feed</span>
          </Link>

          <Link href="/home">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/50 text-primary hover:bg-primary/10"
            >
              Shop
            </Button>
          </Link>
        </div>
      </div>

      {/* STORIES (Now internally fullscreen on mobile) */}
      <div className="border-b border-primary/20">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <StoriesCarousel />
        </div>
      </div>

      {/* POSTS */}
      <div className="max-w-2xl mx-auto divide-y divide-primary/20">
        {FEED_POSTS.map((post) => (
          <div key={post.id}>
            {/* POST HEADER */}
            <div className="px-4 py-3 flex items-center gap-3">
              <img
                src={post.avatar}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold">{post.author}</p>
                <p className="text-xs text-white/50">{post.timestamp}</p>
              </div>
            </div>

            {/* IMAGE */}
            <div
              className="aspect-square bg-black relative cursor-pointer"
              onDoubleClick={() => handleImageDoubleTap(post.id)}
            >
              <img
                src={post.image}
                className="w-full h-full object-cover"
              />

              {showHeartAnimation === post.id && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Heart className="w-24 h-24 text-white fill-white opacity-80 animate-pulse" />
                </div>
              )}
            </div>

            {/* ACTIONS */}
            <div className="px-4 py-3">
              <div className="flex justify-between mb-2">
                <div className="flex gap-4">
                  <button onClick={() => toggleLike(post.id)}>
                    <Heart
                      className="w-6 h-6"
                      fill={isWishlisted(post.id) ? 'currentColor' : 'none'}
                      color={isWishlisted(post.id) ? '#00F0FF' : 'white'}
                    />
                  </button>
                  <MessageCircle className="w-6 h-6 text-white/60" />
                  <Share2 className="w-6 h-6 text-white/60" />
                </div>

                <button onClick={() => toggleSave(post.id)}>
                  <Bookmark
                    className="w-6 h-6"
                    fill={savedPosts.includes(post.id) ? 'currentColor' : 'none'}
                    color={savedPosts.includes(post.id) ? '#00F0FF' : 'white'}
                  />
                </button>
              </div>

              <p className="text-sm font-semibold">
                {isWishlisted(post.id)
                  ? post.likes + 1
                  : post.likes}{' '}
                likes
              </p>

              <p className="text-sm mt-1">
                <span className="font-semibold">{post.author}</span>{' '}
                {post.caption}
              </p>

              <button
                onClick={() => handleShopNow(post.id)}
                className="mt-2 text-primary text-sm font-semibold flex items-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                Shop this look
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}