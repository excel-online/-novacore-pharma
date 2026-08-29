'use client'

import { useState, useEffect } from 'react'
import { Cookie, X } from 'lucide-react'

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // Small delay for smooth entrance animation
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie_consent', 'accepted')
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookie_consent', 'declined')
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="bg-slate-900 border border-slate-800 text-white p-5 rounded-2xl shadow-2xl backdrop-blur-lg">
        <div className="flex items-start gap-4">
          <div className="p-2.5 rounded-xl bg-accent/10 text-accent flex-shrink-0">
            <Cookie className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-base mb-1 text-slate-100">We value your privacy</h3>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={handleAccept}
                className="px-4 py-2 text-xs font-medium bg-cyan-500 hover:bg-cyan-600 text-slate-950 rounded-lg transition-colors shadow-sm"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="px-4 py-2 text-xs font-medium bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg transition-colors"
              >
                Decline
              </button>
            </div>
          </div>
          <button 
            onClick={handleDecline}
            className="text-slate-500 hover:text-slate-300 transition-colors p-1"
            aria-label="Close cookie banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
