'use client'

import Link from 'next/link'
import { ArrowRight, Zap } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-gradient-dark">
      <div className="container-max">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 bg-slate-800 rounded-full text-sm text-secondary">
              <Zap className="inline mr-2" size={16} />
              AI-Powered QA Automation
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              QA Engineer AI untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Indonesia</span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Otomatisasi Quality Assurance dengan AI OpenAi goolge. Generate test cases, deteksi bugs, dan jalankan regression testing secara otomatis. Hemat waktu dan biaya QA hingga 80%.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/dashboard" className="btn-primary flex items-center justify-center gap-2">
                Mulai Gratis <ArrowRight size={20} />
              </Link>
              <button className="btn-outline">
                Lihat Demo
              </button>
            </div>

            <div className="flex gap-8 text-sm text-slate-400">
              <div>
                <div className="font-bold text-white">10,000+</div>
                <div>Test Cases Generated</div>
              </div>
              <div>
                <div className="font-bold text-white">500+</div>
                <div>Companies Using</div>
              </div>
              <div>
                <div className="font-bold text-white">80%</div>
                <div>Time Saved</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20"></div>
            <div className="relative bg-slate-900 rounded-2xl p-8 border border-slate-700">
              <div className="space-y-4">
                <div className="h-3 bg-slate-700 rounded w-3/4"></div>
                <div className="h-3 bg-slate-700 rounded w-full"></div>
                <div className="h-3 bg-slate-700 rounded w-5/6"></div>
                <div className="h-12 bg-gradient-primary rounded mt-6 opacity-50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
