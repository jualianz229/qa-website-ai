'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-dark/80 backdrop-blur-md border-b border-slate-700">
      <div className="container-max flex items-center justify-between h-16 px-4">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">QA</span>
          </div>
          <span>QA AI Indonesia</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="hover:text-secondary transition">Fitur</Link>
          <Link href="#how-it-works" className="hover:text-secondary transition">Cara Kerja</Link>
          <Link href="#pricing" className="hover:text-secondary transition">Harga</Link>
          <Link href="/dashboard" className="btn-primary">Mulai Gratis</Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-dark border-b border-slate-700 p-4 space-y-4">
          <Link href="#features" className="block hover:text-secondary">Fitur</Link>
          <Link href="#how-it-works" className="block hover:text-secondary">Cara Kerja</Link>
          <Link href="#pricing" className="block hover:text-secondary">Harga</Link>
          <Link href="/dashboard" className="btn-primary block text-center">Mulai Gratis</Link>
        </div>
      )}
    </nav>
  )
}
