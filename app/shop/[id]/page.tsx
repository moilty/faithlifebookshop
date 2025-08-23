'use client'

import { useParams } from 'next/navigation'
import { products } from '@/lib/data'
import { useState } from 'react'
import { useCart } from '@/components/providers/CartProvider'
import { StarIcon, TruckIcon, ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { toast } from 'react-hot-toast'
import Link from 'next/link'

export default function ProductPage() {
  const params = useParams()
  const productId = params.id as string
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addToCart } = useCart()

  const product = products.find(p => p.id === productId)

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link 
            href="/shop"
            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
    toast.success(`${quantity} ${quantity === 1 ? 'item' : 'items'} added to cart`)
  }

  const formatPrice = (price: number) => {
    return `₦${price.toLocaleString()}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/shop" className="hover:text-primary-600">Shop</Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </nav>
        </div>
      </div>

              <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-lg border-2 ${
                        selectedImage === index ? 'border-primary-500' : 'border-gray-200'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${product.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.title}</h1>
                <p className="text-lg text-gray-600 mb-4">by {product.author}</p>
                
                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIconSolid key={star} className="h-5 w-5 text-yellow-400" />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">(4.8 • 124 reviews)</span>
                </div>
              </div>

              {/* Price */}
              <div className="space-y-2">
                {product.salePrice ? (
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl font-bold text-primary-600">
                      {formatPrice(product.salePrice)}
                    </span>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.price)}
                    </span>
                    <span className="bg-red-100 text-red-800 text-sm font-medium px-2 py-1 rounded">
                      {Math.round(((product.price - product.salePrice) / product.price) * 100)}% OFF
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-primary-600">
                    {formatPrice(product.price)}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-gray-900">Grade:</span>
                  <span className="ml-2 text-gray-600">{product.grade}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Subject:</span>
                  <span className="ml-2 text-gray-600">{product.subject}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Publisher:</span>
                  <span className="ml-2 text-gray-600">{product.publisher}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Edition:</span>
                  <span className="ml-2 text-gray-600">{product.edition}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">ISBN:</span>
                  <span className="ml-2 text-gray-600">{product.isbn}</span>
                </div>
                <div>
                  <span className="font-medium text-gray-900">Format:</span>
                  <span className="ml-2 text-gray-600">{product.format}</span>
                </div>
              </div>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                <span className="text-sm text-gray-600">
                  {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
                </span>
              </div>

              {/* Quantity and Add to Cart */}
              {product.stock > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <label className="text-sm font-medium text-gray-900">Quantity:</label>
                    <div className="flex items-center border border-gray-300 rounded-lg">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900"
                      >
                        -
                      </button>
                      <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
                      <button
                        onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                        className="px-3 py-2 text-gray-600 hover:text-gray-900"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  
                  <button
                    onClick={handleAddToCart}
                    className="w-full bg-primary-600 text-white py-3 px-6 rounded-lg hover:bg-primary-700 transition-colors font-medium"
                  >
                    Add to Cart
                  </button>
                </div>
              )}

              {/* Features */}
              <div className="border-t pt-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900">Features</h3>
                <div className="grid grid-cols-1 gap-3">
                  <div className="flex items-center space-x-3">
                    <TruckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Free delivery on orders above ₦10,000</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <ShieldCheckIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">30-day return policy</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <StarIcon className="h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-600">Quality guaranteed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="border-t p-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
