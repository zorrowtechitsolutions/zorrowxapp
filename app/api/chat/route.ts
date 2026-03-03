const DEMO_RESPONSES = {
  product: [
    'Our premium streetwear collection features emerging and established designers. Each piece is carefully curated for quality and style.',
    'We offer a wide range of sizes and colors. Check the product details page to see all available options for your desired item.',
    'Our prices are competitive and transparent. What you see is what you pay - including 18% GST.',
    'Yes, all our products come with quality assurance. We stand behind every item in our collection.',
  ],
  shipping: [
    'We offer free shipping on orders above ₹1,999! For orders below that, shipping is a flat ₹99.',
    'Most orders are delivered within 3-5 business days to major cities in India.',
    'You can track your order in the Profile section once it ships.',
  ],
  discount: [
    'Use code SAVE10 at checkout to get 10% off your order!',
    'We regularly have flash sales and special promotions. Keep an eye on the home page for updates.',
  ],
  fashion: [
    'Streetwear is all about expressing your individual style. Mix and match pieces to create your unique look.',
    'Our collection ranges from classic essentials to bold statement pieces.',
    'Layering is key in streetwear fashion. Combine hoodies with jackets, or crop tops with oversized blazers.',
  ],
  cart: [
    'Your cart totals are calculated in real-time with GST and shipping included.',
    'You can add items to your cart and they\'ll be saved. Proceed to checkout whenever you\'re ready.',
  ],
  wishlist: [
    'Save your favorite items to your wishlist for later. You can access it anytime from the bottom navigation.',
  ],
  payment: [
    'We support multiple payment methods for your convenience and security.',
    'Your checkout is secure and encrypted. Your payment information is safe with us.',
  ],
  general: [
    'Welcome to ZORROW X! How can I help you today?',
    'Feel free to ask me about products, shipping, pricing, or anything else about our platform.',
    'I\'m here to help you find the perfect streetwear pieces. What are you looking for?',
  ],
}

function getRelevantResponse(message: string): string {
  const lowerMsg = message.toLowerCase()

  if (
    lowerMsg.includes('product') ||
    lowerMsg.includes('item') ||
    lowerMsg.includes('hoodie') ||
    lowerMsg.includes('pants') ||
    lowerMsg.includes('jeans') ||
    lowerMsg.includes('shirt') ||
    lowerMsg.includes('tee') ||
    lowerMsg.includes('blazer') ||
    lowerMsg.includes('sneaker') ||
    lowerMsg.includes('bag')
  ) {
    return DEMO_RESPONSES.product[Math.floor(Math.random() * DEMO_RESPONSES.product.length)]
  }

  if (
    lowerMsg.includes('shipping') ||
    lowerMsg.includes('delivery') ||
    lowerMsg.includes('ship') ||
    lowerMsg.includes('track')
  ) {
    return DEMO_RESPONSES.shipping[Math.floor(Math.random() * DEMO_RESPONSES.shipping.length)]
  }

  if (lowerMsg.includes('discount') || lowerMsg.includes('code') || lowerMsg.includes('sale')) {
    return DEMO_RESPONSES.discount[Math.floor(Math.random() * DEMO_RESPONSES.discount.length)]
  }

  if (
    lowerMsg.includes('fashion') ||
    lowerMsg.includes('style') ||
    lowerMsg.includes('trend') ||
    lowerMsg.includes('wear') ||
    lowerMsg.includes('outfit')
  ) {
    return DEMO_RESPONSES.fashion[Math.floor(Math.random() * DEMO_RESPONSES.fashion.length)]
  }

  if (lowerMsg.includes('cart') || lowerMsg.includes('total')) {
    return DEMO_RESPONSES.cart[Math.floor(Math.random() * DEMO_RESPONSES.cart.length)]
  }

  if (lowerMsg.includes('wishlist') || lowerMsg.includes('save')) {
    return DEMO_RESPONSES.wishlist[Math.floor(Math.random() * DEMO_RESPONSES.wishlist.length)]
  }

  if (lowerMsg.includes('payment') || lowerMsg.includes('pay') || lowerMsg.includes('checkout')) {
    return DEMO_RESPONSES.payment[Math.floor(Math.random() * DEMO_RESPONSES.payment.length)]
  }

  return DEMO_RESPONSES.general[Math.floor(Math.random() * DEMO_RESPONSES.general.length)]
}

export async function POST(req: Request) {
  try {
    const { messages } = await req.json()

    if (!messages || messages.length === 0) {
      return new Response(JSON.stringify({ error: 'No messages provided' }), {
        status: 400,
        headers: { 'content-type': 'application/json' },
      })
    }

    // Get the last user message
    const lastMessage = messages[messages.length - 1]
    const userInput =
      typeof lastMessage === 'string'
        ? lastMessage
        : typeof lastMessage.content === 'string'
          ? lastMessage.content
          : ''

    // Get relevant response
    const response = getRelevantResponse(userInput)

    // Create streaming response
    const encoder = new TextEncoder()
    let currentIndex = 0

    const customReadable = new ReadableStream({
      start(controller) {
        const sendChunk = () => {
          if (currentIndex < response.length) {
            // Send one character at a time for smooth streaming
            const char = response[currentIndex]
            currentIndex++

            const sseData = `data: ${JSON.stringify({
              type: 'text-delta',
              delta: char,
            })}\n\n`

            controller.enqueue(encoder.encode(sseData))
            setTimeout(sendChunk, 30) // Small delay for streaming effect
          } else {
            // Send done marker
            controller.enqueue(encoder.encode('data: [DONE]\n\n'))
            controller.close()
          }
        }

        sendChunk()
      },
    })

    return new Response(customReadable, {
      headers: {
        'content-type': 'text/event-stream',
        'cache-control': 'no-cache',
        connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('Chat API error:', error)
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'content-type': 'application/json' },
    })
  }
}
