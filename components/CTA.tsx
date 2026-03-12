'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-max text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Siap Mengotomatisasi QA?
        </h2>
        <p className="text-base text-slate-400 mb-6 max-w-2xl mx-auto">
          Bergabung dengan 500+ perusahaan yang menggunakan QA AI Indonesia.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/dashboard" className="btn-primary flex items-center justify-center gap-2 text-sm">
            Mulai Gratis <ArrowRight size={18} />
          </Link>
          <button className="btn-outline text-sm">
            Jadwalkan Demo
          </button>
        </div>
      </div>
    </section>
  )
}
