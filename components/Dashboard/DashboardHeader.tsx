'use client'

import { Bell, User } from 'lucide-react'

export default function DashboardHeader() {
  return (
    <header className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400 text-sm">Selamat datang kembali, User</p>
      </div>
      
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
          <Bell size={20} className="text-slate-400" />
        </button>
        <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
          <User size={20} className="text-slate-400" />
        </button>
      </div>
    </header>
  )
}
