// src/app/layout.tsx
import '@/styles/globals.css';
import Navbar from '@/components/ui/navbar';
import { Footer } from '@/components/ui/footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-cream-50">
        {/* Directly import and render the client component */}
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



