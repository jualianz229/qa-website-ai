'use client'

import { 
  Zap, 
  Brain, 
  Bug, 
  BarChart3, 
  Code, 
  Workflow,
  MessageSquare,
  GitBranch
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Test Generator',
    description: 'Generate functional, edge, dan negative test cases otomatis dari requirements.',
  },
  {
    icon: Workflow,
    title: 'Regression Testing',
    description: 'Deteksi code changes dan jalankan regression tests secara otomatis.',
  },
  {
    icon: Bug,
    title: 'Bug Detection',
    description: 'Analisis behavior dan logs untuk deteksi bugs sebelum production.',
  },
  {
    icon: BarChart3,
    title: 'Coverage Analyzer',
    description: 'Analisis coverage dan rekomendasi testing untuk bagian yang kurang.',
  },
  {
    icon: Code,
    title: 'Test Script Generator',
    description: 'Generate test scripts untuk Playwright, Selenium, Cypress otomatis.',
  },
  {
    icon: GitBranch,
    title: 'API Testing',
    description: 'Generate API tests dari OpenAPI / Swagger specifications.',
  },
  {
    icon: Zap,
    title: 'CI/CD Monitoring',
    description: 'Integrasi dengan CI/CD untuk monitoring QA real-time.',
  },
  {
    icon: MessageSquare,
    title: 'QA Chat Assistant',
    description: 'Tanya AI untuk generate test cases atau regression tests.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Fitur AI QA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Terlengkap</span>
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Semua tools untuk mengotomatisasi QA dan tingkatkan kualitas software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-lg p-5 hover:border-primary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-200">
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-base font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
