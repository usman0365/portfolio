"use client";

import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";

export default function QuickAddButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigating to product page
    addToCart(product, 9); // default size 9 for quick add
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div 
      onClick={handleQuickAdd}
      className={`absolute bottom-4 right-4 font-bold px-3 py-1 text-sm rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10 cursor-pointer ${added ? 'bg-accent text-white' : 'bg-white text-primary hover:bg-vibrant hover:text-white'}`}
    >
      {added ? "Added" : "Quick Add"}
    </div>
  );
}
