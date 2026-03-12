'use client'

import { Zap, Bug, BarChart3, Code } from 'lucide-react'
import StatsCard from '@/components/Dashboard/StatsCard'
import Link from 'next/link'

export default function DashboardPage() {
  return (
    <div className="p-6 space-y-6">
      <div className="grid md:grid-cols-4 gap-4">
        <StatsCard
          icon={Zap}
          label="Test Cases Generated"
          value="1,234"
          change="12% dari minggu lalu"
          trend="up"
        />
        <StatsCard
          icon={Bug}
          label="Bugs Detected"
          value="45"
          change="8% dari minggu lalu"
          trend="down"
        />
        <StatsCard
          icon={BarChart3}
          label="Test Coverage"
          value="87%"
          change="5% improvement"
          trend="up"
        />
        <StatsCard
          icon={Code}
          label="Automated Tests"
          value="892"
          change="23% dari bulan lalu"
          trend="up"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Recent Test Runs</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-slate-800 rounded-lg">
                <div>
                  <p className="font-semibold">Login Feature Tests</p>
                  <p className="text-sm text-slate-400">2 hours ago</p>
                </div>
                <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-semibold">
                  Passed
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <Link
              href="/dashboard/upload"
              className="block p-4 bg-gradient-primary rounded-lg hover:opacity-90 transition-opacity text-center font-semibold"
            >
              Upload Requirements
            </Link>
            <Link
              href="/dashboard/generate"
              className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center font-semibold"
            >
              Generate Test Cases
            </Link>
            <Link
              href="/dashboard/bugs"
              className="block p-4 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors text-center font-semibold"
            >
              View Bug Reports
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
