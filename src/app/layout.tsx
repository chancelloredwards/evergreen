// src/app/layout.tsx
import '@/styles/globals.css';
import { getServerSession } from 'next-auth/next';
import Providers from '@/components/providers';
import Navbar from '@/components/ui/header';
import { Footer } from '@/components/ui/footer';
import { authOptions } from '@/pages/api/auth/[...nextauth]';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {/* Providers ensures useSession and other hooks work */}
        <Providers session={session}>
          <Navbar />
          <main className="flex-grow">{children}</main>
        </Providers>
        <Footer />
      </body>
    </html>
  );
}






