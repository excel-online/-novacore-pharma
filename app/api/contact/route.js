import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import connectDB from '@/lib/mongodb'
import Inquiry from '@/models/Inquiry'

const resend = new Resend(process.env.RESEND_API_KEY)

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

    // Save to Database
    const inquiry = await Inquiry.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      organization: organization?.trim() || '',
      inquiryType: inquiryType || 'General',
      message: message.trim(),
    })

    // Send Notification Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Novacore Inquiry <onboarding@resend.dev>',
      to: process.env.EMAIL_TO,
      replyTo: email.trim(),
      subject: `New ${inquiryType || 'General'} Inquiry from ${name.trim()}`,
      html: `
        <h2>New Contact Inquiry</h2>
        <p><strong>Name:</strong> ${name.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Organization:</strong> ${organization?.trim() || 'N/A'}</p>
        <p><strong>Inquiry Type:</strong> ${inquiryType || 'General'}</p>
        <br/>
        <p><strong>Message:</strong></p>
        <p>${message.trim().replace(/\n/g, '<br/>')}</p>
      `,
    })

    if (error) {
      console.error('Resend Delivery Error:', error)
      return NextResponse.json(
        { success: false, message: 'Email notification failed, but inquiry was saved.' },
        { status: 500 }
      )
    }

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
