'use client'

import { useState } from 'react'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import toast from 'react-hot-toast'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email && !phone) {
      toast.error('Please provide either an email or phone number')
      return
    }

    try {
      setIsSubmitting(true)
      
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, phone }),
      })

      if (response.ok) {
        toast.success('Successfully subscribed to our newsletter!')
        setEmail('')
        setPhone('')
      } else {
        const error = await response.json()
        toast.error(error.message || 'Failed to subscribe')
      }
    } catch (error) {
      toast.error('Failed to subscribe to newsletter')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 particle-bg relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full floating-animation"></div>
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-white/10 rounded-full floating-animation" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-white/10 rounded-full floating-animation" style={{animationDelay: '4s'}}></div>
      <div className="container mx-auto px-2">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <EnvelopeIcon className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 sparkle">
              Stay in the Loop ✨
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get exclusive access to special offers, new arrivals, and educational insights delivered straight to your inbox.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 glow-effect">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative">
                  <EnvelopeIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
                
                <div className="relative">
                  <PhoneIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full pl-12 pr-4 py-4 bg-white rounded-xl border-0 focus:ring-2 focus:ring-white focus:outline-none text-gray-900 placeholder-gray-500"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-white text-primary-700 hover:bg-gray-100 font-semibold py-4 px-8 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-primary-700 border-t-transparent rounded-full animate-spin mr-3" />
                      Subscribing...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <EnvelopeIcon className="h-5 w-5 mr-2" />
                      Subscribe Now
                    </div>
                  )}
                </button>
                
                <div className="flex items-center space-x-2 text-primary-200 text-sm">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Join 2,500+ subscribers</span>
                </div>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-primary-200">
                <div className="flex items-center space-x-4 mb-4 sm:mb-0">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>No spam, ever</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span>Unsubscribe anytime</span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <PhoneIcon className="h-4 w-4" />
                  <span>Need help? Contact us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 