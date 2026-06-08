import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTooth } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-accent text-cream py-16 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-1">
             <Link href="/" className="flex items-center gap-2 mb-6">
              <FaTooth className="text-primary text-3xl" />
              <span className="font-serif font-bold text-2xl text-white">Dental Care</span>
            </Link>
            <p className="text-cream/80 mb-6">
              Smile Bright with Dentalist. Experience personalized and professional dental care in a comfortable environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><FaFacebook size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><FaTwitter size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><FaInstagram size={18} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center text-white hover:bg-primary transition-colors"><FaLinkedin size={18} /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-cream/80 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-cream/80 hover:text-primary transition-colors">About Clinic</Link></li>
              <li><Link href="/services" className="text-cream/80 hover:text-primary transition-colors">Dental Services</Link></li>
              <li><Link href="/contact" className="text-cream/80 hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-cream/80">General Dentistry</li>
              <li className="text-cream/80">Teeth Whitening</li>
              <li className="text-cream/80">Dental Implants</li>
              <li className="text-cream/80">Orthodontics</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xl font-bold mb-6 text-white">Clinic Hours</h3>
            <ul className="space-y-3">
              <li className="flex justify-between text-cream/80 border-b border-white/10 pb-2"><span>Mon - Fri</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between text-cream/80 border-b border-white/10 pb-2"><span>Saturday</span> <span>9:00 AM - 2:00 PM</span></li>
              <li className="flex justify-between text-cream/80 pb-2"><span>Sunday</span> <span className="text-primary font-bold">Closed</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm text-cream/60 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Dental Care. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
             <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
             <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
