import { NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import Subscriber from '@/models/Subscriber'

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json(
        { success: false, message: 'Email is required.' },
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

    const existing = await Subscriber.findOne({ email: email.trim().toLowerCase() })
    if (existing) {
      return NextResponse.json(
        { success: true, message: 'You are already subscribed!' },
        { status: 200 }
      )
    }

    await Subscriber.create({
      email: email.trim().toLowerCase(),
    })

    return NextResponse.json(
      { success: true, message: 'Subscribed successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Subscribe API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}
