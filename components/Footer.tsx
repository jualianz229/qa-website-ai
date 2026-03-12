'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 font-bold text-base mb-3">
              <div className="w-7 h-7 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-xs font-bold">
                QA
              </div>
              <span>QA AI</span>
            </div>
            <p className="text-slate-400 text-xs">
              Platform AI untuk mengotomatisasi QA dan tingkatkan kualitas software.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3">Produk</h4>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li><Link href="#features" className="hover:text-white transition-colors">Fitur</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition-colors">Harga</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Dokumentasi</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3">Perusahaan</h4>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Tentang</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Karir</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm mb-3">Legal</h4>
            <ul className="space-y-1 text-slate-400 text-xs">
              <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">
            © 2024 QA AI Indonesia. Semua hak dilindungi.
          </p>
          <div className="flex gap-3">
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition-colors">
              <Twitter size={18} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
