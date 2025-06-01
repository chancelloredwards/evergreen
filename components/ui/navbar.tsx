// src/components/ui/Navbar.tsx
'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

export default function Navbar() {
  const { data: session, status } = useSession();

  // Optionally, you can handle a loading state:
  if (status === 'loading') {
    return (
      <header className="bg-cream-50 shadow-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto py-4 px-6">
          Loading…
        </div>
      </header>
    );
  }

  return (
    <header className="bg-cream-50 shadow-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-display text-olive-600">
          Evergreen
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/" className="text-charcoal-900 hover:text-olive-600">
            Home
          </Link>
          {session ? (
            <>
              <Link href="/dashboard" className="text-charcoal-900 hover:text-olive-600">
                Dashboard
              </Link>
              <button
                onClick={() => signOut()}
                className="text-charcoal-900 hover:text-olive-600"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/login" className="text-charcoal-900 hover:text-olive-600">
                Login
              </Link>
              <Link href="/auth/register" className="text-charcoal-900 hover:text-olive-600">
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}


