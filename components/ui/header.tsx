// Path: src/components/ui/header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl font-display text-olive-600 font-semibold hover:text-olive-700 transition"
        >
          Evergreen
        </Link>

        {/* Primary links */}
        <nav className="flex items-center ml-16 space-x-12 text-sm font-medium">
          <Link href="/features" className="hover:text-olive-600">
            Features
          </Link>
          <Link href="/pricing" className="hover:text-olive-600">
            Pricing
          </Link>
        </nav>

        {/* Auth buttons */}
        <div className="ml-auto flex items-center space-x-6">
          <Link
            href="/signin"
            className="px-5 py-2 border border-olive-600 text-olive-600 rounded-md hover:bg-olive-50 transition"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 bg-olive-600 text-white rounded-md hover:bg-olive-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}


