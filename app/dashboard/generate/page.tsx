'use client'

import { Zap, Copy, Download } from 'lucide-react'
import { useState } from 'react'

export default function GeneratePage() {
  const [testCases, setTestCases] = useState<string[]>([])
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setTimeout(() => {
      setTestCases([
        'Test Case 1: Valid Login with Correct Credentials',
        'Test Case 2: Invalid Login with Wrong Password',
        'Test Case 3: Login with Empty Email Field',
        'Test Case 4: Login with Invalid Email Format',
        'Test Case 5: Login with SQL Injection Attempt',
      ])
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Generate Test Cases</h1>
        <p className="text-slate-400">AI akan generate comprehensive test cases dari requirements Anda</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 mb-6">
        <label className="block mb-4">
          <span className="font-semibold mb-2 block">Select Requirement</span>
          <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white">
            <option>Login Feature PRD</option>
            <option>Checkout Flow</option>
            <option>User Profile</option>
          </select>
        </label>

        <label className="block mb-6">
          <span className="font-semibold mb-2 block">Test Framework</span>
          <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white">
            <option>Playwright</option>
            <option>Selenium</option>
            <option>Cypress</option>
          </select>
        </label>

        <button
          onClick={handleGenerate}
          disabled={isGenerating}
          className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
        >
          <Zap size={20} />
          {isGenerating ? 'Generating...' : 'Generate Test Cases'}
        </button>
      </div>

      {testCases.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold">Generated Test Cases ({testCases.length})</h3>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Copy size={20} />
              </button>
              <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors">
                <Download size={20} />
              </button>
            </div>
          </div>

          <div className="space-y-3">
            {testCases.map((testCase, index) => (
              <div key={index} className="p-4 bg-slate-800 rounded-lg border border-slate-700">
                <p className="font-semibold">{testCase}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
