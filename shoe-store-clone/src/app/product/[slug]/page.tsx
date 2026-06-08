import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { products } from '@/data/products';
import { ArrowLeft, Star, Truck, ShieldCheck } from 'lucide-react';
import AddToCartButton from '@/components/AddToCartButton';

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Filter out the current product for related
  const relatedProducts = products.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Top Breadcrumb / Nav */}
      <div className="border-b border-secondary bg-primary pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors font-bold uppercase tracking-wider text-sm">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
        </div>
      </div>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-16">
          
          {/* Image Gallery */}
          <div className="w-full md:w-1/2">
            <div className="bg-secondary aspect-square rounded-3xl relative overflow-hidden flex items-center justify-center p-12 border border-secondary">
               <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/10 to-transparent opacity-50"></div>
               <Image src={product.image} alt={product.name} fill className="object-contain p-8 drop-shadow-2xl z-10" sizes="(max-width: 768px) 100vw, 50vw" priority />
            </div>
          </div>

          {/* Product Info */}
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <p className="text-accent text-sm font-bold uppercase tracking-widest mb-2">{product.category}</p>
            <h1 className="font-display text-5xl md:text-7xl tracking-tighter text-white mb-4 uppercase">{product.name}</h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="font-display text-4xl text-vibrant tracking-widest">{product.price}</span>
              <div className="flex text-accent">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
              </div>
              <span className="text-gray-400 text-sm font-bold uppercase">(128 Reviews)</span>
            </div>
            
            <p className="text-lg text-gray-400 mb-8 font-sans leading-relaxed">{product.description}</p>
            
            <div className="mb-8">
              <h4 className="font-bold text-white uppercase tracking-wider text-sm mb-3">Key Features</h4>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <span className="w-2 h-2 rounded-full bg-accent"></span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <AddToCartButton product={product} />

            <div className="flex gap-6 border-t border-secondary pt-8">
               <div className="flex items-center gap-3 text-gray-400">
                 <Truck size={20} className="text-accent" />
                 <span className="text-xs font-bold uppercase tracking-wider">Free Shipping</span>
               </div>
               <div className="flex items-center gap-3 text-gray-400">
                 <ShieldCheck size={20} className="text-accent" />
                 <span className="text-xs font-bold uppercase tracking-wider">2 Year Warranty</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-20 bg-secondary/20 border-t border-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-5xl text-white tracking-widest mb-12 text-center uppercase">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {relatedProducts.map(prod => (
              <Link href={`/product/${prod.slug}`} key={prod.slug} className="group cursor-pointer">
                <div className="bg-secondary aspect-square rounded-2xl mb-4 relative overflow-hidden flex items-center justify-center p-8 border border-secondary hover:border-accent transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent"></div>
                  <Image src={prod.image} alt={prod.name} fill className="object-contain p-6 drop-shadow-xl group-hover:scale-110 transition-transform duration-500" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-2xl tracking-widest text-white mb-1 group-hover:text-vibrant transition-colors">{prod.name}</h3>
                  <span className="font-bold text-gray-400">{prod.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
