'use client'

import Link from 'next/link'
import { XMarkIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import { useState, useEffect } from 'react'

export default function PromoStrip() {
  const [isVisible, setIsVisible] = useState(true)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // Add entrance animation
    const timer = setTimeout(() => {
      setIsAnimating(true)
    }, 100)
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    setTimeout(() => {
      setIsVisible(false)
    }, 300)
  }

  if (!isVisible) return null

  return (
    <div className={`
      relative overflow-hidden bg-gradient-to-r from-accent-500 via-accent-600 to-accent-700
      transition-all duration-300 ease-out
      ${isAnimating ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
    `}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-4 w-2 h-2 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-8 w-1 h-1 bg-white/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

              <div className="container mx-auto px-2 py-4 relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Enhanced icon and badge */}
            <div className="hidden sm:flex items-center space-x-3">
              <div className="relative">
                <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <SparklesIcon className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">Back-to-School Special</span>
                <span className="text-white/80 text-xs">Limited Time Offer</span>
              </div>
            </div>
            
            {/* Main message */}
            <div className="flex items-center space-x-3">
              <span className="text-white/90 text-sm sm:text-base font-medium">
                Save up to <span className="font-bold text-white">20%</span> on selected items
              </span>
              <span className="hidden md:inline text-white/60">•</span>
              <span className="hidden md:inline text-white/80 text-sm">Free pickup at school</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            {/* Enhanced CTA button */}
            <Link
              href="/promotions"
              className="group relative overflow-hidden bg-white/20 backdrop-blur-sm hover:bg-white/30 
                         text-white text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300
                         hover:scale-105 hover:shadow-lg flex items-center space-x-2"
            >
              <span>View Offers</span>
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Link>
            
            {/* Enhanced close button */}
            <button
              onClick={handleClose}
              className="group relative w-8 h-8 bg-white/20 backdrop-blur-sm hover:bg-white/30 
                         rounded-full flex items-center justify-center transition-all duration-300
                         hover:scale-110 hover:shadow-lg"
              aria-label="Close promo"
            >
              <XMarkIcon className="h-4 w-4 text-white transition-transform group-hover:rotate-90" />
              <div className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20">
        <div 
          className="h-full bg-white transition-all duration-1000 ease-linear"
          style={{ width: '100%' }}
        ></div>
      </div>
    </div>
  )
} 