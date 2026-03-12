'use client'

import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-dark">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-slide-up">
            <div className="inline-block mb-4 px-3 py-1 bg-slate-800 rounded-full text-xs text-secondary">
              <Zap className="inline mr-1" size={14} />
              AI-Powered QA Automation
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              QA Engineer AI untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Indonesia</span>
            </h1>
            
            <p className="text-lg text-slate-300 mb-6 leading-relaxed">
              Otomatisasi QA dengan AI. Generate test cases, deteksi bugs, dan jalankan testing secara otomatis. Hemat waktu hingga 80%.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/dashboard" className="btn-primary flex items-center justify-center gap-2 text-sm">
                Mulai Gratis <ArrowRight size={18} />
              </Link>
              <button className="btn-outline text-sm">
                Lihat Demo
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4 text-xs text-slate-400">
              <div>
                <div className="font-bold text-white text-sm">10K+</div>
                <div>Test Cases</div>
              </div>
              <div>
                <div className="font-bold text-white text-sm">500+</div>
                <div>Companies</div>
              </div>
              <div>
                <div className="font-bold text-white text-sm">80%</div>
                <div>Time Saved</div>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-xl blur-2xl opacity-15"></div>
            <div className="relative bg-slate-900 rounded-xl p-6 border border-slate-700">
              <div className="space-y-3">
                <div className="h-2 bg-slate-700 rounded w-3/4"></div>
                <div className="h-2 bg-slate-700 rounded w-full"></div>
                <div className="h-2 bg-slate-700 rounded w-5/6"></div>
                <div className="h-10 bg-gradient-primary rounded mt-4 opacity-40"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
