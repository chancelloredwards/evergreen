// src/app/layout.tsx
import './globals.css';
import dynamic from 'next/dynamic';

// Because Navbar is now the default export, this is straightforward:
const Navbar = dynamic(() => import('@/components/ui/navbar'), { ssr: false });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-cream-50">
        <Navbar />
        <main className="flex-grow">{children}</main>
        {/* <Footer /> could also be a default export or a named export loaded similarly */}
      </body>
    </html>
  );
}



