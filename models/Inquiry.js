import mongoose from 'mongoose'

const InquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  organization: {
    type: String,
    trim: true,
    maxlength: [200, 'Organization cannot exceed 200 characters'],
  },
  inquiryType: {
    type: String,
    enum: ['General', 'Partnership', 'Research', 'Careers', 'Media'],
    default: 'General',
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [2000, 'Message cannot exceed 2000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Inquiry || mongoose.model('Inquiry', InquirySchema)
