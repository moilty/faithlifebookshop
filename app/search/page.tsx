'use client'

import { Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { searchProducts } from '@/lib/data'
import ProductCard from '@/components/products/ProductCard'

function SearchContent() {
  const params = useSearchParams()
  const q = params.get('q') || ''

  const searchResults = searchProducts(q)

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-primary text-white py-16">
        <div className="container mx-auto px-2">
          <h1 className="text-4xl md:text-5xl font-bold">Search</h1>
          <p className="mt-2 text-white/90">Results for: {q || 'All'}</p>
        </div>
      </div>
      <div className="container mx-auto px-2 py-16">
        {searchResults.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
            <p className="mt-1 text-sm text-gray-500">
              {q ? `No products found for "${q}". Try a different search term.` : 'Search for products to get started.'}
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found
              </h2>
              {q && (
                <p className="text-gray-600">Showing results for "{q}"</p>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {searchResults.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white">
        <div className="bg-gradient-primary text-white py-16">
                  <div className="container mx-auto px-2">
          <h1 className="text-4xl md:text-5xl font-bold">Search</h1>
          <p className="mt-2 text-white/90">Loading...</p>
        </div>
        </div>
        <div className="container mx-auto px-2 py-16">
          <div className="text-secondary-600">Loading search results...</div>
        </div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
