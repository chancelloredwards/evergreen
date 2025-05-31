import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../auth/[...nextauth]';
import prisma from '@/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if (!session?.user?.email) return res.status(401).end();

  const user = await prisma.user.findUnique({ where: { email: session.user.email } });
  if (!user) return res.status(404).end();

  if (req.method === 'GET') {
    return res.status(200).json({
      name: user.name,
      bio: user.bio,
      avatarUrl: user.avatarUrl,
    });
  }

  if (req.method === 'PUT') {
    const { name, bio, avatarUrl } = req.body;
    await prisma.user.update({
      where: { email: session.user.email },
      data: { name, bio, avatarUrl },
    });
    return res.status(200).end();
  }

  res.setHeader('Allow', ['GET', 'PUT']);
  return res.status(405).end();
}