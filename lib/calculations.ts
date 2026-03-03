export const calculateShipping = (subtotal: number): number => {
  return subtotal > 1999 ? 0 : 99
}

export const calculateGST = (subtotal: number): number => {
  return Math.round(subtotal * 0.18 * 100) / 100
}

export const applyDiscount = (subtotal: number, code: string | null): number => {
  if (code === 'SAVE10') {
    return Math.round(subtotal * 0.1 * 100) / 100
  }
  return 0
}

export const calculateTotal = (
  subtotal: number,
  discountCode: string | null
): {
  subtotal: number
  gst: number
  shipping: number
  discount: number
  total: number
} => {
  const gst = calculateGST(subtotal)
  const shipping = calculateShipping(subtotal)
  const discount = applyDiscount(subtotal, discountCode)
  const total = subtotal + gst + shipping - discount

  return {
    subtotal,
    gst,
    shipping,
    discount,
    total: Math.round(total * 100) / 100,
  }
}
