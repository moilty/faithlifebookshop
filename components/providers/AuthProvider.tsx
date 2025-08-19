'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, AuthSession } from '@/types'

interface AuthContextType {
  user: User | null
  session: AuthSession | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: any) => Promise<void>
  logout: () => Promise<void>
  refreshSession: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<AuthSession | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    checkAuthStatus()
  }, [])

  const checkAuthStatus = async () => {
    try {
      const token = localStorage.getItem('auth_token')
      if (token) {
        // Verify token with backend
        const response = await fetch('/api/auth/verify', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        })
        
        if (response.ok) {
          const data = await response.json()
          setUser(data.user)
          setSession(data.session)
        } else {
          // Token is invalid, clear it
          localStorage.removeItem('auth_token')
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Login failed')
      }

      const data = await response.json()
      setUser(data.user)
      setSession(data.session)
      localStorage.setItem('auth_token', data.session.token)
    } catch (error) {
      console.error('Login error:', error)
      throw error
    }
  }

  const register = async (userData: any) => {
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.message || 'Registration failed')
      }

      const data = await response.json()
      setUser(data.user)
      setSession(data.session)
      localStorage.setItem('auth_token', data.session.token)
    } catch (error) {
      console.error('Registration error:', error)
      throw error
    }
  }

  const logout = async () => {
    try {
      // Call logout endpoint to invalidate token
      await fetch('/api/auth/logout', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session?.token}`
        }
      })
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setUser(null)
      setSession(null)
      localStorage.removeItem('auth_token')
    }
  }

  const refreshSession = async () => {
    try {
      const response = await fetch('/api/auth/refresh', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${session?.token}`
        }
      })

      if (response.ok) {
        const data = await response.json()
        setSession(data.session)
        localStorage.setItem('auth_token', data.session.token)
      }
    } catch (error) {
      console.error('Session refresh failed:', error)
      // If refresh fails, logout user
      await logout()
    }
  }

  const value: AuthContextType = {
    user,
    session,
    isLoading,
    login,
    register,
    logout,
    refreshSession,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 