'use client';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from 'react';

export default function ProfilePage() {
  const { data: session } = useSession();
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    if (session?.user?.email) {
      fetch('/api/user/profile')
        .then((res) => res.json())
        .then(({ name, bio, avatarUrl }) => {
          setName(name || '');
          setBio(bio || '');
          setAvatarUrl(avatarUrl || '');
        });
    }
  }, [session]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('/api/user/profile', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, bio, avatarUrl }),
    });
    alert('Profile updated');
  };

  if (!session) return <p className="p-4">Loading...</p>;
  return (
    <div className="max-w-md mx-auto p-6 bg-cream-100 rounded-lg shadow">
      <h1 className="text-2xl font-display mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-2 border border-charcoal-700 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <textarea
          placeholder="Bio"
          className="w-full p-2 border border-charcoal-700 rounded"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />
        <input
          type="url"
          placeholder="Avatar URL"
          className="w-full p-2 border border-charcoal-700 rounded"
          value={avatarUrl}
          onChange={(e) => setAvatarUrl(e.target.value)}
        />
        <button className="w-full py-2 bg-olive-600 text-white rounded">Save</button>
      </form>
    </div>
  );
}