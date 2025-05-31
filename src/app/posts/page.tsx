// src/app/posts/page.tsx
import { prisma } from '@/lib/prisma'; // if using server component to fetch
import Link from 'next/link';

async function fetchPosts() {
  // Example: fetch via API or directly with Prisma
  const res = await fetch('http://localhost:3000/api/posts');
  return res.json();
}

export default async function PostsPage() {
  const posts = await fetchPosts(); // [{ id, title, slug, excerpt, authorName, createdAt }, ...]

  return (
    <div className="max-w-4xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-display text-olive-600 mb-6">All Posts</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((post: any) => (
          <Link key={post.id} href={`/posts/${post.slug}`}>
            <div className="bg-cream-50 rounded-lg p-6 shadow hover:shadow-lg transition relative overflow-hidden">
              <h2 className="text-2xl font-display text-charcoal-900 mb-2">
                {post.title}
              </h2>
              <p className="text-charcoal-700 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center text-sm text-charcoal-700">
                <span>By {post.authorName}</span>
                <span className="mx-2">•</span>
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
