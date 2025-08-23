'use client'

import Link from 'next/link'
import Image from 'next/image'
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ArrowUpIcon
} from '@heroicons/react/24/outline'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const footerLinks = {
  products: [
    { name: 'Shop by Grade', href: '/shop' },
    { name: 'New Arrivals', href: '/shop?filter=new' },
    { name: 'Best Sellers', href: '/shop?filter=popular' },
    { name: 'Sale Items', href: '/shop?filter=sale' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Teachers', href: '/teachers' },
    { name: 'Careers', href: '/careers' },
  ],
  support: [
    { name: 'Help Center', href: '/faqs' },
    { name: 'Contact Us', href: '/contact' },
    { name: 'Delivery & Returns', href: '/delivery-returns' },
    { name: 'Store Locator', href: '/store-locator' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Refund Policy', href: '/refund-policy' },
  ]
}

const socialLinks = [
  { name: 'X', href: 'https://x.com/comradeenoch', icon: FaXTwitter },
  { name: 'LinkedIn', href: 'https://linkedin.com', icon: FaFacebookF },
  { name: 'Instagram', href: 'https://instagram.com/akingbademoyinoluwaenoch', icon: FaInstagram },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="global-footer bg-secondary-900 text-white">
      {/* Top Section - Branding and Tagline */}
              <div className="container mx-auto px-2 py-8 sm:py-12">
        
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <Image
              src="/images/logo2.png"
              alt="Faith Life Bookshop logo"
              width={32}
              height={32}
              className="object-contain w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold">Faith Life Bookshop</h3>
            <p className="text-secondary-400 text-sm">Empowering students with quality educational materials for academic excellence</p>
          </div>
        </div>
      </div>

      {/* Middle Section - Navigation Links */}
              <div className="container mx-auto px-2 pb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link 
                    href = 'https://faithlifebookshop.vercel.app'
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Support</h4>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    href= 'https://wa.me/2348130621314'
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-secondary-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright, Social Media, and Back to Top */}
      <div className="border-t border-secondary-800">
        <div className="container mx-auto px-2 py-6">
          {/* Copyright */}
          <div className="text-center mb-4">
            <p className="text-secondary-400 text-sm">
              © {new Date().getFullYear()} Faith Life Bookshop. All rights reserved.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-secondary-400 hover:text-white transition-colors"
                  aria-label={social.name}
                  title={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5" />
                </a>
              )
            })}
          </div>

          {/* Back to Top */}
          <div className="text-center">
            <button
              onClick={scrollToTop}
              className="text-secondary-400 hover:text-white transition-colors text-sm flex items-center justify-center mx-auto space-x-1"
              aria-label="Back to top"
            >
              <span>Back to top</span>
              <ArrowUpIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* WhatsApp Float Button */}
      <a
        href="https://wa.me/2348130621314"
        className="fixed bottom-6 right-6 bg-success-500 text-white p-4 rounded-full shadow-lg hover:bg-success-600 transition-colors z-50"
        aria-label="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp className="h-6 w-6" />
      </a>
    </footer>
  )
} 