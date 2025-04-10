import { ArrowRight, BarChart2, Database, Brain, Menu, Calendar, Phone, Circle, Cog, ChevronDown, Code } from 'lucide-react';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import FaqItem from '@/components/FaqItem';

const caveat = Caveat({ subsets: ['latin'] });

// Define types
interface FaqItem {
  q: string;
  a: string;
}

// FAQ data
const faqs: FaqItem[] = [
  {
    q: "How long does implementation typically take?",
    a: "Implementation time varies based on your data complexity and sources. Typically, we can get your first pipeline running within 2-4 weeks."
  },
  {
    q: "Can you handle real-time data processing?",
    a: "Yes, our Pro and Enterprise plans support real-time data processing with sub-second latency using modern streaming technologies."
  },
  {
    q: "Do you support on-premise deployment?",
    a: "Yes, Enterprise customers can opt for on-premise deployment with full support for their security requirements."
  },
  {
    q: "What kind of support do you provide?",
    a: "We offer email support for Starter, Slack support for Pro, and dedicated support teams for Enterprise customers."
  },
  {
    q: "Can I migrate from my existing data stack?",
    a: "Yes, we have experience migrating from various data stacks and will provide a detailed migration plan to ensure smooth transition."
  }
] as const;

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <Database className="w-6 h-6 text-green-500" />
              <span className="font-display text-xl font-bold text-gray-900">
                Ashlab Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#services" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Services
              </Link>
              <Link href="#case-studies" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Case Studies
              </Link>
              <Link href="#tech-stack" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Tech Stack
              </Link>
              <Link href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
            </nav>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-gray-900 transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Content starts after header */}
      <main className="pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-500">3 Open Spots</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Main Content - Takes up 2 columns */}
            <div className="md:col-span-2">
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-8">
                Data Engineering as a Service for Startups
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-600 font-light mb-6 max-w-2xl">
                We handle every pipeline, model, and insight. You focus on building.
              </p>

              <div className="flex items-center gap-3 mb-12">
                <p className="text-lg text-gray-600">
                  All backed by our
                </p>
                <div className="relative">
                  <span className="text-lg text-green-600 font-medium">
                    results guarantee
                  </span>
                  <div className="absolute -bottom-3 left-0 w-full h-[6px]">
                    <svg width="100%" height="100%" viewBox="0 0 100 6" preserveAspectRatio="none">
                      <path
                        d="M0,3 Q25,0 50,3 T100,3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        className="text-green-500/50"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200"
              >
                See Plans & Pricing
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Stats Card - Right Column */}
            <div className="bg-gray-900 rounded-3xl p-8 text-white flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Trusted by Data-Driven Founders
                </h3>
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-3xl font-bold text-green-400">95%</div>
                    <div className="text-sm text-gray-400">Faster Insights</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">50+</div>
                    <div className="text-sm text-gray-400">Active Pipelines</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">24/7</div>
                    <div className="text-sm text-gray-400">Monitoring</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-green-400">10x</div>
                    <div className="text-sm text-gray-400">ROI Average</div>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-800 pt-6">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1,2,3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gray-700 border-2 border-gray-900" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-400">
                    Joined by 100+ startups this year
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bento Grid Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Feature Cards */}
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900">
                  Data Pipeline
                </h3>
              </div>
              <p className="text-gray-600">Automated ETL processes that scale with your needs</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg">
                  <BarChart2 className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900">
                  Real-time Analytics
                </h3>
              </div>
              <p className="text-gray-600">Live insights from your data streams</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-3xl p-8 border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-yellow-500/10 rounded-lg">
                  <Brain className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="font-display text-xl font-semibold text-gray-900">
                  AI Integration
                </h3>
              </div>
              <p className="text-gray-600">ML-ready infrastructure for predictive insights</p>
            </div>
          </div>
        </div>

        {/* Reality vs Expectations Section - Now directly below Hero */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <p className="text-lg text-gray-600 mb-4">The unfortunate truth is...</p>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                Building is the <span className="text-green-500 underline decoration-green-500/30 decoration-4 underline-offset-4">easy part</span>
              </h2>
            </div>

            <div className="grid gap-12">
              {/* Expectations Card */}
              <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">What you expected:</h3>
                <div className="space-y-4">
                  {[
                    'One-time setup of data pipelines',
                    'Data quality issues will fix themselves',
                    'ETL scripts will run forever without maintenance',
                    'AI/ML implementation is straightforward',
                    'Stakeholders know exactly what data they need'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
                {/* Improved upward trending line */}
                <div className="mt-8 h-16 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                    <path
                      d="M0,35 C50,35 50,25 100,25 C150,25 150,15 200,15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-green-500"
                      pathLength="1"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="1"
                        to="0"
                        dur="2s"
                        fill="freeze"
                      />
                    </path>
                  </svg>
                </div>
              </div>

              {/* Reality Card */}
              <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">The reality:</h3>
                <div className="space-y-4">
                  {[
                    'Constant monitoring and pipeline maintenance needed',
                    'Data quality requires robust validation frameworks',
                    'Source systems change without warning',
                    'ML models need continuous retraining and monitoring',
                    'Requirements evolve as business understanding grows'
                  ].map((text, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="mt-1">
                        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <span className="text-gray-700">{text}</span>
                    </div>
                  ))}
                </div>
                {/* Improved downward trending line */}
                <div className="mt-8 h-16 relative overflow-hidden">
                  <svg className="w-full h-full" viewBox="0 0 200 50" preserveAspectRatio="none">
                    <path
                      d="M0,15 C40,15 60,35 100,25 C140,15 160,35 200,25"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-red-500"
                      pathLength="1"
                    >
                      <animate
                        attributeName="stroke-dashoffset"
                        from="1"
                        to="0"
                        dur="2s"
                        fill="freeze"
                      />
                    </path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-16">
              Why founders choose <span className="text-green-500">Ashlab Solutions</span>
            </h2>

            <div className="space-y-20">
              {/* Remove Data Engineering Complexity */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100/50 rounded-xl">
                    <Database className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    We remove <span className="px-4 py-1 bg-green-100/50 text-green-700 rounded-full">Data Engineering</span> from your to-do list
                  </h3>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  We are not "data consultants" who leave you with complex architectures and templates that never work. 
                  This is a done-for-you service - we build and maintain your entire data infrastructure.
                </p>
              </div>

              {/* Results Guarantee */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100/50 rounded-xl">
                    <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    We <span className="px-4 py-1 bg-gray-900 text-white rounded-full">GUARANTEE</span> results
                  </h3>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  We believe in what we do. And we are not afraid to put our money where our mouth is. 
                  Every single engagement is backed by a results guarantee. If we don't deliver, you don't pay.
                </p>
              </div>

              {/* Built by Technical Founders */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100/50 rounded-xl">
                    <Code className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Built for technical founders. By technical founders.
                  </h3>
                </div>
                <p className="text-lg text-gray-600 max-w-3xl">
                  We skip the consulting fluff and focus on what matters: scalable architectures, 
                  measurable SLAs, and data-driven solutions. For you that means: low touch, 
                  high impact, and certainly no unnecessary meetings.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium text-white bg-green-500 hover:bg-green-600 rounded-full transition-all duration-200"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Services Section - white background */}
        <section id="services" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-primary/60 dark:text-accent/60">Our Services</span>
            </div>
            
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-primary dark:text-accent mb-16 max-w-2xl">
              Transform Your Data Infrastructure
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Service Card 1 */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-accent/10 hover:shadow-lg transition-all duration-200">
                <Database className="w-12 h-12 mb-6 text-green-500" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary dark:text-accent">
                  Data Engineering
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-primary/70 dark:text-accent/70">
                    <span className="text-green-500">✦</span>
                    <span>Scalable ETL/ELT pipelines</span>
                  </li>
                  <li className="flex items-center gap-2 text-primary/70 dark:text-accent/70">
                    <span className="text-green-500">✦</span>
                    <span>Cloud-native architecture</span>
                  </li>
                </ul>
                <a href="#learn-more" className="inline-flex items-center text-sm text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-accent mt-6">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-accent/10 hover:shadow-lg transition-all duration-200">
                <BarChart2 className="w-12 h-12 mb-6 text-green-500" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary dark:text-accent">
                  Analytics
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-primary/70 dark:text-accent/70">
                    <span className="text-green-500">✦</span>
                    <span>Custom dashboards</span>
                  </li>
                  <li className="flex items-center gap-2 text-primary/70 dark:text-accent/70">
                    <span className="text-green-500">✦</span>
                    <span>Real-time metrics</span>
                  </li>
                </ul>
                <a href="#learn-more" className="inline-flex items-center text-sm text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-accent mt-6">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white dark:bg-white/5 rounded-3xl p-8 border border-gray-100 dark:border-accent/10 hover:shadow-lg transition-all duration-200">
                <Brain className="w-12 h-12 mb-6 text-green-500" />
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary dark:text-accent">
                  AI Integration
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-primary/70 dark:text-accent/70">
                    <span className="text-green-500">✦</span>
                    <span>ML-ready pipelines</span>
                  </li>
                  <li className="flex items-center gap-2 text-primary/70 dark:text-accent/70">
                    <span className="text-green-500">✦</span>
                    <span>Predictive analytics</span>
                  </li>
                </ul>
                <a href="#learn-more" className="inline-flex items-center text-sm text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-accent mt-6">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 bg-gray-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-primary/60 dark:text-accent/60">Success Stories</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-bold text-primary dark:text-accent mb-16 max-w-2xl">
              Real Results for Real Startups
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Case Study 1 */}
              <div className="group relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80"
                  alt="Data Analytics Dashboard"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">
                      HealthTech
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-primary dark:text-accent">
                    From Data Chaos to Series B
                  </h3>
                  <p className="text-primary/70 dark:text-accent/70 mb-6">
                    How we helped a healthcare startup transform their data infrastructure
                  </p>
                  <a href="#read-more" className="inline-flex items-center text-sm text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-accent">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>

              {/* Case Study 2 */}
              <div className="group relative overflow-hidden rounded-3xl">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80"
                  alt="Data Pipeline Architecture"
                  width={800}
                  height={600}
                  className="object-cover w-full h-[400px] transform group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/20 p-8 flex flex-col justify-end">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full text-sm">
                      SaaS
                    </span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold mb-4 text-primary dark:text-accent">
                    10x Growth with Data
                  </h3>
                  <p className="text-primary/70 dark:text-accent/70 mb-6">
                    Scaling a SaaS startup with data-driven decisions
                  </p>
                  <a href="#read-more" className="inline-flex items-center text-sm text-primary/60 dark:text-accent/60 hover:text-primary dark:hover:text-accent">
                    Read Case Study
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-500">Our Stack</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-16 max-w-2xl">
              Built with Modern Tech
            </h2>

            {/* Tech Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8">
              {/* Row 1 */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-xl p-3">
                  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">AWS</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" alt="GCP" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">GCP</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-cyan-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/snowflake/snowflake-icon.svg" alt="Snowflake" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Snowflake</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-red-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/databricks/databricks-icon.svg" alt="Databricks" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Databricks</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/google_bigquery/google_bigquery-icon.svg" alt="BigQuery" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">BigQuery</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/apache_airflow/apache_airflow-icon.svg" alt="Airflow" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Airflow</span>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-orange-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg" alt="Spark" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Spark</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" alt="Kubernetes" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Kubernetes</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/docker/docker-icon.svg" alt="Docker" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Docker</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-blue-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/python/python-icon.svg" alt="Python" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Python</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-purple-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg" alt="Terraform" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">Terraform</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-16 h-16 flex items-center justify-center bg-gray-50 rounded-xl p-3">
                  <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="GitHub" className="w-full h-full object-contain" />
                </div>
                <span className="text-sm text-gray-600">GitHub</span>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-blue-500 font-medium mb-4 block">
                THE PROCESS
              </span>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-16">
                How We Work:
              </h2>
            </div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Step 1 */}
              <div className="relative">
                <span className="text-sm text-gray-500 mb-4 block">01</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Introductory Call
                </h3>
                <p className="text-gray-600 mb-6">
                  In a 30 min call, we will discuss how can we provide value to you and your business.
                </p>
                <a 
                  href="#start-project"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-all duration-200 text-sm font-medium"
                >
                  Start a project
                </a>
              </div>

              {/* Step 2 */}
              <div className="relative">
                <span className="text-sm text-gray-500 mb-4 block">02</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Requirements & Scope
                </h3>
                <p className="text-gray-600 mb-6">
                  Our team will gather all the information needed to start the project and provide you with a proposal.
                </p>
                <p className="text-gray-600">
                  Once you accept the proposal, we will start working on the project.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative">
                <span className="text-sm text-gray-500 mb-4 block">03</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Development
                </h3>
                <p className="text-gray-600">
                  The team work in iterations with frequent communication with you in order to deliver the best possible result.
                </p>
              </div>

              {/* Step 4 */}
              <div className="relative">
                <span className="text-sm text-gray-500 mb-4 block">04</span>
                <h3 className="font-display text-2xl font-bold text-gray-900 mb-4">
                  Handover & Support
                </h3>
                <p className="text-gray-600 mb-4">
                  After you get the result, you have the option of ongoing maintenance and development of new features.
                </p>
                <p className="text-gray-600">
                  We can also provide support and hosting for your project.
                </p>
              </div>
            </div>

            {/* Process Arrows - Optional decorative elements */}
            <div className="hidden md:block">
              <div className="absolute left-[25%] top-1/2 transform -translate-y-1/2">
                <svg className="w-12 h-12 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              {/* Add more arrows between other steps if desired */}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-2 mb-4">
                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                <span className="text-sm text-gray-500">PRICING</span>
              </div>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
                Simple, transparent pricing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to build and scale your data infrastructure
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Starter Plan */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-500/20 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-200">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Starter
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">$2,999</span>
                    <span className="text-gray-500">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Up to 5 data sources',
                    'Basic data transformations',
                    'Automated data quality checks',
                    'Daily batch processing',
                    'Email support'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 text-gray-900 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium">
                  Get Started
                </button>
              </div>

              {/* Pro Plan - Featured */}
              <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-3xl p-8 border border-gray-800 transform hover:scale-105 transition-all duration-200 relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-green-500 rounded-full text-white text-sm font-medium">
                  Most Popular
                </div>
                
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-white mb-2">
                    Pro
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white">$5,999</span>
                    <span className="text-gray-400">/month</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Up to 15 data sources',
                    'Advanced transformations',
                    'Custom data quality rules',
                    'Real-time processing',
                    'Slack support',
                    'Custom dashboards',
                    'Data lineage tracking'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 text-white bg-green-500 rounded-full hover:bg-green-600 transition-colors duration-200 font-medium">
                  Get Started
                </button>
              </div>

              {/* Enterprise Plan */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:border-green-500/20 hover:shadow-xl hover:shadow-green-500/5 transition-all duration-200">
                <div className="mb-8">
                  <h3 className="font-display text-2xl font-bold text-gray-900 mb-2">
                    Enterprise
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">Custom</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    'Unlimited data sources',
                    'Custom ML models',
                    'Enterprise security',
                    'Dedicated support team',
                    'Custom SLAs',
                    'On-premise deployment',
                    'Training & workshops'
                  ].map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="w-full px-6 py-3 text-gray-900 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors duration-200 font-medium">
                  Contact Sales
                </button>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-32">
              <div className="text-center mb-16">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span className="text-sm text-gray-500">FAQ</span>
                </div>
                <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="max-w-3xl mx-auto grid gap-4">
                {faqs.map((faq: FaqItem, i: number) => (
                  <FaqItem key={i} question={faq.q} answer={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12">
              <h2 className="font-display text-4xl font-bold text-gray-900 mb-4">
                Let's build something great
              </h2>
              <p className="text-gray-600 mb-8">
                I'll get back to you within 24 hours to discuss your data infrastructure needs.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Project Type Radio Buttons */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    What type of project do you have in mind?
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="project-type"
                        value="data-pipeline"
                        className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                        defaultChecked
                      />
                      <span className="ml-2 text-gray-700">Data Pipeline Development</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="project-type"
                        value="analytics"
                        className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">Analytics Infrastructure</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="project-type"
                        value="ai-integration"
                        className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">AI/ML Integration</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="project-type"
                        value="consultation"
                        className="w-4 h-4 text-green-500 border-gray-300 focus:ring-green-500"
                      />
                      <span className="ml-2 text-gray-700">Data Strategy Consultation</span>
                    </label>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-2">
                    Tell me about your data needs
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What data challenges are you looking to solve?"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all duration-200"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all duration-200"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* DAG Demonstration Section */}
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-gray-500">How It Works</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-16 max-w-2xl">
              Automated Data Pipelines
            </h2>

            {/* DAG Animation Container */}
            <div className="relative bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
              {/* DAG Nodes and Connections */}
              <div className="grid grid-cols-4 gap-8 relative">
                {/* Source Node */}
                <div className="animate-pulse">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <Database className="w-8 h-8 text-blue-500 mb-3" />
                    <h3 className="font-semibold text-gray-900">Data Sources</h3>
                    <p className="text-sm text-gray-500 mt-1">Raw Data Ingestion</p>
                  </div>
                </div>

                {/* Transform Node */}
                <div className="animate-pulse delay-150">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <Cog className="w-8 h-8 text-green-500 mb-3 animate-spin-slow" />
                    <h3 className="font-semibold text-gray-900">Transform</h3>
                    <p className="text-sm text-gray-500 mt-1">Data Processing</p>
                  </div>
                </div>

                {/* Validate Node */}
                <div className="animate-pulse delay-300">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <Circle className="w-8 h-8 text-yellow-500 mb-3" />
                    <h3 className="font-semibold text-gray-900">Validate</h3>
                    <p className="text-sm text-gray-500 mt-1">Quality Checks</p>
                  </div>
                </div>

                {/* Load Node */}
                <div className="animate-pulse delay-500">
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 relative z-10">
                    <BarChart2 className="w-8 h-8 text-purple-500 mb-3" />
                    <h3 className="font-semibold text-gray-900">Analytics</h3>
                    <p className="text-sm text-gray-500 mt-1">Ready for BI</p>
                  </div>
                </div>

                {/* Connecting Lines */}
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 -z-10">
                  <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2">
                    <div className="animate-ping-slow">
                      <Circle className="w-3 h-3 text-green-500 fill-green-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2">
                    <div className="animate-ping-slow delay-150">
                      <Circle className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                    </div>
                  </div>
                  <div className="absolute top-1/2 left-3/4 transform -translate-y-1/2">
                    <div className="animate-ping-slow delay-300">
                      <Circle className="w-3 h-3 text-purple-500 fill-purple-500" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Indicators */}
              <div className="mt-12 grid grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-sm text-gray-500">Ingesting</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse delay-150"></span>
                    <span className="text-sm text-gray-500">Processing</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse delay-300"></span>
                    <span className="text-sm text-gray-500">Validating</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2">
                    <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></span>
                    <span className="text-sm text-gray-500">Loading</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer - white background */}
        <footer className="border-t border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="text-center">
              <p className={`${caveat.className} text-2xl font-semibold mb-2 text-gray-900 dark:text-white`}>
                Data Engineering for Startups That Mean Business.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Less Chaos. More Clarity. Ready for AI.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
