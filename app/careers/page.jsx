'use client'

import { useState, useRef } from 'react'
import Link from 'next/link'
import { 
  ArrowRight, MapPin, Clock, Briefcase, Heart, Globe, 
  GraduationCap, Zap, Users, Coffee, Plane, ShieldCheck,
  Search, Filter, ChevronDown, X, CheckCircle, Upload, Loader2
} from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const departments = ['All', 'Research & Development', 'Clinical Operations', 'Manufacturing', 'Quality Assurance', 'Regulatory Affairs', 'IT & Data Science', 'Corporate']
const locations = ['All Locations', 'Cambridge, MA', 'Basel, Switzerland', 'Singapore', 'Remote']

const jobs = [
  { id: 1, title: 'Senior Scientist, Immunology', department: 'Research & Development', location: 'Cambridge, MA', type: 'Full-time', posted: '2 days ago', description: 'Lead discovery efforts in autoimmune disease research, designing and executing in vitro and in vivo studies.' },
  { id: 2, title: 'Clinical Trial Manager', department: 'Clinical Operations', location: 'Basel, Switzerland', type: 'Full-time', posted: '3 days ago', description: 'Oversee Phase II/III oncology trials across European sites, ensuring GCP compliance and patient safety.' },
  { id: 3, title: 'Bioinformatics Engineer', department: 'IT & Data Science', location: 'Remote', type: 'Full-time', posted: '1 week ago', description: 'Build pipelines for genomic data analysis, variant calling, and AI-driven target identification.' },
  { id: 4, title: 'Process Engineer, Biologics', department: 'Manufacturing', location: 'Singapore', type: 'Full-time', posted: '5 days ago', description: 'Optimize upstream and downstream bioprocesses for monoclonal antibody production at scale.' },
  { id: 5, title: 'Regulatory Affairs Specialist', department: 'Regulatory Affairs', location: 'Cambridge, MA', type: 'Full-time', posted: '1 day ago', description: 'Prepare and submit IND/NDA filings to FDA and global agencies for novel oncology therapies.' },
  { id: 6, title: 'QA Analyst, GMP Compliance', department: 'Quality Assurance', location: 'Basel, Switzerland', type: 'Full-time', posted: '4 days ago', description: 'Audit manufacturing batches and documentation to ensure adherence to GMP and internal SOPs.' },
  { id: 7, title: 'ML Research Scientist', department: 'IT & Data Science', location: 'Cambridge, MA', type: 'Full-time', posted: '2 weeks ago', description: 'Develop deep learning models for molecular property prediction and de novo drug design.' },
  { id: 8, title: 'Global Health Program Coordinator', department: 'Corporate', location: 'Singapore', type: 'Contract', posted: '3 days ago', description: 'Coordinate managed access programs and partnerships with NGOs in low- and middle-income countries.' },
]

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: GraduationCap, title: 'Learning & Development', desc: 'Tuition reimbursement, conference attendance, and internal training programs.' },
  { icon: Globe, title: 'Global Mobility', desc: 'Opportunities to work across our Cambridge, Basel, and Singapore campuses.' },
  { icon: Zap, title: 'Performance Bonus', desc: 'Annual bonuses tied to individual and company-wide scientific milestones.' },
  { icon: Users, title: 'Inclusive Culture', desc: 'Employee resource groups, mentorship programs, and diversity initiatives.' },
  { icon: Coffee, title: 'Work-Life Balance', desc: 'Flexible schedules, generous PTO, and parental leave policies.' },
  { icon: Plane, title: 'Paid Time Off', desc: '20+ days annual leave plus sabbatical options for long-tenured employees.' },
  { icon: ShieldCheck, title: 'Retirement Planning', desc: '401(k) matching and pension schemes with competitive employer contributions.' },
]

