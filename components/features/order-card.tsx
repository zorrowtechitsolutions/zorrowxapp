'use client'

import Link from 'next/link'
import { Card } from '@/components/ui/card'

interface OrderCardProps {
  id: string
  date: string
  total: number
  status: 'Processing' | 'Shipped' | 'Delivered'
  itemCount: number
}

export function OrderCard({ id, date, total, status, itemCount }: OrderCardProps) {
  const statusColor = {
    Processing: 'text-yellow-400',
    Shipped: 'text-blue-400',
    Delivered: 'text-green-400',
  }

  const statusBg = {
    Processing: 'bg-yellow-500/20',
    Shipped: 'bg-blue-500/20',
    Delivered: 'bg-green-500/20',
  }

  return (
    <Link href={`/orders/${id}`}>
      <Card className="glass p-4 hover:bg-white/10 transition-colors cursor-pointer">
        <div className="flex items-start justify-between mb-3">
          <div>
            <p className="text-white/60 text-sm">Order ID</p>
            <p className="text-white font-mono font-semibold">{id}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusBg[status]} ${statusColor[status]}`}>
            {status}
          </span>
        </div>

        <div className="grid grid-cols-3 gap-4 text-sm">
          <div>
            <p className="text-white/60">Date</p>
            <p className="text-white">{date}</p>
          </div>
          <div>
            <p className="text-white/60">Items</p>
            <p className="text-white">{itemCount}</p>
          </div>
          <div className="text-right">
            <p className="text-white/60">Total</p>
            <p className="text-primary font-semibold">₹{total.toLocaleString('en-IN')}</p>
          </div>
        </div>
      </Card>
    </Link>
  )
}
