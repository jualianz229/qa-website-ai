import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QA AI Indonesia - AI-Powered Quality Assurance Platform',
  description: 'Otomatisasi QA dengan AI. Generate test cases, deteksi bugs, dan jalankan regression testing secara otomatis.',
  keywords: 'QA, AI, Testing, Automation, Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
