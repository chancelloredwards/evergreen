// src/components/ui/Navbar.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';

export default function Navbar() {
  const { data: session } = useSession();

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

