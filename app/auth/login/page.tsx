// src/app/auth/login/page.tsx
'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleCredentialsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const result = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });
    setLoading(false);
    if (result?.error) {
      setError('Invalid email or password');
    } else {
      router.push('/dashboard');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-cream-100 rounded-lg shadow">
      <h1 className="text-3xl font-display text-olive-600 mb-4">Welcome Back</h1>
      <div className="flex flex-col space-y-3">
        <Button variant="secondary" onClick={() => signIn('github')}>
          Continue with GitHub
        </Button>
        <Button variant="secondary" onClick={() => signIn('google')}>
          Continue with Google
        </Button>
        <Button variant="secondary" onClick={() => signIn('apple')}>
          Continue with Apple
        </Button>
        <Button variant="secondary" onClick={() => signIn('linkedin')}>
          Continue with LinkedIn
        </Button>
      </div>
      <div className="my-6 flex items-center">
        <hr className="flex-grow border-charcoal-300" />
        <span className="mx-2 text-sm text-charcoal-700">OR</span>
        <hr className="flex-grow border-charcoal-300" />
      </div>
      <form onSubmit={handleCredentialsSubmit} className="space-y-4">
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
          Log In
        </Button>
      </form>
      <p className="mt-4 text-center text-sm text-charcoal-700">
        Don’t have an account?{' '}
        <a href="/auth/register" className="text-olive-600 hover:underline">
          Sign up
        </a>
      </p>
    </div>
  );
}
