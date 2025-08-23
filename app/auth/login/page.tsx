'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function LoginPage() {
  useEffect(() => {
    // Hide header and footer, remove main padding
    const hideHeaderFooter = () => {
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

    // Show header and footer, restore main padding
    const showHeaderFooter = () => {
      try {
        const header = document.querySelector('header')
        const footer = document.querySelector('footer')
        const main = document.querySelector('main')
        
        if (header) header.style.display = ''
        if (footer) footer.style.display = ''
        if (main) main.style.paddingTop = ''
      } catch (error) {
        console.error('Error showing header/footer:', error)
      }
    }

    // Hide on mount
    const timeoutId = setTimeout(hideHeaderFooter, 100)
    
    // Cleanup on unmount
    return () => {
      clearTimeout(timeoutId)
      showHeaderFooter()
    }
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between p-4 sm:p-6">
        <div className="flex items-center space-x-2 sm:space-x-3">
          <Link href="/" className="text-secondary-600 hover:text-secondary-900">
            ←
          </Link>
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">✓</span>
            </div>
            <span className="text-base sm:text-xl font-bold text-secondary-900 whitespace-nowrap">Faith Life</span>
          </div>
        </div>
        <div className="text-xs sm:text-sm text-secondary-600">
          Don't have an account?{' '}
          <Link href="/auth/register" className="text-primary-600 hover:text-primary-700 font-medium">
            Sign up
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6">
        <div className="max-w-sm sm:max-w-md w-full bg-white rounded-xl sm:rounded-2xl shadow-lg p-6 sm:p-8">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-secondary-900 mb-2">Welcome Back</h1>
            <p className="text-sm sm:text-base text-secondary-600">Sign in to your account to continue</p>
          </div>

          {/* Google Sign In */}
          <button className="w-full bg-white border border-secondary-200 rounded-lg py-2.5 sm:py-3 px-4 flex items-center justify-center space-x-3 mb-4 sm:mb-6 hover:bg-secondary-50 transition-colors">
            <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-bold">G</span>
            </div>
            <span className="text-sm sm:text-base text-secondary-900 font-medium">Continue with Google</span>
          </button>

          {/* Separator */}
          <div className="relative mb-4 sm:mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-secondary-200"></div>
            </div>
            <div className="relative flex justify-center text-xs sm:text-sm">
              <span className="px-2 bg-white text-secondary-500">OR WITH EMAIL</span>
            </div>
          </div>

          {/* Login Form */}
          <form className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  className="w-full pl-8 sm:pl-10 pr-3 py-2.5 sm:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs sm:text-sm font-medium text-secondary-700 mb-1.5 sm:mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  type="password"
                  className="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2.5 sm:py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors text-sm sm:text-base"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 text-secondary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-3 w-3 sm:h-4 sm:w-4 text-primary-600 focus:ring-primary-500 border-secondary-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs sm:text-sm text-secondary-700">
                  Remember me
                </label>
              </div>
              <div className="text-xs sm:text-sm">
                <Link href="/auth/forgot-password" className="text-primary-600 hover:text-primary-700 font-medium">
                  Forgot password?
                </Link>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2.5 sm:py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm sm:text-base"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 sm:mt-6 text-center">
            <p className="text-xs sm:text-sm text-secondary-600">
              By signing in, you agree to our{' '}
              <Link href="/terms" className="text-primary-600 hover:text-primary-700 font-medium">
                Terms of Service
              </Link>{' '}
              and{' '}
              <Link href="/privacy" className="text-primary-600 hover:text-primary-700 font-medium">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
