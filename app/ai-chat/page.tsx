'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Send, Mic } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { AIProductCard } from '@/components/features/ai-product-card'
import { useCartStore } from '@/lib/store'
import { PRODUCTS } from '@/lib/mock-data'

interface Message {
  id: string
  type: 'user' | 'ai'
  content: string
  products?: typeof PRODUCTS
}

const QUICK_SUGGESTIONS = [
  { label: 'Show Trending', preset: 'Show me trending products' },
  { label: 'Build My Outfit', preset: 'Help me build an outfit' },
  { label: 'Party Look', preset: 'Suggest a party look outfit' },
  { label: 'Minimal Look', preset: 'Suggest a minimal/minimalist outfit' },
  { label: 'Under ₹2000', preset: 'Show me products under 2000 rupees' },
  { label: 'Accessories Match', preset: 'Suggest accessories to match my items' },
]

export default function AIChatPage() {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hey there! I'm your AI Style Guardian 👋 I'm here to help you build the perfect outfit, find amazing pieces, and stay within budget. What can I help you with today?",
    },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const cartItems = useCartStore((state) => state.items)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getProductSuggestions = (message: string): typeof PRODUCTS => {
    const lower = message.toLowerCase()

    if (lower.includes('trending')) {
      return PRODUCTS.slice(0, 3)
    }

    if (lower.includes('outfit') && lower.includes('party')) {
      return PRODUCTS.filter((p) => ['Women', 'Unisex'].includes(p.category)).slice(0, 4)
    }

    if (lower.includes('outfit') || lower.includes('minimal')) {
      return PRODUCTS.filter((p) => p.price < 3000).slice(0, 3)
    }

    if (lower.includes('2000') || lower.includes('under')) {
      return PRODUCTS.filter((p) => p.price < 2000)
    }

    if (lower.includes('accessories')) {
      return PRODUCTS.filter((p) => p.category === 'Accessories').slice(0, 3)
    }

    if (lower.includes('cargo') || lower.includes('pants')) {
      return PRODUCTS.filter((p) => p.category === 'Men').slice(0, 2)
    }

    return []
  }

  const getAIResponse = (message: string): { response: string; products: typeof PRODUCTS } => {
    const lower = message.toLowerCase()
    const cart = cartItems
    let response = ''
    let products: typeof PRODUCTS = []

    if (lower.includes('trending')) {
      response =
        "Here are our trending pieces right now! These are flying off the shelves. The Premium Oversized Hoodie and Urban Cargo Pants are absolute favorites this season. Check them out! 🔥"
      products = getProductSuggestions(message)
    } else if (lower.includes('outfit') && lower.includes('party')) {
      response =
        "For a killer party look, you need confidence and the right pieces! I'd suggest pairing a statement oversized blazer with some high-waist jeans or cargo pants. Add those canvas sneakers for an edgy vibe, or go bold with accessories. Want me to show you some options?"
      products = getProductSuggestions(message)
    } else if ((lower.includes('outfit') || lower.includes('build')) && !lower.includes('party')) {
      response =
        "Let's build something amazing! First, what's your vibe? Are you going for:\n• Casual streetwear\n• Minimalist/clean\n• Bold & statement-making\n• Comfortable & cozy\n\nTell me more and I'll curate the perfect pieces for you!"
      products = getProductSuggestions(message)
    } else if (lower.includes('minimal')) {
      response =
        "Minimalist looks are all about clean lines and timeless pieces. Think oversized silhouettes, neutral colors, and quality basics. Here are some perfect pieces for a minimal aesthetic that won't break the bank!"
      products = getProductSuggestions(message)
    } else if (lower.includes('2000') || (lower.includes('under') && lower.includes('price'))) {
      response =
        "Budget-conscious? I love it! You can build an amazing wardrobe under ₹2000. Here are some awesome pieces that give maximum style for minimum price:"
      products = getProductSuggestions(message)
    } else if (lower.includes('accessories')) {
      if (cart.length > 0) {
        response = `I see you have ${cart.length} items in your cart! Let me suggest some accessories that would pair perfectly with what you've already picked. These will elevate your whole look! 💎`
      } else {
        response = "Accessories are the secret sauce to any outfit! They can totally transform a basic look into something special. Here are some amazing pieces to consider:"
      }
      products = getProductSuggestions(message)
    } else if (lower.includes('hoodie') || lower.includes('jacket') || lower.includes('blazer')) {
      response = "Great choice! Layering pieces are essential. Here's what I'd recommend to go with that:"
      products = PRODUCTS.filter((p) => ['Unisex', 'Women', 'Men'].includes(p.category)).slice(0, 3)
    } else if (lower.includes('budget')) {
      response =
        "Let's talk budget! What's your price range? I can help you find amazing pieces that fit your wallet and your style. Give me a number and I'll work some magic! 💰"
    } else if (lower.includes('style') || lower.includes('vibe')) {
      response =
        "Tell me about your style! Are you more:\n• Streetwear & edgy\n• Minimalist & clean\n• Bold & experimental\n• Comfort-first\n\nOnce I know your vibe, I can make better recommendations!"
    } else if (input.length === 0) {
      response = 'What would you like help with? Ask me about trending items, outfit ideas, or just tell me your style vibe!'
    } else {
      response =
        "I love your interest! Based on what you're asking, let me suggest some pieces that might work for you. Want me to help you build a complete outfit or focus on specific pieces?"
      products = PRODUCTS.slice(0, 3)
    }

    return { response, products }
  }

  const handleQuickSuggestion = (preset: string) => {
    setInput(preset)
    handleSubmit(preset)
  }

  const handleSubmit = async (messageText?: string) => {
    const text = messageText || input
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: text,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    // Simulate AI thinking
    await new Promise((resolve) => setTimeout(resolve, 800))

    const { response, products } = getAIResponse(text)

    const aiMessage: Message = {
      id: (Date.now() + 1).toString(),
      type: 'ai',
      content: response,
      products: products.length > 0 ? products : undefined,
    }

    setMessages((prev) => [...prev, aiMessage])
    setIsLoading(false)
  }

  return (
    <div className="fixed inset-0 bg-background flex flex-col z-50">
      {/* Header */}
      <div className="glass border-b border-primary/20 px-4 py-4 flex items-center gap-3">
        <button onClick={() => router.back()} className="p-2 hover:bg-white/10 rounded-lg transition-colors">
          <ArrowLeft className="w-5 h-5 text-primary" />
        </button>
        <div>
          <h1 className="text-lg font-bold text-white">AI Style Guardian</h1>
          <p className="text-xs text-primary/80">Premium Fashion Assistant</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div
              className={`max-w-xs ${
                msg.type === 'user'
                  ? 'bg-primary text-background rounded-3xl rounded-tr-sm px-4 py-2'
                  : 'glass rounded-3xl rounded-tl-sm px-4 py-2'
              }`}
            >
              <p className="text-sm whitespace-pre-wrap">{msg.content}</p>

              {msg.products && msg.products.length > 0 && (
                <div className="mt-3 space-y-2">
                  {msg.products.map((product) => (
                    <AIProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="glass rounded-3xl rounded-tl-sm px-4 py-3">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.1s' }} />
                <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }} />
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Suggestions */}
      <div className="px-4 py-3 border-t border-primary/20 overflow-x-auto">
        <div className="flex gap-2 min-w-min">
          {QUICK_SUGGESTIONS.map((btn) => (
            <button
              key={btn.label}
              onClick={() => handleQuickSuggestion(btn.preset)}
              disabled={isLoading}
              className="glass px-3 py-2 rounded-full text-xs font-medium text-primary whitespace-nowrap hover:bg-primary/20 transition-colors disabled:opacity-50"
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Input Area */}
      <div className="glass border-t border-primary/20 p-4">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSubmit()}
            placeholder="Ask about styles, outfits, products..."
            className="flex-1 bg-white/5 border-primary/30 text-white placeholder:text-white/40 focus:border-primary/60"
            disabled={isLoading}
          />
          <Button
            onClick={() => handleSubmit()}
            disabled={!input.trim() || isLoading}
            className="h-10 w-10 p-0 bg-primary hover:bg-primary/90 text-background"
          >
            <Send className="w-4 h-4" />
          </Button>
          <button className="h-10 w-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-primary transition-colors">
            <Mic className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
