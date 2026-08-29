'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function PrivacyPage() {
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
              Privacy <span className="gradient-text">Policy</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <p className="text-slate-400 text-lg">Last updated: August 2026</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">1. Introduction</h2>
              <p className="text-slate-500 leading-relaxed">
                NovacoreLife Inc. is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Information We Collect</h2>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span><strong>Personal Information:</strong> Name, email, phone, organization when you submit forms or subscribe.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" />
                  <span><strong>Cookies:</strong> We use cookies to enhance experience and analyze usage.</span>
                </li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. How We Use Your Information</h2>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>To respond to inquiries and provide support</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>To send newsletters and research updates</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>To improve our website and services</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>To comply with legal obligations</span></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Data Security</h2>
              <p className="text-slate-500 leading-relaxed">
                We implement technical and organizational measures to protect your data. However, no electronic transmission is 100% secure.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Your Rights</h2>
              <p className="text-slate-500 leading-relaxed mb-4">You have the right to access, correct, delete, or restrict processing of your personal data. Contact us at <span className="text-accent">privacy@novacorelife.com</span>.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div className="p-6 rounded-xl bg-light-gray border border-slate-100">
              <h3 className="font-bold text-primary mb-2">Contact</h3>
              <p className="text-slate-500">NovacoreLife Inc.</p>
              <p className="text-slate-500">1200 Innovation Drive, Cambridge, MA 02142</p>
              <p className="text-slate-500 mt-1">Email: <span className="text-accent">privacy@novacorelife.com</span></p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}