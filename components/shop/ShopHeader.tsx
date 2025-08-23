'use client'

import { useMemo } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronRightIcon, FunnelIcon } from '@heroicons/react/24/outline'
import { Grade, Subject, BookFormat } from '@/types'

interface ShopHeaderProps {
  searchParams: Record<string, string | undefined>
}

export default function ShopHeader({ searchParams }: ShopHeaderProps) {
  const router = useRouter()
  const searchParamsHook = useSearchParams()

  const breadcrumbs = useMemo(() => {
    const crumbs = [{ label: 'Home', href: '/' }]
    
    if (searchParams.grade) {
      crumbs.push({ label: searchParams.grade, href: `/shop?grade=${searchParams.grade}` })
    }
    
    if (searchParams.subject) {
      crumbs.push({ 
        label: searchParams.subject, 
        href: `/shop?grade=${searchParams.grade}&subject=${searchParams.subject}` 
      })
    }
    
    return crumbs
  }, [searchParams])

  const activeFilters = useMemo(() => {
    const filters: string[] = []
    
    if (searchParams.grade) filters.push(`Grade: ${searchParams.grade}`)
    if (searchParams.subject) filters.push(`Subject: ${searchParams.subject}`)
    if (searchParams.format) filters.push(`Format: ${searchParams.format}`)
    if (searchParams.publisher) filters.push(`Publisher: ${searchParams.publisher}`)
    if (searchParams.price_min || searchParams.price_max) {
      const min = searchParams.price_min || '0'
      const max = searchParams.price_max || '∞'
      filters.push(`Price: ₦${min} - ₦${max}`)
    }
    if (searchParams.availability) filters.push(`Availability: ${searchParams.availability}`)
    
    return filters
  }, [searchParams])

  const clearFilters = () => {
    const params = new URLSearchParams(searchParamsHook)
    params.delete('grade')
    params.delete('subject')
    params.delete('format')
    params.delete('publisher')
    params.delete('price_min')
    params.delete('price_max')
    params.delete('availability')
    router.push(`/shop?${params.toString()}`)
  }

  const handleSort = (sort: string) => {
    const params = new URLSearchParams(searchParamsHook)
    params.set('sort', sort)
    router.push(`/shop?${params.toString()}`)
  }

  return (
    <div className="space-y-4">
      {/* Breadcrumbs */}
      <nav className="flex items-center space-x-2 text-sm text-secondary-600">
        {breadcrumbs.map((crumb, index) => (
          <div key={crumb.href} className="flex items-center">
            {index > 0 && <ChevronRightIcon className="h-4 w-4 mx-2" />}
            <a
              href={crumb.href}
              className="hover:text-primary-600 transition-colors"
            >
              {crumb.label}
            </a>
          </div>
        ))}
      </nav>

      {/* Page Title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-secondary-900">
            {searchParams.grade ? `${searchParams.grade} Books` : 'All Books'}
          </h1>
          {searchParams.subject && (
            <p className="text-secondary-600 mt-1">
              {searchParams.subject} textbooks and learning materials
            </p>
          )}
        </div>

        {/* Sort Options */}
        <div className="flex items-center space-x-4">
          <label className="text-sm font-medium text-secondary-700">Sort by:</label>
          <select
            value={searchParams.sort || 'relevance'}
            onChange={(e) => handleSort(e.target.value)}
            className="border border-secondary-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="relevance">Relevance</option>
            <option value="price_low">Price: Low to High</option>
            <option value="price_high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Active Filters */}
      {activeFilters.length > 0 && (
        <div className="flex items-center justify-between bg-secondary-50 rounded-lg p-4">
          <div className="flex items-center space-x-2">
            <FunnelIcon className="h-5 w-5 text-secondary-600" />
            <span className="text-sm font-medium text-secondary-700">Active filters:</span>
            <div className="flex flex-wrap gap-2">
              {activeFilters.map((filter, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                >
                  {filter}
                </span>
              ))}
            </div>
          </div>
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 font-medium"
          >
            Clear all
          </button>
        </div>
      )}
    </div>
  )
} 