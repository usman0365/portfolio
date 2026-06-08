import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-cream">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-accent mb-6">Contact Us</h1>
          <p className="text-xl text-gray">We're here to answer your questions and schedule your visit.</p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3">
            <h2 className="font-serif text-3xl font-extrabold text-accent mb-8">Get In Touch</h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-accent">Call Us</h3>
                  <p className="text-gray mt-1">1-800-DENTAL-CARE</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-accent">Email Us</h3>
                  <p className="text-gray mt-1">hello@dentalist.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-accent">Visit Us</h3>
                  <p className="text-gray mt-1">123 Wellness Avenue<br/>Beverly Hills, CA 90210</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-cream p-10 md:p-12 rounded-3xl shadow-sm border border-gray/10">
            <h2 className="font-serif text-3xl font-extrabold text-accent mb-8">Book an Appointment</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-accent mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray/20 focus:outline-none focus:border-primary bg-white" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-accent mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-gray/20 focus:outline-none focus:border-primary bg-white" placeholder="Doe" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-accent mb-2">Email Address</label>
                  <input type="email" className="w-full px-5 py-4 rounded-xl border border-gray/20 focus:outline-none focus:border-primary bg-white" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-accent mb-2">Phone Number</label>
                  <input type="tel" className="w-full px-5 py-4 rounded-xl border border-gray/20 focus:outline-none focus:border-primary bg-white" placeholder="(555) 123-4567" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-accent mb-2">How can we help you?</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-gray/20 focus:outline-none focus:border-primary bg-white" placeholder="I'd like to schedule a routine checkup..."></textarea>
              </div>
              <button type="button" className="bg-primary text-white px-10 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-secondary transition-colors w-full shadow-md">
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
