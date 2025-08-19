'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function NotFound() {
  useEffect(() => {
    // Add class to body for complete header/footer hiding
    document.body.classList.add('hide-header-footer')
    
    // Cleanup on unmount
    return () => {
      document.body.classList.remove('hide-header-footer')
    }
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-secondary hide-header-footer">
      <div className="text-center px-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-600 text-white text-3xl font-bold mb-6">
          404
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">Page not found</h1>
        <p className="text-secondary-600 max-w-md mx-auto mb-8">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center">
            Go Home
          </Link>
          <Link href="/shop" className="btn-outline inline-flex items-center justify-center">
            Browse Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

