import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary border-t border-secondary py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-6">
              <span className="font-display tracking-widest text-4xl text-white">X3<span className="text-vibrant">KICKS</span></span>
            </Link>
            <p className="text-gray-400 mb-6 font-sans text-sm">
              Unbelievable Speed. Comfort. The ultimate sports shoe collection for the modern athlete.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-vibrant transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-vibrant transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-vibrant transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white hover:bg-vibrant transition-colors"><FaYoutube size={18} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display tracking-widest text-2xl text-white mb-6">Shop</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li><Link href="/shop" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">Men's Sneakers</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">Women's Sneakers</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">New Releases</Link></li>
              <li><Link href="/shop" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">Accessories</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-display tracking-widest text-2xl text-white mb-6">Support</h3>
            <ul className="space-y-3 font-sans text-sm">
              <li><Link href="/contact" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">Contact Us</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">FAQ</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">Shipping & Returns</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-accent transition-colors uppercase tracking-wider">Size Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display tracking-widest text-2xl text-white mb-6">Newsletter</h3>
            <p className="text-gray-400 mb-4 font-sans text-sm">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <form className="flex flex-col gap-3">
              <input type="email" placeholder="ENTER YOUR EMAIL" className="bg-secondary text-white px-4 py-3 border border-secondary focus:outline-none focus:border-vibrant w-full uppercase text-sm tracking-wider font-bold placeholder:text-gray-500" />
              <button type="button" className="bg-vibrant text-white px-4 py-3 font-display text-xl tracking-widest hover:bg-accent transition-colors uppercase w-full">Subscribe</button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-16 pt-8 text-center text-sm text-gray-500 font-sans flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} X3 KICKS. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
             <Link href="#" className="hover:text-accent transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
