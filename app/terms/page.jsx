'use client'

import ScrollReveal from '@/components/ScrollReveal'

export default function TermsPage() {
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
              Terms of <span className="gradient-text">Service</span>
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
              <h2 className="text-2xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
              <p className="text-slate-500 leading-relaxed">
                By accessing or using the NovacoreLife website and services, you agree to be bound by these Terms of Service. 
                If you do not agree, please do not use our services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">2. Use of Website</h2>
              <p className="text-slate-500 leading-relaxed mb-4">You agree to use our website only for lawful purposes and in a way that does not infringe the rights of others.</p>
              <ul className="space-y-3 text-slate-500">
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>Do not use the site in any way that could damage or impair its functionality</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>Do not attempt to gain unauthorized access to any part of the site</span></li>
                <li className="flex items-start gap-3"><span className="w-2 h-2 rounded-full bg-accent mt-2 shrink-0" /><span>Do not use the site to transmit harmful code or malware</span></li>
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">3. Intellectual Property</h2>
              <p className="text-slate-500 leading-relaxed">
                All content on this website, including text, graphics, logos, images, and software, is the property of 
                NovacoreLife Inc. and is protected by copyright and other intellectual property laws. You may not 
                reproduce, distribute, or create derivative works without our express written permission.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">4. Medical Disclaimer</h2>
              <p className="text-slate-500 leading-relaxed">
                The information on this website is for general informational purposes only and does not constitute 
                medical advice. Always seek the advice of a qualified healthcare provider for medical conditions. 
                NovacoreLife does not recommend or endorse any specific treatments.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">5. Limitation of Liability</h2>
              <p className="text-slate-500 leading-relaxed">
                NovacoreLife Inc. shall not be liable for any indirect, incidental, special, or consequential damages 
                arising out of or in connection with your use of the website or services.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">6. Governing Law</h2>
              <p className="text-slate-500 leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of 
                Massachusetts, without regard to its conflict of law provisions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">7. Changes to Terms</h2>
              <p className="text-slate-500 leading-relaxed">
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon 
                posting to the website. Your continued use constitutes acceptance of the revised Terms.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0}>
            <div className="p-6 rounded-xl bg-light-gray border border-slate-100">
              <h3 className="font-bold text-primary mb-2">Contact</h3>
              <p className="text-slate-500">For questions about these Terms, contact us at <span className="text-accent">legal@novacorelife.com</span>.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}