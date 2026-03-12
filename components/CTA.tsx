'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="section-padding bg-gradient-dark">
      <div className="container-max text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Siap Mengotomatisasi QA Anda?
        </h2>
        <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
          Bergabunglah dengan 500+ perusahaan yang sudah menggunakan QA AI Indonesia untuk meningkatkan kualitas software mereka.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/dashboard" className="btn-primary flex items-center justify-center gap-2">
            Mulai Gratis Sekarang <ArrowRight size={20} />
          </Link>
          <button className="btn-outline">
            Jadwalkan Demo
          </button>
        </div>
      </div>
    </section>
  )
}
