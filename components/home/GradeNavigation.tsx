'use client'

import Link from 'next/link'
import { 
  AcademicCapIcon, 
  BookOpenIcon, 
  CalculatorIcon, 
  GlobeAltIcon, 
  HeartIcon, 
  PaintBrushIcon,
  UserGroupIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'

const grades = [
  {
    name: 'Creche',
    href: '/shop?grade=Creche',
    icon: SparklesIcon,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    description: 'Early Learning',
    bookCount: '50+ Books'
  },
  {
    name: 'Nursery',
    href: '/shop?grade=Nursery',
    icon: UserGroupIcon,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    description: 'Foundation Years',
    bookCount: '75+ Books'
  },
  {
    name: 'Primary 1',
    href: '/shop?grade=Primary%201',
    icon: BookOpenIcon,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
    description: 'Basic Skills',
    bookCount: '100+ Books'
  },
  {
    name: 'Primary 2',
    href: '/shop?grade=Primary%202',
    icon: AcademicCapIcon,
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-50',
    borderColor: 'border-yellow-200',
    description: 'Building Blocks',
    bookCount: '120+ Books'
  },
  {
    name: 'Primary 3',
    href: '/shop?grade=Primary%203',
    icon: CalculatorIcon,
    color: 'from-orange-500 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    description: 'Core Subjects',
    bookCount: '150+ Books'
  },
  {
    name: 'Primary 4',
    href: '/shop?grade=Primary%204',
    icon: GlobeAltIcon,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    description: 'Expanding Knowledge',
    bookCount: '180+ Books'
  },
  {
    name: 'Primary 5',
    href: '/shop?grade=Primary%205',
    icon: HeartIcon,
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-50',
    borderColor: 'border-pink-200',
    description: 'Advanced Learning',
    bookCount: '200+ Books'
  },
  {
    name: 'Primary 6',
    href: '/shop?grade=Primary%206',
    icon: PaintBrushIcon,
    color: 'from-indigo-500 to-indigo-600',
    bgColor: 'bg-indigo-50',
    borderColor: 'border-indigo-200',
    description: 'Preparation Year',
    bookCount: '250+ Books'
  }
]

export default function GradeNavigation() {
  return (
    <div className="w-full">
      <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide pb-4">
        {grades.map((grade, index) => {
          const IconComponent = grade.icon
          
            return (
              <Link
                key={grade.name}
                href={grade.href}
              className="group relative flex-shrink-0"
            >
              <div className={`
                relative p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 ${grade.bgColor} ${grade.borderColor}
                transition-shadow hover:shadow-xl flex flex-col w-64 sm:w-72
              `}>
                {/* Icon with gradient background */}
                <div className={`
                  w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${grade.color}
                  flex items-center justify-center mb-3 sm:mb-4
                `}>
                  <IconComponent className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>

                {/* Content */}
                <div className="text-center flex-1 flex flex-col justify-start">
                  <h3 className="font-bold text-secondary-900 text-sm sm:text-lg mb-1 sm:mb-2">
                  {grade.name}
                </h3>
                  <p className="text-xs sm:text-sm text-secondary-600 mb-2 sm:mb-3 leading-relaxed">
                  {grade.description}
                </p>
                  <div className="text-xs text-secondary-500 font-medium mt-auto">
                    {grade.bookCount}
                  </div>
                </div>
              </div>
              </Link>
            )
          })}
        </div>
      </div>
  )
} 