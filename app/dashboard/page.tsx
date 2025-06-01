// src/app/dashboard/page.tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    // Optionally, redirect client‐side or render a placeholder
    return <p className="p-6">Redirecting to login...</p>;
  }
  const userEmail = session.user?.email;

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-display text-olive-600 mb-6">Hello, {userEmail}</h1>
      <div className="flex flex-col space-y-4">
        <Link
          href="/profile"
          className="block py-3 px-4 bg-cream-100 border border-charcoal-700 rounded hover:bg-olive-300 hover:text-white transition"
        >
          Edit Profile
        </Link>
        <Link
          href="/posts/new"
          className="block py-3 px-4 bg-olive-600 text-white rounded hover:bg-olive-300 transition"
        >
          Create New Post
        </Link>
        <Link
          href="/posts"
          className="block py-3 px-4 bg-cream-100 border border-charcoal-700 rounded hover:bg-olive-300 hover:text-white transition"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
}
