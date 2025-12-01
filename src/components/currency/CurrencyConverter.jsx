import React from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ArrowRightLeft } from "lucide-react";

const CurrencyConverter = () => {
  return (
    <div className="glass rounded-2xl p-6 md:p-8 animate-fade-in ">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">
          Döviz Çevirici
        </h2>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-primary transition-colors"
        ></Button>
        yenile...
      </div>

      <div className="space-y-6">
        {/* From Currency */}
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">
            Gönderilen Tutar
          </label>
          <div className="flex gap-3">
            <Input
              type="number"
              className="flex-1 bg-secondary/50 border-border/50 text-lg font-medium h-14"
              placeholder="0.00"
            />
            <Select>
              <SelectTrigger className="w-32 bg-secondary/50 border-border/50 h-14">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>ss</SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <ArrowRightLeft className="w-5 h-5 text-primary" />
          </Button>
        </div>

        {/* To Currency */}
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Alınan Tutar</label>
          <div className="flex gap-3">
            <div className="flex-1 bg-primary/10 border border-primary/20 rounded-lg h-14 flex items-center px-4">
              <span className="text-lg font-semibold text-primary">ssa</span>
            </div>
            <Select>
              <SelectTrigger className="w-32 bg-secondary/50 border-border/50 h-14">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>ss</SelectContent>
            </Select>
          </div>
        </div>

        {/* Exchange Rate Info */}
        <div className="pt-4 border-t border-border/30">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Döviz Kuru</span>
            <span className="font-medium text-foreground">1</span>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Son güncelleme:</p>
        </div>
      </div>
    </div>
  );
};

export default CurrencyConverter;
