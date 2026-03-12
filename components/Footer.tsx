'use client'

import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container-max section-padding">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 font-bold text-lg mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">QA</span>
              </div>
              <span>QA AI Indonesia</span>
            </div>
            <p className="text-slate-400 text-sm">
              Platform AI untuk mengotomatisasi Quality Assurance dan meningkatkan kualitas software.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Produk</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#features" className="hover:text-white transition">Fitur</Link></li>
              <li><Link href="#pricing" className="hover:text-white transition">Harga</Link></li>
              <li><Link href="#" className="hover:text-white transition">Dokumentasi</Link></li>
              <li><Link href="#" className="hover:text-white transition">API</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Perusahaan</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#" className="hover:text-white transition">Tentang Kami</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Karir</Link></li>
              <li><Link href="#" className="hover:text-white transition">Kontak</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><Link href="#" className="hover:text-white transition">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition">Security</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 QA AI Indonesia. Semua hak dilindungi.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-slate-400 hover:text-white transition">
              <Github size={20} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">
              <Linkedin size={20} />
            </Link>
            <Link href="#" className="text-slate-400 hover:text-white transition">
              <Twitter size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
