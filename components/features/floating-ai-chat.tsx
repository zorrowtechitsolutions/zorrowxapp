'use client'

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { Send, X, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { DefaultChatTransport } from 'ai'

export function FloatingAIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [localInput, setLocalInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!localInput.trim()) return

    // Manually append user message and send
    const userMessage = localInput
    setLocalInput('')

    // Send the message using the transport
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          ...messages,
          { role: 'user', content: userMessage },
        ],
      }),
    })

    if (!response.ok) return

    const reader = response.body?.getReader()
    if (!reader) return

    const decoder = new TextDecoder()
    let result = ''

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value)
      result += chunk
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center glow-cyan group"
        aria-label="Open AI chat"
      >
        <MessageCircle className="w-6 h-6 text-background group-hover:scale-110 transition-transform" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 h-96 glass rounded-2xl border border-primary/30 shadow-2xl flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary/20 to-primary/10 p-4 border-b border-primary/20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20BLACK-yB7HIicMbQzXydfB7VmtUQlW1tNjME.png" 
                alt="ZORROW X" 
                className="w-6 h-6"
              />
              <div>
                <h3 className="text-sm font-bold text-white">ZORROW X</h3>
                <p className="text-xs text-primary/80">AI Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white transition-colors p-1"
              aria-label="Close chat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-background/50 scrollbar-hide">
            {messages.length === 0 ? (
              <div className="flex items-center justify-center h-full text-center text-white/50 text-sm">
                <div className="space-y-3">
                  <img 
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/LOGO%20BLACK-yB7HIicMbQzXydfB7VmtUQlW1tNjME.png" 
                    alt="ZORROW X" 
                    className="w-12 h-12 mx-auto opacity-60"
                  />
                  <div>
                    <p className="font-bold mb-2 text-white">ZORROW X Assistant</p>
                    <p className="text-xs text-white/60">Ask me about products, pricing, shipping, and more. I'm here to help!</p>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {messages.map((message, index) => {
                  const isUser = message.role === 'user'
                  const content = 'content' in message ? message.content : ''
                  
                  return (
                    <div
                      key={index}
                      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs px-3 py-2 rounded-lg text-sm break-words ${
                          isUser
                            ? 'bg-primary text-background rounded-br-none'
                            : 'bg-white/10 text-white/90 rounded-bl-none border border-primary/20'
                        }`}
                      >
                        {content}
                      </div>
                    </div>
                  )
                })}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-white/10 text-white/90 border border-primary/20 px-3 py-2 rounded-lg text-sm">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-100" />
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-200" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Input Area */}
          <form onSubmit={handleFormSubmit} className="border-t border-primary/20 p-3 bg-background/50">
            <div className="flex gap-2">
              <Input
                value={localInput}
                onChange={(e) => setLocalInput(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 h-9 text-sm bg-white/5 border-primary/30 text-white placeholder:text-white/40 focus:border-primary/60"
                disabled={isLoading}
              />
              <Button
                type="submit"
                size="sm"
                className="h-9 w-9 p-0 bg-primary hover:bg-primary/90 text-background"
                disabled={isLoading || !localInput.trim()}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </form>
        </Card>
      )}
    </>
  )
}
