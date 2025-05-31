// src/components/ui/SearchBar.tsx
'use client';

import React, { useState } from 'react';

export default function SearchBar() {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace with your search logic. e.g., router.push(`/search?q=${query}`);
    alert(`Searching for: ${query}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by title, author, or keyword"
        className="w-full px-4 py-2 border border-charcoal-700 rounded-l focus:outline-none focus:border-olive-600"
        aria-label="Search"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-olive-600 text-white rounded-r hover:bg-olive-300 focus:outline-none focus:ring-2 focus:ring-teal-400"
        aria-label="Submit search"
      >
        <svg
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M9.5 17a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
        </svg>
      </button>
    </form>
  );
}
