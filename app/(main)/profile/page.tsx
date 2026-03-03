'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { LogOut, Heart, Package, Settings, Award, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProductCard } from '@/components/features/product-card'
import { LogoutDialog } from '@/components/features/logout-dialog'
import { useCartStore } from '@/lib/store'
import { PRODUCTS } from '@/lib/mock-data'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<{ email: string; name: string } | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)
  const wishlistIds = useCartStore((state) => state.wishlist)
  const removeFromWishlist = useCartStore((state) => state.removeFromWishlist)
  const [wishlisted, setWishlisted] = useState<Set<string>>(new Set())

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id))

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setWishlisted(new Set(wishlistIds))
    setMounted(true)
  }, [wishlistIds])

  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true)
  }

  const handleConfirmLogout = () => {
    localStorage.removeItem('user')
    setIsLogoutDialogOpen(false)
    router.push('/')
  }

  const handleCancelLogout = () => {
    setIsLogoutDialogOpen(false)
  }

  if (!mounted) return null

  return (
    <div className="w-full bg-background pb-24">
      {/* Header with User Info */}
      <div className="glass backdrop-blur-md p-6 border-b border-white/10 sticky top-16 z-30">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center flex-shrink-0">
            <span className="text-2xl font-bold text-background">{user?.name?.charAt(0).toUpperCase() || 'U'}</span>
          </div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-white">{user?.name || 'User'}</h1>
            <p className="text-white/60 text-sm">{user?.email}</p>
            <p className="text-white/60 text-sm">+91 98765 43210</p>
          </div>
          <button
            onClick={handleLogoutClick}
            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5 text-red-400" />
          </button>
        </div>
      </div>

      <div className="px-4 py-6 space-y-6">
        {/* User Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="glass p-4 text-center space-y-2">
            <p className="text-2xl font-bold text-primary">0</p>
            <p className="text-white/60 text-xs">Orders</p>
          </Card>
          <Card className="glass p-4 text-center space-y-2">
            <p className="text-2xl font-bold text-primary">{wishlistIds.length}</p>
            <p className="text-white/60 text-xs">Wishlist</p>
          </Card>
          <Card className="glass p-4 text-center space-y-2">
            <p className="text-2xl font-bold text-primary">0</p>
            <p className="text-white/60 text-xs">Points</p>
          </Card>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-2 gap-3">
          <Link href="/orders">
            <Card className="glass p-4 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Package className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-white font-semibold text-sm">My Orders</p>
                  <p className="text-white/60 text-xs">View order history</p>
                </div>
              </div>
            </Card>
          </Link>
          <Link href="/wishlist">
            <Card className="glass p-4 hover:bg-white/10 transition-colors cursor-pointer">
              <div className="flex items-center gap-3">
                <Heart className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-white font-semibold text-sm">My Wishlist</p>
                  <p className="text-white/60 text-xs">{wishlistIds.length} items saved</p>
                </div>
              </div>
            </Card>
          </Link>
          <Card className="glass p-4 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary" />
              <div>
                <p className="text-white font-semibold text-sm">Addresses</p>
                <p className="text-white/60 text-xs">Manage addresses</p>
              </div>
            </div>
          </Card>
          <Card className="glass p-4 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="flex items-center gap-3">
              <Settings className="w-6 h-6 text-primary" />
              <div>
                <p className="text-white font-semibold text-sm">Settings</p>
                <p className="text-white/60 text-xs">Account settings</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Sections */}
        <Tabs defaultValue="wishlist" className="space-y-4">
          <TabsList className="grid grid-cols-2 w-full bg-white/5 border border-white/10">
            <TabsTrigger value="info" className="flex items-center gap-2">
              <Settings className="w-4 h-4" />
              <span className="hidden sm:inline">Profile Info</span>
            </TabsTrigger>
            <TabsTrigger value="wishlist" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Wishlist</span>
            </TabsTrigger>
          </TabsList>

          {/* Profile Info Tab */}
          <TabsContent value="info">
            <div className="space-y-4">
              <Card className="glass p-4">
                <label className="text-white/60 text-sm block mb-2">Full Name</label>
                <p className="text-white font-semibold">{user?.name}</p>
              </Card>
              <Card className="glass p-4">
                <label className="text-white/60 text-sm block mb-2">Email Address</label>
                <p className="text-white font-semibold">{user?.email}</p>
              </Card>
              <Card className="glass p-4">
                <label className="text-white/60 text-sm block mb-2">Phone Number</label>
                <p className="text-white font-semibold">+91 98765 43210</p>
              </Card>
              <Button className="w-full bg-primary/20 text-primary hover:bg-primary/30">
                Edit Profile
              </Button>
            </div>
          </TabsContent>

          {/* Wishlist Tab */}
          <TabsContent value="wishlist">
            {wishlistProducts.length === 0 ? (
              <Card className="glass p-6 space-y-4 text-center py-12">
                <Heart className="w-12 h-12 text-white/30 mx-auto" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">No Saved Items</h3>
                  <p className="text-white/60 text-sm mb-4">
                    Your wishlist is empty. Add items to save them for later!
                  </p>
                </div>
                <Link href="/explore">
                  <Button className="bg-primary text-background hover:bg-primary/90">
                    Browse Products
                  </Button>
                </Link>
              </Card>
            ) : (
              <div className="space-y-4">
                <p className="text-white/60 text-sm">
                  {wishlistProducts.length} item{wishlistProducts.length !== 1 ? 's' : ''} saved
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {wishlistProducts.map((product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      onWishlistToggle={(id) => removeFromWishlist(id)}
                      isWishlisted={wishlisted.has(product.id)}
                    />
                  ))}
                </div>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Logout Confirmation Dialog */}
      <LogoutDialog
        isOpen={isLogoutDialogOpen}
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </div>
  )
}
