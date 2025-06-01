// src/app/auth/register/page.tsx
'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    setLoading(false);
    if (res.ok) {
      // Automatically sign in
      await signIn('credentials', { email, password, callbackUrl: '/dashboard' });
    } else {
      const data = await res.json();
      setError(data.error || 'Registration failed');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-cream-100 rounded-lg shadow">
      <h1 className="text-3xl font-display text-olive-600 mb-4">Create Account</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          label="Password"
          type="password"
          placeholder="********"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="text-sm text-burnt-500">{error}</p>}
        <Button type="submit" variant="primary" isLoading={isLoading}>
          Sign Up
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-charcoal-700">
        Already have an account?{' '}
        <a href="/auth/login" className="text-olive-600 hover:underline">
          Log in
        </a>
      </p>
    </div>
  );
}
