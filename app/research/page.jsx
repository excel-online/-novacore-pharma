'use client'

import Link from 'next/link'
import { Cpu, ShieldCheck, Dna, Server, Beaker, Microscope, ArrowRight, CheckCircle2 } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const facilities = [
  {
    icon: ShieldCheck,
    title: 'BSL-3 Certified Facilities',
    description: 'Our Biosafety Level 3 laboratories enable safe research on high-consequence pathogens. These facilities feature negative pressure environments, HEPA filtration, and redundant containment systems.',
    specs: ['12 BSL-3 Suites', 'Negative Pressure Control', 'Autoclave & Effluent Treatment', '24/7 Monitoring'],
  },
  {
    icon: Dna,
    title: 'Genomic Sequencing Center',
    description: 'Equipped with the latest next-generation sequencing platforms capable of processing 10,000+ genomes per month. Our bioinformatics pipeline integrates AI for variant calling and pathway analysis.',
    specs: ['10,000+ Genomes/Month', 'PacBio & Illumina Platforms', 'AI Variant Calling', 'CRISPR Screening'],
  },
  {
    icon: Server,
    title: 'Supercomputing Cluster',
    description: 'A 5 petaFLOP supercomputing cluster dedicated to molecular dynamics simulations, drug-target interaction modeling, and large-scale genomic data processing.',
    specs: ['5 PFLOP Compute Power', 'GPU Acceleration', 'Cloud Hybrid Architecture', 'PB-Scale Storage'],
  },
  {
    icon: Beaker,
    title: 'High-Throughput Screening',
    description: 'Automated screening platforms capable of testing 100,000+ compounds per day against validated drug targets, with integrated hit-to-lead optimization workflows.',
    specs: ['100K+ Compounds/Day', '384-Well Automation', 'Integrated Analytics', 'Hit-to-Lead Pipeline'],
  },
]

const innovations = [
  { icon: Cpu, title: 'AI-Powered Drug Discovery', description: 'Leveraging artificial intelligence and machine learning to identify novel drug targets, predict molecular interactions, and accelerate the discovery of breakthrough therapies.' },
  { icon: Dna, title: 'Precision Medicine', description: 'Developing targeted therapies based on genetic, biomarker, and phenotypic characteristics to deliver the right treatment to the right patient at the right time.' },
  { icon: Microscope, title: 'Advanced Manufacturing', description: 'Implementing continuous manufacturing processes, automation, and digital technologies to improve quality, reduce costs, and increase production flexibility.' },
  { icon: Beaker, title: 'Open Innovation', description: 'Collaborating with academic institutions, biotech companies, and research organizations to access cutting-edge science and accelerate innovation.' },
]

const partnerships = [
  { name: '40+', label: 'Patient Organizations', desc: 'Ensuring patient voices shape our research priorities.' },
  { name: '200+', label: 'Academic Institutions', desc: 'Collaborating with leading universities worldwide.' },
  { name: '60+', label: 'Biotech Partners', desc: 'Strategic alliances to accelerate innovation.' },
  { name: '15', label: 'Global Health Orgs', desc: 'Working with WHO, NGOs, and governments.' },
]

export default function ResearchPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Research & Innovation</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
                Pioneering the <span className="gradient-text">Future of Medicine</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-400 text-lg leading-relaxed">
                Our research infrastructure combines world-class facilities, cutting-edge technology, 
                and brilliant minds to push the boundaries of what's possible in drug discovery.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Infrastructure</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">World-Class Facilities</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                State-of-the-art research infrastructure designed to accelerate discovery and ensure the highest safety standards.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            {facilities.map((facility, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group p-8 rounded-2xl bg-light-gray border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                    <facility.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{facility.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed mb-6">{facility.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {facility.specs.map((spec, si) => (
                      <div key={si} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                        <span className="text-dark-slate font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
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
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Innovation</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Innovation Highlights</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Pioneering new approaches to drug discovery and development that are reshaping the pharmaceutical landscape.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((innovation, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={0}>
                <div className="group p-8 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <innovation.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{innovation.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{innovation.description}</p>
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
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Collaboration</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">Global Partnerships</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Working together with organizations worldwide to advance healthcare and improve patient outcomes.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((p, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-6 rounded-2xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-all h-full">
                  <div className="text-4xl font-bold text-accent mb-2">{p.name}</div>
                  <div className="text-white font-semibold mb-2">{p.label}</div>
                  <p className="text-slate-400 text-sm">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0}>
              <div>
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">Sustainability</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6">
                  Committed to a Healthier Planet
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  We are committed to achieving carbon neutrality across all operations by 2030 through 
                  renewable energy adoption, energy efficiency improvements, and carbon offset programs.
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Carbon Neutrality Goal', desc: 'By 2030 across all operations' },
                    { label: '47% GHG Reduction', desc: 'Since 2019 baseline' },
                    { label: '83% Renewable Energy', desc: 'Electricity from clean sources' },
                    { label: 'Zero Waste to Landfill', desc: 'At 12 manufacturing sites' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-light-gray">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-primary">{item.label}</div>
                        <div className="text-slate-500 text-sm">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right" delay={150}>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-500/10 border border-accent/10 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-accent mb-2">47%</div>
                  <div className="text-slate-600 text-sm">GHG Reduction</div>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-500/10 border border-accent/10 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-accent mb-2">83%</div>
                  <div className="text-slate-600 text-sm">Renewable Energy</div>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-500/10 border border-accent/10 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-accent mb-2">12</div>
                  <div className="text-slate-600 text-sm">Zero Waste Sites</div>
                </div>
                <div className="p-8 rounded-2xl bg-gradient-to-br from-accent/10 to-cyan-500/10 border border-accent/10 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl font-bold text-accent mb-2">28%</div>
                  <div className="text-slate-600 text-sm">Water Reduction</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-accent/5 to-cyan-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Join Our Research Network
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
              We're always looking for brilliant researchers and innovative partners to push the boundaries of science.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-dark-slate text-white font-semibold transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Explore Opportunities <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
