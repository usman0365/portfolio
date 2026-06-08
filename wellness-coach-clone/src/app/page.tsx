import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Leaf, Heart, Activity } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full py-20 lg:py-32 bg-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 md:pr-12 text-center md:text-left">
            <p className="text-primary font-semibold tracking-wider uppercase mb-4">Calorie control, balanced nutrition</p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-6 leading-tight">
              Start living your healthiest life
            </h1>
            <p className="text-lg text-accent/80 mb-8 max-w-lg mx-auto md:mx-0">
              Achieve your health goals with personalized coaching, science-backed nutrition plans, and continuous support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-secondary transition-colors inline-flex items-center justify-center">
                Book An Appointment
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-12 md:mt-0 relative">
            {/* Hero image */}
            <div className="aspect-square bg-white rounded-full p-4 shadow-xl relative max-w-md mx-auto">
              <div className="w-full h-full rounded-full bg-cream overflow-hidden border-4 border-primary/20 relative">
                 <Image src="/hero.png" alt="Wellness Coach" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="absolute top-10 right-10 bg-white p-3 rounded-full shadow-lg text-primary">
                <Leaf size={32} />
              </div>
              <div className="absolute bottom-10 left-10 bg-white p-3 rounded-full shadow-lg text-primary">
                <Heart size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-accent mb-6">
            Wellness coaching with Lumora
          </h2>
          <p className="text-xl text-accent/70 leading-relaxed">
            I believe that true health goes beyond just eating right. It is about understanding your body, mastering your mindset, and developing sustainable habits that last a lifetime. Together, we will build a roadmap tailored to your unique biology and lifestyle.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-bold text-accent mb-4">How I Can Help You</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-subtle text-primary rounded-xl flex items-center justify-center mb-6">
                <Leaf size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Nutrition Planning</h3>
              <p className="text-accent/70 mb-6">Customized meal plans that fit your lifestyle, dietary preferences, and metabolic goals without restrictive diets.</p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary inline-flex items-center">
                Learn More <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-subtle text-primary rounded-xl flex items-center justify-center mb-6">
                <Activity size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Fitness Coaching</h3>
              <p className="text-accent/70 mb-6">Tailored workout routines designed to build strength, improve endurance, and boost your overall energy levels safely.</p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary inline-flex items-center">
                Learn More <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>

            {/* Service 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-subtle text-primary rounded-xl flex items-center justify-center mb-6">
                <Heart size={28} />
              </div>
              <h3 className="font-serif text-2xl font-bold mb-4">Mindset & Recovery</h3>
              <p className="text-accent/70 mb-6">Strategies to manage stress, improve sleep quality, and develop a healthy relationship with food and your body.</p>
              <Link href="/services" className="text-primary font-semibold hover:text-secondary inline-flex items-center">
                Learn More <ArrowRight className="ml-1" size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Ready to transform your life?</h2>
          <p className="text-xl text-white/90 mb-10">Schedule your free 15-minute consultation to see how we can work together.</p>
          <Link href="/contact" className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg hover:bg-cream transition-colors shadow-lg">
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
