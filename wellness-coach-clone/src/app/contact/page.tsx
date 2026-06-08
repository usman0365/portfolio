import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-20 bg-subtle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl font-bold text-accent mb-6">Let's Connect</h1>
          <p className="text-xl text-accent/80">Ready to take the first step? Send me a message below.</p>
        </div>
      </section>
      
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
          
          <div className="w-full md:w-1/3">
            <h2 className="font-serif text-3xl font-bold mb-8">Contact Information</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="text-primary mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-accent/70">hello@wellnesscoach.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-primary mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-accent/70">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-primary mt-1 mr-4 shrink-0" size={24} />
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-accent/70">Virtual Consultations Worldwide<br/>Based in Los Angeles, CA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3 bg-cream p-10 rounded-2xl shadow-sm">
            <h2 className="font-serif text-3xl font-bold mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">First Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:outline-none focus:border-primary bg-white" placeholder="Jane" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Last Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:outline-none focus:border-primary bg-white" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:outline-none focus:border-primary bg-white" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Your Goals / Message</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-lg border border-accent/20 focus:outline-none focus:border-primary bg-white" placeholder="Tell me about what you want to achieve..."></textarea>
              </div>
              <button type="button" className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary transition-colors w-full md:w-auto">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
}