export default function CareersPage() {
  const [selectedDept, setSelectedDept] = useState('All')
  const [selectedLocation, setSelectedLocation] = useState('All Locations')
  const [searchQuery, setSearchQuery] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  
  // Modal State
  const [selectedJob, setSelectedJob] = useState(null)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Form & File Upload State
  const fileInputRef = useRef(null)
  const [selectedFile, setSelectedFile] = useState(null)
  const [resumeUrl, setResumeUrl] = useState('')
  const [isUploading, setIsUploading] = useState(false)
  const [uploadError, setUploadError] = useState('')
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const filteredJobs = jobs.filter((job) => {
    const matchDept = selectedDept === 'All' || job.department === selectedDept
    const matchLoc = selectedLocation === 'All Locations' || job.location === selectedLocation
    const matchSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        job.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchDept && matchLoc && matchSearch
  })

  const handleFileChange = async (e) => {
    const file = e.target.files[0]
    if (!file) return

    setSelectedFile(file)
    setIsUploading(true)
    setUploadError('')

    try {
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const data = await response.json()

      if (response.ok) {
        setResumeUrl(data.url)
      } else {
        setUploadError(data.error || 'Failed to upload resume')
      }
    } catch (err) {
      setUploadError('An error occurred during upload. Please try again.')
    } finally {
      setIsUploading(false)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!resumeUrl && selectedFile) {
      setUploadError('Please wait for the resume to finish uploading.')
      return
    }

    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setSelectedJob(null)
      setSelectedFile(null)
      setResumeUrl('')
      setFullName('')
      setEmail('')
      setUploadError('')
    }, 2500)
  }

  const resetModalState = () => {
    setSelectedJob(null)
    setSelectedFile(null)
    setResumeUrl('')
    setFullName('')
    setEmail('')
    setUploadError('')
    setIsUploading(false)
  }

  return (
    <>
      {/* Careers Hero */}
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Careers</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
                Join Us in <span className="gradient-text">Reimagining Medicine</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Be part of a team that's transforming healthcare for millions of people worldwide. 
                Explore career opportunities at NovacoreLife and help us advance the future of medicine.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={300}>
              <Link
                href="#openings"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
              >
                View Open Positions <ArrowRight className="w-5 h-5" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Culture</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Why NovacoreLife?</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We believe that the best science happens when talented people from diverse backgrounds come together 
                with a shared purpose.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { value: '77k+', label: 'Dedicated Associates', text: 'Across 100+ countries working as one global team.' },
              { value: '94%', label: 'Employee Satisfaction', text: 'Of our team would recommend NovacoreLife as a great place to work.' },
              { value: '40+', label: 'ERGs & Communities', text: 'Employee resource groups fostering inclusion and belonging.' },
            ].map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-8 rounded-2xl bg-light-gray border border-slate-100 text-center h-full">
                  <div className="text-4xl font-bold text-accent mb-2">{stat.value}</div>
                  <div className="text-primary font-semibold">{stat.label}</div>
                  <p className="text-slate-500 text-sm mt-2">{stat.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 80}>
                <div className="group p-6 rounded-2xl bg-light-gray border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <benefit.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section id="openings" className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Opportunities</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Open Positions</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Find your next role and help us bring breakthrough treatments to patients who need them most.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal direction="up" delay={150}>
            <div className="mb-8 space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, keyword, or description..."
                  className="w-full pl-12 pr-4 py-4 rounded-xl bg-white border border-slate-200 text-dark-slate placeholder-slate-400 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                />
              </div>
              
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 text-sm font-medium text-dark-slate hover:text-accent transition-colors"
              >
                <Filter className="w-4 h-4" />
                Filters
                <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </button>

              {showFilters && (
                <div className="grid sm:grid-cols-2 gap-4 p-4 rounded-xl bg-white border border-slate-100">
                  <div>
                    <label className="block text-sm font-medium text-dark-slate mb-2">Department</label>
                    <select
                      value={selectedDept}
                      onChange={(e) => setSelectedDept(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-light-gray border border-slate-200 text-sm focus:outline-none focus:border-accent cursor-pointer"
                    >
                      {departments.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-slate mb-2">Location</label>
                    <select
                      value={selectedLocation}
                      onChange={(e) => setSelectedLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-light-gray border border-slate-200 text-sm focus:outline-none focus:border-accent cursor-pointer"
                    >
                      {locations.map((l) => (
                        <option key={l} value={l}>{l}</option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16">
                <Briefcase className="w-12 h-12 text-slate-300 mx-auto mb-4" />
                <p className="text-slate-500">No positions match your criteria. Try adjusting your filters.</p>
              </div>
            ) : (
              filteredJobs.map((job, i) => (
                <ScrollReveal key={job.id} direction="up" delay={i * 80}>
                  <div className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                          {job.title}
                        </h3>
                        <p className="text-slate-500 text-sm mt-2 leading-relaxed">{job.description}</p>
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-slate-500">
                          <span className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4 text-accent" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4 text-accent" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-accent" />
                            {job.type}
                          </span>
                          <span className="text-slate-400">{job.posted}</span>
                        </div>
                      </div>
                      <button 
                        onClick={() => setSelectedJob(job)}
                        className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-dark-slate text-white text-sm font-semibold transition-all hover:-translate-y-0.5 cursor-pointer"
                      >
                        Apply Now <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </ScrollReveal>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
            <div className="flex items-center justify-between p-6 bg-slate-900 text-white">
              <div>
                <h3 className="font-bold text-lg">{selectedJob.title}</h3>
                <p className="text-xs text-slate-400">{selectedJob.department} • {selectedJob.location}</p>
              </div>
              <button 
                onClick={resetModalState}
                className="text-slate-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-8 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-2xl font-bold text-slate-900">Application Submitted!</h4>
                <p className="text-sm text-slate-500">
                  Thank you for applying to NovacoreLife. Our talent team will review your qualifications and follow up shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Full Name</label>
                  <input 
                    required 
                    type="text" 
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="John Doe" 
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-accent" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Email Address</label>
                  <input 
                    required 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com" 
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:border-accent" 
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase text-slate-600 mb-1">Resume / CV</label>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                  <div 
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-slate-200 rounded-lg p-4 text-center cursor-pointer hover:border-accent transition-colors"
                  >
                    {isUploading ? (
                      <div className="flex flex-col items-center gap-1">
                        <Loader2 className="w-6 h-6 text-accent animate-spin mx-auto" />
                        <span className="text-xs text-accent font-medium">Uploading to Cloudinary...</span>
                      </div>
                    ) : (
                      <>
                        <Upload className="w-6 h-6 text-slate-400 mx-auto mb-1" />
                        <span className="text-xs text-slate-500">
                          {selectedFile ? (
                            <span className="text-accent font-medium">{selectedFile.name}</span>
                          ) : (
                            'Click to upload PDF or DOCX (Max 5MB)'
                          )}
                        </span>
                      </>
                    )}
                  </div>
                  {uploadError && (
                    <p className="text-xs text-red-500 mt-1">{uploadError}</p>
                  )}
                </div>
                <button 
                  type="submit" 
                  disabled={isUploading}
                  className="w-full py-3 rounded-xl bg-accent hover:bg-cyan-600 text-white font-semibold transition-all shadow-md shadow-accent/20 disabled:opacity-50"
                >
                  Submit Application
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* General Inquiry Banner */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Don't See the Right Fit?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and we'll keep you in mind 
              for future opportunities.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Send General Inquiry <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
