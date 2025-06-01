import Link from 'next/link';

export function Footer() {
return ( <footer className="bg-white border-t border-gray-200 py-8"> <div className="container text-center text-sm text-charcoal-500"> <div className="flex flex-col md:flex-row md:justify-between items-center space-y-4 md:space-y-0"> <p>© 2025 Evergreen. All rights reserved.</p> <div className="space-x-4"> <Link href="/privacy" className="hover:text-olive-600">
Privacy Policy </Link> <Link href="/terms" className="hover:text-olive-600">
Terms of Service </Link> <Link href="/contact" className="hover:text-olive-600">
Contact </Link> </div> </div> </div> </footer>
);
}

