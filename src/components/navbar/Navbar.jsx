import React from "react";
import { Button } from "../ui/button";
import { Activity, Coins } from "lucide-react";

const Navbar = () => {
  return (
    <header className="py-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center glow">
              <Coins className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-foreground">KurTakip</h1>
            <p className="text-sm text-muted-foreground">Anlık Döviz Kurları</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 glass px-4 py-2 rounded-full">
          <Activity className="w-4 h-4 text-green-400" />
          <span className="text-sm text-muted-foreground">Canlı</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
