import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import QuickAddButton from '@/components/QuickAddButton';

export default function Shop() {
  return (
    <div className="flex flex-col w-full relative">
      <section className="py-24 bg-primary border-b border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white mb-6 uppercase">The <span className="text-vibrant">Collection</span></h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans">Browse our latest drops and find the perfect kick to match your speed and style.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            
            {/* Filters Sidebar */}
            <div className="w-full md:w-1/4">
              <h3 className="font-display text-2xl tracking-widest mb-6">Filters</h3>
              <div className="space-y-8">
                <div>
                  <h4 className="font-bold text-gray-300 mb-4 uppercase tracking-wider text-sm">Categories</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-vibrant" /> <span className="text-gray-400">Running</span></li>
                    <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-vibrant" /> <span className="text-gray-400">Basketball</span></li>
                    <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-vibrant" /> <span className="text-gray-400">Lifestyle</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-300 mb-4 uppercase tracking-wider text-sm">Price</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-vibrant" /> <span className="text-gray-400">Under $100</span></li>
                    <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-vibrant" /> <span className="text-gray-400">$100 - $150</span></li>
                    <li className="flex items-center gap-3"><input type="checkbox" className="w-4 h-4 accent-vibrant" /> <span className="text-gray-400">Over $150</span></li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="w-full md:w-3/4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {products.map((prod) => (
                  <Link href={`/product/${prod.slug}`} key={prod.slug} className="group cursor-pointer block relative">
                    <div className="bg-secondary aspect-square rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center p-8 border border-secondary hover:border-accent transition-colors">
                      <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                      <Image src={prod.image} alt={prod.name} fill className="object-contain p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                      <QuickAddButton product={prod} />
                    </div>
                    <div>
                      <p className="text-accent text-xs font-bold uppercase tracking-wider mb-1">{prod.category}</p>
                      <h3 className="font-display text-2xl tracking-widest text-white mb-1">{prod.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-400 text-sm">{prod.color}</span>
                        <span className="font-bold text-white">{prod.price}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
