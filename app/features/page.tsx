'use client'

import Link from 'next/link'

export default function FeaturesPage() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Quality Assurance",
      description: "All our textbooks and learning materials are carefully selected and meet the highest educational standards.",
      benefits: ["Verified content", "Updated curriculum", "Expert-reviewed materials"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Comprehensive Collection",
      description: "From kindergarten to high school, we offer a complete range of educational materials for every subject.",
      benefits: ["All grade levels", "Multiple subjects", "Supplementary materials"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Fast Delivery",
      description: "Quick and reliable delivery to your doorstep, ensuring your materials arrive when you need them.",
      benefits: ["Same-day processing", "Tracked shipping", "Multiple delivery options"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 109.75 9.75A9.75 9.75 0 0012 2.25z" />
        </svg>
      ),
      title: "Smart Search",
      description: "Advanced search functionality to help you quickly find the exact materials you need.",
      benefits: ["Grade-specific search", "Subject filtering", "Price comparison"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Expert Support",
      description: "Our team of educational experts is here to help you make the right choices for your child's education.",
      benefits: ["Curriculum guidance", "Personal recommendations", "24/7 customer support"]
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      title: "Bulk Orders",
      description: "Special pricing and support for schools, institutions, and bulk purchases.",
      benefits: ["Volume discounts", "Institutional accounts", "Custom packaging"]
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Parent",
      content: "The quality of textbooks and the fast delivery service exceeded my expectations. My daughter loves her new materials!",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Teacher",
      content: "As a teacher, I appreciate the comprehensive collection and the expert support when choosing materials for my class.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "School Administrator",
      content: "The bulk ordering system is fantastic. It saves us time and money while ensuring we get quality materials.",
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Features</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Discover what makes Faith Life Bookshop the trusted choice for educational materials
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Why Choose Faith Life Bookshop?</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                We're committed to providing the best educational experience with features designed to make learning accessible and effective.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 border border-secondary-100 hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-4">{feature.title}</h3>
                  <p className="text-secondary-600 mb-6 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-secondary-600">
                        <svg className="w-4 h-4 text-primary-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">How It Works</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Getting started with Faith Life Bookshop is simple and straightforward
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">Browse & Search</h3>
                <p className="text-secondary-600">
                  Use our advanced search to find materials by grade, subject, or specific requirements.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">Select & Order</h3>
                <p className="text-secondary-600">
                  Choose your materials, add them to cart, and complete your secure checkout.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-4">Receive & Learn</h3>
                <p className="text-secondary-600">
                  Get your materials delivered quickly and start your educational journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">What Our Customers Say</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Hear from parents, teachers, and administrators who trust Faith Life Bookshop
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-secondary-50 rounded-2xl p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-secondary-600 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                    <div className="text-sm text-secondary-500">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Why Faith Life Bookshop?</h2>
              <p className="text-xl text-secondary-600">
                See how we compare to other educational material providers
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid md:grid-cols-3 divide-x divide-secondary-200">
                <div className="p-8 text-center">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Other Providers</h3>
                  <ul className="space-y-3 text-sm text-secondary-600">
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Limited selection
                    </li>
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Slow delivery
                    </li>
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      Poor support
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 text-center bg-primary-50">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Faith Life Bookshop</h3>
                  <ul className="space-y-3 text-sm text-secondary-600">
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Comprehensive collection
                    </li>
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Fast delivery
                    </li>
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Expert support
                    </li>
                  </ul>
                </div>
                
                <div className="p-8 text-center">
                  <h3 className="text-lg font-semibold text-secondary-900 mb-4">Bonus Features</h3>
                  <ul className="space-y-3 text-sm text-secondary-600">
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Bulk discounts
                    </li>
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Quality guarantee
                    </li>
                    <li className="flex items-center justify-center">
                      <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Easy returns
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Experience Our Features?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust Faith Life Bookshop for their educational needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-secondary-50 transition-colors font-semibold">
                Start Shopping
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link href="/contact" className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-primary-600 transition-colors font-semibold">
                Contact Us
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
