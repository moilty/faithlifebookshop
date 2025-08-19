'use client'

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import ProductCard from '@/components/products/ProductCard'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      title: "New General Mathematics for Primary Schools Book 1",
      author: "Murray Macrae",
      publisher: "Pearson Education",
      grade: "Primary 1",
      subject: "Mathematics",
      price: 2500,
      salePrice: null,
      stock: 15,
      images: ["/images/products/math-book-1.svg"]
    },
    {
      id: 2,
      title: "English Language for Primary Schools Book 2",
      author: "Sarah Johnson",
      publisher: "Oxford University Press",
      grade: "Primary 2",
      subject: "English",
      price: 2800,
      salePrice: 2400,
      stock: 8,
      images: ["/images/products/english-book-2.svg"]
    },
    {
      id: 3,
      title: "Basic Science and Technology for Primary 3",
      author: "Dr. Michael Chen",
      publisher: "Cambridge University Press",
      grade: "Primary 3",
      subject: "Science",
      price: 3200,
      salePrice: null,
      stock: 12,
      images: ["/images/products/science-book-3.svg"]
    },
    {
      id: 4,
      title: "Social Studies for Primary Schools Book 4",
      author: "Prof. Grace Adebayo",
      publisher: "Longman Nigeria",
      grade: "Primary 4",
      subject: "Social Studies",
      price: 2100,
      salePrice: 1800,
      stock: 5,
      images: ["/images/products/social-studies-4.svg"]
    },
    {
      id: 5,
      title: "Quantitative Reasoning for Primary 5",
      author: "David Okechukwu",
      publisher: "Evans Brothers",
      grade: "Primary 5",
      subject: "Mathematics",
      price: 2900,
      salePrice: null,
      stock: 20,
      images: ["/images/products/quantitative-reasoning-5.svg"]
    },
    {
      id: 6,
      title: "Verbal Reasoning for Primary 6",
      author: "Mrs. Sarah Johnson",
      publisher: "Macmillan Education",
      grade: "Primary 6",
      subject: "English",
      price: 2600,
      salePrice: 2200,
      stock: 3,
      images: ["/images/products/verbal-reasoning-6.svg"]
    },
    {
      id: 7,
      title: "Creative Arts for Primary Schools Book 1",
      author: "Artist Maria Garcia",
      publisher: "Heinemann Educational",
      grade: "Primary 1",
      subject: "Creative Arts",
      price: 1800,
      salePrice: null,
      stock: 18,
      images: ["/images/products/creative-arts-1.svg"]
    },
    {
      id: 8,
      title: "Computer Studies for Primary 2",
      author: "Tech Expert John Smith",
      publisher: "Nelson Thornes",
      grade: "Primary 2",
      subject: "Computer Studies",
      price: 3500,
      salePrice: 3000,
      stock: 7,
      images: ["/images/products/computer-studies-2.svg"]
    },
    {
      id: 9,
      title: "Religious and Moral Education Primary 3",
      author: "Rev. Father Patrick",
      publisher: "African Publishers",
      grade: "Primary 3",
      subject: "Religious Studies",
      price: 1900,
      salePrice: null,
      stock: 25,
      images: ["/images/products/religious-education-3.svg"]
    },
    {
      id: 10,
      title: "Physical and Health Education Primary 4",
      author: "Coach Ahmed Hassan",
      publisher: "Spectrum Books",
      grade: "Primary 4",
      subject: "Physical Education",
      price: 2200,
      salePrice: 1900,
      stock: 10,
      images: ["/images/products/physical-education-4.svg"]
    }
  ]

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-x-auto overflow-y-hidden scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        <div className="flex space-x-6 pb-4 min-w-max">
          {products.map((product: any) => (
            <div key={product.id} className="flex-shrink-0 w-64 md:w-64">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows - Hidden on Mobile */}
      <button
        className="hidden md:block absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white border border-secondary-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Previous products"
      >
        <ChevronLeftIcon className="h-5 w-5 text-secondary-600" />
      </button>
      
      <button
        className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white border border-secondary-200 rounded-full p-2 shadow-md hover:shadow-lg transition-shadow"
        aria-label="Next products"
      >
        <ChevronRightIcon className="h-5 w-5 text-secondary-600" />
      </button>
    </div>
  )
} 