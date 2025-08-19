'use client'

import { useState, useEffect } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'

const testimonials = [
  {
    id: 1,
    name: 'Mrs. Sarah Johnson',
    role: 'Parent of Primary 3 Student',
    content: "Faith Life Bookshop has made getting my daughter's school books so much easier. The complete booklist feature saved me hours of searching, and the school pickup option is incredibly convenient.",
    rating: 5,
    avatar: '/images/testimonials/parent-1.jpg'
  },
  {
    id: 2,
    name: 'Mr. David Okechukwu',
    role: 'Parent of Primary 5 Student',
    content: 'Excellent service and quality books. The delivery was prompt and the books were in perfect condition. Will definitely use again for next term.',
    rating: 5,
    avatar: '/images/testimonials/parent-2.jpg'
  },
  {
    id: 3,
    name: 'Mrs. Grace Adebayo',
    role: 'Primary 2 Teacher',
    content: 'As a teacher, I appreciate how Faith Life Bookshop ensures all students have access to the correct editions and materials. The bulk ordering for class reps is a great feature.',
    rating: 5,
    avatar: '/images/testimonials/teacher-1.jpg'
  },
  {
    id: 4,
    name: 'Mr. Michael Chen',
    role: 'Parent of Nursery Student',
    content: "First time using the service and I'm impressed. The website is easy to navigate, prices are competitive, and the customer service team was very helpful.",
    rating: 4,
    avatar: '/images/testimonials/parent-3.jpg'
  }
]

const schoolEndorsement = {
  name: 'Faith Life International Schools',
  title: 'Official School Endorsement',
  content:
    'Faith Life Bookshop is our trusted partner in providing quality educational materials to our students. Their commitment to excellence and convenience has made a significant difference in our school community.',
  author: 'Principal MRS. Akingbade Oyedoyin',
  position: 'Principal, Faith Life School'
}

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  // Auto-rotate every 10 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [testimonials.length])

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-secondary-900 mb-4">What Our Community Says</h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Hear from parents, teachers, and our school community about their experience with Faith Life Bookshop.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* School Endorsement - distinguished card */}
          <div className="bg-success-50 rounded-2xl p-8 shadow-lg border-2 border-success-200 relative">
            <div className="absolute top-0 right-0 w-32 h-32 bg-success-100 rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-success-600 text-white flex items-center justify-center font-bold mr-4">
                  FL
                </div>
                <div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-success-100 text-success-800 text-xs font-semibold border border-success-300 mb-1">
                    {schoolEndorsement.title}
                  </div>
                  <h3 className="font-semibold text-secondary-900">{schoolEndorsement.name}</h3>
                </div>
              </div>
              
              <blockquote className="text-secondary-800 text-lg leading-relaxed mb-4 italic break-words">
                "{schoolEndorsement.content}"
              </blockquote>
              
              <div className="pt-4 border-t border-success-200">
                <p className="font-medium text-secondary-900">{schoolEndorsement.author}</p>
                <p className="text-sm text-secondary-600">{schoolEndorsement.position}</p>
              </div>
            </div>
          </div>

          {/* Customer Testimonials */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
            <div className="relative">
              <div className="overflow-hidden rounded-xl">
                <div 
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
                >
                  {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="w-full flex-shrink-0 p-2">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4 text-white font-semibold shadow-lg">
                          {testimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </div>
                        <div>
                          <h4 className="font-semibold text-secondary-900">{testimonial.name}</h4>
                          <p className="text-sm text-secondary-600">{testimonial.role}</p>
                        </div>
                      </div>
                      
                      <div className="flex mb-3">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon
                            key={i}
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-secondary-300'}`}
                          />
                        ))}
                      </div>
                      
                      <blockquote className="text-secondary-700 text-lg leading-relaxed italic break-words">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentTestimonial 
                        ? 'bg-primary-600 scale-125' 
                        : 'bg-secondary-300 hover:bg-secondary-400 hover:scale-110'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">5000+</div>
              <div className="text-sm text-secondary-600">Happy Parents</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-secondary-600">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">24hr</div>
              <div className="text-sm text-secondary-600">Order Processing</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-sm text-secondary-600">Quality Guaranteed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 