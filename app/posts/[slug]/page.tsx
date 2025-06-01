// src/app/posts/[slug]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

export default async function PostPage({ params }: { params: { slug: string } }) {
  // In a real app, fetch via API or Prisma
  const res = await fetch(`http://localhost:3000/api/posts/${params.slug}`);
  if (!res.ok) return notFound();
  const post = await res.json(); // { title, content, authorName, createdAt }

  return (
    <div className="max-w-3xl mx-auto mt-12 px-6">
      <h1 className="text-4xl font-display text-olive-600 mb-2">{post.title}</h1>
      <p className="text-sm text-charcoal-700 mb-8">
        By {post.authorName} • {new Date(post.createdAt).toLocaleDateString()}
      </p>
      <article className="prose prose-olive mx-auto">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
