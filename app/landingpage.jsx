import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-green-50 text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-20 text-center md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-4xl font-bold md:text-6xl leading-tight">
            Grow With Purpose, Build With Evergreen.
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            A clean, modern framework to help you launch products that last.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-8 px-8 py-3 text-white bg-green-600 hover:bg-green-700 rounded-xl transition"
          >
            Get Started
          </Link>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-16 bg-white md:px-12 lg:px-24">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            { title: "Fast Setup", desc: "Launch your app in minutes with Evergreen's intuitive tools." },
            { title: "Responsive Design", desc: "Your site looks great on every screen, every time." },
            { title: "Built to Scale", desc: "Seamlessly grow without touching infrastructure." },
          ].map(({ title, desc }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-green-50 p-6 rounded-2xl shadow-sm"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold">Start Building Today</h2>
          <p className="mt-4 text-gray-700">
            Join creators who trust Evergreen to bring their vision to life.
          </p>
          <Link
            href="/signup"
            className="inline-block mt-6 px-6 py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
          >
            Create an Account
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
