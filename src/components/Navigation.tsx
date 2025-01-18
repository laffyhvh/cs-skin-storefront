import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export function Navigation() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <nav className="bg-card/50 backdrop-blur-sm fixed w-full z-50 top-0 left-0 border-b border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-semibold text-white">CS2 Skins</span>
        </Link>
        
        <div className="flex md:order-2 space-x-3">
          <Button 
            onClick={() => setShowLoginModal(true)}
            className="bg-primary hover:bg-primary/80 text-white"
          >
            Steam Login
          </Button>
        </div>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0">
            <li>
              <Link to="/" className="text-white hover:text-primary py-2 pl-3 pr-4">Home</Link>
            </li>
            <li>
              <Link to="/buy" className="text-white hover:text-primary py-2 pl-3 pr-4">Buy</Link>
            </li>
            <li>
              <Link to="/sell" className="text-white hover:text-primary py-2 pl-3 pr-4">Sell</Link>
            </li>
            <li>
              <Link to="/history" className="text-white hover:text-primary py-2 pl-3 pr-4">History</Link>
            </li>
          </ul>
        </div>
      </div>

      <Dialog open={showLoginModal} onOpenChange={setShowLoginModal}>
        <DialogContent className="bg-card border-gray-700">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">Steam Login</DialogTitle>
          </DialogHeader>
          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Username</label>
              <input
                type="text"
                placeholder="Steam username"
                className="w-full px-3 py-2 bg-background border border-gray-700 rounded-md text-white"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white">Password</label>
              <input
                type="password"
                placeholder="Steam password"
                className="w-full px-3 py-2 bg-background border border-gray-700 rounded-md text-white"
              />
            </div>
            <Button className="w-full bg-primary hover:bg-primary/80 text-white">
              Login
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </nav>
  );
}