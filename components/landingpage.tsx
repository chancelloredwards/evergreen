// File: src/components/LandingPage.tsx

import Link from 'next/link';
import Container from '@/components/container';

export default function LandingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-olive-600 to-teal-400 text-white">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <Container>
          <div className="relative flex flex-col lg:flex-row items-center justify-between min-h-screen py-32">
            {/* Left: Title, Subtitle, CTAs */}
            <div className="lg:w-1/2 space-y-6 z-10">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-bold leading-tight">
                Build With Confidence, Launch With Evergreen
              </h1>
              <p className="text-lg md:text-xl max-w-2xl">
                A clean, modern framework that grows with your product—no infrastructure headaches, just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <Link
                  href="/signup"
                  className="px-8 py-4 bg-white text-olive-600 font-semibold rounded-full hover:bg-gray-100 transition"
                >
                  Get Started
                </Link>
                <Link
                  href="/learn-more"
                  className="px-8 py-4 border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-olive-600 transition"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right: Illustration or Mockup */}
            <div className="hidden lg:flex lg:w-1/2 justify-center z-10 mt-12 lg:mt-0">
              <img
                src="/images/laptop-dashboard.svg"
                alt="Screenshot of Evergreen dashboard"
                className="w-full max-w-lg drop-shadow-xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-cream-50 py-20">
        <Container>
          <h2 className="text-4xl font-display font-bold text-center text-olive-600 mb-12">
            Why Choose Evergreen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
            {[
              {
                title: 'Instant Setup',
                desc: 'Deploy your app in minutes with zero-configuration tools and one-click CLI commands.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-olive-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6l4 2" />
                  </svg>
                ),
              },
              {
                title: 'Responsive by Default',
                desc: 'Whether it’s mobile, tablet, or desktop, your site will look pixel-perfect on every screen.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-olive-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ),
              },
              {
                title: 'Scalable Architecture',
                desc: 'Built on best practices and cloud-native patterns, Evergreen grows as your user base does.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-olive-600"
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
              {
                title: 'AI-Powered Assistance',
                desc: 'Seamless GPT integration to generate content, answer customer questions, and automate workflows.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-olive-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 17a4 4 0 108 0v1h-8v-1zM12 3v4m0 0a4 4 0 014 4H8a4 4 a0 014-4z"
                    />
                  </svg>
                ),
              },
              {
                title: 'Extensive Plugins',
                desc: 'Add on everything from advanced analytics to custom CSS with a robust plugin ecosystem.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-olive-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422M12 14l-6.16-3.422M12 14l0 7m0 0l-5.196-2.988M12 21l5.196-2.988"
                    />
                  </svg>
                ),
              },
              {
                title: '24/7 Support',
                desc: 'Our expert team is here for you—day or night—so you never hit a wall.',
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-olive-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-1.414-1.414L12 9.172 7.05 4.222 5.636 5.636 10.586 10.586 5.636 15.536l1.414 1.414L12 12l4.95 4.95 1.414-1.414L13.414 10.586l5.05-5z"
                    />
                  </svg>
                ),
              },
            ].map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:-translate-y-1 hover:shadow-2xl transition duration-200 flex flex-col items-start space-y-4"
              >
                <div className="p-4 bg-olive-100 text-olive-600 rounded-full">{icon}</div>
                <h3 className="text-2xl font-display font-semibold">{title}</h3>
                <p className="text-base text-charcoal-700 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

