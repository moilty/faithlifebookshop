'use client'

import Link from 'next/link'
import { CheckCircleIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export default function OrderSuccessPage() {
  return (
    <div className="min-h-screen bg-secondary-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="w-24 h-24 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircleIcon className="h-12 w-12 text-success-600" />
          </div>
          
          {/* Success Message */}
          <h1 className="text-3xl font-bold text-secondary-900 mb-4">
            Order Placed Successfully!
          </h1>
          <p className="text-secondary-600 mb-8 text-lg">
            Thank you for your purchase. We've received your order and will process it shortly.
          </p>
          
          {/* Order Details */}
          <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-secondary-900 mb-4">What's Next?</h2>
            <div className="space-y-3 text-left">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">1</span>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">Order Confirmation</p>
                  <p className="text-sm text-secondary-600">You'll receive an email confirmation shortly</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">2</span>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">Processing</p>
                  <p className="text-sm text-secondary-600">We'll prepare your order for shipping or pickup</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-600 text-sm font-bold">3</span>
                </div>
                <div>
                  <p className="font-medium text-secondary-900">Delivery/Pickup</p>
                  <p className="text-sm text-secondary-600">You'll be notified when your order is ready</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="space-y-4">
            <Link 
              href="/shop" 
              className="btn-primary inline-flex items-center w-full sm:w-auto justify-center"
            >
              <ShoppingBagIcon className="h-5 w-5 mr-2" />
              Continue Shopping
            </Link>
            
            <Link 
              href="/" 
              className="inline-flex items-center text-secondary-600 hover:text-secondary-800 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
