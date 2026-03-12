'use client'

import { Save } from 'lucide-react'
import { useState } from 'react'

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    companyName: 'PT Tech Indonesia',
    email: 'admin@techindo.com',
    testFramework: 'playwright',
    cicdIntegration: 'github',
    notifications: true,
  })

  return (
    <div className="p-6 max-w-2xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-slate-400">Manage your account and preferences</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-6">
        <div>
          <label className="block font-semibold mb-2">Company Name</label>
          <input
            type="text"
            value={settings.companyName}
            onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Email</label>
          <input
            type="email"
            value={settings.email}
            onChange={(e) => setSettings({ ...settings, email: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Default Test Framework</label>
          <select
            value={settings.testFramework}
            onChange={(e) => setSettings({ ...settings, testFramework: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
          >
            <option value="playwright">Playwright</option>
            <option value="selenium">Selenium</option>
            <option value="cypress">Cypress</option>
          </select>
        </div>

        <div>
          <label className="block font-semibold mb-2">CI/CD Integration</label>
          <select
            value={settings.cicdIntegration}
            onChange={(e) => setSettings({ ...settings, cicdIntegration: e.target.value })}
            className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 text-white"
          >
            <option value="github">GitHub</option>
            <option value="gitlab">GitLab</option>
            <option value="jenkins">Jenkins</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={(e) => setSettings({ ...settings, notifications: e.target.checked })}
            className="w-4 h-4"
          />
          <label className="font-semibold">Enable Email Notifications</label>
        </div>

        <button className="btn-primary w-full flex items-center justify-center gap-2">
          <Save size={20} />
          Save Settings
        </button>
      </div>
    </div>
  )
}
