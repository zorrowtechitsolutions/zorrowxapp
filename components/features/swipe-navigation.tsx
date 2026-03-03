'use client'

import { useRouter, usePathname } from 'next/navigation'
import { useSwipeable } from 'react-swipeable'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SWIPE_ROUTES = ['/home', '/explore', '/wishlist', '/cart', '/profile']

export function SwipeNavigation({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const pathname = usePathname()
  const [isMobile, setIsMobile] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('left')

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleSwipe = useSwipeable({
    onSwipedLeft: () => {
      if (!isMobile) return
      
      const currentIndex = SWIPE_ROUTES.indexOf(pathname)
      if (currentIndex < SWIPE_ROUTES.length - 1) {
        setSlideDirection('left')
        router.push(SWIPE_ROUTES[currentIndex + 1])
      }
    },
    onSwipedRight: () => {
      if (!isMobile) return
      
      const currentIndex = SWIPE_ROUTES.indexOf(pathname)
      if (currentIndex > 0) {
        setSlideDirection('right')
        router.push(SWIPE_ROUTES[currentIndex - 1])
      }
    },
    trackMouse: false,
    trackTouch: true,
    preventScrollOnSwipe: false,
  })

  return (
    <div {...handleSwipe} className="w-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{
            opacity: 0,
            x: slideDirection === 'left' ? 100 : -100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          exit={{
            opacity: 0,
            x: slideDirection === 'left' ? -100 : 100,
          }}
          transition={{
            duration: 0.25,
            ease: 'easeInOut',
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
