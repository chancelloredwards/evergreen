// src/app/profile/page.tsx
'use client';
import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function ProfilePage() {
  const { data: session, status } = useSession();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [isSaving, setSaving] = useState(false);

  // Fetch existing profile data on mount
  useEffect(() => {
    if (status === 'authenticated') {
      fetch('/api/user/profile')
        .then((res) => res.json())
        .then((data) => {
          setName(data.name || '');
          setBio(data.bio || '');
          setAvatarUrl(data.avatarUrl || '');
        });
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    await fetch('/api/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, bio, avatarUrl }),
    });
    setSaving(false);
    alert('Profile updated!');
  };

  if (status === 'loading') {
    return <p className="p-6">Loading profile...</p>;
  }
  if (!session) {
    return <p className="p-6">Redirecting to login...</p>;
  }

  return (
    <div className="max-w-md mx-auto mt-12 p-8 bg-cream-100 rounded-lg shadow">
      <h1 className="text-3xl font-display text-olive-600 mb-6">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          label="Bio"
          type="text"
          as="textarea"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <Input
          label="Avatar URL"
          type="url"
          placeholder="https://example.com/me.jpg"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <Button type="submit" variant="primary" isLoading={isSaving}>
          Save Changes
        </Button>
      </form>
    </div>
  );
}
