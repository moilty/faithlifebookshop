'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { useAuth } from '@/components/providers/AuthProvider'
import { 
  UserIcon, 
  ShoppingBagIcon, 
  HeartIcon, 
  Cog6ToothIcon, 
  ArrowRightOnRectangleIcon,
  ChevronDownIcon
} from '@heroicons/react/24/outline'

interface UserMenuProps {
  user: any
}

export default function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const { logout } = useAuth()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLogout = async () => {
    try {
      await logout()
      setIsOpen(false)
    } catch (error) {
      console.error('Logout failed:', error)
    }
  }

  const menuItems = [
    {
      label: 'My Account',
      href: '/account',
      icon: UserIcon
    },
    {
      label: 'Order History',
      href: '/account/orders',
      icon: ShoppingBagIcon
    },
    {
      label: 'Wishlist',
      href: '/account/wishlist',
      icon: HeartIcon
    },
    {
      label: 'Settings',
      href: '/account/settings',
      icon: Cog6ToothIcon
    }
  ]

  // Add admin menu items for staff
  if (user.role !== 'customer') {
    menuItems.push({
      label: 'Admin Dashboard',
      href: '/admin',
      icon: Cog6ToothIcon
    })
  }

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 text-secondary-700 hover:text-primary-600 transition-colors p-2 rounded-lg hover:bg-secondary-50"
      >
        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
          <span className="text-primary-600 font-semibold text-sm">
            {user.name.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="hidden sm:inline text-sm font-medium">
          {user.name.split(' ')[0]}
        </span>
        <ChevronDownIcon className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-secondary-200 py-2 z-50">
          {/* User Info */}
          <div className="px-4 py-3 border-b border-secondary-200">
            <div className="font-medium text-secondary-900">{user.name}</div>
            <div className="text-sm text-secondary-600">{user.email}</div>
            {user.role !== 'customer' && (
              <div className="text-xs text-primary-600 font-medium mt-1">
                {user.role.replace('_', ' ').toUpperCase()}
              </div>
            )}
          </div>

          {/* Menu Items */}
          <div className="py-1">
            {menuItems.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-secondary-900 transition-colors"
                >
                  <IconComponent className="h-4 w-4 mr-3" />
                  {item.label}
                </Link>
              )
            })}
          </div>

          {/* Logout */}
          <div className="border-t border-secondary-200 pt-1">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm text-secondary-700 hover:bg-secondary-50 hover:text-secondary-900 transition-colors"
            >
              <ArrowRightOnRectangleIcon className="h-4 w-4 mr-3" />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  )
} 