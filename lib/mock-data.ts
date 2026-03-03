import { Product } from './types'

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Oversized Hoodie',
    price: 3499,
    image: '/products/01-hoodie.jpg',
    category: 'Men',
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black', 'White', 'Gray'],
    description: 'Premium oversized hoodie with embroidered logo. 100% organic cotton blend.',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '2',
    name: 'Urban Cargo Pants',
    price: 2999,
    image: '/products/02-cargo-pants.jpg',
    category: 'Men',
    size: ['28', '30', '32', '34', '36'],
    color: ['Black', 'Olive', 'Gray'],
    description: 'Tactical cargo pants with multiple pockets. Perfect for streetwear aesthetics.',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '3',
    name: 'Crop Top Tee',
    price: 1499,
    image: '/products/03-crop-top.jpg',
    category: 'Women',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['White', 'Black', 'Pink'],
    description: 'Minimalist crop top with reinforced stitching. Perfect for layering.',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '4',
    name: 'High Waist Jeans',
    price: 3299,
    image: '/products/04-jeans.jpg',
    category: 'Women',
    size: ['24', '26', '28', '30', '32'],
    color: ['Dark Indigo', 'Light Blue', 'Black'],
    description: 'Premium denim with perfect fit. Ethically sourced cotton.',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '5',
    name: 'Unisex Windbreaker',
    price: 2699,
    image: '/products/05-windbreaker.jpg',
    category: 'Unisex',
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black', 'Neon Green', 'Electric Blue'],
    description: 'Water-resistant windbreaker with hidden pockets. Perfect for outdoor activities.',
    rating: 4.5,
    inStock: true,
  },
  {
    id: '6',
    name: 'Classic Canvas Sneakers',
    price: 1999,
    image: '/products/06-sneakers.jpg',
    category: 'Accessories',
    size: ['5', '6', '7', '8', '9', '10', '11', '12'],
    color: ['White', 'Black', 'Navy'],
    description: 'Timeless canvas sneakers with rubber sole. Versatile and comfortable.',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '7',
    name: 'Tech Backpack',
    price: 4499,
    image: '/products/07-backpack.jpg',
    category: 'Accessories',
    color: ['Black', 'Gray'],
    description: 'Smart tech backpack with USB charging port. Multiple compartments for organization.',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '8',
    name: 'Oversized Blazer',
    price: 5299,
    image: '/products/08-blazer.jpg',
    category: 'Women',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['Black', 'White', 'Camel'],
    description: 'Statement oversized blazer. Perfect for power dressing.',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '9',
    name: 'Vintage Band Tee',
    price: 1299,
    image: '/products/09-band-tee.jpg',
    category: 'Unisex',
    size: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black', 'Dark Gray'],
    description: 'Authentic vintage band merchandise. Limited edition.',
    rating: 4.4,
    inStock: true,
  },
  {
    id: '10',
    name: 'Leather Crossbody Bag',
    price: 6999,
    image: '/products/10-leather-bag.jpg',
    category: 'Accessories',
    color: ['Black', 'Brown', 'Tan'],
    description: 'Genuine leather crossbody bag with adjustable strap. Timeless design.',
    rating: 4.9,
    inStock: true,
  },
  // MEN'S APPAREL
  {
    id: '11',
    name: 'Classic Crew Neck T-Shirt',
    price: 999,
    image: '/products/11-tshirt.jpg',
    category: 'Men',
    size: ['S', 'M', 'L', 'XL', 'XXL'],
    color: ['Black', 'White', 'Navy'],
    description: 'Premium 100% cotton crew neck t-shirt. Essential for any wardrobe.',
    rating: 4.7,
    inStock: true,
  },
  {
    id: '12',
    name: 'Denim Jacket',
    price: 4499,
    image: '/products/12-denim-jacket.jpg',
    category: 'Men',
    size: ['S', 'M', 'L', 'XL'],
    color: ['Dark Blue', 'Light Blue', 'Black'],
    description: 'Classic denim jacket with button closure. Timeless streetwear piece.',
    rating: 4.8,
    inStock: true,
  },
  // WOMEN'S APPAREL
  {
    id: '13',
    name: 'Women\'s Oversized Hoodie',
    price: 3299,
    image: '/products/13-womens-hoodie.jpg',
    category: 'Women',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['Black', 'Pink', 'White'],
    description: 'Comfortable oversized hoodie perfect for casual wear.',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '14',
    name: 'Women\'s Leather Jacket',
    price: 7499,
    image: '/products/14-womens-jacket.jpg',
    category: 'Women',
    size: ['XS', 'S', 'M', 'L', 'XL'],
    color: ['Black', 'Brown', 'Red'],
    description: 'Premium leather jacket for the ultimate streetwear look.',
    rating: 4.9,
    inStock: true,
  },
  // SHOES
  {
    id: '15',
    name: 'Running Sneakers Pro',
    price: 5999,
    image: '/products/15-running-shoes.jpg',
    category: 'Shoes',
    size: ['5', '6', '7', '8', '9', '10', '11', '12'],
    color: ['Black', 'White', 'Blue'],
    description: 'High-performance running shoes with cushioned sole.',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '16',
    name: 'Casual Leather Shoes',
    price: 3999,
    image: '/products/16-casual-shoes.jpg',
    category: 'Shoes',
    size: ['6', '7', '8', '9', '10', '11', '12'],
    color: ['Black', 'Brown', 'Tan'],
    description: 'Versatile casual leather shoes for everyday wear.',
    rating: 4.7,
    inStock: true,
  },
  // CAPS
  {
    id: '17',
    name: 'Classic Baseball Cap',
    price: 1299,
    image: '/products/17-baseball-cap.jpg',
    category: 'Caps',
    color: ['Black', 'White', 'Navy'],
    description: 'Timeless baseball cap with adjustable strap.',
    rating: 4.6,
    inStock: true,
  },
  {
    id: '18',
    name: 'Street Logo Cap',
    price: 1599,
    image: '/products/18-logo-cap.jpg',
    category: 'Caps',
    color: ['Black', 'Gray', 'Khaki'],
    description: 'Embroidered logo cap perfect for streetwear style.',
    rating: 4.7,
    inStock: true,
  },
  // ACCESSORIES
  {
    id: '19',
    name: 'Stainless Steel Watch',
    price: 4999,
    image: '/products/19-watch.jpg',
    category: 'Accessories',
    color: ['Silver', 'Gold', 'Black'],
    description: 'Premium stainless steel watch with leather strap.',
    rating: 4.8,
    inStock: true,
  },
  {
    id: '20',
    name: 'Classic Sunglasses',
    price: 2999,
    image: '/products/20-sunglasses.jpg',
    category: 'Accessories',
    color: ['Black', 'Brown', 'Gold'],
    description: 'UV protection sunglasses with polarized lenses.',
    rating: 4.7,
    inStock: true,
  },
  // GADGETS
  {
    id: '21',
    name: 'Wireless Earbuds Pro',
    price: 5499,
    image: '/products/21-earbuds.jpg',
    category: 'Gadgets',
    color: ['Black', 'White', 'Silver'],
    description: 'Premium wireless earbuds with active noise cancellation.',
    rating: 4.9,
    inStock: true,
  },
  {
    id: '22',
    name: 'Smart Fitness Band',
    price: 3499,
    image: '/products/22-fitness-band.jpg',
    category: 'Gadgets',
    color: ['Black', 'Blue', 'Pink'],
    description: 'Track your fitness with this advanced smart band.',
    rating: 4.6,
    inStock: true,
  },
]

export const DISCOUNT_CODES = {
  SAVE10: 0.1, // 10% off
}

export const getProductsByCategory = (category: string): Product[] => {
  return PRODUCTS.filter((p) => p.category === category)
}

export const getTrendingProducts = (): Product[] => {
  return PRODUCTS.filter((p) => p.rating && p.rating >= 4.7).slice(0, 8)
}

export const getAIRecommendedProducts = (): Product[] => {
  return PRODUCTS.sort(() => Math.random() - 0.5).slice(0, 4)
}

export const getFlashSaleProducts = (): Product[] => {
  return PRODUCTS.slice(0, 3)
}

export const getCategoryTrending = (category: string): Product[] => {
  return PRODUCTS.filter((p) => p.category === category && p.rating && p.rating >= 4.7).slice(0, 6)
}

export const getAllCategories = (): string[] => {
  return ['Men', 'Women', 'Shoes', 'Caps', 'Accessories', 'Gadgets']
}
