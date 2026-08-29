'use client'

import { ShieldCheck, FileCheck, Globe, Microscope, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const standards = [
  {
    icon: ShieldCheck,
    title: 'BSL-3 Certification',
    description: 'Our Biosafety Level 3 facilities meet the highest international standards for pathogen research, featuring negative pressure environments, HEPA filtration, and redundant containment systems.',
  },
  {
    icon: FileCheck,
    title: 'FDA & EMA Compliance',
    description: 'All clinical trials and drug development processes adhere to FDA (US), EMA (EU), and other major regulatory body guidelines. We maintain rigorous documentation and quality control at every stage.',
  },
  {
    icon: Globe,
    title: 'Global Regulatory Standards',
    description: 'We operate in compliance with ICH-GCP (International Council for Harmonisation - Good Clinical Practice), WHO standards, and local regulations in all 100+ countries where we operate.',
  },
  {
    icon: Microscope,
    title: 'GMP & GLP Standards',
    description: 'Our manufacturing and laboratory operations follow Good Manufacturing Practice (GMP) and Good Laboratory Practice (GLP) standards, ensuring product quality, safety, and data integrity.',
  },
]

const certifications = [
  'ISO 9001:2015 Quality Management',
  'ISO 13485 Medical Devices',
  'ISO 14001 Environmental Management',
  'ISO 27001 Information Security',
  'OHSAS 18001 Occupational Health & Safety',
  'FDA cGMP Compliance',
  'EMA GMP Certification',
  'WHO Prequalification',
]

export default function CompliancePage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <span className="text-accent text-sm font-semibold uppercase tracking-wider">Legal</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 mb-6">
              Global <span className="gradient-text">Compliance</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-slate-400 text-lg leading-relaxed">
              NovacoreLife maintains the highest standards of regulatory compliance across all operations worldwide. 
              Our commitment to safety, quality, and ethical conduct is unwavering.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Standards</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Regulatory Framework</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We adhere to the most stringent global standards to ensure patient safety and product quality.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {standards.map((std, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group p-8 rounded-2xl bg-light-gray border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                    <std.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{std.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{std.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0}>
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">Certifications & Accreditations</h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  Our facilities and processes are regularly audited and certified by independent third-party 
                  organizations to ensure we meet or exceed all applicable standards.
                </p>
                <div className="space-y-4">
                  {certifications.map((cert, i) => (
                    <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-light-gray border border-slate-100">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-dark-slate font-medium text-sm">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div className="p-8 rounded-2xl bg-primary border border-white/5">
                <h3 className="text-xl font-bold text-white mb-4">Compliance Contact</h3>
                <p className="text-slate-400 text-sm mb-6">
                  If you have questions about our compliance programs or need to report a concern, 
                  please reach out to our Ethics & Compliance team.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>Ethics & Compliance Hotline: +1 (800) 555-0199</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>Email: <span className="text-accent">compliance@novacorelife.com</span></span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
                    <span>Anonymous Reporting: Available 24/7</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  )
}