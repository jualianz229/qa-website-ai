'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark/95 backdrop-blur-sm border-b border-slate-700/50">
      <div className="container-max flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-sm font-bold">
            QA
          </div>
          <span className="hidden sm:inline">QA AI</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm hover:text-secondary transition-colors">Fitur</Link>
          <Link href="#how-it-works" className="text-sm hover:text-secondary transition-colors">Cara Kerja</Link>
          <Link href="#pricing" className="text-sm hover:text-secondary transition-colors">Harga</Link>
          <Link href="/dashboard" className="btn-primary text-sm">Mulai</Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark border-b border-slate-700/50 p-4 space-y-3 animate-fade-in">
          <Link href="#features" className="block text-sm hover:text-secondary transition-colors">Fitur</Link>
          <Link href="#how-it-works" className="block text-sm hover:text-secondary transition-colors">Cara Kerja</Link>
          <Link href="#pricing" className="block text-sm hover:text-secondary transition-colors">Harga</Link>
          <Link href="/dashboard" className="btn-primary block text-center text-sm">Mulai Gratis</Link>
        </div>
      )}
    </nav>
  )
}
