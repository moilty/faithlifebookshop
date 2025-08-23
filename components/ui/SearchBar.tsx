'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { MagnifyingGlassIcon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline'

interface SearchResult {
  id: string
  title: string
  type: 'product'
  grade?: string
  subject?: string
  url: string
  author?: string
  price?: number
  image?: string
}

export default function SearchBar() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isFocused, setIsFocused] = useState(false)
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Search function
  const performSearch = async (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setSearchResults([])
      return
    }

    setIsLoading(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      if (response.ok) {
        const data = await response.json()
        setSearchResults(data.results || [])
      } else {
        setSearchResults([])
      }
    } catch (error) {
      console.error('Search error:', error)
      setSearchResults([])
    } finally {
      setIsLoading(false)
    }
  }

  // Debounced search with longer delay and minimum query length
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (query.length >= 3) { // Increased minimum length
        performSearch(query)
      } else if (query.length === 0) {
        setSearchResults([])
      }
    }, 500) // Increased delay to 500ms

    return () => clearTimeout(timeoutId)
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
        setIsFocused(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (query.length >= 3) { // Increased minimum length
      setIsOpen(true)
      setSelectedIndex(-1)
    } else {
      setIsOpen(false)
    }
  }, [query])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!searchResults) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setSelectedIndex(prev => 
          prev < searchResults.length - 1 ? prev + 1 : prev
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
        break
      case 'Enter':
        e.preventDefault()
        if (selectedIndex >= 0 && searchResults[selectedIndex]) {
          handleResultClick(searchResults[selectedIndex])
        } else if (query.trim()) {
          handleSearch()
        }
        break
      case 'Escape':
        setIsOpen(false)
        setSelectedIndex(-1)
        setIsFocused(false)
        inputRef.current?.blur()
        break
    }
  }

  const handleSearch = () => {
    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`)
      setIsOpen(false)
      setQuery('')
      setIsFocused(false)
    }
  }

  const handleResultClick = (result: SearchResult) => {
    router.push(result.url)
    setIsOpen(false)
    setQuery('')
    setSelectedIndex(-1)
    setIsFocused(false)
  }

  const clearSearch = () => {
    setQuery('')
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.focus()
  }

  return (
    <div ref={searchRef} className="relative w-full">
      <div className="relative group">
        {/* Enhanced search icon */}
        <div className="absolute inset-y-0 left-0 pl-3 sm:pl-4 flex items-center pointer-events-none">
          <div className={`
            transition-all duration-300
            ${isFocused ? 'text-primary-600 scale-110' : 'text-secondary-400'}
          `}>
            <MagnifyingGlassIcon className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
        </div>
        
        {/* Enhanced input field */}
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            setIsFocused(true)
            if (query.length >= 3) setIsOpen(true)
          }}
          onBlur={() => setIsFocused(false)}
          placeholder="Search books, subjects, or ISBN..."
          className={`
            w-full pl-10 sm:pl-12 pr-10 sm:pr-12 py-2 sm:py-3 lg:py-4 border-2 rounded-lg sm:rounded-xl transition-all duration-300
            focus:outline-none focus:ring-4 focus:ring-primary-500/20 text-sm sm:text-base
            ${isFocused 
              ? 'border-primary-500 bg-white shadow-lg' 
              : 'border-secondary-200 hover:border-secondary-300 bg-secondary-50/50'
            }
            ${isOpen ? 'rounded-b-none border-b-0' : ''}
          `}
        />
        
        {/* Enhanced clear button */}
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 sm:pr-4 flex items-center group/clear"
          >
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-secondary-200 hover:bg-secondary-300 rounded-full flex items-center justify-center transition-all duration-300 group-hover/clear:scale-110">
              <XMarkIcon className="h-3 w-3 sm:h-4 sm:w-4 text-secondary-600" />
            </div>
          </button>
        )}
      </div>

      {/* Enhanced Search Results Dropdown */}
      {isOpen && (
        <div className="absolute z-50 w-full bg-white border-2 border-t-0 border-primary-500 rounded-b-xl shadow-2xl max-h-80 sm:max-h-96 overflow-hidden animate-slide-down">
          {/* Search results header */}
          <div className="px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-r from-primary-50 to-secondary-50 border-b border-secondary-200">
            <div className="flex items-center space-x-2">
              <SparklesIcon className="h-4 w-4 text-primary-600" />
              <span className="text-sm font-medium text-secondary-700">
                {isLoading ? 'Searching...' : `Found ${searchResults?.length || 0} results`}
              </span>
            </div>
          </div>

          <div className="max-h-64 sm:max-h-80 overflow-y-auto custom-scrollbar">
            {isLoading ? (
              <div className="p-4 sm:p-6 text-center">
                <div className="spinner w-6 h-6 sm:w-8 sm:h-8 mx-auto mb-2 sm:mb-3"></div>
                <p className="text-secondary-600 font-medium text-sm sm:text-base">Searching...</p>
                <p className="text-xs sm:text-sm text-secondary-500">Looking for the best matches</p>
              </div>
            ) : searchResults && searchResults.length > 0 ? (
              <div>
                {searchResults.map((result: SearchResult, index: number) => (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className={`
                      w-full text-left px-3 sm:px-4 py-3 sm:py-4 transition-all duration-200 group
                      ${index === selectedIndex 
                        ? 'bg-primary-50 border-l-4 border-primary-500' 
                        : 'hover:bg-secondary-50 border-l-4 border-transparent'
                      }
                    `}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors text-sm sm:text-base truncate">
                          {result.title}
                        </div>
                        <div className="text-xs sm:text-sm text-secondary-600 mt-1 truncate">
                          {result.author} • {result.grade} • {result.subject}
                        </div>
                        {result.price && (
                          <div className="text-xs sm:text-sm text-primary-600 font-medium mt-1">
                            ₦{result.price.toLocaleString()}
                          </div>
                        )}
                      </div>
                      <div className="text-xs font-medium px-2 py-1 rounded-full transition-all duration-200 flex-shrink-0 ml-2 bg-blue-100 text-blue-700 group-hover:bg-blue-200">
                        Product
                      </div>
                    </div>
                  </button>
                ))}
                
                {/* View all results */}
                <div className="border-t border-secondary-200 p-3 sm:p-4">
                  <button
                    onClick={handleSearch}
                    className="w-full text-left text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 flex items-center justify-between group text-sm sm:text-base"
                  >
                    <span className="truncate">View all results for "{query}"</span>
                    <div className="w-4 h-4 bg-primary-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0 ml-2">
                      <SparklesIcon className="h-3 w-3 text-primary-600" />
                    </div>
                  </button>
                </div>
              </div>
            ) : query.length >= 3 ? (
              <div className="p-4 sm:p-6 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                  <MagnifyingGlassIcon className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-400" />
                </div>
                <p className="text-secondary-600 font-medium text-sm sm:text-base">No results found</p>
                <p className="text-xs sm:text-sm text-secondary-500">Try different keywords or browse our categories</p>
              </div>
            ) : null}
          </div>
        </div>
      )}
    </div>
  )
} 