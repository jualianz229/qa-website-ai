'use client'

import { AlertCircle, CheckCircle, Clock } from 'lucide-react'

const bugs = [
  {
    id: 1,
    title: 'Login button not responding on mobile',
    severity: 'high',
    status: 'open',
    date: '2 hours ago',
  },
  {
    id: 2,
    title: 'Password field accepts special characters',
    severity: 'medium',
    status: 'in-progress',
    date: '5 hours ago',
  },
  {
    id: 3,
    title: 'Email validation regex issue',
    severity: 'low',
    status: 'resolved',
    date: '1 day ago',
  },
]

export default function BugsPage() {
  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Bug Detection</h1>
        <p className="text-slate-400">AI-detected bugs dari automated testing</p>
      </div>

      <div className="space-y-4">
        {bugs.map((bug) => (
          <div key={bug.id} className="bg-slate-900 border border-slate-800 rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                {bug.severity === 'high' && (
                  <AlertCircle size={24} className="text-red-400 flex-shrink-0 mt-1" />
                )}
                {bug.severity === 'medium' && (
                  <AlertCircle size={24} className="text-yellow-400 flex-shrink-0 mt-1" />
                )}
                {bug.severity === 'low' && (
                  <AlertCircle size={24} className="text-blue-400 flex-shrink-0 mt-1" />
                )}
                <div>
                  <h3 className="font-bold text-lg mb-2">{bug.title}</h3>
                  <p className="text-slate-400 text-sm">{bug.date}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  bug.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                  bug.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/20 text-blue-400'
                }`}>
                  {bug.severity.charAt(0).toUpperCase() + bug.severity.slice(1)}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                  bug.status === 'open' ? 'bg-slate-700 text-slate-300' :
                  bug.status === 'in-progress' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {bug.status === 'open' ? 'Open' :
                   bug.status === 'in-progress' ? 'In Progress' :
                   'Resolved'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
