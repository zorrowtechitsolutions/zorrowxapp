'use client'

import { useState, useRef, useEffect } from 'react'
import { ArrowLeft, Send } from 'lucide-react'
import { Input } from '@/components/ui/input'

interface Message {
  id: string
  text: string
  sender: 'user' | 'ai'
}

interface AIMobileSheetProps {
  isOpen: boolean
  onClose: () => void
}

const QUICK_SUGGESTIONS = [
  'Styling tips',
  'Size guide',
  'Trending items',
  'Care tips',
]

export function AIMobileSheet({ isOpen, onClose }: AIMobileSheetProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hey! I\'m your ZORROW AI fashion mentor. What can I help you with today?',
      sender: 'ai',
    },
  ])
  const [input, setInput] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
    }

    setMessages((prev) => [...prev, userMessage])
    setInput('')

    // AI response simulation
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: 'Great question! Let me help you with that.',
        sender: 'ai',
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 500)
  }

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0,0,0,0.25)',
          backdropFilter: 'blur(6px)',
          zIndex: 9998,
        }}
        onClick={onClose}
      />

      {/* Bottom Sheet */}
      <div
        style={{
          position: 'fixed',
          left: 0,
          right: 0,
          bottom: 0,
          height: '75vh',
          background: 'rgba(18,18,18,0.98)',
          borderTopLeftRadius: '22px',
          borderTopRightRadius: '22px',
          boxShadow: '0 -10px 40px rgba(0,0,0,0.5)',
          zIndex: 9999,
          animation: 'slideUp 0.3s ease',
          display: 'flex',
          flexDirection: 'column',
          '@keyframes slideUp': {
            from: { transform: 'translateY(100%)' },
            to: { transform: 'translateY(0)' },
          },
        }}
      >
        {/* Drag Handle */}
        <div
          style={{
            width: '40px',
            height: '4px',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.3)',
            margin: '10px auto 0',
          }}
        />

        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px',
            background: 'rgba(0,150,150,0.1)',
            borderBottom: '1px solid rgba(0,150,150,0.3)',
          }}
        >
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'rgba(255,255,255,0.6)',
              cursor: 'pointer',
              padding: '4px',
              transition: 'color 0.2s'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'white')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div style={{ textAlign: 'center', flex: 1 }}>
            <p style={{ fontSize: '14px', fontWeight: 'bold', color: 'white', margin: 0 }}>
              ZORROW AI
            </p>
            <p style={{ fontSize: '12px', color: 'rgba(0,150,150,0.8)', margin: '2px 0 0' }}>
              Fashion Mentor
            </p>
          </div>
          <div style={{ width: '20px' }} />
        </div>

        {/* Messages */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {messages.map((msg) => (
            <div
              key={msg.id}
              style={{
                display: 'flex',
                justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              }}
            >
              <div
                style={{
                  maxWidth: '80%',
                  padding: '12px 16px',
                  borderRadius: '18px',
                  background:
                    msg.sender === 'user'
                      ? 'rgba(0,150,150,0.8)'
                      : 'rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '14px',
                  lineHeight: '1.4',
                  borderBottomRightRadius: msg.sender === 'user' ? '4px' : '18px',
                  borderBottomLeftRadius: msg.sender === 'user' ? '18px' : '4px',
                }}
              >
                {msg.text}
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Suggestions */}
        <div style={{ padding: '12px 16px', borderTop: '1px solid rgba(0,150,150,0.3)' }}>
          <div
            style={{
              display: 'flex',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            {QUICK_SUGGESTIONS.map((suggestion) => (
              <button
                key={suggestion}
                onClick={() =>
                  setMessages((prev) => [
                    ...prev,
                    {
                      id: Date.now().toString(),
                      text: suggestion,
                      sender: 'user',
                    },
                  ])
                }
                style={{
                  padding: '6px 12px',
                  fontSize: '12px',
                  borderRadius: '16px',
                  border: '1px solid rgba(0,150,150,0.4)',
                  background: 'rgba(0,150,150,0.2)',
                  color: 'rgba(0,150,150,1)',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.background = 'rgba(0,150,150,0.4)'
                  (e.currentTarget).style.borderColor = 'rgba(0,150,150,0.6)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.background = 'rgba(0,150,150,0.2)'
                  (e.currentTarget).style.borderColor = 'rgba(0,150,150,0.4)'
                }}
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <form
          onSubmit={handleSendMessage}
          style={{
            display: 'flex',
            gap: '8px',
            padding: '12px 16px',
            borderTop: '1px solid rgba(0,150,150,0.3)',
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me..."
            style={{
              flex: 1,
              padding: '10px 14px',
              borderRadius: '12px',
              border: '1px solid rgba(0,150,150,0.3)',
              background: 'rgba(255,255,255,0.05)',
              color: 'white',
              fontSize: '14px',
              outline: 'none',
              transition: 'all 0.2s',
              boxSizing: 'border-box'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,150,150,0.6)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)'
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,150,150,0.3)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '10px 16px',
              borderRadius: '12px',
              border: 'none',
              background: 'rgba(0,150,150,0.8)',
              color: 'white',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.background = 'rgba(0,150,150,1)'
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.background = 'rgba(0,150,150,0.8)'
            }}
          >
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  )
}
