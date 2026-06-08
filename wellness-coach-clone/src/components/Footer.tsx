import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-accent text-cream py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl font-bold mb-4">Wellness Coach</h2>
            <p className="text-cream/80 max-w-sm">
              Empowering your mind, body, and soul. Start living your healthiest life with personalized coaching and nutrition plans.
            </p>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-cream/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-cream/80 hover:text-white transition-colors">About</Link></li>
              <li><Link href="/services" className="text-cream/80 hover:text-white transition-colors">Services</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-cream/80 hover:text-white transition-colors"><FaFacebook size={20} /></a>
              <a href="#" className="text-cream/80 hover:text-white transition-colors"><FaTwitter size={20} /></a>
              <a href="#" className="text-cream/80 hover:text-white transition-colors"><FaInstagram size={20} /></a>
              <a href="#" className="text-cream/80 hover:text-white transition-colors"><FaLinkedin size={20} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-cream/20 mt-12 pt-8 text-center text-sm text-cream/60">
          <p>&copy; {new Date().getFullYear()} Wellness Coach. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
