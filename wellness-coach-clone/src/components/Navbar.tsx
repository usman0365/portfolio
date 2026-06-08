import Link from 'next/link';
import { Menu } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="w-full bg-cream shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-serif text-2xl font-bold text-accent">
              Wellness Coach
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-accent hover:text-primary transition-colors font-medium">Home</Link>
            <Link href="/about" className="text-accent hover:text-primary transition-colors font-medium">About</Link>
            <Link href="/services" className="text-accent hover:text-primary transition-colors font-medium">Services</Link>
            <Link href="/contact" className="text-accent hover:text-primary transition-colors font-medium">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-medium hover:bg-secondary transition-colors">
              Book Appointment
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-accent hover:text-primary">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
