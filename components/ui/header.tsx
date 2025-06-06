// File: src/components/ui/header.tsx

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto flex items-center px-6 py-3">
        {/* Left: Brand */}
        <Link
          href="/"
          className="text-2xl font-display text-olive-600 font-semibold hover:text-olive-700 transition"
        >
          Evergreen
        </Link>

        {/* Spacer pushes auth buttons all the way to the right */}
        <div className="flex-1" />

        {/* Right: Sign In / Sign Up */}
        <div className="flex items-center">
          {/* Sign In */}
          <Link
            href="/signin"
            className="mr-6 px-4 py-2 border border-olive-600 text-olive-600 rounded-md hover:bg-olive-50 transition"
          >
            Sign In
          </Link>

          {/* Sign Up */}
          <Link
            href="/signup"
            className="px-4 py-2 bg-olive-600 text-white rounded-md hover:bg-olive-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}









