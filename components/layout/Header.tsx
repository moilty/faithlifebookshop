'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/components/providers/AuthProvider'
import { useCart } from '@/components/providers/CartProvider'
import { 
  ShoppingCartIcon, 
  UserIcon, 
  Bars3Icon, 
  XMarkIcon
} from '@heroicons/react/24/outline'
import SearchBar from '@/components/ui/SearchBar'
import UserMenu from '@/components/ui/UserMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoSrc, setLogoSrc] = useState<string>('/images/logo.png')
  const [isLoaded, setIsLoaded] = useState(false)
  const { user } = useAuth()
  const { getCartItemCount } = useCart()
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Shop', href: '/shop' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname?.startsWith(href))

  return (
    <header className={`global-header fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-sm' : ''
    } bg-white border-b border-primary-600/60 min-h-[72px] sm:min-h-[80px] lg:min-h-[88px]`}>
              <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-1 sm:space-x-2 group flex-shrink-0">
            <div className="relative shrink-0 h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 flex items-center justify-center">
              <Image
                src={logoSrc}
                alt="Faith Life Bookshop logo"
                width={64}
                height={64}
                priority
                onError={() => setLogoSrc('/images/logo.png')}
                className="object-contain w-full h-full"
              />
            </div>
            <div className="block">
              <h1 className="text-base sm:text-lg lg:text-xl font-bold text-secondary-900 leading-tight">Faith Life Bookshop</h1>
              <p className="text-xs text-secondary-600 hidden sm:block">Official School Bookstore</p>
            </div>
          </Link>

          {/* Search Bar - Integrated in main row */}
          <div className="flex-1 max-w-md lg:max-w-xl mx-2 hidden sm:block">
            <SearchBar />
          </div>

          {/* Inline Navigation (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-6 flex-shrink-0">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative font-medium transition-colors ${
                  isActive(item.href) ? 'text-primary-700' : 'text-secondary-700 hover:text-primary-600'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary-600 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0'}`} />
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-2 sm:space-x-3 flex-shrink-0">
            <Link href="/cart" className="relative group">
              <div className="p-2 sm:p-3 bg-secondary-50 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                <ShoppingCartIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-700 group-hover:text-primary-600" />
              </div>
              {getCartItemCount() > 0 && (
                <span className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 bg-primary-600 text-white text-xs rounded-full h-5 w-5 sm:h-6 sm:w-6 flex items-center justify-center font-bold">
                  {getCartItemCount()}
                </span>
              )}
            </Link>

            {user ? (
              <UserMenu user={user} />
            ) : (
              <Link href="/auth/login" className="group">
                <div className="p-2 sm:p-3 bg-secondary-50 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center space-x-2">
                  <UserIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-700 group-hover:text-primary-600" />
                  <span className="hidden xl:inline text-secondary-700 group-hover:text-primary-600 font-medium">Login</span>
                </div>
              </Link>
            )}

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 sm:p-3 bg-secondary-50 hover:bg-primary-50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-700 group-hover:text-primary-600" />
              ) : (
                <Bars3Icon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-700 group-hover:text-primary-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile search - Only show on very small screens */}
        <div className="sm:hidden mt-2">
          <SearchBar />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden border-t border-secondary-200 bg-white shadow-lg absolute top-full left-0 right-0 max-h-[calc(100vh-72px)] sm:max-h-[calc(100vh-80px)] overflow-y-auto transition-all duration-300 ease-in-out ${
        isMobileMenuOpen ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
      }`}>
                  <nav className="container mx-auto px-2 py-3 sm:py-4">
          <div className="space-y-3 sm:space-y-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block font-medium py-2 sm:py-3 transition-colors duration-200 ${
                  isActive(item.href) ? 'text-primary-700' : 'text-secondary-700 hover:text-primary-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative">
                  {item.name}
                  <span className={`block h-0.5 mt-1 bg-primary-600 transition-all duration-300 ${isActive(item.href) ? 'w-full' : 'w-0'}`} />
                </span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}
