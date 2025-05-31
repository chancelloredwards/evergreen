'use client';
import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="max-w-md mx-auto p-6 bg-cream-100 rounded-lg shadow">
      <h1 className="text-2xl font-display mb-4">Login</h1>
      <button
        onClick={() => signIn('github')}
        className="w-full py-2 mb-2 bg-charcoal-900 text-white rounded"
      >
        Continue with GitHub
      </button>
      <button
        onClick={() => signIn('google')}
        className="w-full py-2 mb-2 bg-burnt-500 text-white rounded"
      >
        Continue with Google
      </button>
      <button
        onClick={() => signIn('apple')}
        className="w-full py-2 mb-4 bg-teal-400 text-white rounded"
      >
        Continue with Apple
      </button>
      <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          required
          className="w-full p-2 border border-charcoal-700 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-2 border border-charcoal-700 rounded"
        />
        <button className="w-full py-2 bg-olive-600 text-white rounded">
          Sign In with Email
        </button>
      </form>
    </div>
  );
}