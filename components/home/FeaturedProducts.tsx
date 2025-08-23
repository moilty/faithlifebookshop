'use client'

import { useState, useRef } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ProductCard from '@/components/products/ProductCard'
import { getFeaturedProducts } from '@/lib/data'

export default function FeaturedProducts() {
  const products = getFeaturedProducts()
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const checkScrollButtons = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0"
        onScroll={checkScrollButtons}
      >
        <div className="flex space-x-6 pb-4 min-w-max">
          {products.map((product: any) => (
            <div key={product.id} className="flex-shrink-0 w-64 md:w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className={`hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-secondary-200 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 ${
          canScrollLeft 
            ? 'hover:bg-secondary-50 cursor-pointer' 
            : 'opacity-50 cursor-not-allowed'
        }`}
        aria-label="Previous products"
      >
        <ChevronLeftIcon className="h-5 w-5 text-secondary-600" />
      </button>
      
      <button
        onClick={scrollRight}
        disabled={!canScrollRight}
        className={`hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-secondary-200 rounded-full p-2 shadow-md hover:shadow-lg transition-all duration-200 ${
          canScrollRight 
            ? 'hover:bg-secondary-50 cursor-pointer' 
            : 'opacity-50 cursor-not-allowed'
        }`}
        aria-label="Next products"
      >
        <ChevronRightIcon className="h-5 w-5 text-secondary-600" />
      </button>
    </div>
  )
} 