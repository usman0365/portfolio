import Link from 'next/link';
import { Menu } from 'lucide-react';
import { FaTooth } from 'react-icons/fa';

export default function Navbar() {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <FaTooth className="text-primary text-3xl" />
              <span className="font-serif font-bold text-2xl text-accent">Dental Care</span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray font-semibold hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="text-gray font-semibold hover:text-primary transition-colors">About Us</Link>
            <Link href="/services" className="text-gray font-semibold hover:text-primary transition-colors">Services</Link>
            <Link href="/contact" className="text-gray font-semibold hover:text-primary transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center">
            <Link href="/contact" className="bg-primary text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-secondary transition-colors shadow-md">
              Book Appointment
            </Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-accent hover:text-primary">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
