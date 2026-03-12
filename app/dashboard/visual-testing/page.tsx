'use client'

import { useState } from 'react'
import { Camera, Download, Trash2, Play, CheckCircle, AlertCircle } from 'lucide-react'

interface Viewport {
  name: string
  width: number
  height: number
  device?: string
}

interface TestResult {
  id: string
  name: string
  viewport: Viewport
  status: 'pending' | 'passed' | 'failed' | 'running'
  baselineImage?: string
  currentImage?: string
  diff?: number
  timestamp: string
}

const VIEWPORTS: Viewport[] = [
  { name: 'Mobile (iPhone 12)', width: 390, height: 844, device: 'iPhone 12' },
  { name: 'Mobile (iPhone SE)', width: 375, height: 667, device: 'iPhone SE' },
  { name: 'Mobile (Android)', width: 412, height: 915, device: 'Pixel 5' },
  { name: 'Tablet (iPad)', width: 768, height: 1024, device: 'iPad' },
  { name: 'Tablet (iPad Pro)', width: 1024, height: 1366, device: 'iPad Pro' },
  { name: 'Desktop (1280px)', width: 1280, height: 720 },
  { name: 'Desktop (1920px)', width: 1920, height: 1080 },
  { name: 'Desktop (2560px)', width: 2560, height: 1440 },
  { name: 'Laptop (MacBook)', width: 1440, height: 900, device: 'MacBook Pro' },
  { name: 'Ultra-wide (3440px)', width: 3440, height: 1440 },
]

const PAGES_TO_TEST = [
  { id: 'homepage', name: 'Homepage', url: '/' },
  { id: 'features', name: 'Features Page', url: '/#features' },
  { id: 'pricing', name: 'Pricing Page', url: '/#pricing' },
  { id: 'dashboard', name: 'Dashboard', url: '/dashboard' },
]

