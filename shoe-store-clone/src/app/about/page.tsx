import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col w-full">
      <section className="py-24 bg-primary border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white mb-6 uppercase">The <span className="text-accent">Brand</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">Born on the streets. Engineered in the lab.</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2">
            <h2 className="font-display text-5xl md:text-7xl mb-6 tracking-tight">Our Story</h2>
            <div className="space-y-6 text-gray-400 font-sans text-lg">
              <p>X3 Kicks was founded by athletes who were tired of compromising between performance and style. We wanted a shoe that could shatter personal records on the track and turn heads in the city.</p>
              <p>Through relentless innovation, we developed the AeroMesh upper and the carbon-infused sole. The result? The AirPro X3.</p>
              <p>We're not just selling sneakers; we're pushing the boundaries of what footwear can be.</p>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-8">
              <div>
                <h4 className="font-display text-5xl text-vibrant mb-2">2M+</h4>
                <p className="font-bold text-gray-400 uppercase tracking-widest text-sm">Pairs Sold</p>
              </div>
              <div>
                <h4 className="font-display text-5xl text-accent mb-2">50+</h4>
                <p className="font-bold text-gray-400 uppercase tracking-widest text-sm">Pro Athletes</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="aspect-[4/5] bg-secondary rounded-3xl relative overflow-hidden border border-secondary p-12 flex items-center justify-center group">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-vibrant/20 to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
               <Image src="/shoe_hero.png" alt="X3 Kicks Innovation" fill className="object-contain p-8 drop-shadow-2xl" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
