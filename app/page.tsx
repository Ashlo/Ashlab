import { ArrowRight, BarChart2, Database, Brain, Menu, Rocket, Code, Zap } from 'lucide-react';
import { Caveat } from 'next/font/google';
import Image from 'next/image';
import DataArchitectureDiagram from '@/components/DataArchitectureDiagram';
import TechStackSlider from '@/components/TechStackSlider';
import AnimatedTerminal from '@/components/AnimatedTerminal';

const caveat = Caveat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212]">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
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
              <a href="#services" className="hover:text-purple-600 transition-colors">Services</a>
              <a href="#case-studies" className="hover:text-purple-600 transition-colors">Case Studies</a>
              <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
              <a 
                href="#contact"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 text-sm font-medium hover:opacity-90 transition-all duration-200"
              >
                Get Started
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Hidden by default */}
        <div className="md:hidden hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#services" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Services</a>
            <a href="#case-studies" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Case Studies</a>
            <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">About</a>
            <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">Contact</a>
          </div>
        </div>
      </header>

      {/* Add margin-top to account for fixed header */}
      <div className="pt-16">
        {/* Hero Section */}
        <section className="grid grid-rows-[1fr] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-8 items-center max-w-4xl text-center">
            <h1 className={`${caveat.className} text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
              From Raw Data to Rocket Fuel
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 font-light max-w-2xl leading-relaxed">
              Build Scalable Data Pipelines, Unlock AI Insights, and Power Your Startup's Growth.
            </p>
            <p className="text-lg text-purple-400/90 font-medium">
              🚀 Serverless Architecture = Pay Only For What You Use
            </p>
            <AnimatedTerminal />
            
            {/* Added CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact"
                className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 text-lg font-medium hover:opacity-90 transition-all duration-200 flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#case-studies"
                className="rounded-full bg-white/10 text-white px-8 py-3 text-lg font-medium hover:bg-white/20 transition-all duration-200 border border-gray-700"
              >
                View Case Studies
              </a>
            </div>
          </main>
        </section>

        {/* Services Section - Modern cards */}
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className={`${caveat.className} text-4xl font-bold mb-12 text-center`}>What We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/50 dark:bg-white/[.03] backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-b hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20">
                <Database className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4`}>Startup Data Engineering</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Scalable ETL/ELT pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Cost-effective cloud architectures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Automated monitoring & CI/CD</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white/50 dark:bg-white/[.03] backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-b hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20">
                <BarChart2 className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4`}>Analytics & Decision-Making</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Intuitive schemas for SaaS metrics</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Investor-ready dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Financial forecasting models</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-white/50 dark:bg-white/[.03] backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-gradient-to-b hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/20 dark:hover:to-pink-900/20">
                <Brain className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4`}>AI Integration</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>ML-ready data preparation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Custom AI microservices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">✦</span>
                    <span>Predictive analytics setup</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Section - Modern styling */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className={`${caveat.className} text-4xl font-bold mb-12 text-center`}>Success Stories</h2>
            <div className="bg-white/50 dark:bg-white/[.03] backdrop-blur-sm p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
              <div className="mb-4">
                <span className="text-sm font-medium bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-100 px-4 py-1 rounded-full">
                  Series A HealthTech Startup
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-4">From Data Chaos to Series B Success</h3>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300">
                  Problem: Disconnected user data, manual reporting, missed investor deadlines.
                </p>
                <div>
                  <p className="font-medium mb-2">Solution:</p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600 dark:text-gray-300">
                    <li>Built a real-time pipeline aggregating EHR, app, and CRM data into BigQuery</li>
                    <li>Designed an investor dashboard tracking DAU, LTV, and compliance metrics</li>
                  </ul>
                </div>
                <p className="font-medium text-green-600 dark:text-green-400">
                  Result: Secured $8M Series B with data-driven storytelling
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section id="case-studies" className="py-20 bg-black/30">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-16">
              <h2 className={`${caveat.className} text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                Success Stories
              </h2>
              <p className="text-xl text-gray-400">
                Real solutions, real results for innovative startups
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Wearable Analytics Case Study */}
              <div className="bg-[#1A1A1A] rounded-2xl border border-gray-800 overflow-hidden">
                <div className="aspect-video relative bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                  <Image
                    src="https://images.unsplash.com/photo-1510017803434-a899398421b3?q=80&w=2940&auto=format&fit=crop"
                    alt="Wearable Analytics Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                      Health Tech
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">
                      IoT Data
                    </span>
                  </div>
                  <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                    Wearable Health Insights Platform
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Built a real-time analytics pipeline processing 10M+ daily health metrics from wearable devices, enabling ML-powered health insights.
                  </p>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">✦</span>
                      <span>Reduced data processing latency by 90%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">✦</span>
                      <span>Implemented predictive health alerts</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">✦</span>
                      <span>HIPAA-compliant data architecture</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* SaaS Analytics Case Study */}
              <div className="bg-[#1A1A1A] rounded-2xl border border-gray-800 overflow-hidden">
                <div className="aspect-video relative bg-gradient-to-br from-purple-900/50 to-pink-900/50">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop"
                    alt="SaaS Analytics Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                      SaaS
                    </span>
                    <span className="px-3 py-1 bg-pink-500/10 text-pink-400 rounded-full text-sm">
                      Product Analytics
                    </span>
                  </div>
                  <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                    Product Analytics Engine
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Developed a comprehensive analytics suite for a B2B SaaS platform, driving data-informed product decisions.
                  </p>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">✦</span>
                      <span>Automated reporting saved 20 hrs/week</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">✦</span>
                      <span>Increased user retention by 40%</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="text-purple-500">✦</span>
                      <span>ML-powered churn prediction</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Why Choose Us Section */}
        <section className="py-20 bg-black/[.02] dark:bg-white/[.02]">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className={`${caveat.className} text-4xl font-bold mb-16 text-center bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
              Why Startups Choose Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <Rocket className="w-12 h-12 mb-6 text-purple-500" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                  Startup DNA
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  We speak your language. No enterprise bloat—just agile, scalable solutions that grow with your startup.
                </p>
              </div>

              {/* Card 2 */}
              <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <Code className="w-12 h-12 mb-6 text-purple-500" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                  Modern Tech Stack
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Cloud-native architecture using cutting-edge tools like dbt, Airflow, and modern data warehouses.
                </p>
              </div>

              {/* Card 3 */}
              <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <Zap className="w-12 h-12 mb-6 text-purple-500" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                  Quick Time-to-Value
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Get your first pipeline running in weeks, not months. Iterative delivery with clear ROI milestones.
                </p>
              </div>

              {/* Card 4 */}
              <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <Brain className="w-12 h-12 mb-6 text-purple-500" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                  AI-Ready Architecture
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Future-proof your data stack. Build pipelines today that seamlessly integrate with AI tomorrow.
                </p>
              </div>

              {/* Card 5 */}
              <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <BarChart2 className="w-12 h-12 mb-6 text-purple-500" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                  Investor-Ready Analytics
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Dashboards and metrics that tell your growth story and impress investors during due diligence.
                </p>
              </div>

              {/* Card 6 */}
              <div className="p-8 bg-[#1A1A1A] rounded-2xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300">
                <Database className="w-12 h-12 mb-6 text-purple-500" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4 text-white`}>
                  Cost Optimization
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Smart architecture decisions that keep your cloud costs low while maintaining scalability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section - After Why Choose Us */}
        <section className="py-20 bg-black/30">
          <div className="max-w-6xl mx-auto px-8">
            <div className="text-center mb-12">
              <h2 className={`${caveat.className} text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                Built with Modern Tech
              </h2>
              <p className="text-xl text-gray-400">
                Enterprise-grade tools, startup-friendly implementation
              </p>
            </div>
            <TechStackSlider />
          </div>
        </section>

        {/* CTA Section with updated typography */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className={`${caveat.className} text-4xl font-bold mb-6 text-white`}>
              Stop Guessing. Start Scaling.
            </h2>
            <p className="text-xl mb-8 text-gray-400 leading-relaxed">
              Book a free data audit: We'll map your current stack and show you the fastest path to ROI.
            </p>
            <a 
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 font-medium hover:opacity-90 transition-all duration-200"
              href="#contact"
            >
              Schedule Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Footer with consistent styling */}
        <footer className="border-t border-gray-800 bg-black/50">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="text-center">
              <p className={`${caveat.className} text-2xl font-semibold mb-2 text-white`}>
                Data Engineering for Startups That Mean Business.
              </p>
              <p className="text-gray-400">
                Less Chaos. More Clarity. Ready for AI.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
