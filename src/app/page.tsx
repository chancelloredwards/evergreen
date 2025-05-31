// src/app/page.tsx
import CategoryGrid from '@/components/ui/categorygrid';
import TrendingPosts from '@/components/ui/trendingpost';

export default function HomePage() {
  return (
    <main>
      {/* HERO / FEATURED SECTION */}
      <section className="relative h-64 bg-olive-600 flex items-center justify-center overflow-hidden">
        <img
          src="/hero/retro-library.jpg"
          alt="Retro Library"
          className="absolute inset-0 h-full w-full object-cover opacity-50"
          loading="lazy"
        />
        <div className="relative text-center text-white px-6">
          <h1 className="text-4xl sm:text-5xl font-display mb-4">
            Welcome to Evergreen
          </h1>
          <p className="max-w-xl mx-auto text-lg sm:text-xl">
            Dive into a vintage-futuristic world of blogging, storytelling, and community.
          </p>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <CategoryGrid />

      {/* TRENDING / LATEST POSTS */}
      <TrendingPosts />
    </main>
  );
}

