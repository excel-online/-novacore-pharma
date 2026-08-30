import { NextResponse } from 'next/server'
import { v2 as cloudinary } from 'cloudinary'
import connectDB from '@/lib/mongodb'
import Application from '@/models/Application'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export async function POST(req) {
  try {
    await connectDB()
    const formData = await req.formData()
    
    const fullName = formData.get('fullName')
    const email = formData.get('email')
    const jobTitle = formData.get('jobTitle')
    const file = formData.get('resume')

    if (!file) {
      return NextResponse.json({ error: 'Resume file is required' }, { status: 400 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResponse = await new Promise((resolve, reject) => {
      cloudinary.uploader.upload_stream(
        { resource_type: 'raw', folder: 'novacore_resumes' },
        (error, result) => {
          if (error) reject(error)
          else resolve(result)
        }
      ).end(buffer)
    })

    const newApplication = await Application.create({
      fullName,
      email,
      jobTitle,
      resumeUrl: uploadResponse.secure_url,
    })

    return NextResponse.json({ success: true, data: newApplication }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
