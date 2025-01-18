import { Navigation } from "@/components/Navigation";
import { SkinCard } from "@/components/SkinCard";

const FEATURED_SKINS = [
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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto pt-24 px-4">
        <section className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            CS2 Skin Marketplace
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Buy, sell, and trade CS2 skins with confidence. Join thousands of players in the most trusted skin marketplace.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Skins</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURED_SKINS.map((skin, index) => (
              <SkinCard key={index} {...skin} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-card p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
            <p className="text-gray-400">Our team is always here to help with any questions or issues.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Secure Trading</h3>
            <p className="text-gray-400">Every transaction is protected and monitored for your safety.</p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-gray-700">
            <h3 className="text-xl font-bold text-white mb-2">Best Prices</h3>
            <p className="text-gray-400">Competitive prices and regular market updates.</p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;