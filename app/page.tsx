import { ArrowRight, BarChart2, Database, Brain, Menu, Rocket, Code, Zap, Mail, MapPin, Clock, Calendar, Phone } from 'lucide-react';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import DataArchitectureDiagram from '@/components/DataArchitectureDiagram';
import TechStackSlider from '@/components/TechStackSlider';
import AnimatedTerminal from '@/components/AnimatedTerminal';
import ThemeToggle from '@/components/ThemeToggle';

const caveat = Caveat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <Image
                src="/ashlab-logo.svg"
                alt="Ashlab"
                width={32}
                height={32}
                className="w-8 h-8"
                priority
              />
              <span className={`${caveat.className} text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                Ashlab
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Services</a>
              <a href="#case-studies" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Case Studies</a>
              <a href="#about" className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
              <ThemeToggle />
              <a 
                href="#contact"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition-all duration-200"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Services</a>
            <a href="#case-studies" className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Case Studies</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="pt-16">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          {/* Top Badge */}
          <div className="flex items-center gap-2 mb-8">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="text-sm text-gray-500">3 Open Spots</span>
          </div>

          {/* Main Hero Content */}
          <div className="max-w-4xl">
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-gray-900 leading-[1.1] mb-8">
              Data Engineering as a Service for Indie Founders
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

            {/* CTA Button */}
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-200"
            >
              See Plans & Pricing
              <ArrowRight className="w-5 h-5" />
            </a>

            {/* Services Grid */}
            <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Card - We help founders */}
              <div className="col-span-1 md:col-span-1 bg-gray-900 rounded-3xl p-8 text-white">
                <h2 className="font-display text-3xl font-bold mb-4">
                  We help founders at every stage of their journey.
                </h2>
                <div className="mt-8">
                  <p className="text-sm text-gray-400 mb-2">Trusted by:</p>
                  <div className="flex items-center gap-4">
                    {/* Add your trusted company logos here */}
                  </div>
                </div>
              </div>

              {/* Service Cards */}
              <div className="col-span-1 md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Market Validation Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🎯</span>
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      Market Validation
                    </h3>
                  </div>
                  <a href="#learn-more" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

                {/* Growth Engine Card */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-200">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">🚀</span>
                    <h3 className="font-display text-xl font-semibold text-gray-900">
                      Growth Engine
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">
                    Guaranteed monthly insights
                  </p>
                  <a href="#learn-more" className="inline-flex items-center text-sm text-gray-500 hover:text-gray-900">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

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

        {/* Case Studies Section - subtle gray background */}
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
              {/* Case Study Card 1 */}
              <div className="bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-100 dark:border-accent/10">
                <div className="aspect-video relative bg-gradient-to-br from-green-500/20 to-blue-500/20">
                  <Image
                    src="/case-study-1.jpg"
                    alt="Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
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

              {/* Case Study Card 2 */}
              <div className="bg-white dark:bg-white/5 rounded-3xl overflow-hidden border border-gray-100 dark:border-accent/10">
                <div className="aspect-video relative bg-gradient-to-br from-green-500/20 to-blue-500/20">
                  <Image
                    src="/case-study-2.jpg"
                    alt="Case Study"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
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

        {/* Tech Stack Section - white background */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-8">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span className="text-sm text-primary/60 dark:text-accent/60">Our Stack</span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl font-bold text-primary dark:text-accent mb-16 max-w-2xl">
              Built with Modern Tech
            </h2>

            <TechStackSlider />
          </div>
        </section>

        {/* Pricing/Path Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <span className="text-blue-500 font-medium mb-4 block">
                BUILD FASTER, VALIDATE SOONER
              </span>
              <h2 className="font-display text-5xl sm:text-6xl font-bold text-gray-900 mb-8">
                Choose Your Path
              </h2>
            </div>

            {/* Pricing Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Quick Launch Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-200">
                <div className="mb-8">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    QUICK LAUNCH
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mt-2">
                    MVP Launch Package
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Launch your idea in weeks, not months.
                </p>
                <p className="text-gray-600 mb-8">
                  Fully functional MVP with essential features to validate your market and start getting real users.
                </p>

                <a 
                  href="#start-building"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Start Building
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Full Solution Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-200">
                <div className="mb-8">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    FULL SOLUTION
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mt-2">
                    Full Startup Build
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Perfect for indie hackers ready to build their next big thing.
                </p>
                <p className="text-gray-600 mb-8">
                  We'll work closely with you to create a polished product that's ready for early adopters and future scale.
                </p>

                <a 
                  href="#lets-talk"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition-all duration-200 font-medium"
                >
                  Let's talk
                  <Calendar className="w-4 h-4" />
                </a>
              </div>

              {/* Strategy Card */}
              <div className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-200">
                <div className="mb-8">
                  <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                    STRATEGY
                  </span>
                  <h3 className="font-display text-2xl font-bold text-gray-900 mt-2">
                    Consulting & Mentoring
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4">
                  Not sure where to start? Let's map out your technical roadmap.
                </p>
                <p className="text-gray-600 mb-8">
                  Get expert guidance on architecture, tech stack, and development strategy for your startup.
                </p>

                <a 
                  href="#book-call"
                  className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 text-gray-900 bg-white border-2 border-gray-900 rounded-full hover:bg-gray-50 transition-all duration-200 font-medium"
                >
                  Book a call
                  <Phone className="w-4 h-4" />
                </a>
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
      </div>
    </div>
  );
}
