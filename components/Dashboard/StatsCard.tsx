'use client'

import { LucideIcon } from 'lucide-react'

interface StatsCardProps {
  icon: LucideIcon
  label: string
  value: string | number
  change?: string
  trend?: 'up' | 'down'
}

export default function StatsCard({ icon: Icon, label, value, change, trend }: StatsCardProps) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-slate-400 text-sm mb-2">{label}</p>
          <p className="text-3xl font-bold">{value}</p>
          {change && (
            <p className={`text-sm mt-2 ${trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
              {trend === 'up' ? '↑' : '↓'} {change}
            </p>
          )}
        </div>
        <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
          <Icon size={24} className="text-white" />
        </div>
      </div>
    </div>
  )
}
