'use client'

import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { CartItem, Product } from './types'
import { calculateTotal } from './calculations'

export interface CartState {
  items: CartItem[]
  wishlist: string[]
  appliedDiscount: string | null
  addToCart: (product: Product, quantity: number, size?: string, color?: string) => void
  removeFromCart: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  applyDiscount: (code: string) => boolean
  removedDiscount: () => void
  clearCart: () => void
  getSubtotal: (products: Map<string, Product>) => number
  getCartCalculations: (products: Map<string, Product>) => ReturnType<typeof calculateTotal>
  // Wishlist methods
  addToWishlist: (productId: string) => void
  removeFromWishlist: (productId: string) => void
  isWishlisted: (productId: string) => boolean
  getWishlistCount: () => number
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      wishlist: [],
      appliedDiscount: null,

      addToCart: (product, quantity, size, color) => {
        set((state) => {
          const existingItem = state.items.find(
            (item) => item.productId === product.id && item.size === size && item.color === color
          )

          if (existingItem) {
            return {
              items: state.items.map((item) =>
                item.productId === product.id && item.size === size && item.color === color
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              ),
            }
          }

          return {
            items: [...state.items, { productId: product.id, quantity, size, color }],
          }
        })
      },

      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.productId !== productId),
        }))
      },

      updateQuantity: (productId, quantity) => {
        if (quantity <= 0) {
          get().removeFromCart(productId)
          return
        }

        set((state) => ({
          items: state.items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          ),
        }))
      },

      applyDiscount: (code) => {
        if (code === 'SAVE10') {
          set({ appliedDiscount: code })
          return true
        }
        return false
      },

      removedDiscount: () => {
        set({ appliedDiscount: null })
      },

      clearCart: () => {
        set({ items: [], appliedDiscount: null })
      },

      getSubtotal: (products) => {
        return get().items.reduce((total, item) => {
          const product = products.get(item.productId)
          return total + (product?.price || 0) * item.quantity
        }, 0)
      },

      getCartCalculations: (products) => {
        const subtotal = get().getSubtotal(products)
        return calculateTotal(subtotal, get().appliedDiscount)
      },

      // Wishlist methods
      addToWishlist: (productId) => {
        set((state) => {
          if (state.wishlist.includes(productId)) {
            return state
          }
          return { wishlist: [...state.wishlist, productId] }
        })
      },

      removeFromWishlist: (productId) => {
        set((state) => ({
          wishlist: state.wishlist.filter((id) => id !== productId),
        }))
      },

      isWishlisted: (productId) => {
        return get().wishlist.includes(productId)
      },

      getWishlistCount: () => {
        return get().wishlist.length
      },
    }),
    {
      name: 'cart-storage',
    }
  )
)
