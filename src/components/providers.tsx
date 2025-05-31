// src/components/Providers.tsx
'use client';

import { ReactNode } from 'react';
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth'; // ← import Session type

type ProvidersProps = {
  children: ReactNode;
  session: Session | null;
};

export default function Providers({ children, session }: ProvidersProps) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
