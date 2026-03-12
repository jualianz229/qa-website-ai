'use client'

import { Upload, Zap, Play } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload Requirements',
    description: 'Upload user stories, PRD, atau requirements dalam format apapun. AI akan menganalisis dan memahami kebutuhan Anda.',
  },
  {
    icon: Zap,
    title: 'AI Generate Tests',
    description: 'AI secara otomatis generate comprehensive test cases termasuk functional, edge cases, negative cases, dan boundary tests.',
  },
  {
    icon: Play,
    title: 'Run & Monitor',
    description: 'Jalankan automated testing dan monitor hasil secara real-time. Integrasi dengan CI/CD untuk continuous testing.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Cara Kerja <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">QA AI</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Proses yang sederhana namun powerful untuk mengotomatisasi QA Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={index} className="relative">
                <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon size={32} className="text-white" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-dark">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-slate-400">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-1 bg-gradient-to-r from-primary to-secondary"></div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
