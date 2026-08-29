import Link from 'next/link'
import { MapPin, Phone, Mail } from 'lucide-react'
import Logo from '@/components/Logo'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand & Contact Info */}
          <div className="space-y-6 md:col-span-2">
            {/* New Logo Integration */}
            <Logo/>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Advancing healthcare through science and innovation. Dedicated to discovering breakthrough treatments that transform lives worldwide.
            </p>

            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>1200 Innovation Drive, Cambridge, MA 02142</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (617) 555-0147</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>info@novacorelife.com</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-500">
              Careers & General Inquiries:{' '}
              <a href="mailto:jobs@novacorelife.com" className="text-cyan-400 hover:underline">
                jobs@novacorelife.com
              </a>
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/solutions" className="hover:text-cyan-400 transition-colors">Solutions</Link></li>
              <li><Link href="/research" className="hover:text-cyan-400 transition-colors">Research</Link></li>
              <li><Link href="/careers" className="hover:text-cyan-400 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Legal / Compliance */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200 mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/privacy" className="hover:text-cyan-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-cyan-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/compliance" className="hover:text-cyan-400 transition-colors">Global Compliance</Link></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} NovacoreLife Inc. All rights reserved.</p>
          <p>Designed for Healthcare & Biotech Innovation.</p>
        </div>
      </div>
    </footer>
  )
}
