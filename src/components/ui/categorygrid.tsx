// src/components/ui/CategoryGrid.tsx
'use client';

import React from 'react';
import Link from 'next/link';

type Category = {
  id: string;
  name: string;
  imageUrl: string;
  href: string;
};

const categories: Category[] = [
  { id: '1', name: 'Amateur Sleuth', imageUrl: '/categories/amateur-sleuth.jpg', href: '/category/amateur-sleuth' },
  { id: '2', name: 'Cozy', imageUrl: '/categories/cozy.jpg', href: '/category/cozy' },
  { id: '3', name: 'Hard-Boiled', imageUrl: '/categories/hard-boiled.jpg', href: '/category/hard-boiled' },
  { id: '4', name: 'Historical', imageUrl: '/categories/historical.jpg', href: '/category/historical' },
  { id: '5', name: 'Police Procedural', imageUrl: '/categories/police-procedural.jpg', href: '/category/police-procedural' },
  { id: '6', name: 'Private Investigators', imageUrl: '/categories/private-investigators.jpg', href: '/category/private-investigators' },
  { id: '7', name: 'Traditional', imageUrl: '/categories/traditional.jpg', href: '/category/traditional' },
  { id: '8', name: 'Women Sleuths', imageUrl: '/categories/women-sleuths.jpg', href: '/category/women-sleuths' },
];

export default function CategoryGrid() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-display text-charcoal-900 mb-6">Shop By Category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {categories.map((cat) => (
          <Link key={cat.id} href={cat.href} className="group flex flex-col items-center text-center">
            <div className="relative h-28 w-28 rounded-full bg-cream-100 flex items-center justify-center overflow-hidden border-2 border-olive-300 group-hover:border-olive-600 transition">
              <img
                src={cat.imageUrl}
                alt={cat.name}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <span className="mt-2 text-sm font-medium text-charcoal-900 group-hover:text-olive-600 transition">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
