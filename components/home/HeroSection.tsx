'use client'

import Link from 'next/link'

export default function HeroSection() {
  return (
    <div className="min-h-[65vh] flex items-center">
      <div className="container mx-auto px-2">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center py-12 md:py-16 lg:py-20">
          {/* Left content */}
          <div className="text-center md:text-left">
            <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white text-primary-700 text-xs sm:text-sm font-medium mb-4 md:mb-6">
              Back-to-School Made Simple
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 leading-tight mb-4">
              Secure and Simple
              <br />
              Shopping for School
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary-600/80 mb-4 md:mb-6">
              Faith Life
            </p>

            <p className="text-base sm:text-lg md:text-xl text-secondary-700 leading-relaxed mb-6 md:mb-8 max-w-2xl mx-auto md:mx-0">
              Start your school shopping journey with Faith Life Bookshop. Build success
              through smart ordering with no stress and complete convenience.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
              <Link href="/auth/register" className="btn-primary inline-flex items-center justify-center">
                Get Started
              </Link>
              <Link href="/shop" className="btn-outline inline-flex items-center justify-center">
                View Shop
              </Link>
            </div>
          </div>

          {/* Right media */}
          <div className="relative order-first md:order-last">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden bg-white shadow-xl md:shadow-2xl ring-1 ring-primary-100">
              <img
                src="/images/banner 1.png"
                alt="Books and learning materials"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -inset-2 md:-inset-4 -z-10 rounded-[1.5rem] md:rounded-[2rem] bg-primary-100/30 blur-xl md:blur-2xl" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  )
} 