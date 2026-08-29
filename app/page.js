'use client'

import Link from 'next/link'
import { 
  ArrowRight, FlaskConical, Dna, Brain, Microscope, 
  Globe, Users, Building2, HeartPulse,
  Leaf, ShieldCheck, Eye, UsersRound, Shield, Stethoscope
} from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import ScrollReveal from '@/components/ScrollReveal'

function AnimatedCounter({ end, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          let start = 0
          const increment = end / (duration / 16)
          const timer = setInterval(() => {
            start += increment
            if (start >= end) {
              setCount(end)
              clearInterval(timer)
            } else {
              setCount(Math.floor(start))
            }
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [end, duration, hasAnimated])

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

const stats = [
  { icon: Building2, value: 2.4, suffix: 'M+', label: 'Sq Ft Lab Space' },
  { icon: Users, value: 1200, suffix: '+', label: 'Scientists' },
  { icon: Globe, value: 45, suffix: '+', label: 'Global Partnerships' },
  { icon: HeartPulse, value: 304, suffix: 'M', label: 'People Reached' },
]

const focusAreas = [
  {
    icon: Dna,
    title: 'Computational Biology',
    description: 'Leveraging AI and machine learning to decode complex biological systems and accelerate target identification.',
  },
  {
    icon: FlaskConical,
    title: 'Next-Gen Modalities',
    description: 'Pioneering gene therapy, cell therapy, and RNA-based treatments to address previously untreatable conditions.',
  },
  {
    icon: Brain,
    title: 'Translational Medicine',
    description: 'Bridging the gap between laboratory discovery and clinical application for faster patient impact.',
  },
  {
    icon: Microscope,
    title: 'Specialty Solutions',
    description: 'Developing precision therapeutics for rare diseases and specialized patient populations worldwide.',
  },
]

const therapeuticAreas = [
  {
    icon: Shield,
    title: 'Immunology',
    description: 'Advancing treatments for autoimmune diseases and inflammatory conditions through innovative biologics and targeted therapies that modulate immune system responses.',
  },
  {
    icon: Microscope,
    title: 'Neuroscience',
    description: "Developing breakthrough therapies for neurological and psychiatric disorders, including novel approaches to treat Alzheimer's disease, Parkinson's, and depression.",
  },
  {
    icon: Stethoscope,
    title: 'Oncology',
    description: 'Pioneering cancer treatments through precision medicine, immunotherapy, and radioligand therapy to target tumors while minimizing impact on healthy tissue.',
  },
]

const esgPillars = [
  { icon: HeartPulse, title: 'Access', desc: 'Expanding patient access to innovative medicines through managed access programs and pricing strategies.' },
  { icon: ShieldCheck, title: 'Ethics & Compliance', desc: 'Maintaining the highest standards of ethical conduct and regulatory compliance.' },
  { icon: Leaf, title: 'Environmental Sustainability', desc: 'Reducing our environmental footprint through sustainable manufacturing and renewable energy.' },
  { icon: UsersRound, title: 'Inclusion', desc: 'Fostering a diverse and inclusive workplace that values different perspectives.' },
  { icon: Eye, title: 'Transparency', desc: 'Openly sharing clinical trial data and research findings to build trust.' },
]

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-start overflow-hidden bg-slate-900 px-6 sm:px-12 lg:px-16 py-20">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80" 
            alt="Hero background facility" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-3xl text-left">
          <ScrollReveal direction="up" delay={100}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight mb-6">
              Advancing healthcare through innovation
            </h1>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg sm:text-xl text-slate-200 max-w-xl mb-8 leading-relaxed">
              Reaching 304 million people worldwide with breakthrough treatments that transform lives and redefine what's possible in medicine.
            </p>
          </ScrollReveal>
          
          <ScrollReveal direction="up" delay={300}>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                href="/research"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#1d3557] hover:bg-[#152843] text-white font-medium transition-all shadow-md"
              >
                Explore Our Research <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-[#1d3557] hover:bg-[#152843] text-white font-medium transition-all shadow-md"
              >
                View Careers
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Section with Image */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Bringing breakthroughs to more patients</h2>
            <p className="text-slate-600 text-base leading-relaxed mb-4">
              Every day, our scientists work tirelessly to discover new treatments that can change the course of disease. From early research to clinical development, we're committed to bringing innovative medicines to patients who need them most.
            </p>
            <p className="text-slate-600 text-base leading-relaxed">
              Through managed access programs, we've reached 7,194 patients across 62 countries, providing access to investigational medicines for those with serious conditions and limited treatment options.
            </p>
          </div>
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80" 
              alt="Scientists working in lab" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group relative p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <stat.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-slate-500 text-sm font-medium">{stat.label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Our Expertise</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Key Focus Areas</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We concentrate our scientific efforts on areas where we can make the greatest impact on patient lives.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group p-8 rounded-2xl bg-light-gray border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-cyan-400 flex items-center justify-center mb-6 shadow-lg shadow-accent/20 group-hover:shadow-accent/30 transition-shadow">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3">{area.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{area.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Global Footprint */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0}>
              <div>
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">Global Presence</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6">
                  Our Worldwide Footprint
                </h2>
                <p className="text-slate-400 leading-relaxed mb-8">
                  With a presence in over 100 countries and a commitment to scientific excellence, 
                  we're transforming lives through breakthrough treatments in immunology, neuroscience, and oncology.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">100+</div>
                    <div className="text-slate-400 text-sm">Countries Served</div>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">77k+</div>
                    <div className="text-slate-400 text-sm">Dedicated Associates</div>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">40+</div>
                    <div className="text-slate-400 text-sm">Patient Organizations</div>
                  </div>
                  <div className="p-6 rounded-xl bg-white/5 border border-white/5">
                    <div className="text-3xl font-bold text-white mb-1">$25B</div>
                    <div className="text-slate-400 text-sm">Investment Over 5 Years</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80" 
                  alt="Molecular research visual" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 p-4 rounded-xl bg-slate-900/90 backdrop-blur border border-white/10">
                  <div className="text-xl font-bold text-white">7,194</div>
                  <div className="text-slate-400 text-xs">Patients in managed access</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">What We Do</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-4">Therapeutic Areas</h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We focus our research on areas where we can make the greatest impact on patient lives.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {therapeuticAreas.map((area, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 150}>
                <div className="group p-8 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center mb-6">
                    <area.icon className="w-6 h-6 text-slate-700" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">{area.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{area.description}</p>
                  <Link 
                    href="/solutions" 
                    className="inline-flex items-center gap-2 mt-6 text-accent font-medium text-sm hover:gap-3 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Expansion */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left" delay={0}>
              <div className="order-2 lg:order-1">
                <div className="relative h-80 sm:h-96 rounded-2xl overflow-hidden shadow-lg border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&q=80" 
                    alt="Manufacturing facility" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={150}>
              <div className="order-1 lg:order-2">
                <span className="text-accent text-sm font-semibold uppercase tracking-wider">Expansion</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-primary mt-3 mb-6">
                  Manufacturing Expansion in the US & Canada
                </h2>
                <p className="text-slate-500 leading-relaxed mb-8">
                  We're investing $25 billion over the next five years to expand our manufacturing capabilities 
                  across North America, building 7+ new state-of-the-art facilities that will create more than 
                  1,000 direct jobs and approximately 4,000 additional jobs in local communities.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-light-gray">
                    <div className="text-2xl font-bold text-primary">$25B</div>
                    <div className="text-slate-500 text-xs mt-1">Investment</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-light-gray">
                    <div className="text-2xl font-bold text-primary">7+</div>
                    <div className="text-slate-500 text-xs mt-1">New Facilities</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-light-gray">
                    <div className="text-2xl font-bold text-primary">5k+</div>
                    <div className="text-slate-500 text-xs mt-1">Total Jobs</div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ESG Section */}
      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-glow" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <ScrollReveal direction="up" delay={0}>
              <span className="text-accent text-sm font-semibold uppercase tracking-wider">Responsibility</span>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={50}>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-4">
                Environmental, Social & Governance
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={100}>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Our commitment to responsible business practices extends beyond medicine to create lasting positive impact.
              </p>
            </ScrollReveal>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {esgPillars.map((pillar, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 transition-all duration-300 h-full">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                    <pillar.icon className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{pillar.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-br from-accent/5 to-cyan-500/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0}>
            <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-6">
              Ready to Reimagine Medicine Together?
            </h2>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={100}>
            <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
              Whether you're a research institution, healthcare provider, or potential partner, 
              we'd love to explore how we can collaborate to advance healthcare.
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={200}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary hover:bg-dark-slate text-white font-semibold transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Get In Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
