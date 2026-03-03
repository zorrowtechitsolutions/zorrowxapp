'use client'

import { useState } from 'react'
import { Package } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { OrderCard } from '@/components/features/order-card'

// Mock orders data
const MOCK_ORDERS = [
  {
    id: 'ZX20240315001',
    date: 'Mar 15, 2024',
    total: 4299,
    status: 'Delivered' as const,
    itemCount: 3,
  },
  {
    id: 'ZX20240310002',
    date: 'Mar 10, 2024',
    total: 2899,
    status: 'Delivered' as const,
    itemCount: 2,
  },
  {
    id: 'ZX20240305003',
    date: 'Mar 5, 2024',
    total: 5499,
    status: 'Shipped' as const,
    itemCount: 4,
  },
  {
    id: 'ZX20240228004',
    date: 'Feb 28, 2024',
    total: 1999,
    status: 'Processing' as const,
    itemCount: 1,
  },
]

export default function OrdersPage() {
  const [selectedStatus, setSelectedStatus] = useState<'All' | 'Processing' | 'Shipped' | 'Delivered'>('All')

  const filteredOrders = selectedStatus === 'All' ? MOCK_ORDERS : MOCK_ORDERS.filter((o) => o.status === selectedStatus)

  return (
    <div className="min-h-screen pb-6">
      {/* Header */}
      <div className="px-4 py-6 space-y-4">
        <h1 className="text-3xl font-bold text-white">My Orders</h1>
        <p className="text-white/60">{filteredOrders.length} order(s)</p>
      </div>

      {/* Filter Tabs */}
      <div className="px-4 pb-6 flex gap-2 overflow-x-auto">
        {['All', 'Processing', 'Shipped', 'Delivered'].map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status as any)}
            className={`px-4 py-2 rounded-full whitespace-nowrap font-semibold transition-all ${
              selectedStatus === status
                ? 'bg-primary text-background'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Orders List */}
      <div className="px-4 space-y-3">
        {filteredOrders.length === 0 ? (
          <Card className="glass p-12 text-center space-y-4">
            <Package className="w-16 h-16 text-white/30 mx-auto" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">No Orders</h3>
              <p className="text-white/60">You haven't placed any orders yet.</p>
            </div>
          </Card>
        ) : (
          filteredOrders.map((order) => (
            <OrderCard
              key={order.id}
              id={order.id}
              date={order.date}
              total={order.total}
              status={order.status}
              itemCount={order.itemCount}
            />
          ))
        )}
      </div>
    </div>
  )
}
