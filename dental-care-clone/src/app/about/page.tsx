import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-accent mb-6">About Our Clinic</h1>
          <p className="text-xl text-gray">Dedicated to providing exceptional dental care in a relaxed environment.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2">
            <div className="aspect-square rounded-[2rem] overflow-hidden relative shadow-xl border-8 border-cream">
              <Image src="/dental_about.png" alt="Dr. Smith" fill className="object-cover" priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <p className="text-primary font-bold tracking-wider uppercase mb-2">Meet The Doctor</p>
            <h2 className="font-serif text-4xl font-extrabold text-accent mb-6">Dr. Sarah Smith</h2>
            <div className="space-y-4 text-lg text-gray mb-8">
              <p>With over 15 years of experience in comprehensive dentistry, Dr. Smith is passionate about helping patients achieve their best smiles. She believes in a gentle, patient-first approach to dental care.</p>
              <p>Our clinic is equipped with the latest technology to ensure accurate diagnoses and comfortable treatments. From routine cleanings to complex restorative work, we've got you covered.</p>
            </div>
            <ul className="space-y-3 mb-10">
               <li className="flex items-center text-gray font-semibold"><CheckCircle2 className="text-primary mr-3" /> Graduated from Top Dental School</li>
               <li className="flex items-center text-gray font-semibold"><CheckCircle2 className="text-primary mr-3" /> 15+ Years of Clinical Experience</li>
               <li className="flex items-center text-gray font-semibold"><CheckCircle2 className="text-primary mr-3" /> Member of National Dental Association</li>
            </ul>
            <Link href="/contact" className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-secondary transition-colors shadow-lg inline-block">
              Book a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
