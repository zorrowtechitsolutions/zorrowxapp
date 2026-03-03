'use client'

import { LogOut, AlertCircle } from 'lucide-react'
import { GlassModal } from '@/components/ui/glass-modal'

interface LogoutDialogProps {
  isOpen: boolean
  onConfirm: () => void
  onCancel: () => void
}

export function LogoutDialog({ isOpen, onConfirm, onCancel }: LogoutDialogProps) {
  return (
    <GlassModal isOpen={isOpen} onClose={onCancel}>
      {/* Icon */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '16px',
        }}
      >
        <div
          style={{
            background: 'rgba(239,68,68,0.2)',
            padding: '12px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AlertCircle className="w-6 h-6" style={{ color: 'rgba(248,113,113,1)' }} />
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: '20px',
        }}
      >
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: '8px',
          }}
        >
          Logout?
        </h2>
        <p
          style={{
            fontSize: '14px',
            color: 'rgba(255,255,255,0.7)',
            margin: 0,
          }}
        >
          Are you sure you want to logout from ZORROW X?
        </p>
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          gap: '12px',
          marginTop: '20px',
        }}
      >
        <button
          onClick={onCancel}
          style={{
            flex: 1,
            padding: '12px',
            height: '48px',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '12px',
            background: 'transparent',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(255,255,255,0.1)'
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'transparent'
          }}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          style={{
            flex: 1,
            padding: '12px',
            height: '48px',
            border: 'none',
            borderRadius: '12px',
            background: 'rgba(239,68,68,0.9)',
            color: 'white',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(239,68,68,1)'
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = 'rgba(239,68,68,0.9)'
          }}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </GlassModal>
  )
}
