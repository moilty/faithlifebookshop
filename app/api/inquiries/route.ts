import { NextRequest, NextResponse } from 'next/server'
import { inquiries, addNewInquiry } from '@/lib/data'

// GET /api/inquiries - Get all inquiries
export async function GET() {
  try {
    return NextResponse.json({ 
      success: true, 
      data: inquiries,
      count: inquiries.length 
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Failed to fetch inquiries' },
      { status: 500 }
    )
  }
}

// POST /api/inquiries - Create a new inquiry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validate required fields
    if (!body.name || !body.message) {
      return NextResponse.json(
        { success: false, error: 'Name and message are required' },
        { status: 400 }
      )
    }

    // Create the inquiry
    const newInquiry = addNewInquiry(body)
    
    if (!newInquiry) {
      return NextResponse.json(
        { success: false, error: 'Failed to create inquiry' },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      data: newInquiry,
      message: 'Inquiry created successfully' 
    }, { status: 201 })
  } catch (error) {
    console.error('Inquiry creation error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to create inquiry' },
      { status: 500 }
    )
  }
}
