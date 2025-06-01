import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between py-4">
        {/* Logo / Site Name */}
        <Link href="/" className="text-2xl font-display text-olive-600">
          Evergreen
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-8 flex items-center">
          <Link href="/features" className="text-charcoal-700 hover:text-olive-600">
            Features
          </Link>
          <Link href="/pricing" className="text-charcoal-700 hover:text-olive-600">
            Pricing
          </Link>
          <Link
            href="/dashboard"
            className="px-4 py-2 border border-olive-600 text-olive-600 rounded-lg hover:bg-olive-50 transition"
          >
            Dashboard
          </Link>
          <Link
            href="/auth/signin"
            className="px-4 py-2 bg-olive-600 text-white rounded-lg hover:bg-olive-700 transition"
          >
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
}

