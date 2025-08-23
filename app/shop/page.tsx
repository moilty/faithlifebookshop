import { Suspense } from 'react'
import ProductGrid from '@/components/shop/ProductGrid'
import ProductFilters from '@/components/shop/ProductFilters'
import ShopHeader from '@/components/shop/ShopHeader'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

interface ShopPageProps {
  searchParams: {
    grade?: string
    subject?: string
    format?: string
    publisher?: string
    price_min?: string
    price_max?: string
    availability?: string
    sort?: string
    page?: string
    q?: string
  }
}

export default function ShopPage({ searchParams }: ShopPageProps) {
  return (
    <div className="bg-white">
      <main className="py-4">
        <div className="container mx-auto px-2">
          {/* Shop Header */}
          <ShopHeader searchParams={searchParams} />
          
          <div className="flex flex-col lg:flex-row gap-6 mt-6">
            {/* Filters Sidebar */}
            <aside className="lg:w-64 flex-shrink-0">
              <ProductFilters />
            </aside>
            
            {/* Product Grid */}
            <div className="flex-1">
              <Suspense fallback={<LoadingSpinner />}>
                <ProductGrid searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
} 