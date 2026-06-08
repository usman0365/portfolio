import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Zap, Shield, Flame } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full relative">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-accent/20 blur-[150px] rounded-full pointer-events-none -z-10"></div>

      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-secondary/80 mb-6">
              <Flame size={16} className="text-vibrant" />
              <span className="text-sm font-bold uppercase tracking-wider text-gray-300">New Drop Available</span>
            </div>
            <h1 className="font-display text-7xl md:text-8xl lg:text-[10rem] leading-none tracking-tight text-white mb-6 uppercase">
              AirPro <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-vibrant">X3</span>
            </h1>
            <p className="text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 font-sans">
              Unbelievable Speed. Ultimate Comfort. Engineered for the modern athlete who demands both performance and streetwear aesthetics.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="/shop" className="bg-vibrant text-white px-10 py-5 font-display text-2xl tracking-widest uppercase hover:bg-accent hover:scale-105 transition-all shadow-[0_0_20px_rgba(249,115,22,0.4)] flex items-center justify-center gap-3">
                Shop Collection <ArrowRight size={24} />
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative">
            <div className="relative aspect-square w-full max-w-[600px] mx-auto z-20 hover:scale-105 transition-transform duration-700 ease-out">
               <Image src="/shoe_hero.png" alt="AirPro X3 Sneaker" fill className="object-contain drop-shadow-[0_20px_50px_rgba(6,182,212,0.3)]" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Decorative background elements behind shoe */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 border-2 border-dashed border-accent/30 rounded-full animate-[spin_60s_linear_infinite] -z-10"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full border border-secondary/50 rounded-full animate-[spin_40s_linear_infinite_reverse] -z-10"></div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-24 bg-primary border-t border-secondary/30 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-widest">Featured Kicks</h2>
            <Link href="/shop" className="text-vibrant hover:text-accent font-bold uppercase tracking-wider hidden sm:flex items-center gap-2">View All <ArrowRight size={18} /></Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Category 1 */}
            <div className="bg-secondary rounded-2xl overflow-hidden group cursor-pointer border border-secondary hover:border-accent/50 transition-colors">
               <div className="h-64 bg-[#111827] relative p-8 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent z-0"></div>
                 <Image src="/shoe_running.png" alt="Running Kicks" fill className="object-contain p-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 z-10" sizes="(max-width: 768px) 100vw, 33vw" />
                 <h3 className="absolute bottom-4 left-6 font-display text-4xl text-white tracking-widest z-20 group-hover:text-accent transition-colors">Running</h3>
               </div>
            </div>
            {/* Category 2 */}
            <div className="bg-secondary rounded-2xl overflow-hidden group cursor-pointer border border-secondary hover:border-vibrant/50 transition-colors">
               <div className="h-64 bg-[#111827] relative p-8 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-vibrant/10 to-transparent z-0"></div>
                 <Image src="/shoe_basketball.png" alt="Basketball Kicks" fill className="object-contain p-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 z-10" sizes="(max-width: 768px) 100vw, 33vw" />
                 <h3 className="absolute bottom-4 left-6 font-display text-4xl text-white tracking-widest z-20 group-hover:text-vibrant transition-colors">Basketball</h3>
               </div>
            </div>
            {/* Category 3 */}
            <div className="bg-secondary rounded-2xl overflow-hidden group cursor-pointer border border-secondary hover:border-white/50 transition-colors">
               <div className="h-64 bg-[#111827] relative p-8 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-0"></div>
                 <Image src="/shoe_lifestyle.png" alt="Lifestyle Kicks" fill className="object-contain p-4 drop-shadow-xl group-hover:scale-110 transition-transform duration-500 z-10" sizes="(max-width: 768px) 100vw, 33vw" />
                 <h3 className="absolute bottom-4 left-6 font-display text-4xl text-white tracking-widest z-20 group-hover:text-gray-300 transition-colors">Lifestyle</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Banner */}
      <section className="py-20 bg-vibrant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center text-primary">
            <div className="flex flex-col items-center">
              <Zap size={48} className="mb-4" />
              <h3 className="font-display text-3xl tracking-widest mb-2">Ultra Lightweight</h3>
              <p className="font-bold text-primary/80">AeroMesh technology makes you feel like you're walking on clouds.</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield size={48} className="mb-4" />
              <h3 className="font-display text-3xl tracking-widest mb-2">Durable Grip</h3>
              <p className="font-bold text-primary/80">Carbon-infused rubber outsoles for maximum traction and longevity.</p>
            </div>
            <div className="flex flex-col items-center">
              <Flame size={48} className="mb-4" />
              <h3 className="font-display text-3xl tracking-widest mb-2">Street Ready</h3>
              <p className="font-bold text-primary/80">Designed not just for the track, but to turn heads on the street.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-primary relative overflow-hidden text-center border-b border-secondary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent via-primary to-primary"></div>
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="font-display text-6xl md:text-8xl tracking-tighter mb-8">Gear Up Now</h2>
          <p className="text-xl text-gray-400 mb-12 font-sans">
            Join the revolution. Grab the latest X3 drops before they sell out forever.
          </p>
          <Link href="/shop" className="bg-white text-primary px-12 py-5 font-display text-3xl tracking-widest uppercase hover:bg-accent hover:text-white transition-all inline-block">
            Explore Shop
          </Link>
        </div>
      </section>
    </div>
  );
}
