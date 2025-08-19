'use client'

import { usePathname } from 'next/navigation'
import Header from './Header'
import Footer from './Footer'

interface ConditionalLayoutProps {
  children: React.ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps) {
  const pathname = usePathname()
  
  // Paths where we don't want header and footer
  const noHeaderFooterPaths = [
    '/auth/login',
    '/auth/register',
    '/auth/forgot-password',
    '/404'
  ]
  
  const shouldShowHeaderFooter = !noHeaderFooterPaths.some(path => 
    pathname?.startsWith(path) || pathname === path
  )
  
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
      <main className="relative pt-20 sm:pt-24 overflow-x-hidden">
        {children}
      </main>
      <Footer />
    </>
  )
}
