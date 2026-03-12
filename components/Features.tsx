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
    title: 'AI Test Case Generator',
    description: 'Upload user stories, PRD, atau requirements. AI secara otomatis generate functional test cases, edge cases, negative cases, dan boundary tests.',
  },
  {
    icon: Workflow,
    title: 'Automated Regression Testing',
    description: 'AI mendeteksi code changes dan secara otomatis menjalankan regression test suites untuk memastikan tidak ada bug baru.',
  },
  {
    icon: Bug,
    title: 'AI Bug Detection',
    description: 'Analisis application behavior dan logs untuk mendeteksi potential bugs sebelum masuk ke production.',
  },
  {
    icon: BarChart3,
    title: 'Smart Test Coverage Analyzer',
    description: 'AI menganalisis bagian aplikasi mana yang kurang testing coverage dan memberikan rekomendasi.',
  },
  {
    icon: Code,
    title: 'Test Script Generator',
    description: 'Generate automated test scripts untuk Playwright, Selenium, dan Cypress secara otomatis.',
  },
  {
    icon: GitBranch,
    title: 'API Testing Automation',
    description: 'AI secara otomatis generate API tests dari OpenAPI / Swagger specifications.',
  },
  {
    icon: Zap,
    title: 'Continuous QA Monitoring',
    description: 'Integrasi dengan CI/CD pipelines untuk monitoring QA secara real-time.',
  },
  {
    icon: MessageSquare,
    title: 'AI QA Chat Assistant',
    description: 'Tanya AI: "generate test cases untuk login feature" atau "create regression tests untuk checkout flow".',
  },
]

export default function Features() {
  return (
    <section id="features" className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fitur AI QA <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Terlengkap</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Semua tools yang Anda butuhkan untuk mengotomatisasi QA dan meningkatkan kualitas software.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="bg-slate-900 border border-slate-700 rounded-xl p-6 hover:border-primary transition-colors group"
              >
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
