'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Check if we're on a 404 page by checking if the current component is the NotFound component
  const is404Page = typeof window !== 'undefined' && 
    (window.location.pathname === '/404' || 
     document.querySelector('[data-404-page]') !== null)
  
  // Paths where we don't want header and footer
  const noHeaderFooterPaths = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/404'
  ]
  
  const shouldShowHeaderFooter = !noHeaderFooterPaths.some(path => 
    pathname?.startsWith(path) || pathname === path
  ) && !is404Page
  
  if (!shouldShowHeaderFooter) {
    return (
      <div className="min-h-screen bg-secondary-50">
        {children}
      </div>
    )
  }
  
  return (
    <>
      <Header />
      <main className="relative pt-24 sm:pt-28 lg:pt-32 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}
