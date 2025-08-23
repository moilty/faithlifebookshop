import { NextRequest, NextResponse } from 'next/server'
import { products } from '@/lib/data'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.trim().length < 2) {
      return NextResponse.json({ results: [] })
    }

    const lowercaseQuery = query.toLowerCase().trim()
    
    // Search in products
    const productResults = products
      .filter(product => 
        product.title.toLowerCase().includes(lowercaseQuery) ||
        product.author.toLowerCase().includes(lowercaseQuery) ||
        product.subject.toLowerCase().includes(lowercaseQuery) ||
        product.grade.toLowerCase().includes(lowercaseQuery) ||
        product.isbn.toLowerCase().includes(lowercaseQuery) ||
        product.sku.toLowerCase().includes(lowercaseQuery) ||
        product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
      )
      .map(product => ({
        id: product.id,
        title: product.title,
        type: 'product' as const,
        grade: product.grade,
        subject: product.subject,
        url: `/shop/${product.id}`,
        author: product.author,
        price: product.salePrice || product.price,
        image: product.images[0]
      }))
      .slice(0, 5) // Limit to 5 results for dropdown

    // Return only product results
    const sortedResults = productResults

    return NextResponse.json({ 
      results: sortedResults,
      total: sortedResults.length,
      query: lowercaseQuery
    })

  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
