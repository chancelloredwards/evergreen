// src/components/ui/Header.tsx
'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import SearchBar from './searchbar';

export default function Header() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-cream-100 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-display text-olive-600">
          Evergreen
        </Link>

        {/* Search Bar (desktop only) */}
        <div className="hidden md:block flex-grow mx-8">
          <SearchBar />
        </div>

        {/* Primary Nav Links (desktop) */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/books" className="text-charcoal-900 hover:text-olive-600">
            Books
          </Link>
          <Link href="/movies" className="text-charcoal-900 hover:text-olive-600">
            Movies & TV
          </Link>
          <Link href="/music" className="text-charcoal-900 hover:text-olive-600">
            Music
          </Link>
          <Link href="/collectibles" className="text-charcoal-900 hover:text-olive-600">
            Collectibles
          </Link>
          <Link href="/textbooks" className="text-charcoal-900 hover:text-olive-600">
            Textbooks
          </Link>
          <Link href="/games" className="text-charcoal-900 hover:text-olive-600">
            Games & Gifts
          </Link>
        </nav>

        {/* Right‐side (Sign In / Dashboard / Menu) */}
        <div className="flex items-center space-x-4">
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
                Sign In
              </Link>
              <Link
                href="/auth/register"
                className="ml-2 px-4 py-2 bg-olive-600 text-white rounded hover:bg-olive-300"
              >
                Register
              </Link>
            </>
          )}

          {/* Mobile menu button */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded hover:bg-cream-50"
            aria-label="Toggle menu"
          >
            {/* Simple hamburger icon */}
            <svg
              className="h-6 w-6 text-charcoal-900"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                // X icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-charcoal-200">
          <nav className="flex flex-col space-y-2 py-4 px-6">
            <Link href="/" className="text-charcoal-900 hover:text-olive-600">
              Home
            </Link>
            <Link href="/books" className="text-charcoal-900 hover:text-olive-600">
              Books
            </Link>
            <Link href="/movies" className="text-charcoal-900 hover:text-olive-600">
              Movies
            </Link>
            <Link href="/music" className="text-charcoal-900 hover:text-olive-600">
              Music
            </Link>
            {/* etc. */}
            <div className="border-t border-charcoal-200 mt-4 pt-4">
              {session ? (
                <>
                  <Link href="/dashboard" className="block text-charcoal-900 hover:text-olive-600">
                    Dashboard
                  </Link>
                  <button
                    onClick={() => signOut()}
                    className="block text-charcoal-900 hover:text-olive-600 mt-2"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="block text-charcoal-900 hover:text-olive-600">
                    Sign In
                  </Link>
                  <Link
                    href="/auth/register"
                    className="block mt-2 px-4 py-2 bg-olive-600 text-white rounded hover:bg-olive-300"
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
