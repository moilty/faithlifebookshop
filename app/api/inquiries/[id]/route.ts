import { NextRequest, NextResponse } from 'next/server'
import { inquiries, updateInquiryStatus } from '@/lib/data'

// GET /api/inquiries/[id] - Get a specific inquiry
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const inquiry = inquiries.find(i => i.id === params.id)
    
    if (!inquiry) {
      return NextResponse.json(
        { success: false, error: 'Inquiry not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: inquiry 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inquiry' },
      { status: 500 }
    )
  }
}

// PUT /api/inquiries/[id] - Update inquiry status
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { status, notes } = body

    if (!status) {
      return NextResponse.json(
        { success: false, error: 'Status is required' },
        { status: 400 }
      )
    }

    const updatedInquiry = updateInquiryStatus(params.id, status, notes)

    if (!updatedInquiry) {
      return NextResponse.json(
        { success: false, error: 'Inquiry not found or update failed' },
        { status: 404 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: updatedInquiry,
      message: 'Inquiry updated successfully' 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to update inquiry' },
      { status: 500 }
    )
  }
}
