'use client'

import { Check } from 'lucide-react'
import Link from 'next/link'

const plans = [
  {
    name: 'Starter',
    price: 'Rp 299.000',
    period: '/bulan',
    description: 'Untuk tim kecil dan startup',
    features: [
      'Hingga 100 test cases/bulan',
      'AI Test Case Generator',
      'Basic bug detection',
      'Email support',
      'Integrasi GitHub',
      'Dashboard analytics',
    ],
    cta: 'Mulai Gratis',
    highlighted: false,
  },
  {
    name: 'Growth',
    price: 'Rp 999.000',
    period: '/bulan',
    description: 'Untuk startup dan perusahaan berkembang',
    features: [
      'Unlimited test cases',
      'Semua fitur Starter',
      'Advanced bug detection',
      'Regression testing automation',
      'API testing automation',
      'Test coverage analyzer',
      'Integrasi Jira & Slack',
      'Priority support',
      'Custom integrations',
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
      'Advanced security & compliance',
      'SLA guarantee 99.9%',
      'Custom integrations',
      '24/7 phone support',
      'Training & onboarding',
    ],
    cta: 'Hubungi Sales',
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-dark">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Harga yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Terjangkau</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan tim Anda. Semua paket include free trial 14 hari.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border transition-all ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-primary scale-105 shadow-2xl'
                  : 'bg-slate-900 border-slate-700 hover:border-slate-600'
              }`}
            >
              <div className="p-8">
                {plan.highlighted && (
                  <div className="inline-block mb-4 px-3 py-1 bg-primary text-white text-xs font-bold rounded-full">
                    PALING POPULER
                  </div>
                )}
                
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-slate-400 ml-2">{plan.period}</span>
                </div>

                <Link
                  href="/dashboard"
                  className={`block text-center py-3 rounded-lg font-semibold mb-8 transition-colors ${
                    plan.highlighted
                      ? 'btn-primary'
                      : 'btn-outline'
                  }`}
                >
                  {plan.cta}
                </Link>

                <div className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-400">
            Semua paket include 14 hari free trial. Tidak perlu kartu kredit.
          </p>
        </div>
      </div>
    </section>
  )
}
