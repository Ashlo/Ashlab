import { ArrowRight, BarChart2, Database, Brain, Menu } from 'lucide-react';
import { Caveat } from 'next/font/google';
import Image from 'next/image';

const caveat = Caveat({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] dark:bg-[#121212]">
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
        {/* Hero Section - More playful styling */}
        <section className="grid grid-rows-[1fr] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
          <main className="flex flex-col gap-8 items-center sm:items-start max-w-4xl">
            <div className="text-center sm:text-left">
              <h1 className={`${caveat.className} text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent`}>
                From Raw Data to Rocket Fuel
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 font-light">
                Build Scalable Data Pipelines, Unlock AI Insights, and Power Your Startup's Growth.
              </p>
            </div>

            <div className="bg-white/50 dark:bg-white/[.03] backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
              <p className={`${caveat.className} text-2xl mb-6`}>
                For startups drowning in spreadsheets or struggling to scale:
                We design, build, and automate data pipelines so you can focus on your product, not plumbing.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✦</span>
                  <span>Data Engineering: Cloud-native pipelines (AWS/GCP/Azure), ETL automation, and warehousing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✦</span>
                  <span>Data Modeling: Clean schemas for analytics, forecasting, and investor-ready reporting.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl">✦</span>
                  <span>AI-Ready Infrastructure: Future-proof your stack for machine learning and predictive tools.</span>
                </li>
              </ul>
            </div>

            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 text-lg font-medium hover:opacity-90 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                 href="#contact">
                Schedule Free Consultation
              </a>
              <a className="rounded-full border-2 border-purple-600 px-8 py-4 text-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-all duration-200"
                 href="#services">
                Explore Services
              </a>
            </div>
          </main>
        </section>

        {/* Services Section - Modern cards */}
        <section id="services" className="py-20">
          <div className="max-w-6xl mx-auto px-8">
            <h2 className={`${caveat.className} text-4xl font-bold mb-12 text-center`}>What We Deliver</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white/50 dark:bg-white/[.03] backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-gray-800 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <Database className="w-12 h-12 mb-4 text-purple-600" />
                <h3 className={`${caveat.className} text-2xl font-semibold mb-4`}>Startup Data Engineering</h3>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Scalable ETL/ELT pipelines</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Cost-effective cloud architectures</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-purple-500">•</span>
                    <span>Automated monitoring & CI/CD</span>
                  </li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-black/20 rounded-lg">
                <BarChart2 className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-4">Analytics & Decision-Making</h3>
                <ul className="space-y-2">
                  <li>• Intuitive schemas for SaaS metrics</li>
                  <li>• Investor-ready dashboards</li>
                  <li>• Financial forecasting models</li>
                </ul>
              </div>
              <div className="p-6 bg-white dark:bg-black/20 rounded-lg">
                <Brain className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-semibold mb-4">AI Integration</h3>
                <ul className="space-y-2">
                  <li>• ML-ready data preparation</li>
                  <li>• Custom AI microservices</li>
                  <li>• Predictive analytics setup</li>
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

        {/* Why Choose Us Section */}
        <section className="bg-black/[.02] dark:bg-white/[.02] py-20">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 bg-white dark:bg-black/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🚀 Startup DNA</h3>
                <p>We speak your language. No enterprise BS—just agile solutions that scale as fast as you do.</p>
              </div>
              <div className="p-6 bg-white dark:bg-black/20 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🔮 AI-Ready, Not AI-Hype</h3>
                <p>Build pipelines today that seamlessly integrate machine learning tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">Stop Guessing. Start Scaling.</h2>
            <p className="text-xl mb-8">Book a free data audit: We'll map your current stack and show you the fastest path to ROI.</p>
            <a className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground text-background px-8 py-4 font-medium hover:bg-[#383838] dark:hover:bg-[#ccc] transition-colors"
               href="#contact">
              Schedule Your Free Consultation
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* Footer - Modern minimal */}
        <footer className="border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-black/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <div className="text-center">
              <p className={`${caveat.className} text-2xl font-semibold mb-2`}>
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
