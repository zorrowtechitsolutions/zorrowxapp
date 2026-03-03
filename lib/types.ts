export interface Product {
  id: string
  name: string
  price: number
  image: string
  category: 'Men' | 'Women' | 'Unisex' | 'Accessories'
  size?: string[]
  color?: string[]
  description: string
  rating: number
  inStock: boolean
}

export interface CartItem {
  productId: string
  quantity: number
  size?: string
  color?: string
}

export interface Cart {
  items: CartItem[]
  appliedDiscount: string | null
}

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
}

export interface Order {
  id: string
  userId: string
  items: CartItem[]
  total: number
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered'
  createdAt: Date
}
