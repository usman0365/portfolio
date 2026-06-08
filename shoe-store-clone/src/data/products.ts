export interface Product {
  slug: string;
  name: string;
  price: string;
  category: string;
  color: string;
  image: string;
  description: string;
  features: string[];
}

export const products: Product[] = [
  { 
    slug: "airpro-x3-core",
    name: "AirPro X3 Core", 
    price: "$120", 
    category: "Running", 
    color: "Obsidian/Neon", 
    image: "/shoe_running.png",
    description: "The core of our running collection. Built for speed, the AirPro X3 Core features an ultra-lightweight AeroMesh upper and a responsive carbon-infused sole that propels you forward. Perfect for marathon training or everyday city runs.",
    features: ["AeroMesh breathable upper", "Carbon-infused energy return sole", "Reflective neon details for night safety"]
  },
  { 
    slug: "velocity-strike",
    name: "Velocity Strike", 
    price: "$145", 
    category: "Basketball", 
    color: "Electric Orange", 
    image: "/shoe_basketball.png",
    description: "Dominate the court with the Velocity Strike. High-top ankle support meets aggressive traction patterns to keep you locked in during explosive crossovers. The electric orange accents ensure you stand out on every play.",
    features: ["High-top ankle support lock", "Aggressive multi-directional traction", "Shock-absorbing heel pad"]
  },
  { 
    slug: "aeromesh-glide",
    name: "AeroMesh Glide", 
    price: "$95", 
    category: "Lifestyle", 
    color: "Slate Gray", 
    image: "/shoe_lifestyle.png",
    description: "Clean, minimalistic, and undeniably fresh. The AeroMesh Glide is your go-to everyday streetwear sneaker. Monochromatic white and slate gray styling means it pairs effortlessly with any fit.",
    features: ["Premium synthetic leather accents", "Cloud-like memory foam insole", "Durable cupsole construction"]
  },
  { 
    slug: "airpro-x3-stealth",
    name: "AirPro X3 Stealth", 
    price: "$130", 
    category: "Running", 
    color: "All Black", 
    image: "/shoe_hero.png",
    description: "For the nighttime runners and the streetwear purists. The AirPro X3 Stealth takes our flagship running technology and murders it out in pure obsidian black. Silent, fast, and deadly.",
    features: ["All-black stealth aesthetic", "Water-resistant coating", "Dynamic fit collar"]
  },
  { 
    slug: "quantum-leap",
    name: "Quantum Leap", 
    price: "$160", 
    category: "Basketball", 
    color: "Cyan Glow", 
    image: "/shoe_basketball.png",
    description: "Engineered for pure verticality. The Quantum Leap uses proprietary bounce tech to give you that extra inch on your jump shot. The cyan glow accents react to UV light on the court.",
    features: ["Bounce tech midsole", "UV-reactive cyan accents", "Lightweight synthetic lockdown strap"]
  },
  { 
    slug: "street-vibe",
    name: "Street Vibe", 
    price: "$110", 
    category: "Lifestyle", 
    color: "White/Orange", 
    image: "/shoe_lifestyle.png",
    description: "Retro aesthetics meet modern comfort. The Street Vibe brings back 90s skater silhouettes and updates them with ultra-light materials and subtle neon orange pops.",
    features: ["Retro thick tongue", "Reinforced ollie pad", "High-grip vulcanized rubber outsole"]
  },
];
