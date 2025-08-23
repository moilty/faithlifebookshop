'use client'

import ProductCard from '@/components/products/ProductCard'
import { products, getFeaturedProducts, getProductsByGrade, getProductsBySubject } from '@/lib/data'
import { useSearchParams } from 'next/navigation'

interface ProductGridProps {
  searchParams: Record<string, string | undefined>
}

export default function ProductGrid({ searchParams }: ProductGridProps) {
  const searchParamsHook = useSearchParams()
  
  // Check if any filters are applied
  const hasFilters = Object.keys(searchParams).some(key => 
    searchParams[key] && searchParams[key] !== ''
  )
  
  // Filter products based on search params
  let filteredProducts = products
  
  if (searchParams.grade) {
    filteredProducts = getProductsByGrade(searchParams.grade as any)
  }
  
  if (searchParams.subject) {
    filteredProducts = getProductsBySubject(searchParams.subject as any)
  }
  
  if (searchParams.query) {
    filteredProducts = filteredProducts.filter(product => 
      product.title.toLowerCase().includes(searchParams.query!.toLowerCase()) ||
      product.author.toLowerCase().includes(searchParams.query!.toLowerCase())
    )
  }

  // Sort products based on sort parameter
  if (searchParams.sort) {
    filteredProducts = [...filteredProducts].sort((a, b) => {
      switch (searchParams.sort) {
        case 'price_low':
          return (a.salePrice || a.price) - (b.salePrice || b.price)
        case 'price_high':
          return (b.salePrice || b.price) - (a.salePrice || a.price)
        default:
          // relevance - keep original order
          return 0
      }
    })
  }

  // If no filters are applied, show featured products first
  if (!hasFilters) {
    const featuredProducts = getFeaturedProducts()
    return (
      <div>
        {/* Featured Products Section */}
        <div className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">Featured Products</h2>
            <p className="text-secondary-600">Our most popular educational materials</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredProducts.map((product: any) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        {/* All Products Section */}
        <div>
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-secondary-900 mb-2">All Books</h2>
            <p className="text-secondary-600">Browse our complete collection</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {(() => {
              let allProducts = [...products]
              
                             // Apply sorting to all products when no filters are applied
               if (searchParams.sort) {
                 allProducts.sort((a, b) => {
                   switch (searchParams.sort) {
                     case 'price_low':
                       return (a.salePrice || a.price) - (b.salePrice || b.price)
                     case 'price_high':
                       return (b.salePrice || b.price) - (a.salePrice || a.price)
                     default:
                       return 0
                   }
                 })
               }
              
              return allProducts.map((product: any) => (
                <ProductCard key={product.id} product={product} />
              ))
            })()}
          </div>
        </div>
      </div>
    )
  }

  // If filters are applied but no products found
  if (filteredProducts.length === 0) {
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
          Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          {hasFilters && (
            <span> matching your criteria</span>
          )}
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product: any) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

 