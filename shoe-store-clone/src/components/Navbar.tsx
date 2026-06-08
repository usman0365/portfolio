"use client";

import Link from 'next/link';
import { ShoppingCart, Menu, Search } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const { cartCount } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="w-full bg-primary/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-display tracking-widest text-4xl text-white">X3<span className="text-vibrant">KICKS</span></span>
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-gray-300 font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">Home</Link>
            <Link href="/shop" className="text-gray-300 font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">Shop</Link>
            <Link href="/about" className="text-gray-300 font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">About</Link>
            <Link href="/contact" className="text-gray-300 font-bold uppercase tracking-widest text-sm hover:text-accent transition-colors">Contact</Link>
          </nav>
          <div className="hidden md:flex items-center gap-6">
            <button className="text-gray-300 hover:text-vibrant transition-colors">
               <Search size={24} />
            </button>
            <Link href="/checkout" className="text-gray-300 hover:text-accent transition-colors relative block">
               <ShoppingCart size={24} />
               {mounted && cartCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-vibrant text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center animate-pulse">{cartCount}</span>
               )}
            </Link>
          </div>
          <div className="md:hidden flex items-center gap-6">
             <Link href="/checkout" className="text-gray-300 hover:text-accent transition-colors relative block">
               <ShoppingCart size={24} />
               {mounted && cartCount > 0 && (
                 <span className="absolute -top-2 -right-2 bg-vibrant text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">{cartCount}</span>
               )}
            </Link>
            <button className="text-white hover:text-accent transition-colors">
              <Menu size={32} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
