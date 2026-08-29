import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Inquiry from '@/models/Inquiry'

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()

    const { name, email, organization, inquiryType, message } = body

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Name, email, and message are required fields.' },
        { status: 400 }
      )
    }

    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    if (name.length > 100) {
      return NextResponse.json(
        { success: false, message: 'Name cannot exceed 100 characters.' },
        { status: 400 }
      )
    }

    if (message.length > 2000) {
      return NextResponse.json(
        { success: false, message: 'Message cannot exceed 2000 characters.' },
        { status: 400 }
      )
    }

    const inquiry = await Inquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization?.trim() || '',
      inquiryType: inquiryType || 'General',
      message: message.trim(),
    })

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully.', data: { id: inquiry._id } },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
