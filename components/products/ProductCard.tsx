'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Product } from '@/types'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {

  const getGradeColor = (grade: string) => {
    const colors: Record<string, string> = {
      'Creche': 'grade-creche',
      'Nursery': 'grade-nursery',
      'Primary 1': 'grade-primary-1',
      'Primary 2': 'grade-primary-2',
      'Primary 3': 'grade-primary-3',
      'Primary 4': 'grade-primary-4',
      'Primary 5': 'grade-primary-5',
      'Primary 6': 'grade-primary-6',
    }
    return colors[grade] || 'bg-secondary-100 text-secondary-800'
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const getStockStatus = () => {
    if (product.stock === 0) {
      return { text: 'Out of Stock', color: 'bg-error-100 text-error-800' }
    } else if (product.stock <= 5) {
      return { text: 'Limited Stock', color: 'bg-warning-100 text-warning-800' }
    } else {
      return { text: 'In Stock', color: 'bg-success-100 text-success-800' }
    }
  }

  const stockStatus = getStockStatus()

  return (
    <div className="product-card bg-white rounded-xl border border-secondary-200 overflow-hidden h-full flex flex-col group">
      {/* Product Image - Clickable link */}
      <Link href={`/shop/${product.id}`} className="block">
        <div className="relative aspect-[3/4] bg-secondary-100 overflow-hidden flex-shrink-0">
          {product.images && product.images.length > 0 ? (
            <Image
              src={product.images[0]}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-secondary-400">No image</span>
            </div>
          )}
          
          {/* Stock Status Badge */}
          <div className={`absolute top-2 left-2 px-2 py-1 rounded-full text-xs font-medium ${stockStatus.color}`}>
            {stockStatus.text}
          </div>
        </div>
      </Link>

      {/* Product Info - Flex container to push button to bottom */}
      <div className="p-4 flex flex-col flex-1">
          {/* Grade and Subject */}
          <div className="flex items-center justify-between mb-2">
            <span className={`grade-chip ${getGradeColor(product.grade)}`}>
              {product.grade}
            </span>
            <span className="text-xs text-secondary-600 capitalize">
              {product.subject}
            </span>
          </div>

        {/* Title - Clickable link */}
        <Link href={`/shop/${product.id}`} className="block">
          <h3 className="font-semibold text-secondary-900 text-sm mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors flex-1">
            {product.title}
          </h3>
        </Link>

          {/* Author and Publisher */}
          <p className="text-xs text-secondary-600 mb-2">
            by {product.author}
          </p>
          <p className="text-xs text-secondary-500 mb-3">
            {product.publisher}
          </p>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              {product.salePrice ? (
                <>
                  <span className="font-bold text-lg text-secondary-900">
                    {formatPrice(product.salePrice)}
                  </span>
                  <span className="text-sm text-secondary-500 line-through">
                    {formatPrice(product.price)}
                  </span>
                </>
              ) : (
                <span className="font-bold text-lg text-secondary-900">
                  {formatPrice(product.price)}
                </span>
              )}
            </div>
          </div>

        {/* View Button - Pushed to bottom */}
        <Link 
          href={`/shop/${product.id}`}
          className="w-full btn-primary py-2 text-sm flex items-center justify-center mt-auto hover:bg-primary-700 transition-colors"
        >
          View Details
        </Link>
        </div>
      </div>
  )
} 