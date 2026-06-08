import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="flex flex-col w-full relative">
      <section className="py-24 bg-primary border-b border-secondary relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full bg-vibrant/10 blur-[100px] rounded-full pointer-events-none -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white mb-6 uppercase">Drop Us A <span className="text-vibrant">Line</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">Have a question about sizing, drops, or returns? Hit us up.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row gap-16">
          
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h2 className="font-display text-4xl tracking-widest mb-8">Reach Out</h2>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent shrink-0 mr-4 border border-secondary/50">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider mb-1">Call HQ</h3>
                    <p className="text-gray-400">1-800-X3-KICKS</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent shrink-0 mr-4 border border-secondary/50">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider mb-1">Email Support</h3>
                    <p className="text-gray-400">support@x3kicks.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-accent shrink-0 mr-4 border border-secondary/50">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-white uppercase tracking-wider mb-1">Flagship Store</h3>
                    <p className="text-gray-400">101 Sneaker Ave<br/>New York, NY 10012</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3">
            <div className="bg-secondary/50 backdrop-blur-sm p-10 md:p-12 rounded-3xl border border-secondary">
              <h2 className="font-display text-4xl tracking-widest mb-8">Send a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Name</label>
                    <input type="text" className="w-full bg-[#0f172a] px-5 py-4 rounded-xl border border-secondary focus:outline-none focus:border-accent text-white" placeholder="YOUR NAME" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Email</label>
                    <input type="email" className="w-full bg-[#0f172a] px-5 py-4 rounded-xl border border-secondary focus:outline-none focus:border-accent text-white" placeholder="YOUR EMAIL" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Subject</label>
                  <select className="w-full bg-[#0f172a] px-5 py-4 rounded-xl border border-secondary focus:outline-none focus:border-accent text-white appearance-none">
                    <option>Order Inquiry</option>
                    <option>Returns & Exchanges</option>
                    <option>Product Question</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows={5} className="w-full bg-[#0f172a] px-5 py-4 rounded-xl border border-secondary focus:outline-none focus:border-accent text-white" placeholder="HOW CAN WE HELP?"></textarea>
                </div>
                <button type="button" className="bg-white text-primary px-10 py-5 rounded-xl font-display text-2xl uppercase tracking-widest hover:bg-vibrant hover:text-white transition-colors w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
