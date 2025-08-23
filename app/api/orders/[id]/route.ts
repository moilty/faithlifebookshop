import { NextRequest, NextResponse } from 'next/server'
import { orders, updateOrderStatus, updatePaymentStatus, deleteOrder } from '@/lib/data'

// GET /api/orders/[id] - Get a specific order
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const order = orders.find(o => o.id === params.id)
    
    if (!order) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: order 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch order' },
      { status: 500 }
    )
  }
}

// PUT /api/orders/[id] - Update order status or payment status
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status, paymentStatus } = body

    let updatedOrder = null

    if (status) {
      updatedOrder = updateOrderStatus(params.id, status)
    }

    if (paymentStatus) {
      updatedOrder = updatePaymentStatus(params.id, paymentStatus)
    }

    if (!updatedOrder) {
      return NextResponse.json(
        { success: false, error: 'Order not found or update failed' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: updatedOrder,
      message: 'Order updated successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update order' },
      { status: 500 }
    )
  }
}

// DELETE /api/orders/[id] - Delete an order
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const deletedOrder = deleteOrder(params.id)
    
    if (!deletedOrder) {
      return NextResponse.json(
        { success: false, error: 'Order not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: deletedOrder,
      message: 'Order deleted successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to delete order' },
      { status: 500 }
    )
  }
}
