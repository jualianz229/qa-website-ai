'use client'

import { Upload, FileText } from 'lucide-react'
import { useState } from 'react'

export default function UploadPage() {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <div className="p-6 max-w-4xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Upload Requirements</h1>
        <p className="text-slate-400">Upload user stories, PRD, atau requirements untuk di-analyze oleh AI</p>
      </div>

      <div className="bg-slate-900 border-2 border-dashed border-slate-700 rounded-lg p-12 text-center mb-6"
        onDragOver={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
      >
        <Upload size={48} className="mx-auto mb-4 text-slate-400" />
        <h3 className="text-xl font-bold mb-2">Drag and drop files here</h3>
        <p className="text-slate-400 mb-4">atau klik untuk memilih file</p>
        <button className="btn-primary">
          Pilih File
        </button>
        <p className="text-sm text-slate-500 mt-4">
          Supported: PDF, DOCX, TXT, MD (Max 10MB)
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
        <h3 className="text-lg font-bold mb-4">Recent Uploads</h3>
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-slate-800 rounded-lg">
              <div className="flex items-center gap-3">
                <FileText size={24} className="text-primary" />
                <div>
                  <p className="font-semibold">Login Feature PRD.pdf</p>
                  <p className="text-sm text-slate-400">Uploaded 2 days ago</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-primary rounded-lg hover:bg-blue-700 transition-colors">
                Analyze
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
