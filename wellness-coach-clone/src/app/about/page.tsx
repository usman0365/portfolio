import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-accent mb-6">About Me</h1>
          <p className="text-xl text-accent/80">Passionate about guiding you to your healthiest, happiest self.</p>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] bg-cream rounded-2xl border-4 border-primary/20 relative overflow-hidden">
              <Image src="/about.png" alt="Lumora - Wellness Coach" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-4xl font-bold text-accent mb-6">Hi, I'm Lumora.</h2>
            <div className="space-y-4 text-lg text-accent/80">
              <p>For over a decade, I've dedicated my life to understanding the human body and how nutrition, movement, and mindset intersect to create true wellness.</p>
              <p>My journey started when I struggled with my own health issues in my early twenties. Conventional diets failed me, leaving me exhausted and frustrated. It was only when I began studying holistic nutrition and biomechanics that everything changed.</p>
              <p>Today, my mission is to help busy professionals and parents reclaim their energy and confidence. I don't believe in quick fixes or restrictive diets. I believe in sustainable, science-backed lifestyle changes.</p>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors inline-block">
                Work With Me
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
