'use client'

import { ReactNode } from 'react'

interface GlassModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export function GlassModal({ isOpen, onClose, children }: GlassModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="modalOverlay"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.35)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
      }}
    >
      <div
        className="modalCard"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '90%',
          maxWidth: '420px',
          padding: '28px',
          borderRadius: '24px',
          background: 'rgba(25,25,25,0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255,255,255,0.15)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
        }}
      >
        {children}
      </div>
    </div>
  )
}
