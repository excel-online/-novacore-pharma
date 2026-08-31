import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import connectDB from '@/lib/mongodb'
import Application from '@/models/Application'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    await connectDB()
    const body = await request.json()
    const { fullName, email, phone, position, resumeUrl, coverLetter } = body

    if (!fullName || !email || !resumeUrl) {
      return NextResponse.json(
        { success: false, message: 'Full name, email, and resume are required.' },
        { status: 400 }
      )
    }

    // Save Application to Database
    const application = await Application.create({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      position: position?.trim() || 'General Application',
      resumeUrl: resumeUrl.trim(),
      coverLetter: coverLetter?.trim() || '',
    })

    // Send Email Notification via Resend
    const { data, error } = await resend.emails.send({
      from: 'Novacore Applications <onboarding@resend.dev>',
      to: process.env.EMAIL_TO,
      replyTo: email.trim(),
      subject: `New Job Application: ${fullName.trim()} - ${position || 'General'}`,
      html: `
        <h2>New Job Application Received</h2>
        <p><strong>Applicant Name:</strong> ${fullName.trim()}</p>
        <p><strong>Email:</strong> ${email.trim()}</p>
        <p><strong>Phone:</strong> ${phone?.trim() || 'N/A'}</p>
        <p><strong>Position:</strong> ${position || 'General'}</p>
        <p><strong>Resume URL:</strong> <a href="${resumeUrl}">${resumeUrl}</a></p>
        <br/>
        <p><strong>Cover Letter:</strong></p>
        <p>${coverLetter ? coverLetter.trim().replace(/\n/g, '<br/>') : 'None provided'}</p>
      `,
    })

    if (error) {
      console.error('Resend Application Email Error:', error)
    }

    return NextResponse.json(
      { success: true, message: 'Application submitted successfully!', data: { id: application._id } },
      { status: 201 }
    )
  } catch (error) {
    console.error('Application API Error:', error)
    return NextResponse.json(
      { success: false, message: 'Failed to submit application.' },
      { status: 500 }
    )
  }
}
