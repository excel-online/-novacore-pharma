import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import connectDB from '@/lib/mongodb'
import Application from '@/models/Application'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const { 
      fullName, 
      email, 
      phone, 
      position, 
      resumeUrl, 
      portfolioUrl, 
      coverLetter 
    } = body

    // Validate essential fields
    if (!fullName || !email || !phone || !resumeUrl) {
      return NextResponse.json(
        { success: false, message: 'Full name, email, phone number, and resume are required.' },
        { status: 400 }
      )
    }

    const appliedPosition = position?.trim() || 'General Application'

    // Save Application to MongoDB
    const application = await Application.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      position: appliedPosition,
      jobTitle: appliedPosition,
      resumeUrl: resumeUrl.trim(),
      portfolioUrl: portfolioUrl?.trim() || '',
      coverLetter: coverLetter?.trim() || '',
    })

    // Dispatch Email via Resend
    try {
      if (process.env.RESEND_API_KEY && process.env.EMAIL_TO) {
        await resend.emails.send({
          from: 'onboarding@resend.dev',
          to: process.env.EMAIL_TO,
          replyTo: email.trim(),
          subject: `New Application: ${fullName.trim()} - ${appliedPosition}`,
          html: `
            <h2>New Job Application Received</h2>
            <p><strong>Applicant Name:</strong> ${fullName.trim()}</p>
            <p><strong>Email:</strong> ${email.trim()}</p>
            <p><strong>Phone:</strong> ${phone.trim()}</p>
            <p><strong>Position:</strong> ${appliedPosition}</p>
            <p><strong>Resume URL:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
            <p><strong>LinkedIn / Portfolio:</strong> ${portfolioUrl ? `<a href="${portfolioUrl.trim()}">${portfolioUrl.trim()}</a>` : 'Not provided'}</p>
            <br/>
            <p><strong>Cover Letter / Notes:</strong></p>
            <p>${coverLetter ? coverLetter.trim().replace(/\n/g, '<br/>') : 'None provided'}</p>
          `,
        })
      }
    } catch (emailErr) {
      console.error('Email dispatch error:', emailErr)
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!', data: { id: application._id } },
      { status: 201 }
    )
  } catch (error) {
    console.error('Application API Error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit application.' },
      { status: 500 }
    )
  }
}
