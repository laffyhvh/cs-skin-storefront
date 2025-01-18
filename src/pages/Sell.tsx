import { Navigation } from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const Sell = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto pt-24 px-4">
        <h1 className="text-3xl font-bold text-white mb-8">Sell Your Skins</h1>
        
        <div className="max-w-2xl mx-auto bg-card p-6 rounded-lg border border-gray-700">
          <p className="text-gray-400 mb-6">
            To sell your skins, please login with Steam first. Once logged in, you'll be able to select items from your inventory to list on the marketplace.
          </p>
          
          <Button className="w-full bg-primary hover:bg-primary/80 text-white">
            Login with Steam to Start Selling
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Sell;