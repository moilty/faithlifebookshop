'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { Cart, CartItem, Product } from '@/types'
import { useAuth } from './AuthProvider'
import toast from 'react-hot-toast'

interface CartContextType {
  cart: Cart | null
  isLoading: boolean
  addToCart: (product: Product, quantity?: number) => Promise<void>
  removeFromCart: (productId: string) => Promise<void>
  updateQuantity: (productId: string, quantity: number) => Promise<void>
  clearCart: () => Promise<void>
  applyCoupon: (code: string) => Promise<void>
  removeCoupon: () => Promise<void>
  getCartTotal: () => number
  getCartItemCount: () => number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { user, session } = useAuth()

  useEffect(() => {
    loadCart()
  }, [user])

  const loadCart = async () => {
    try {
      setIsLoading(true)
      
      if (user && session) {
        // Load user's cart from server
        const response = await fetch('/api/cart', {
          headers: {
            'Authorization': `Bearer ${session.token}`
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          setCart(data.cart)
        }
      } else {
        // Load guest cart from localStorage
        const savedCart = localStorage.getItem('guest_cart')
        if (savedCart) {
          setCart(JSON.parse(savedCart))
        } else {
          // Initialize empty cart
          setCart({
            id: 'guest',
            items: [],
            subtotal: 0,
            shipping: 0,
            total: 0,
            createdAt: new Date(),
            updatedAt: new Date()
          })
        }
      }
    } catch (error) {
      console.error('Failed to load cart:', error)
      toast.error('Failed to load cart')
    } finally {
      setIsLoading(false)
    }
  }

  const saveCart = async (updatedCart: Cart) => {
    try {
      if (user && session) {
        // Save to server
        const response = await fetch('/api/cart', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session.token}`
          },
          body: JSON.stringify(updatedCart)
        })
        
        if (response.ok) {
          setCart(updatedCart)
        }
      } else {
        // Save to localStorage
        localStorage.setItem('guest_cart', JSON.stringify(updatedCart))
        setCart(updatedCart)
      }
    } catch (error) {
      console.error('Failed to save cart:', error)
      toast.error('Failed to save cart')
    }
  }

  const addToCart = async (product: Product, quantity: number = 1) => {
    try {
      const currentCart = cart || {
        id: user ? 'user' : 'guest',
        items: [],
        subtotal: 0,
        shipping: 0,
        total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      const existingItemIndex = currentCart.items.findIndex(
        item => item.productId === product.id
      )

      let updatedItems: CartItem[]

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        updatedItems = currentCart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      } else {
        // Add new item
        const newItem: CartItem = {
          productId: product.id,
          product,
          quantity,
          price: product.salePrice || product.price
        }
        updatedItems = [...currentCart.items, newItem]
      }

      const subtotal = updatedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      )

      const updatedCart: Cart = {
        ...currentCart,
        items: updatedItems,
        subtotal,
        total: subtotal + currentCart.shipping,
        updatedAt: new Date()
      }

      await saveCart(updatedCart)
      toast.success(`${product.title} added to cart`)
    } catch (error) {
      console.error('Failed to add to cart:', error)
      toast.error('Failed to add item to cart')
    }
  }

  const removeFromCart = async (productId: string) => {
    try {
      if (!cart) return

      const updatedItems = cart.items.filter(item => item.productId !== productId)
      const subtotal = updatedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      )

      const updatedCart: Cart = {
        ...cart,
        items: updatedItems,
        subtotal,
        total: subtotal + cart.shipping,
        updatedAt: new Date()
      }

      await saveCart(updatedCart)
      toast.success('Item removed from cart')
    } catch (error) {
      console.error('Failed to remove from cart:', error)
      toast.error('Failed to remove item from cart')
    }
  }

  const updateQuantity = async (productId: string, quantity: number) => {
    try {
      if (!cart || quantity <= 0) return

      const updatedItems = cart.items.map(item =>
        item.productId === productId
          ? { ...item, quantity }
          : item
      )

      const subtotal = updatedItems.reduce(
        (sum, item) => sum + (item.price * item.quantity),
        0
      )

      const updatedCart: Cart = {
        ...cart,
        items: updatedItems,
        subtotal,
        total: subtotal + cart.shipping,
        updatedAt: new Date()
      }

      await saveCart(updatedCart)
    } catch (error) {
      console.error('Failed to update quantity:', error)
      toast.error('Failed to update quantity')
    }
  }

  const clearCart = async () => {
    try {
      const emptyCart: Cart = {
        id: user ? 'user' : 'guest',
        items: [],
        subtotal: 0,
        shipping: 0,
        total: 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }

      await saveCart(emptyCart)
      toast.success('Cart cleared')
    } catch (error) {
      console.error('Failed to clear cart:', error)
      toast.error('Failed to clear cart')
    }
  }

  const applyCoupon = async (code: string) => {
    try {
      if (!cart) return

      // Handle FIRSTORDER coupon code
      if (code.toUpperCase() === 'FIRSTORDER') {
        const discount = Math.round(cart.subtotal * 0.4) // 40% off
        
        const updatedCart: Cart = {
          ...cart,
          couponCode: code.toUpperCase(),
          discount,
          total: cart.subtotal + cart.shipping - discount,
          updatedAt: new Date()
        }

        await saveCart(updatedCart)
        toast.success(`Coupon applied! Saved ${discount.toLocaleString()} NGN (40% off)`)
        return
      }

      // For other coupon codes, you can implement API validation here
      const response = await fetch('/api/coupons/validate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(session && { 'Authorization': `Bearer ${session.token}` })
        },
        body: JSON.stringify({ code, cartTotal: cart.subtotal })
      })

      if (response.ok) {
        const data = await response.json()
        const discount = data.discount

        const updatedCart: Cart = {
          ...cart,
          couponCode: code,
          discount,
          total: cart.subtotal + cart.shipping - discount,
          updatedAt: new Date()
        }

        await saveCart(updatedCart)
        toast.success(`Coupon applied! Saved ${discount.toLocaleString()} NGN`)
      } else {
        const error = await response.json()
        toast.error(error.message || 'Invalid coupon code')
      }
    } catch (error) {
      console.error('Failed to apply coupon:', error)
      toast.error('Failed to apply coupon')
    }
  }

  const removeCoupon = async () => {
    try {
      if (!cart) return

      const updatedCart: Cart = {
        ...cart,
        couponCode: undefined,
        discount: undefined,
        total: cart.subtotal + cart.shipping,
        updatedAt: new Date()
      }

      await saveCart(updatedCart)
      toast.success('Coupon removed')
    } catch (error) {
      console.error('Failed to remove coupon:', error)
      toast.error('Failed to remove coupon')
    }
  }

  const getCartTotal = () => {
    return cart?.total || 0
  }

  const getCartItemCount = () => {
    return cart?.items.reduce((sum, item) => sum + item.quantity, 0) || 0
  }

  const value: CartContextType = {
    cart,
    isLoading,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    applyCoupon,
    removeCoupon,
    getCartTotal,
    getCartItemCount,
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
} 