'use client'

import { Card } from '@/components/ui/card'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp, ShoppingBag, Users, IndianRupee } from 'lucide-react'

// Mock data for charts
const monthlySalesData = [
  { month: 'Jan', sales: 4000, revenue: 2400 },
  { month: 'Feb', sales: 3000, revenue: 1398 },
  { month: 'Mar', sales: 2000, revenue: 9800 },
  { month: 'Apr', sales: 2780, revenue: 3908 },
  { month: 'May', sales: 1890, revenue: 4800 },
  { month: 'Jun', sales: 2390, revenue: 3800 },
]

const topProducts = [
  { name: 'Premium Oversized Hoodie', sales: 1248, revenue: 43652, rating: 4.8 },
  { name: 'High Waist Jeans', sales: 1156, revenue: 38144, rating: 4.9 },
  { name: 'Leather Crossbody Bag', sales: 892, revenue: 62419, rating: 4.9 },
  { name: 'Oversized Blazer', sales: 745, revenue: 39500, rating: 4.8 },
  { name: 'Tech Backpack', sales: 634, revenue: 28518, rating: 4.7 },
]

export default function AdminPage() {
  const totalRevenue = 187200
  const totalOrders = 1248
  const averageOrderValue = 150

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">Admin Dashboard</h1>
          <p className="text-white/60">Welcome to ZORROW X Admin Portal</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white/60 font-semibold">Total Revenue</h3>
              <IndianRupee className="w-6 h-6 text-primary glow-cyan" />
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">₹{totalRevenue.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">+12.5% vs last month</span>
              </div>
            </div>
          </Card>

          <Card className="glass p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white/60 font-semibold">Total Orders</h3>
              <ShoppingBag className="w-6 h-6 text-primary glow-cyan" />
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">{totalOrders.toLocaleString()}</p>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">+8.2% vs last month</span>
              </div>
            </div>
          </Card>

          <Card className="glass p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-white/60 font-semibold">Avg Order Value</h3>
              <Users className="w-6 h-6 text-primary glow-cyan" />
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">₹{averageOrderValue}</p>
              <div className="flex items-center gap-2 mt-2">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">+5.3% vs last month</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Monthly Sales Chart */}
          <Card className="glass p-6">
            <h3 className="text-lg font-bold text-white mb-6">Monthly Sales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 11, 15, 0.95)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="sales" fill="#00f0ff" name="Orders" radius={[8, 8, 0, 0]} />
                <Bar dataKey="revenue" fill="#0dd9ff" name="Revenue (₹100s)" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Revenue Trend Chart */}
          <Card className="glass p-6">
            <h3 className="text-lg font-bold text-white mb-6">Revenue Trend</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(11, 11, 15, 0.95)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Line type="monotone" dataKey="revenue" stroke="#00f0ff" strokeWidth={2} dot={{ fill: '#00f0ff' }} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Top Products Table */}
        <Card className="glass p-6">
          <h3 className="text-lg font-bold text-white mb-6">Top Selling Products</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-4 text-white/60 font-semibold text-sm">Product</th>
                  <th className="text-right py-4 px-4 text-white/60 font-semibold text-sm">Units Sold</th>
                  <th className="text-right py-4 px-4 text-white/60 font-semibold text-sm">Revenue</th>
                  <th className="text-right py-4 px-4 text-white/60 font-semibold text-sm">Rating</th>
                </tr>
              </thead>
              <tbody>
                {topProducts.map((product, idx) => (
                  <tr key={idx} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-4 px-4 text-white text-sm">{product.name}</td>
                    <td className="py-4 px-4 text-right text-primary font-semibold text-sm">
                      {product.sales.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right text-green-400 font-semibold text-sm">
                      ₹{product.revenue.toLocaleString()}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold">
                        ⭐ {product.rating}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: 'Conversion Rate', value: '3.24%', color: 'primary' },
            { label: 'Active Users', value: '2,847', color: 'primary' },
            { label: 'Cart Abandonment', value: '24.3%', color: 'red' },
            { label: 'Customer Satisfaction', value: '4.6/5', color: 'green' },
          ].map((stat, idx) => (
            <Card key={idx} className="glass p-4">
              <p className="text-white/60 text-xs font-semibold mb-2">{stat.label}</p>
              <p
                className={`text-2xl font-bold ${
                  stat.color === 'primary'
                    ? 'text-primary'
                    : stat.color === 'green'
                      ? 'text-green-400'
                      : 'text-red-400'
                }`}
              >
                {stat.value}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
