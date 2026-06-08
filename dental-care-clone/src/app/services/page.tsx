import Link from "next/link";

export default function Services() {
  const servicesList = [
    { name: "General Checkups", desc: "Routine exams, x-rays, and professional cleanings to maintain oral health." },
    { name: "Teeth Whitening", desc: "Professional laser whitening treatments for a brighter, more confident smile." },
    { name: "Dental Implants", desc: "Permanent, natural-looking tooth replacements to restore full function." },
    { name: "Orthodontics", desc: "Clear aligners and traditional braces for patients of all ages." },
    { name: "Root Canal Therapy", desc: "Painless procedures to save infected teeth and eliminate pain." },
    { name: "Cosmetic Dentistry", desc: "Veneers, bonding, and total smile makeovers." }
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-accent mb-6">Dental Services</h1>
          <p className="text-xl text-gray">Comprehensive care tailored to your unique needs.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicesList.map((srv, i) => (
              <div key={i} className="border border-gray/10 rounded-2xl p-10 bg-white shadow-sm hover:shadow-xl transition-shadow relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
                <h3 className="font-serif text-2xl font-bold text-accent mb-4">{srv.name}</h3>
                <p className="text-gray mb-6 leading-relaxed">{srv.desc}</p>
                <Link href="/contact" className="text-primary font-bold uppercase text-sm tracking-widest flex items-center hover:text-secondary">
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
