import mongoose from 'mongoose'

const ApplicationSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  email: { type: String, required: true },
  jobTitle: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
})

export default mongoose.models.Application || mongoose.model('Application', ApplicationSchema)
