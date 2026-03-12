import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'QA AI Indonesia - AI Quality Assurance',
  description: 'Otomatisasi QA dengan AI. Generate test cases, deteksi bugs, dan jalankan testing secara otomatis.',
  keywords: 'QA, AI, Testing, Automation',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <head>
        <meta charSet="utf-8" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
      </head>
      <body className="bg-dark text-white">
        {children}
      </body>
    </html>
  )
}
