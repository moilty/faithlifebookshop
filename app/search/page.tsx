'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'

function SearchContent() {
  const params = useSearchParams()
  const q = params.get('q') || ''

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Search</h1>
          <p className="mt-2 text-white/90">Results for: {q || 'All'}</p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-16">
        <div className="text-secondary-600">Search results coming soon.</div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-primary text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold">Search</h1>
            <p className="mt-2 text-white/90">Loading...</p>
          </div>
        </div>
        <div className="container mx-auto px-4 py-16">
          <div className="text-secondary-600">Loading search results...</div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
