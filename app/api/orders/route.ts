import { NextRequest, NextResponse } from 'next/server'
import { orders, addNewOrder } from '@/lib/data'

// GET /api/orders - Get all orders
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      data: orders,
      count: orders.length 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch orders' },
      { status: 500 }
    )
  }
}

// POST /api/orders - Create a new order
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, error: 'Order must contain items' },
        { status: 400 }
      )
    }

    if (!body.user) {
      return NextResponse.json(
        { success: false, error: 'Order must have user information' },
        { status: 400 }
      )
    }

    // Create the order
    const newOrder = addNewOrder(body)
    
    if (!newOrder) {
      return NextResponse.json(
        { success: false, error: 'Failed to create order' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: newOrder,
      message: 'Order created successfully' 
    }, { status: 201 })
  } catch (error) {
    console.error('Order creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create order' },
      { status: 500 }
    )
  }
}
