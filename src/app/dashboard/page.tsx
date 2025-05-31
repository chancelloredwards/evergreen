import { getServerSession } from 'next-auth';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import Link from 'next/link';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <p className="p-4">Redirecting to login...</p>;
  }
  const { user } = session;
  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl font-display">Welcome, {user?.email}</h1>
      <Link href="/profile" className="mt-4 inline-block text-olive-600 hover:underline">
        Edit Profile
      </Link>
    </div>
  );
}