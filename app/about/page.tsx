'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Faith Life Bookshop</h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Empowering education through quality textbooks and learning materials for students across all grade levels
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
                  Our Mission
                </div>
                <h2 className="text-4xl font-bold text-secondary-900 mb-6">
                  Building Bright Futures Through Quality Education
                </h2>
                <p className="text-lg text-secondary-600 mb-8 leading-relaxed">
                  At Faith Life Bookshop, we believe that every child deserves access to the best educational resources. 
                  Our mission is to provide comprehensive, high-quality textbooks and learning materials that support 
                  students' academic growth and success.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Quality Assurance</h3>
                      <p className="text-secondary-600">All our materials meet the highest educational standards</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Comprehensive Coverage</h3>
                      <p className="text-secondary-600">Complete curriculum support from kindergarten to high school</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">Expert Support</h3>
                      <p className="text-secondary-600">Dedicated team to help you find the right materials</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-secondary rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-secondary-900 mb-4">Our Commitment</h3>
                    <p className="text-secondary-600 mb-6">
                      We're committed to providing the best educational resources to help students succeed in their academic journey.
                    </p>
                    <Link href="/shop" className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Explore Our Collection
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Trusted by Thousands</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Our commitment to quality education has made us a trusted partner for schools and families nationwide
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">50K+</div>
                <div className="text-secondary-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
                <div className="text-secondary-600">Schools Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">10K+</div>
                <div className="text-secondary-600">Quality Books</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-secondary-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-secondary-900 mb-6">Our Team</h2>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Meet the dedicated professionals who make Faith Life Bookshop your trusted educational partner
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Sarah Johnson</h3>
                <p className="text-primary-600 mb-4">Founder & CEO</p>
                <p className="text-secondary-600">
                  Passionate educator with 20+ years experience in curriculum development and educational publishing.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-secondary rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Michael Chen</h3>
                <p className="text-primary-600 mb-4">Head of Operations</p>
                <p className="text-secondary-600">
                  Expert in educational logistics and customer service, ensuring smooth delivery of quality materials.
                </p>
              </div>
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-accent rounded-full mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-secondary-900 mb-2">Emily Rodriguez</h3>
                <p className="text-primary-600 mb-4">Curriculum Specialist</p>
                <p className="text-secondary-600">
                  Former teacher with expertise in selecting and curating the best educational materials for all grade levels.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of parents and educators who trust Faith Life Bookshop for their educational needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shop" className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg hover:bg-secondary-50 transition-colors font-semibold">
                Browse Our Collection
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
