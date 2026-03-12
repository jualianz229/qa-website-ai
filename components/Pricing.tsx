'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 'Rp 299K',
    period: '/bulan',
    description: 'Untuk tim kecil',
    features: [
      'Hingga 100 test cases/bulan',
      'AI Test Case Generator',
      'Basic bug detection',
      'Email support',
      'GitHub integration',
      'Dashboard analytics',
    ],
    cta: 'Mulai Gratis',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'Rp 999K',
    period: '/bulan',
    description: 'Untuk startup & perusahaan',
    features: [
      'Unlimited test cases',
      'Semua fitur Starter',
      'Advanced bug detection',
      'Regression testing',
      'API testing automation',
      'Coverage analyzer',
      'Jira & Slack integration',
      'Priority support',
    ],
    cta: 'Mulai Gratis',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'Hubungi sales',
    description: 'Untuk perusahaan besar',
    features: [
      'Semua fitur Growth',
      'Dedicated account manager',
      'Custom AI models',
      'On-premise deployment',
      'Advanced security',
      'SLA 99.9%',
      'Custom integrations',
      '24/7 support',
    ],
    cta: 'Hubungi Sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Harga <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Terjangkau</span>
          </h2>
          <p className="text-base text-slate-400 max-w-2xl mx-auto">
            Pilih paket sesuai kebutuhan. Semua paket include free trial 14 hari.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary scale-105 shadow-lg'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="p-6">
                {plan.highlighted && (
                  <div className="inline-block mb-3 px-2 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    POPULER
                  </div>
                )}
                
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-xs mb-4">{plan.description}</p>
                
                <div className="mb-5">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="text-slate-400 text-sm ml-2">{plan.period}</span>
                </div>

                <Link
                  href="/dashboard"
                  className={`block text-center py-2 rounded-lg font-semibold mb-6 text-sm transition-colors ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-400 text-sm">
            14 hari free trial. Tidak perlu kartu kredit.
          </p>
        </div>
      </div>
    </section>
  )
}
