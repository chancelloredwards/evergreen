import { motion } from "framer-motion";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-neutral-50 text-green-950 font-sans">
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-32">

        {/* Hero Section */}
        <section className="text-center space-y-6">
          <motion.h1
            className="text-5xl md:text-6xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Grow With Purpose, Build With Evergreen.
          </motion.h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            A clean, modern framework to help you launch products that last.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-4 px-6 py-3 text-white bg-green-700 hover:bg-green-800 rounded-lg text-lg font-medium transition"
          >
            Get Started
          </Link>
        </section>

        {/* Features Section */}
        <section className="grid gap-12 md:grid-cols-3 text-left">
          {[
            {
              title: "Fast Setup",
              desc: "Launch your app in minutes with Evergreen's intuitive tools.",
            },
            {
              title: "Responsive Design",
              desc: "Your site looks great on every screen, every time.",
            },
            {
              title: "Built to Scale",
              desc: "Seamlessly grow without touching infrastructure.",
            },
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 text-base leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Start Building Today</h2>
          <p className="text-gray-700">
            Join creators who trust Evergreen to bring their vision to life.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-2 px-6 py-3 bg-green-700 text-white rounded-xl hover:bg-green-800 text-lg transition"
          >
            Create an Account
          </Link>
        </section>
      </div>
    </main>
  );
}
