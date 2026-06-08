import Link from "next/link";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Clock, Smile } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 bg-cream overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-extrabold text-accent mb-6 leading-tight">
              Smile Bright with <span className="text-primary">Dentalist</span>
            </h1>
            <p className="text-lg text-gray mb-8 max-w-lg mx-auto md:mx-0">
              Welcome to Dental Care – Where Your Smile Takes Center Stage! Experience personalized and professional dental care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-secondary transition-colors shadow-lg">
                Book An Appointment
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl relative border-8 border-white">
               <Image src="/dental_hero.png" alt="Dental Care Clinic" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4 hidden md:flex">
               <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center">
                 <ShieldCheck size={28} />
               </div>
               <div>
                 <p className="font-bold text-accent text-xl">Top Rated</p>
                 <p className="text-gray text-sm">Dental Clinic</p>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             <div className="flex flex-col items-center text-center p-8 bg-cream rounded-2xl">
               <Clock className="text-secondary mb-4" size={40} />
               <h3 className="font-serif text-xl font-bold text-accent mb-2">Flexible Hours</h3>
               <p className="text-gray">We offer evening and weekend appointments to fit your busy schedule.</p>
             </div>
             <div className="flex flex-col items-center text-center p-8 bg-cream rounded-2xl">
               <Smile className="text-secondary mb-4" size={40} />
               <h3 className="font-serif text-xl font-bold text-accent mb-2">Painless Dentistry</h3>
               <p className="text-gray">Our advanced techniques ensure a comfortable and pain-free experience.</p>
             </div>
             <div className="flex flex-col items-center text-center p-8 bg-cream rounded-2xl">
               <CheckCircle2 className="text-secondary mb-4" size={40} />
               <h3 className="font-serif text-xl font-bold text-accent mb-2">Expert Team</h3>
               <p className="text-gray">Highly qualified professionals dedicated to your perfect smile.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-accent text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-extrabold mb-12">Our Top Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Cards */}
            {['General Checkup', 'Teeth Whitening', 'Root Canal', 'Dental Implants'].map((service, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-primary transition-colors cursor-pointer group">
                <h3 className="font-serif text-xl font-bold mb-4">{service}</h3>
                <p className="text-white/70 group-hover:text-white/90">Comprehensive care using the latest technology for your oral health.</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/services" className="inline-block border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-bold uppercase tracking-wider transition-colors">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to get your perfect smile?</h2>
          <p className="text-xl text-white/90 mb-10">Schedule your appointment today and take the first step towards better oral health.</p>
          <Link href="/contact" className="bg-accent text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-accent/80 transition-colors shadow-lg">
            Schedule Appointment
          </Link>
        </div>
      </section>
    </div>
  );
}
