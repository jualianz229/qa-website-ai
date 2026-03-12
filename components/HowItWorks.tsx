'use client'

import { Upload, Zap, Play } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Requirements',
    description: 'Upload user stories, PRD, atau requirements. AI akan menganalisis kebutuhan Anda.',
  },
  {
    icon: Zap,
    title: 'AI Generate Tests',
    description: 'AI generate comprehensive test cases termasuk functional, edge cases, dan negative cases.',
  },
  {
    icon: Play,
    title: 'Run & Monitor',
    description: 'Jalankan automated testing dan monitor hasil real-time. Integrasi dengan CI/CD.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-dark">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Cara Kerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">QA AI</span>
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Proses sederhana untuk mengotomatisasi QA Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-slate-900 border border-slate-700 rounded-lg p-6 text-center">
                  <div className="w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon size={28} className="text-white" />
                  </div>
                  <div className="absolute -top-3 -left-3 w-7 h-7 bg-primary rounded-full flex items-center justify-center font-bold text-dark text-sm">
                    {index + 1}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-slate-400 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
