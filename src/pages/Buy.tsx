import { Navigation } from "@/components/Navigation";
import { SkinCard } from "@/components/SkinCard";

const MARKETPLACE_SKINS = [
  {
    name: "AK-47 | Asiimov",
    price: 45.50,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    wear: "Factory New",
  },
  {
    name: "M4A4 | Neo-Noir",
    price: 32.75,
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    wear: "Minimal Wear",
  },
  {
    name: "AWP | Dragon Lore",
    price: 1420.00,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    wear: "Field-Tested",
  },
  {
    name: "Desert Eagle | Blaze",
    price: 245.30,
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    wear: "Factory New",
  },
  // Add more skins here
];

const Buy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Buy Skins</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MARKETPLACE_SKINS.map((skin, index) => (
            <SkinCard key={index} {...skin} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Buy;