export default function VisualTestingPage() {
  const [selectedViewports, setSelectedViewports] = useState<Viewport[]>([VIEWPORTS[5]]) // Default: Desktop 1280px
  const [selectedPages, setSelectedPages] = useState<string[]>(['homepage'])
  const [isRunning, setIsRunning] = useState(false)
  const [testResults, setTestResults] = useState<TestResult[]>([])

  const toggleViewport = (viewport: Viewport) => {
    setSelectedViewports((prev) =>
      prev.some((v) => v.width === viewport.width && v.height === viewport.height)
        ? prev.filter((v) => !(v.width === viewport.width && v.height === viewport.height))
        : [...prev, viewport]
    )
  }

  const togglePage = (pageId: string) => {
    setSelectedPages((prev) =>
      prev.includes(pageId) ? prev.filter((p) => p !== pageId) : [...prev, pageId]
    )
  }

  const handleRunTests = async () => {
    setIsRunning(true)
    
    // Simulate test execution
    const newResults: TestResult[] = []
    let resultId = 0

    for (const pageId of selectedPages) {
      for (const viewport of selectedViewports) {
        const result: TestResult = {
          id: `test-${resultId++}`,
          name: PAGES_TO_TEST.find((p) => p.id === pageId)?.name || pageId,
          viewport,
          status: 'running',
          timestamp: new Date().toLocaleString(),
        }
        newResults.push(result)
      }
    }

    setTestResults(newResults)

    // Simulate test completion
    setTimeout(() => {
      setTestResults((prev) =>
        prev.map((result) => ({
          ...result,
          status: Math.random() > 0.2 ? 'passed' : 'failed',
          diff: Math.random() > 0.2 ? 0 : Math.floor(Math.random() * 5) + 1,
        }))
      )
      setIsRunning(false)
    }, 3000)
  }

  const passedTests = testResults.filter((r) => r.status === 'passed').length
  const failedTests = testResults.filter((r) => r.status === 'failed').length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold mb-2">Visual Regression Testing</h1>
        <p className="text-slate-400">
          Test visual consistency across different viewports and devices
        </p>
      </div>

      {/* Configuration Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Pages Selection */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <Camera size={20} />
            Pages to Test
          </h3>
          <div className="space-y-2">
            {PAGES_TO_TEST.map((page) => (
              <label key={page.id} className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors">
                <input
                  type="checkbox"
                  checked={selectedPages.includes(page.id)}
                  onChange={() => togglePage(page.id)}
                  className="w-4 h-4 rounded"
                />
                <span className="font-medium">{page.name}</span>
                <span className="text-xs text-slate-500 ml-auto">{page.url}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Viewport Selection */}
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Viewports ({selectedViewports.length})</h3>
          <div className="space-y-2 max-h-96 overflow-y-auto">
            {VIEWPORTS.map((viewport) => (
              <label
                key={`${viewport.width}-${viewport.height}`}
                className="flex items-center gap-3 p-3 hover:bg-slate-800 rounded-lg cursor-pointer transition-colors"
              >
                <input
                  type="checkbox"
                  checked={selectedViewports.some(
                    (v) => v.width === viewport.width && v.height === viewport.height
                  )}
                  onChange={() => toggleViewport(viewport)}
                  className="w-4 h-4 rounded"
                />
                <div className="flex-1">
                  <div className="font-medium">{viewport.name}</div>
                  <div className="text-xs text-slate-500">
                    {viewport.width}x{viewport.height}
                    {viewport.device && ` • ${viewport.device}`}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Test Summary */}
      {testResults.length > 0 && (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Total Tests</p>
            <p className="text-3xl font-bold">{testResults.length}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Passed</p>
            <p className="text-3xl font-bold text-green-400">{passedTests}</p>
          </div>
          <div className="bg-slate-900 border border-slate-800 rounded-lg p-4">
            <p className="text-slate-400 text-sm mb-1">Failed</p>
            <p className="text-3xl font-bold text-red-400">{failedTests}</p>
          </div>
        </div>
      )}

      {/* Run Button */}
      <button
        onClick={handleRunTests}
        disabled={isRunning || selectedPages.length === 0 || selectedViewports.length === 0}
        className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Play size={20} />
        {isRunning ? 'Running Tests...' : 'Run Visual Tests'}
      </button>

      {/* Test Results */}
      {testResults.length > 0 && (
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <h3 className="text-lg font-bold mb-4">Test Results</h3>
          <div className="space-y-3 max-h-96 overflow-y-auto">
            {testResults.map((result) => (
              <div
                key={result.id}
                className={`p-4 rounded-lg border transition-colors ${
                  result.status === 'passed'
                    ? 'bg-green-500/10 border-green-500/30'
                    : result.status === 'failed'
                    ? 'bg-red-500/10 border-red-500/30'
                    : result.status === 'running'
                    ? 'bg-blue-500/10 border-blue-500/30'
                    : 'bg-slate-800 border-slate-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      {result.status === 'passed' && (
                        <CheckCircle size={18} className="text-green-400" />
                      )}
                      {result.status === 'failed' && (
                        <AlertCircle size={18} className="text-red-400" />
                      )}
                      {result.status === 'running' && (
                        <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
                      )}
                      <span className="font-semibold">{result.name}</span>
                    </div>
                    <div className="text-sm text-slate-400">
                      {result.viewport.name} • {result.timestamp}
                    </div>
                    {result.diff !== undefined && result.diff > 0 && (
                      <div className="text-sm text-red-400 mt-1">
                        Visual difference: {result.diff}%
                      </div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                      <Download size={16} />
                    </button>
                    <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Info Section */}
      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
        <p className="text-sm text-blue-300">
          💡 <strong>Tip:</strong> Visual regression testing compares screenshots across different viewports to detect layout shifts, CSS issues, and UI changes. Run tests regularly to catch visual bugs before they reach production.
        </p>
      </div>
    </div>
  )
}
