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
    <section className="py-16 bg-primary-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-100 mb-8 text-lg">
            Get notified about special offers, and important updates from Faith Life Bookshop.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors"
                />
              </div>
              
              <div className="relative">
                <PhoneIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-white focus:border-white transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full md:w-auto bg-white text-primary-600 hover:bg-primary-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <div className="spinner w-4 h-4 mr-2" />
                  Subscribing...
                </div>
              ) : (
                'Subscribe to Newsletter'
              )}
            </button>
          </form>

          <p className="text-primary-200 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  )
} 