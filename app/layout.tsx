import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Link from 'next/link'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Faith Life Bookshop - Official School Bookstore',
  description: 'Get all your child\'s educational needs in one place. Quality textbooks, workbooks, and learning resources for every grade level.',
  keywords: 'school books, textbooks, educational materials, primary school, Nigeria',
  authors: [{ name: 'Faith Life School' }],
  openGraph: {
    title: 'Faith Life Bookshop - Official School Bookstore',
    description: 'Quality educational materials for every grade level',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Intersection Observer for scroll animations
              document.addEventListener('DOMContentLoaded', function() {
                const observerOptions = {
                  threshold: 0.1,
                  rootMargin: '0px 0px -50px 0px'
                };
                
                const observer = new IntersectionObserver(function(entries) {
                  entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                      entry.target.classList.add('animate');
                    }
                  });
                }, observerOptions);
                
                const animatedElements = document.querySelectorAll('.animate-on-scroll');
                animatedElements.forEach(function(el) {
                  observer.observe(el);
                });
                
                document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                  anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                      target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }
                  });
                });
              });
            `,
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <Header />
          <main className="relative pt-24 sm:pt-28 lg:pt-32 overflow-x-hidden">
            {children}
          </main>
          <Footer />
          
          {/* Admin Dashboard Button - Fixed Position in Corner */}
          <Link
            href="/admin"
            className="fixed bottom-6 left-6 bg-white text-secondary-900 p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors z-50"
            aria-label="Admin Dashboard"
            title="Admin Dashboard"
          >
            <Cog6ToothIcon className="h-5 w-5" />
          </Link>
        </Providers>
      </body>
    </html>
  )
} 