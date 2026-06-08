import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-accent mb-6">Coaching Programs</h1>
          <p className="text-xl text-accent/80">Tailored plans to help you achieve sustainable results.</p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Service 1 */}
            <div className="border border-accent/10 rounded-2xl p-10 bg-cream shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-primary"></div>
              <h2 className="font-serif text-3xl font-bold mb-2">1-on-1 Coaching</h2>
              <p className="text-xl text-primary font-semibold mb-6">$299 / month</p>
              <p className="text-accent/80 mb-8 border-b border-accent/10 pb-8">The most comprehensive, personalized program designed specifically for your unique biology and goals.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">Initial 60-minute deep dive assessment</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">Customized weekly meal plans</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">Tailored workout programming</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">Bi-weekly video check-ins</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">Daily text/email support</span></li>
              </ul>
              <Link href="/contact" className="w-full bg-accent text-white px-6 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors block text-center">
                Apply Now
              </Link>
            </div>

            {/* Service 2 */}
            <div className="border border-accent/10 rounded-2xl p-10 shadow-sm relative overflow-hidden">
               <h2 className="font-serif text-3xl font-bold mb-2">Kickstarter Plan</h2>
              <p className="text-xl text-primary font-semibold mb-6">$149 / one-time</p>
              <p className="text-accent/80 mb-8 border-b border-accent/10 pb-8">A solid foundation for those who are self-motivated but need a scientifically backed roadmap to get started.</p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">One 45-minute consultation</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">4-week foundational meal template</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">PDF guide on habit formation</span></li>
                <li className="flex items-start"><CheckCircle2 className="text-primary mr-3 shrink-0" /><span className="text-accent/80">Grocery shopping list</span></li>
              </ul>
              <Link href="/contact" className="w-full bg-primary text-white px-6 py-4 rounded-full font-medium hover:bg-secondary transition-colors block text-center">
                Get Started
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
