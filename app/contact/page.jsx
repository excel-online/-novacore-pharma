'use client'

import { useState } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const inquiryTypes = ['General', 'Partnership', 'Research', 'Careers', 'Media']

const offices = [
  {
    city: 'Cambridge, MA',
    address: '1200 Innovation Drive, Cambridge, MA 02142',
    phone: '+1 (617) 555-0147',
    email: 'cambridge@novacorelife.com',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM EST',
  },
  {
    city: 'Basel, Switzerland',
    address: 'Pharmaceutical Campus, 4056 Basel',
    phone: '+41 61 555 01 47',
    email: 'basel@novacorelife.com',
    hours: 'Mon-Fri: 8:00 AM - 5:00 PM CET',
  },
  {
    city: 'Singapore',
    address: 'One-North, 138632 Singapore',
    phone: '+65 6123 4567',
    email: 'singapore@novacorelife.com',
    hours: 'Mon-Fri: 9:00 AM - 6:00 PM SGT',
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiryType: 'General',
    message: '',
  })
  const [status, setStatus] = useState({ type: null, message: '' })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: null, message: '' })

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const data = await res.json()

      if (res.ok) {
        setStatus({ type: 'success', message: 'Thank you! Your inquiry has been received. We will get back to you shortly.' })
        setFormData({ name: '', email: '', organization: '', inquiryType: 'General', message: '' })
      } else {
        setStatus({ type: 'error', message: data.message || 'Something went wrong. Please try again.' })
      }
    } catch (err) {
      setStatus({ type: 'error', message: 'Network error. Please check your connection and try again.' })
    }
    setLoading(false)
  }

  return (
    <>
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Contact</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
                Let's <span className="gradient-text">Connect</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-400 text-lg leading-relaxed">
                Whether you're interested in partnership, research collaboration, or just want to learn more, 
                we'd love to hear from you.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Left: Office Info slides from LEFT */}
            <div className="lg:col-span-2 space-y-8">
              <ScrollReveal direction="left" delay={0}>
                <div>
                  <h2 className="text-2xl font-bold text-primary mb-2">Our Offices</h2>
                  <p className="text-slate-500">Visit us at any of our global locations.</p>
                </div>
              </ScrollReveal>
              <div className="space-y-6">
                {offices.map((office, i) => (
                  <ScrollReveal key={i} direction="left" delay={i * 100}>
                    <div className="p-6 rounded-2xl bg-light-gray border border-slate-100 hover:shadow-md transition-shadow">
                      <h3 className="text-lg font-bold text-primary mb-4">{office.city}</h3>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span className="text-slate-500">{office.address}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Phone className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-slate-500">{office.phone}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Mail className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-slate-500">{office.email}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-4 h-4 text-accent shrink-0" />
                          <span className="text-slate-500">{office.hours}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Right: Form slides from RIGHT */}
            <div className="lg:col-span-3">
              <ScrollReveal direction="right" delay={100}>
                <div className="p-8 rounded-2xl bg-light-gray border border-slate-100">
                  <h2 className="text-2xl font-bold text-primary mb-2">Send an Inquiry</h2>
                  <p className="text-slate-500 mb-8">Fill out the form below and our team will respond within 24 hours.</p>

                  {status.type && (
                    <div className={`mb-6 p-4 rounded-xl flex items-start gap-3 ${
                      status.type === 'success' 
                        ? 'bg-emerald-50 border border-emerald-200 text-emerald-700' 
                        : 'bg-red-50 border border-red-200 text-red-700'
                    }`}>
                      {status.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                      )}
                      <span className="text-sm">{status.message}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark-slate mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Doe"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-dark-slate placeholder-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark-slate mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-dark-slate placeholder-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="organization" className="block text-sm font-medium text-dark-slate mb-2">
                          Organization
                        </label>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder="Company or Institution"
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-dark-slate placeholder-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="inquiryType" className="block text-sm font-medium text-dark-slate mb-2">
                          Inquiry Type
                        </label>
                        <select
                          id="inquiryType"
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-dark-slate text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all appearance-none cursor-pointer"
                        >
                          {inquiryTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark-slate mb-2">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Tell us about your inquiry..."
                        maxLength={2000}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-dark-slate placeholder-slate-400 text-sm focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/10 transition-all resize-none"
                      />
                      <div className="text-right text-xs text-slate-400 mt-1">
                        {formData.message.length}/2000
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-accent/40 hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Sending...' : (
                        <>
                          Send Message <Send className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
