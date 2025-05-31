// src/components/ui/Footer.tsx
'use client';
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-cream-100 mt-12 py-6">
      <div className="max-w-4xl mx-auto text-center text-sm text-charcoal-700">
        <p>© {new Date().getFullYear()} Evergreen. All rights reserved.</p>
        <p className="mt-1">A retro‐futuristic blogging platform.</p>
      </div>
    </footer>
  );
}
