'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { LogoutDialog } from '@/components/features/logout-dialog'

export function TopHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [isLogoutDialogOpen, setIsLogoutDialogOpen] = useState(false)
  const router = useRouter()

  const handleLogoutClick = () => {
    setIsLogoutDialogOpen(true)
  }

  const handleConfirmLogout = () => {
    localStorage.removeItem('user')
    setIsLogoutDialogOpen(false)
    setIsDropdownOpen(false)
    router.push('/')
  }

  const handleCancelLogout = () => {
    setIsLogoutDialogOpen(false)
  }

  return (
    <div className="sticky top-0 z-50 glass backdrop-blur-md border-b border-white/10">
      <div className="px-4 py-3 flex items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/home" className="flex items-center gap-2">
          <div className="bg-gradient-to-br from-primary to-primary/60 p-1.5 rounded-lg glow-cyan">
            <img src="/logo.png" alt="ZORROW X" className="w-6 h-6 object-contain" />
          </div>
          <span className="text-white font-bold text-sm hidden sm:inline">ZORROW X</span>
        </Link>

        {/* Profile Icon - Right side */}
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors relative group"
            title="Profile"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
              <User className="w-4 h-4 text-background" />
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 glass backdrop-blur-md rounded-xl border border-white/20 shadow-xl overflow-hidden">
              <Link
                href="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10"
              >
                My Profile
              </Link>
              <Link
                href="/orders"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10"
              >
                My Orders
              </Link>
              <Link
                href="/wishlist"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10"
              >
                My Wishlist
              </Link>
              <Link
                href="/profile"
                onClick={() => setIsDropdownOpen(false)}
                className="block px-4 py-3 text-white hover:bg-white/10 transition-colors border-b border-white/10"
              >
                Addresses
              </Link>
              <button
                onClick={handleLogoutClick}
                className="w-full text-left px-4 py-3 text-red-400 hover:bg-red-500/10 transition-colors flex items-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                Logout
              </button>
            </div>
          )}
        </div>
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
