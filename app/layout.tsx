// File: src/app/layout.tsx

import './global.css';
import { getServerSession } from 'next-auth/next';
import Providers from '@/components/providers';
import Header from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { authOptions } from '@/lib/auth';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // 1. Fetch the user session on the server
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* 2. Pass that session into Providers as a required prop */}
        <Providers session={session}>
          <Header />
          <main className="flex-grow">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}











