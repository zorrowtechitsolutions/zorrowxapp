'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, Tv, Search, Heart, ShoppingBag, User } from 'lucide-react'
import { useCartStore } from '@/lib/store'

export function BottomNavigation() {
  const pathname = usePathname()
  const cartItems = useCartStore((state) => state.items)
  const cartCount = cartItems.length

  const isActive = (path: string) => pathname?.startsWith(path)

  const navItems = [
    { icon: Tv, label: 'Feed', href: '/feed', badge: null },
    { icon: Home, label: 'Home', href: '/home', badge: null },
    { icon: Search, label: 'Explore', href: '/explore', badge: null },
    { icon: Heart, label: 'Wishlist', href: '/wishlist', badge: null },
    { icon: ShoppingBag, label: 'Cart', href: '/cart', badge: cartCount > 0 ? cartCount : null },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-md border-t border-white/10 z-40">
      <div className="flex items-center justify-around">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href}>
            <button
              className={`flex flex-col items-center justify-center w-16 h-16 relative transition-all duration-300 ${
                isActive(item.href) ? 'text-primary' : 'text-white/60 hover:text-white/80'
              }`}
            >
              <item.icon className="w-6 h-6" />
              {item.badge !== null && (
                <span className="absolute top-2 right-2 bg-primary text-background text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </button>
          </Link>
        ))}
      </div>
    </nav>
  )
}
