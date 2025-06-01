// src/components/ui/TrendingPosts.tsx
'use client';

import React from 'react';
import Link from 'next/link';

type Post = {
  id: string;
  title: string;
  slug: string;
  coverImage: string;
  excerpt: string;
};

const dummyPosts: Post[] = [
  {
    id: 'a1',
    title: 'Trail of the Hawk',
    slug: 'trail-of-the-hawk',
    coverImage: '/covers/trail-of-the-hawk.jpg',
    excerpt: 'A thrilling mystery on the open plains...',
  },
  {
    id: 'a2',
    title: 'Summer Solstice',
    slug: 'summer-solstice',
    coverImage: '/covers/summer-solstice.jpg',
    excerpt: 'When the days stretch long, the danger begins...',
  },
  {
    id: 'a3',
    title: 'Murder at Midnight',
    slug: 'murder-at-midnight',
    coverImage: '/covers/murder-at-midnight.jpg',
    excerpt: 'A detective races the clock for answers...',
  },
  // … add more as needed
];

export default function TrendingPosts() {
  return (
    <section className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-3xl font-display text-charcoal-900 mb-6">Trending Titles</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {dummyPosts.map((post) => (
          <Link key={post.id} href={`/posts/${post.slug}`} className="group">
            <div className="relative h-64 overflow-hidden rounded-lg shadow hover:shadow-lg transition">
              <img
                src={post.coverImage}
                alt={post.title}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <h3 className="text-lg font-display text-white">{post.title}</h3>
              </div>
            </div>
            <p className="mt-2 text-sm text-charcoal-700 line-clamp-2">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
