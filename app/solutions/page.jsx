'use client'

import Link from 'next/link'
import { ArrowRight, Pill, Stethoscope, Truck, FlaskConical, Dna, Brain, Microscope, ShieldCheck, Clock, Zap } from 'lucide-react'
import ScrollReveal from '@/components/ScrollReveal'

const programs = [
  {
    icon: Pill,
    title: 'Therapeutic Programs',
    description: 'Our pipeline includes over 80 clinical programs spanning immunology, neuroscience, and oncology. We leverage cutting-edge modalities including gene therapy, cell therapy, and RNA-based therapeutics.',
    features: ['80+ Clinical Programs', 'Gene & Cell Therapy', 'RNA-Based Treatments', 'Precision Medicine'],
  },
  {
    icon: Stethoscope,
    title: 'Clinical Trials Support',
    description: 'We design and execute clinical trials with patient-centricity at the core. Our global trial network spans 81 countries, ensuring diverse patient populations and robust data collection.',
    features: ['81 Countries', 'Patient-Reported Outcomes', 'Adaptive Trial Design', 'Real-World Evidence'],
  },
  {
    icon: Truck,
    title: 'Global Bio-Logistics',
    description: 'Our end-to-end supply chain ensures that critical medicines reach patients when and where they are needed. Temperature-controlled logistics, real-time tracking, and regulatory compliance across 100+ countries.',
    features: ['Cold Chain Management', 'Real-Time Tracking', 'Regulatory Compliance', 'Emergency Distribution'],
  },
]

const capabilities = [
  { icon: FlaskConical, title: 'Drug Discovery', desc: 'AI-powered target identification and molecular design accelerating discovery timelines.' },
  { icon: Dna, title: 'Genomic Services', desc: 'Next-generation sequencing and bioinformatics for precision medicine development.' },
  { icon: Brain, title: 'Neuroscience R&D', desc: 'Specialized research platforms for CNS disorders and psychiatric conditions.' },
  { icon: Microscope, title: 'Analytical Services', desc: 'State-of-the-art analytical characterization for biologics and small molecules.' },
  { icon: ShieldCheck, title: 'Regulatory Affairs', desc: 'Global regulatory strategy and submission support across major markets.' },
  { icon: Clock, title: 'Pharmacovigilance', desc: 'Comprehensive drug safety monitoring and risk management systems.' },
]

export default function SolutionsPage() {
  return (
    <>
      <section className="pt-32 pb-20 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Solutions</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6">
                End-to-End <span className="gradient-text">Healthcare Solutions</span>
              </h1>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={200}>
              <p className="text-slate-400 text-lg leading-relaxed">
                From early discovery to global distribution, we provide comprehensive solutions that accelerate 
                the development and delivery of life-changing medicines.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Programs</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Core Solutions</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Comprehensive programs designed to address every stage of the pharmaceutical lifecycle.
              </p>
            </ScrollReveal>
          </div>
          <div className="space-y-8">
            {programs.map((program, i) => (
              <ScrollReveal key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={0}>
                <div className="group p-8 md:p-12 rounded-2xl bg-light-gray border border-slate-100 hover:bg-white hover:shadow-xl transition-all duration-300">
                  <div className="grid lg:grid-cols-3 gap-8 items-start">
                    <div className="lg:col-span-1">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                        <program.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-4">{program.title}</h3>
                      <p className="text-slate-500 leading-relaxed">{program.description}</p>
                    </div>
                    <div className="lg:col-span-2">
                      <div className="grid sm:grid-cols-2 gap-4">
                        {program.features.map((feature, fi) => (
                          <div key={fi} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-100">
                            <Zap className="w-5 h-5 text-accent shrink-0" />
                            <span className="text-dark-slate font-medium text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Capabilities</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Specialized Services</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Advanced capabilities that power our end-to-end pharmaceutical solutions.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <cap.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{cap.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Partner With Us
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
              Explore partnership opportunities to accelerate your drug development pipeline 
              and expand your global reach.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-cyan-500 text-white font-semibold transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 hover:-translate-y-0.5"
            >
              Start a Conversation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
