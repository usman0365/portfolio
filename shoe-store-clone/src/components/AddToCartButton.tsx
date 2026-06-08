"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number | null>(null);
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    if (!selectedSize) {
      alert("Please select a size first!");
      return;
    }
    addToCart(product, selectedSize);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div>
      <div className="mb-8">
         <div className="flex justify-between items-end mb-3">
           <h4 className="font-bold text-white uppercase tracking-wider text-sm">Select Size</h4>
           <span className="text-vibrant text-xs font-bold hover:underline cursor-pointer">Size Guide</span>
         </div>
         <div className="grid grid-cols-5 gap-3">
           {[8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13].map(size => (
             <button 
                key={size} 
                onClick={() => setSelectedSize(size)}
                className={`py-3 border rounded-lg font-bold transition-colors ${selectedSize === size ? 'border-accent bg-accent text-white' : 'border-secondary text-gray-300 hover:border-accent hover:text-accent'}`}
             >
               {size}
             </button>
           ))}
         </div>
      </div>

      <button 
        onClick={handleAdd}
        className={`w-full py-5 rounded-xl font-display text-3xl uppercase tracking-widest transition-all mb-8 shadow-lg ${added ? 'bg-accent text-white shadow-accent/20' : 'bg-white text-primary hover:bg-vibrant hover:text-white shadow-white/5'}`}
      >
        {added ? "Added To Cart!" : "Add to Cart"}
      </button>
    </div>
  );
}
