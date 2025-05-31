// src/app/page.tsx
import CategoryGrid from '@/components/ui/categorygrid';
import TrendingPosts from '@/components/ui/trendingpost';



// src/app/page.tsx
export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Smoke test box to confirm Tailwind is loading */}
      <div className="bg-olive-600 text-white p-8 text-center">
        Tailwind is working! ✅
      </div>

      {/* …rest of your HomePage content… */}
    </main>
  );
}


