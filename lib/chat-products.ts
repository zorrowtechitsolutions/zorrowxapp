export interface ChatProduct {
  id: string
  name: string
  category: 'Shoes' | 'Caps' | 'Bags' | 'Watches' | 'Sunglasses' | 'Gadgets'
  price: number
  image: string
}

export const CHAT_PRODUCTS: ChatProduct[] = [
  // Shoes
  {
    id: 'chat-shoe-1',
    name: 'White Street Sneakers',
    category: 'Shoes',
    price: 2499,
    image: '/products/06-sneakers.jpg',
  },
  {
    id: 'chat-shoe-2',
    name: 'Black Running Shoes',
    category: 'Shoes',
    price: 1999,
    image: '/products/06-sneakers.jpg',
  },

  // Caps
  {
    id: 'chat-cap-1',
    name: 'Classic Black Cap',
    category: 'Caps',
    price: 799,
    image: '/products/01-hoodie.jpg',
  },
  {
    id: 'chat-cap-2',
    name: 'Street Logo Cap',
    category: 'Caps',
    price: 999,
    image: '/products/01-hoodie.jpg',
  },

  // Bags
  {
    id: 'chat-bag-1',
    name: 'Urban Crossbody Bag',
    category: 'Bags',
    price: 1499,
    image: '/products/07-backpack.jpg',
  },
  {
    id: 'chat-bag-2',
    name: 'Premium Leather Sling',
    category: 'Bags',
    price: 2199,
    image: '/products/10-leather-bag.jpg',
  },

  // Watches
  {
    id: 'chat-watch-1',
    name: 'Minimal Watch',
    category: 'Watches',
    price: 1799,
    image: '/products/01-hoodie.jpg',
  },
  {
    id: 'chat-watch-2',
    name: 'Smart Watch Pro',
    category: 'Watches',
    price: 3499,
    image: '/products/01-hoodie.jpg',
  },

  // Sunglasses
  {
    id: 'chat-shades-1',
    name: 'Retro Black Shades',
    category: 'Sunglasses',
    price: 1299,
    image: '/products/01-hoodie.jpg',
  },
  {
    id: 'chat-shades-2',
    name: 'Polarized Street Shades',
    category: 'Sunglasses',
    price: 1999,
    image: '/products/01-hoodie.jpg',
  },

  // Gadgets
  {
    id: 'chat-gadget-1',
    name: 'Smart Fitness Band',
    category: 'Gadgets',
    price: 2999,
    image: '/products/07-backpack.jpg',
  },
  {
    id: 'chat-gadget-2',
    name: 'Wireless Earbuds Pro',
    category: 'Gadgets',
    price: 3499,
    image: '/products/07-backpack.jpg',
  },
]

export function getChatProductsByCategory(category: string): ChatProduct[] {
  return CHAT_PRODUCTS.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  )
}
