import { Suspense } from 'react'
import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import Testimonials from '@/components/home/Testimonials'
import NewsletterSignup from '@/components/home/NewsletterSignup'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export default function HomePage() {
  return (
    <div className="bg-white custom-scrollbar">
      <main className="relative">
        {/* Hero Section - White */}
        <HeroSection />
        
        {/* Featured Categories & Bestsellers - White */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
                🏆 Featured Collection
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Featured Categories & Bestsellers
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                Discover our most popular textbooks and learning materials, carefully selected for each grade level
              </p>
            </div>
            
            <Suspense fallback={
              <div className="flex justify-center items-center py-20">
                <LoadingSpinner />
              </div>
            }>
              <FeaturedProducts />
            </Suspense>
          </div>
        </section>
        

        
        {/* Testimonials - White */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-4">
                💬 What Parents Say
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Trusted by Thousands of Parents
              </h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
                See why parents choose Faith Life Bookshop for their children's education
              </p>
            </div>
            <Testimonials />
          </div>
        </section>
        
        {/* Newsletter Signup - Light Green */}
        <section className="py-20 bg-primary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <NewsletterSignup />
          </div>
        </section>
      </main>
    </div>
  )
} 