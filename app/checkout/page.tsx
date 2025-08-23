'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/components/providers/CartProvider'
import { useAuth } from '@/components/providers/AuthProvider'
import { useRouter } from 'next/navigation'

import { 
  ArrowLeftIcon,
  MapPinIcon,
  TruckIcon,
  CreditCardIcon,
  BanknotesIcon,
  PhoneIcon
} from '@heroicons/react/24/outline'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import toast from 'react-hot-toast'
import { ShippingMethod, PaymentMethod } from '@/types'

export default function CheckoutPage() {
  const { cart, isLoading, clearCart } = useCart()
  const { user } = useAuth()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  
  // Form states
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>('delivery')
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('card')
  const [formData, setFormData] = useState({
    firstName: user?.name?.split(' ')[0] || '',
    lastName: user?.name?.split(' ').slice(1).join(' ') || '',
    email: user?.email || '',
    phone: user?.phone || '',
    street: '',
    city: '',
    state: '',
    postalCode: '',
    notes: ''
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
    }).format(price)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!cart || cart.items.length === 0) {
      toast.error('Your cart is empty')
      return
    }

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone']
    if (shippingMethod === 'delivery') {
      requiredFields.push('street', 'city', 'state')
    }

    for (const field of requiredFields) {
      if (!formData[field as keyof typeof formData]) {
        toast.error(`Please fill in ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`)
        return
      }
    }

    setIsProcessing(true)
    try {
      // Create the order
      const orderData = {
        userId: user?.id || 'guest',
        user: user || {
          id: 'guest',
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
          phone: formData.phone,
          role: 'customer',
          isEmailVerified: false,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        items: cart.items.map(item => ({
          id: item.id,
          orderId: '', // Will be set by addNewOrder
          productId: item.product.id,
          product: item.product,
          quantity: item.quantity,
          price: item.product.salePrice || item.product.price,
          total: (item.product.salePrice || item.product.price) * item.quantity
        })),
        subtotal: cart.items.reduce((sum, item) => sum + ((item.product.salePrice || item.product.price) * item.quantity), 0),
        shipping: shippingMethod === 'delivery' ? 500 : 0,
        discount: 0,
        total: cart.items.reduce((sum, item) => sum + ((item.product.salePrice || item.product.price) * item.quantity), 0) + (shippingMethod === 'delivery' ? 500 : 0),
        status: 'pending' as const,
        paymentStatus: 'pending' as const,
        shippingMethod,
        ...(shippingMethod === 'delivery' && {
          shippingAddress: {
            id: '1',
            userId: user?.id || 'guest',
            type: 'home',
            firstName: formData.firstName,
            lastName: formData.lastName,
            phone: formData.phone,
            street: formData.street,
            city: formData.city,
            state: formData.state,
            postalCode: formData.postalCode,
            country: 'Nigeria',
            isDefault: true
          }
        }),
        ...(shippingMethod === 'pickup' && {
          pickupLocation: {
            id: '1',
            name: 'Faith Life Bookshop - Main Branch',
            address: '45 Education Street',
            city: 'Lagos',
            phone: '+234-804-567-8901',
            hours: 'Mon-Fri: 8AM-6PM, Sat: 9AM-4PM',
            isActive: true
          }
        }),
        notes: formData.notes
      }

      // Create the order via API
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const result = await response.json()
      
      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Failed to create order')
      }

      const newOrder = result.data

      // Clear the cart after successful order
      await clearCart()
      
      toast.success(`Order placed successfully! Order number: ${newOrder.orderNumber}`)
      
      // Redirect to order confirmation page
      router.push('/order-success')
    } catch (error) {
      console.error('Order creation error:', error)
      toast.error('Failed to place order. Please try again.')
    } finally {
      setIsProcessing(false)
    }
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
            <h1 className="text-3xl font-bold text-secondary-900 mb-4">Your cart is empty</h1>
            <p className="text-secondary-600 mb-8">
              Please add some items to your cart before proceeding to checkout.
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
            <Link 
              href="/cart" 
              className="inline-flex items-center text-secondary-600 hover:text-secondary-800 mb-4"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Cart
            </Link>
            <h1 className="text-3xl font-bold text-secondary-900 mb-2">Checkout</h1>
            <p className="text-secondary-600">
              Complete your purchase
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Checkout Form */}
              <div className="lg:col-span-2 space-y-8">
                {/* Contact Information */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Method */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Shipping Method</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-secondary-200 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="delivery"
                        checked={shippingMethod === 'delivery'}
                        onChange={(e) => setShippingMethod(e.target.value as ShippingMethod)}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <TruckIcon className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-medium text-secondary-900">Home Delivery</div>
                          <div className="text-sm text-secondary-600">Delivered to your address</div>
                        </div>
                      </div>
                      <div className="ml-auto font-medium text-secondary-900">
                        {formatPrice(500)}
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-secondary-200 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input
                        type="radio"
                        name="shippingMethod"
                        value="pickup"
                        checked={shippingMethod === 'pickup'}
                        onChange={(e) => setShippingMethod(e.target.value as ShippingMethod)}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <MapPinIcon className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-medium text-secondary-900">Store Pickup</div>
                          <div className="text-sm text-secondary-600">Pick up from our store</div>
                        </div>
                      </div>
                      <div className="ml-auto font-medium text-secondary-900">
                        Free
                      </div>
                    </label>
                  </div>
                </div>

                {/* Shipping Address (if delivery) */}
                {shippingMethod === 'delivery' && (
                  <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                    <h2 className="text-xl font-semibold text-secondary-900 mb-6">Shipping Address</h2>
                    
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-secondary-700 mb-2">
                          Street Address *
                        </label>
                        <input
                          type="text"
                          value={formData.street}
                          onChange={(e) => handleInputChange('street', e.target.value)}
                          className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            City *
                          </label>
                          <input
                            type="text"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            State *
                          </label>
                          <input
                            type="text"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-secondary-700 mb-2">
                            Postal Code
                          </label>
                          <input
                            type="text"
                            value={formData.postalCode}
                            onChange={(e) => handleInputChange('postalCode', e.target.value)}
                            className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Payment Method */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Payment Method</h2>
                  
                  <div className="space-y-4">
                    <label className="flex items-center p-4 border border-secondary-200 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <CreditCardIcon className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-medium text-secondary-900">Credit/Debit Card</div>
                          <div className="text-sm text-secondary-600">Pay securely with your card</div>
                        </div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-secondary-200 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank_transfer"
                        checked={paymentMethod === 'bank_transfer'}
                        onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <BanknotesIcon className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-medium text-secondary-900">Bank Transfer</div>
                          <div className="text-sm text-secondary-600">Pay via bank transfer</div>
                        </div>
                      </div>
                    </label>
                    
                    <label className="flex items-center p-4 border border-secondary-200 rounded-lg cursor-pointer hover:bg-secondary-50">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="pay_on_delivery"
                        checked={paymentMethod === 'pay_on_delivery'}
                        onChange={(e) => setPaymentMethod(e.target.value as PaymentMethod)}
                        className="mr-3"
                      />
                      <div className="flex items-center">
                        <PhoneIcon className="h-5 w-5 text-primary-600 mr-3" />
                        <div>
                          <div className="font-medium text-secondary-900">Pay on Delivery</div>
                          <div className="text-sm text-secondary-600">Pay when you receive your order</div>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Order Notes */}
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Order Notes (Optional)</h2>
                  
                  <textarea
                    value={formData.notes}
                    onChange={(e) => handleInputChange('notes', e.target.value)}
                    placeholder="Add any special instructions or notes for your order..."
                    rows={3}
                    className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm border border-secondary-200 p-6 sticky top-8">
                  <h2 className="text-xl font-semibold text-secondary-900 mb-6">Order Summary</h2>

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cart.items.map((item) => (
                      <div key={item.productId} className="flex items-center space-x-3">
                        <div className="relative w-12 h-16 bg-secondary-100 rounded-lg overflow-hidden flex-shrink-0">
                          {item.product.images && item.product.images.length > 0 ? (
                            <Image
                              src={item.product.images[0]}
                              alt={item.product.title}
                              fill
                              className="object-cover"
                              sizes="48px"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-secondary-400 text-xs">No image</span>
                            </div>
                          )}
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-secondary-900 text-sm line-clamp-2">
                            {item.product.title}
                          </h3>
                          <p className="text-xs text-secondary-600">
                            Qty: {item.quantity}
                          </p>
                        </div>
                        
                        <div className="text-right">
                          <span className="font-medium text-secondary-900 text-sm">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      </div>
                    ))}
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
                      <span className="font-medium">
                        {shippingMethod === 'pickup' ? 'Free' : formatPrice(500)}
                      </span>
                    </div>
                    
                    <div className="border-t border-secondary-200 pt-3">
                      <div className="flex justify-between text-lg font-bold">
                        <span>Total</span>
                        <span>
                          {formatPrice(
                            cart.total + (shippingMethod === 'pickup' ? 0 : 500)
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Place Order Button */}
                  <button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full btn-primary text-center py-3 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? (
                      <div className="flex items-center justify-center">
                        <LoadingSpinner className="w-5 h-5 mr-2" />
                        Processing...
                      </div>
                    ) : (
                      `Place Order - ${formatPrice(
                        cart.total + (shippingMethod === 'pickup' ? 0 : 500)
                      )}`
                    )}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
