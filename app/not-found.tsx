'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { MagnifyingGlassIcon, HomeIcon, BookOpenIcon } from '@heroicons/react/24/outline'

export default function NotFound() {
  const [bounce, setBounce] = useState(false)
  const [bookTip, setBookTip] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  
  const bookTips = [
    "Try our bestselling textbooks!",
    "Have you checked our new arrivals?",
    "Need help finding something?",
    "Our educational materials are waiting for you!",
    "Lost in knowledge? Let us guide you!"
  ]
  
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return
    
    // Wait for DOM to be ready
    const hideElements = () => {
      try {
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const main = document.querySelector('main')
        
        if (header) header.style.display = 'none'
        if (footer) footer.style.display = 'none'
        if (main) main.style.paddingTop = '0'
      } catch (error) {
        console.error('Error hiding header/footer:', error)
      }
    }
    
    // Try immediately, then after a short delay
    hideElements()
    const timeoutId = setTimeout(hideElements, 100)
    
    // Set random book tip
    setBookTip(bookTips[Math.floor(Math.random() * bookTips.length)])
    
    // Bounce animation interval
    const bounceInterval = setInterval(() => {
      setBounce(true)
      setTimeout(() => setBounce(false), 1000)
    }, 3000)
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId)
      try {
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const main = document.querySelector('main')
        
        if (header) header.style.display = ''
        if (footer) footer.style.display = ''
        if (main) main.style.paddingTop = ''
      } catch (error) {
        console.error('Error restoring header/footer:', error)
      }
      clearInterval(bounceInterval)
    }
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setIsSearching(true)
      // Simulate search delay
      setTimeout(() => {
        setIsSearching(false)
        // Redirect to shop page with search query
        window.location.href = `/shop?search=${encodeURIComponent(searchQuery)}`
      }, 1500)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-secondary" data-404-page>
      <div className="text-center px-6 max-w-2xl">
        <div className="relative mb-8">
          <div className={`animate-on-scroll ${bounce ? 'animate-bounce' : ''}`}>
            <Image 
              src="/images/logo2.png" 
              alt="Lost book" 
              width={120} 
              height={120} 
              className="mx-auto"
            />
          </div>
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary-600 text-white text-3xl font-bold mt-4 gradient-text-animate">
            404
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-3">
          Oops! Page Missing from Our Bookshelf
        </h1>
        
        <p className="text-secondary-600 max-w-md mx-auto mb-4">
          This page seems to have wandered off like a misplaced textbook! 
          Don't worry, we have plenty of other educational treasures.
        </p>
        
        <div className="bg-primary-50 p-4 rounded-lg mb-6 animate-on-scroll">
          <p className="text-primary-700 italic">"{bookTip}"</p>
        </div>
        
        <form onSubmit={handleSearch} className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-full px-4 py-3 rounded-lg border border-secondary-300 focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isSearching}
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-600 text-white p-2 rounded-md hover:bg-primary-700 transition-colors"
              disabled={isSearching}
            >
              {isSearching ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <MagnifyingGlassIcon className="h-5 w-5" />
              )}
            </button>
          </div>
        </form>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary inline-flex items-center justify-center hover:scale-105 transition-transform">
            <HomeIcon className="h-5 w-5 mr-2" />
            Return to Library
          </Link>
          <Link href="/shop" className="btn-outline inline-flex items-center justify-center hover:scale-105 transition-transform">
            <BookOpenIcon className="h-5 w-5 mr-2" />
            Browse Our Collection
          </Link>
        </div>
      </div>
    </div>
  )
}
