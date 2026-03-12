'use client'

import Link from 'next/link'
import { 
  LayoutDashboard, 
  Upload, 
  Zap, 
  Bug, 
  BarChart3, 
  Settings,
  LogOut,
  Menu,
  X,
  Camera
} from 'lucide-react'
import { useState } from 'react'

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Upload, label: 'Upload Requirements', href: '/dashboard/upload' },
  { icon: Zap, label: 'Generate Tests', href: '/dashboard/generate' },
  { icon: Camera, label: 'Visual Testing', href: '/dashboard/visual-testing' },
  { icon: Bug, label: 'Bug Detection', href: '/dashboard/bugs' },
  { icon: BarChart3, label: 'Test Coverage', href: '/dashboard/coverage' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-slate-800 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <aside className={`fixed lg:static left-0 top-0 h-screen w-64 bg-slate-900 border-r border-slate-800 p-6 transition-transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <Link href="/" className="flex items-center gap-2 font-bold text-lg mb-8">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">QA</span>
          </div>
          <span>QA AI</span>
        </Link>

        <nav className="space-y-2 mb-8">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="border-t border-slate-800 pt-4">
          <button className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors text-slate-300 hover:text-white w-full">
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  )
}
