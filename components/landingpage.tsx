// Path: src/components/LandingPage.tsx

import { motion } from 'framer-motion';
import Link from 'next/link';
import Container from '@/components/container';

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-cream-50 text-charcoal-900 font-body">
      {/* Hero Section */}
      <Container>
        <section className="relative flex flex-col lg:flex-row items-center justify-between min-h-[75vh] py-20">
          {/* Text Column */}
          <div className="lg:w-1/2 flex flex-col space-y-6 z-10">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight max-w-3xl"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Grow With Purpose, Build With Evergreen.
            </motion.h1>
            <p className="text-xl text-charcoal-500 max-w-2xl">
              A clean, modern framework to help you launch products that last.
            </p>
            <Link
              href="/signup"
              className="mt-4 inline-block px-8 py-3 bg-olive-600 text-white font-semibold rounded-full transform transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Illustration Column */}
          <div className="mt-12 lg:mt-0 lg:w-1/2 flex justify-center">
            <img
              src="/images/laptop-dashboard.svg"
              alt="Evergreen Dashboard Illustration"
              className="max-w-full h-auto"
            />
          </div>

          {/* Subtle SVG background shape */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <svg
              className="w-full h-full opacity-10"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid slice"
              viewBox="0 0 100 100"
            >
              <circle cx="50" cy="50" r="50" fill="#556B2F" />
            </svg>
          </div>
        </section>
      </Container>

      {/* Features Section */}
      <Container>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 py-20">
          {[
            {
              title: 'Fast Setup',
              desc: "Launch your app in minutes with Evergreen's intuitive tools.",
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                </svg>
              ),
            },
            {
              title: 'Responsive Design',
              desc: 'Your site looks great on every screen, every time.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ),
            },
            {
              title: 'Built to Scale',
              desc: 'Seamlessly grow without touching infrastructure.',
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M3 6h18M3 14h18M3 18h18"
                  />
                </svg>
              ),
            },
          ].map(({ title, desc, icon }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200 flex flex-col items-start space-y-4"
            >
              <div className="p-3 bg-olive-100 text-olive-600 rounded-full">{icon}</div>
              <h3 className="text-2xl font-display font-semibold">{title}</h3>
              <p className="text-charcoal-500 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </section>
      </Container>

      {/* Call to Action */}
      <div className="bg-olive-50">
        <Container>
          <section className="py-20 text-center space-y-6">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-olive-700">
              Start Building Today
            </h2>
            <p className="text-lg text-charcoal-600 max-w-2xl mx-auto">
              Join creators who trust Evergreen to bring their vision to life.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-olive-600 text-white font-semibold rounded-full hover:bg-olive-700 transition"
              >
                Create an Account
              </Link>
              <Link
                href="/features"
                className="px-8 py-3 border-2 border-olive-600 text-olive-600 font-medium rounded-full hover:bg-olive-100 transition"
              >
                Learn More
              </Link>
            </div>
          </section>
        </Container>
      </div>
    </main>
  );
}

