'use client'

import { useToastStore } from '@/lib/toast-store'
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react'

export function ToastNotifications() {
  const { toasts, removeToast } = useToastStore()

  return (
    <div className="fixed bottom-24 right-4 z-50 space-y-2 pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto glass p-4 rounded-lg border border-primary/30 flex items-center gap-3 animate-in slide-in-from-right-5 duration-300"
        >
          {toast.type === 'success' && <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />}
          {toast.type === 'error' && <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
          {toast.type === 'info' && <Info className="w-5 h-5 text-primary flex-shrink-0" />}

          <span className="text-white text-sm font-medium">{toast.message}</span>

          <button
            onClick={() => removeToast(toast.id)}
            className="ml-2 text-white/60 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  )
}
