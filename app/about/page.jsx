'use client'

import { Target, Eye, Compass, Award, Users, Calendar } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const timeline = [
  { year: '2005', title: 'Foundation', description: 'NovacoreLife was founded with a vision to transform drug discovery through computational biology.' },
  { year: '2010', title: 'First Breakthrough', description: 'Our first immunology treatment received FDA approval, reaching 50,000 patients in its first year.' },
  { year: '2015', title: 'Global Expansion', description: 'Expanded operations to 50+ countries and established partnerships with leading research institutions.' },
  { year: '2019', title: 'BSL-3 Certification', description: 'Achieved BSL-3 certification for our flagship research facility, enabling advanced pathogen research.' },
  { year: '2022', title: 'AI Integration', description: 'Launched our AI-powered drug discovery platform, reducing target identification time by 60%.' },
  { year: '2024', title: '304M Lives Reached', description: 'Surpassed 304 million patients reached worldwide across immunology, neuroscience, and oncology.' },
]

const leaders = [
  { name: 'Dr. Sarah Chen', role: 'Chief Executive Officer', bio: 'Former VP of R&D at a Fortune 500 pharma company. PhD in Molecular Biology from MIT.' },
  { name: 'Dr. Michael Torres', role: 'Chief Scientific Officer', bio: 'Led the development of 12 FDA-approved therapies. Former head of immunology at Genentech.' },
  { name: 'Dr. Aisha Patel', role: 'Chief Medical Officer', bio: 'Board-certified oncologist with 20+ years in clinical research. Led 200+ clinical trials.' },
  { name: 'James Whitfield', role: 'Chief Operations Officer', bio: 'Former McKinsey partner specializing in pharmaceutical supply chain and manufacturing.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">About Us</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
                Driven by Purpose,<br />
                Powered by <span className="gradient-text">Science</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-400 text-lg leading-relaxed">
                NovacoreLife is a global pharmaceutical leader dedicated to discovering, developing, 
                and delivering innovative medicines that address some of the world's most challenging health conditions.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: 'Our Purpose', text: 'To discover and deliver innovative medicines that help patients prevail over serious diseases, improving and extending lives around the world.' },
              { icon: Eye, title: 'Our Vision', text: "To be the world's most valued pharmaceutical company, recognized for our commitment to patients, innovation, and sustainable healthcare solutions." },
              { icon: Compass, title: 'Our Strategy', text: 'Focus on high-impact therapeutic areas, invest in cutting-edge science, and build strategic partnerships to accelerate breakthrough discoveries.' },
            ].map((item, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-8 rounded-2xl bg-light-gray border border-slate-100 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Our Journey</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3">Company History</h2>
            </ScrollReveal>
          </div>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-slate-200 md:-translate-x-px" />
            <div className="space-y-12">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} items-start md:items-center gap-8`}>
                  <ScrollReveal direction={i % 2 === 0 ? 'right' : 'left'} delay={0} className="flex-1 md:text-right pl-12 md:pl-0 md:pr-12 w-full">
                    <div className={`p-6 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow ${i % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <div className="flex items-center gap-2 mb-2 md:justify-end">
                        <Calendar className="w-4 h-4 text-accent md:hidden" />
                        <span className="text-accent font-bold text-lg">{item.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-accent border-4 border-light-gray md:-translate-x-1/2 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <div className="flex-1 hidden md:block pl-12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Our Team</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Executive Leadership</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Our leadership team is guided by a shared commitment to scientific excellence, patient focus, and ethical conduct.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leaders.map((leader, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-light-gray border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center h-full">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-slate-200 to-slate-300 mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-slate-400" />
                  </div>
                  <h3 className="text-lg font-bold text-primary">{leader.name}</h3>
                  <p className="text-accent text-sm font-medium mb-3">{leader.role}</p>
                  <p className="text-slate-500 text-sm leading-relaxed">{leader.bio}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Culture</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">What We Stand For</h2>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: 'Excellence', desc: 'We pursue the highest standards in everything we do.' },
              { icon: Users, title: 'Collaboration', desc: 'We believe the best solutions come from working together.' },
              { icon: Target, title: 'Patient Focus', desc: 'Every decision starts with the patient in mind.' },
              { icon: Eye, title: 'Integrity', desc: 'We operate with transparency and ethical rigor.' },
            ].map((value, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-slate-400 text-sm">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
