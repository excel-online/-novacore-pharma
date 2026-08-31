import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(process.env.MONGODB_URI);
};

// Application Schema & Model
const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  jobTitle: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const Application = mongoose.models.Application || mongoose.model('Application', ApplicationSchema);

// POST: Save new job application
export async function POST(request) {
  try {
    const { fullName, email, resumeUrl, jobTitle } = await request.json();

    if (!fullName || !email || !resumeUrl) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    await connectDB();
    const newApplication = await Application.create({
      fullName,
      email,
      resumeUrl,
      jobTitle: jobTitle || 'General Application'
    });

    return NextResponse.json({ success: true, data: newApplication }, { status: 201 });
  } catch (error) {
    console.error('Application Submission Error:', error);
    return NextResponse.json({ error: 'Failed to submit application' }, { status: 500 });
  }
}

// GET: Retrieve all applications (for viewing submissions)
export async function GET() {
  try {
    await connectDB();
    const applications = await Application.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ success: true, data: applications }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch applications' }, { status: 500 });
  }
}
