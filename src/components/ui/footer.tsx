// src/components/ui/Footer.tsx
'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-cream-100 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Column 1: About */}
        <div>
          <h4 className="text-lg font-display text-olive-600 mb-2">About Evergreen</h4>
          <p className="text-sm text-charcoal-700">
            A retro-futuristic blogging platform dedicated to storytelling.  
            Visit our <a href="/about" className="text-olive-600 hover:underline">About Us</a> page for more.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h4 className="text-lg font-display text-olive-600 mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-charcoal-700">
            <li><a href="/books" className="hover:text-olive-600">Books</a></li>
            <li><a href="/movies" className="hover:text-olive-600">Movies & TV</a></li>
            <li><a href="/music" className="hover:text-olive-600">Music</a></li>
            <li><a href="/collectibles" className="hover:text-olive-600">Collectibles</a></li>
            <li><a href="/textbooks" className="hover:text-olive-600">Textbooks</a></li>
            <li><a href="/games" className="hover:text-olive-600">Games & Gifts</a></li>
          </ul>
        </div>

        {/* Column 3: Social & Support */}
        <div>
          <h4 className="text-lg font-display text-olive-600 mb-2">Support & Social</h4>
          <ul className="space-y-1 text-sm text-charcoal-700">
            <li><a href="/help" className="hover:text-olive-600">Help Center</a></li>
            <li><a href="/contact" className="hover:text-olive-600">Contact Us</a></li>
            <li><a href="https://twitter.com/evergreen" className="hover:text-olive-600">Twitter</a></li>
            <li><a href="https://instagram.com/evergreen" className="hover:text-olive-600">Instagram</a></li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-charcoal-200 pt-4">
        <p className="text-center text-sm text-charcoal-700">
          © {new Date().getFullYear()} Evergreen. All rights reserved.
        </p>
        <p className="text-center text-xs text-charcoal-700 mt-1">
          A retro-futuristic blogging platform.
        </p>
      </div>
    </footer>
  );
}
