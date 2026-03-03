'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function RootPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('user')
    if (user) {
      router.replace('/home')
    } else {
      router.replace('/splash')
    }
  }, [router])

  return null
}
