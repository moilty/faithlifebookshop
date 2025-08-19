'use client'

import { useQuery } from 'react-query'
import ProductCard from '@/components/products/ProductCard'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import { useSearchParams } from 'next/navigation'

interface ProductGridProps {
  searchParams: Record<string, string | undefined>
}

export default function ProductGrid({ searchParams }: ProductGridProps) {
  const searchParamsHook = useSearchParams()
  
  const { data, isLoading, error } = useQuery(
    ['products', searchParams],
    async () => {
      const params = new URLSearchParams(searchParamsHook)
      const response = await fetch(`/api/products?${params.toString()}`)
      if (!response.ok) throw new Error('Failed to fetch products')
      return response.json()
    },
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  )

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" />
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-secondary-600 mb-4">Failed to load products</p>
        <button 
          onClick={() => window.location.reload()}
          className="btn-primary"
        >
          Try Again
        </button>
      </div>
    )
  }

  const { products, pagination } = data || { products: [], pagination: null }

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">📚</div>
        <h3 className="text-xl font-semibold text-secondary-900 mb-2">
          No products found
        </h3>
        <p className="text-secondary-600 mb-6">
          Try adjusting your filters or search terms
        </p>
        <button 
          onClick={() => window.location.href = '/shop'}
          className="btn-primary"
        >
          Clear Filters
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Results Count */}
      <div className="mb-6">
        <p className="text-secondary-600">
          Showing {pagination?.page || 1} of {pagination?.totalPages || 1} pages
          {pagination?.total && ` (${pagination.total} products)`}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination */}
      {pagination && pagination.totalPages > 1 && (
        <div className="mt-12 flex justify-center">
          <Pagination pagination={pagination} searchParams={searchParams} />
        </div>
      )}
    </div>
  )
}

function Pagination({ pagination, searchParams }: { pagination: any, searchParams: any }) {
  const currentPage = pagination.page
  const totalPages = pagination.totalPages

  const getPageUrl = (page: number) => {
    const params = new URLSearchParams(searchParams)
    params.set('page', page.toString())
    return `/shop?${params.toString()}`
  }

  const renderPageNumbers = () => {
    const pages = []
    const maxVisible = 5
    let start = Math.max(1, currentPage - Math.floor(maxVisible / 2))
    let end = Math.min(totalPages, start + maxVisible - 1)

    if (end - start + 1 < maxVisible) {
      start = Math.max(1, end - maxVisible + 1)
    }

    for (let i = start; i <= end; i++) {
      pages.push(i)
    }

    return pages
  }

  return (
    <nav className="flex items-center space-x-2">
      {/* Previous */}
      {currentPage > 1 && (
        <a
          href={getPageUrl(currentPage - 1)}
          className="px-3 py-2 text-sm border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        >
          Previous
        </a>
      )}

      {/* Page Numbers */}
      {renderPageNumbers().map((page) => (
        <a
          key={page}
          href={getPageUrl(page)}
          className={`px-3 py-2 text-sm border rounded-lg transition-colors ${
            page === currentPage
              ? 'bg-primary-600 text-white border-primary-600'
              : 'border-secondary-300 hover:bg-secondary-50'
          }`}
        >
          {page}
        </a>
      ))}

      {/* Next */}
      {currentPage < totalPages && (
        <a
          href={getPageUrl(currentPage + 1)}
          className="px-3 py-2 text-sm border border-secondary-300 rounded-lg hover:bg-secondary-50 transition-colors"
        >
          Next
        </a>
      )}
    </nav>
  )
} 