'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/components/providers/CartProvider'
import { useAuth } from '@/components/providers/AuthProvider'
import { 
  TrashIcon, 
  PlusIcon, 
  MinusIcon,
  ArrowLeftIcon,
  ShoppingBagIcon
} from '@heroicons/react/24/outline'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import toast from 'react-hot-toast'

export default function CartPage() {
  const { cart, isLoading, removeFromCart, updateQuantity, clearCart, applyCoupon, removeCoupon } = useCart()
  const { user } = useAuth()
  const [couponCode, setCouponCode] = useState('')
  const [isApplyingCoupon, setIsApplyingCoupon] = useState(false)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleQuantityChange = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(productId)
    } else {
      updateQuantity(productId, newQuantity)
    }
  }

  const handleApplyCoupon = async () => {
    if (!couponCode.trim()) {
      toast.error('Please enter a coupon code')
      return
    }

    setIsApplyingCoupon(true)
    try {
      await applyCoupon(couponCode.trim())
      setCouponCode('')
    } finally {
      setIsApplyingCoupon(false)
    }
  }

  const handleRemoveCoupon = async () => {
    await removeCoupon()
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-secondary-50 flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (!cart || cart.items.length === 0) {
    return (
      <div className="min-h-screen bg-secondary-50">
        <div className="container mx-auto px-2 py-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-24 h-24 bg-secondary-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingBagIcon className="h-12 w-12 text-secondary-400" />
            </div>
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">Your cart is empty</h1>
            <p className="text-secondary-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link 
              href="/shop" 
              className="btn-primary inline-flex items-center"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-secondary-50">
              <div className="container mx-auto px-2 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">Shopping Cart</h1>
            <p className="text-secondary-600">
              {cart.items.length} item{cart.items.length !== 1 ? 's' : ''} in your cart
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm border border-secondary-200 overflow-hidden">
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Cart Items</h2>
                  
                  <div className="space-y-6">
                    {cart.items.map((item) => (
                      <div key={item.productId} className="flex items-center space-x-4 p-4 bg-secondary-50 rounded-lg">
                        {/* Product Image */}
                        <div className="relative w-20 h-24 bg-white rounded-lg overflow-hidden flex-shrink-0">
                          {item.product.images && item.product.images.length > 0 ? (
                            <Image
                              src={item.product.images[0]}
                              alt={item.product.title}
                              fill
                              className="object-cover"
                              sizes="80px"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-secondary-400 text-xs">No image</span>
                            </div>
                          )}
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-secondary-900 text-sm mb-1 line-clamp-2">
                            {item.product.title}
                          </h3>
                          <p className="text-xs text-secondary-600 mb-2">
                            {item.product.grade} • {item.product.subject}
                          </p>
                          <p className="text-xs text-secondary-500 mb-2">
                            by {item.product.author}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-secondary-900">
                              {formatPrice(item.price)}
                            </span>
                            {item.product.salePrice && item.product.salePrice < item.product.price && (
                              <span className="text-xs text-secondary-500 line-through">
                                {formatPrice(item.product.price)}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}
                            className="w-8 h-8 bg-white border border-secondary-300 rounded-lg flex items-center justify-center hover:bg-secondary-50 transition-colors"
                          >
                            <MinusIcon className="h-4 w-4 text-secondary-600" />
                          </button>
                          <span className="w-12 text-center font-medium text-secondary-900">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}
                            disabled={item.quantity >= item.product.stock}
                            className="w-8 h-8 bg-white border border-secondary-300 rounded-lg flex items-center justify-center hover:bg-secondary-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                          >
                            <PlusIcon className="h-4 w-4 text-secondary-600" />
                          </button>
                        </div>

                        {/* Remove Button */}
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="p-2 text-secondary-400 hover:text-error-600 transition-colors"
                        >
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Clear Cart Button */}
                  <div className="mt-6 pt-6 border-t border-secondary-200">
                    <button
                      onClick={clearCart}
                      className="text-secondary-600 hover:text-error-600 transition-colors text-sm"
                    >
                      Clear all items
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 sticky top-8">
                <h2 className="text-xl font-semibold text-secondary-900 mb-6">Order Summary</h2>

                {/* Coupon Code */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-secondary-700 mb-2">
                    Coupon Code
                  </label>
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      placeholder="Enter coupon code"
                      className="flex-1 px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button
                      onClick={handleApplyCoupon}
                      disabled={isApplyingCoupon || !couponCode.trim()}
                      className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isApplyingCoupon ? (
                        <LoadingSpinner className="w-4 h-4" />
                      ) : (
                        'Apply'
                      )}
                    </button>
                  </div>
                  
                  {cart.couponCode && (
                    <div className="mt-2 flex items-center justify-between p-2 bg-success-50 border border-success-200 rounded-lg">
                      <span className="text-sm text-success-700">
                        Coupon: {cart.couponCode}
                      </span>
                      <button
                        onClick={handleRemoveCoupon}
                        className="text-success-600 hover:text-success-800 text-sm"
                      >
                        Remove
                      </button>
                    </div>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Subtotal</span>
                    <span className="font-medium">{formatPrice(cart.subtotal)}</span>
                  </div>
                  
                  {cart.discount && cart.discount > 0 && (
                    <div className="flex justify-between text-sm">
                      <span className="text-success-600">Discount</span>
                      <span className="font-medium text-success-600">-{formatPrice(cart.discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-sm">
                    <span className="text-secondary-600">Shipping</span>
                    <span className="font-medium">{formatPrice(cart.shipping)}</span>
                  </div>
                  
                  <div className="border-t border-secondary-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>{formatPrice(cart.total)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link
                  href="/checkout"
                  className="w-full btn-primary text-center py-3 text-lg font-semibold"
                >
                  Proceed to Checkout
                </Link>

                {/* Continue Shopping */}
                <Link
                  href="/shop"
                  className="w-full mt-3 text-center py-3 text-secondary-600 hover:text-secondary-800 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
