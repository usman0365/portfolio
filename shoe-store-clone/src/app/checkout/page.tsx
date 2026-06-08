"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Trash2, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, removeFromCart, cartTotal, clearCart } = useCart();
  const [isPlaced, setIsPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsPlaced(true);
    clearCart();
  };

  if (isPlaced) {
    return (
      <div className="flex flex-col w-full items-center justify-center py-32 px-4 text-center">
        <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mb-6">
          <ShieldCheck size={48} className="text-accent" />
        </div>
        <h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white mb-6 uppercase">Order <span className="text-vibrant">Confirmed</span></h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto font-sans mb-10">Your X3 kicks are being prepped for dispatch. Prepare for unbelievable speed and comfort.</p>
        <Link href="/shop" className="bg-white text-primary px-10 py-5 rounded-xl font-display text-2xl uppercase tracking-widest hover:bg-vibrant hover:text-white transition-all inline-block">
          Return to Shop
        </Link>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="flex flex-col w-full items-center justify-center py-32 px-4 text-center">
        <h1 className="font-display text-6xl md:text-8xl tracking-tighter text-white mb-6 uppercase">Cart is <span className="text-gray-500">Empty</span></h1>
        <p className="text-xl text-gray-400 max-w-xl mx-auto font-sans mb-10">You haven't added any kicks to your cart yet.</p>
        <Link href="/shop" className="bg-vibrant text-white px-10 py-5 rounded-xl font-display text-2xl uppercase tracking-widest hover:bg-accent transition-all inline-block">
          Explore Collection
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full relative pb-24">
      {/* Top Breadcrumb */}
      <div className="border-b border-secondary bg-primary pt-8 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/shop" className="inline-flex items-center gap-2 text-gray-400 hover:text-accent transition-colors font-bold uppercase tracking-wider text-sm">
            <ArrowLeft size={16} /> Back to Shop
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <h1 className="font-display text-5xl tracking-widest text-white mb-12 uppercase">Checkout</h1>
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Order Summary */}
          <div className="w-full lg:w-1/2">
            <h2 className="font-bold text-white uppercase tracking-wider mb-6 pb-2 border-b border-secondary">Order Summary</h2>
            <div className="space-y-6 mb-8">
              {cartItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 p-4 rounded-2xl border border-secondary bg-secondary/20">
                  <div className="w-24 h-24 bg-secondary rounded-xl relative p-2 shrink-0">
                    <Image src={item.product.image} alt={item.product.name} fill className="object-contain p-2" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-display text-2xl tracking-widest text-white">{item.product.name}</h3>
                        <p className="text-gray-400 text-sm">Size: {item.size} <span className="mx-2">|</span> Qty: {item.quantity}</p>
                      </div>
                      <p className="font-bold text-vibrant">{item.product.price}</p>
                    </div>
                  </div>
                  <button onClick={() => removeFromCart(item.product.slug, item.size)} className="p-2 text-gray-500 hover:text-accent transition-colors shrink-0">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t border-secondary pt-6">
               <div className="flex justify-between text-gray-400">
                 <span>Subtotal</span>
                 <span className="text-white">${cartTotal.toFixed(2)}</span>
               </div>
               <div className="flex justify-between text-gray-400">
                 <span>Shipping</span>
                 <span className="text-accent font-bold uppercase text-sm tracking-widest">Free</span>
               </div>
               <div className="flex justify-between text-white font-display text-3xl tracking-widest pt-4 border-t border-secondary mt-4">
                 <span>Total</span>
                 <span className="text-vibrant">${cartTotal.toFixed(2)}</span>
               </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="w-full lg:w-1/2">
            <div className="bg-secondary/20 p-8 rounded-3xl border border-secondary">
              <form onSubmit={handlePlaceOrder} className="space-y-8">
                
                {/* Shipping Details */}
                <div>
                  <h2 className="font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center text-xs">1</span>
                    Shipping Details
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                      <input required type="text" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Address</label>
                      <input required type="text" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">City</label>
                      <input required type="text" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Zip Code</label>
                      <input required type="text" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white" />
                    </div>
                  </div>
                </div>

                {/* Payment Details */}
                <div>
                  <h2 className="font-bold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-accent text-primary flex items-center justify-center text-xs">2</span>
                    Payment Method
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Card Number</label>
                      <input required type="text" placeholder="XXXX XXXX XXXX XXXX" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white font-mono" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Expiry</label>
                        <input required type="text" placeholder="MM/YY" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">CVC</label>
                        <input required type="text" placeholder="123" className="w-full bg-[#0f172a] px-4 py-3 rounded-lg border border-secondary focus:outline-none focus:border-accent text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="submit" className="w-full bg-vibrant text-white px-10 py-5 rounded-xl font-display text-3xl uppercase tracking-widest hover:bg-accent transition-all mt-8 shadow-lg shadow-vibrant/20">
                  Place Order
                </button>
                <p className="text-center text-xs text-gray-500 flex items-center justify-center gap-1 mt-4">
                  <ShieldCheck size={14} /> Secure Encrypted Checkout
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
