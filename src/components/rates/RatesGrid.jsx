"use client";

import React from "react";
import { CURRENCY_INFO, useCurrencyRates } from "@/hooks/useCurrencyRates";
import { Skeleton } from "@/components/ui/skeleton"; // Skeleton component
import { TrendingUp, TrendingDown } from "lucide-react"; // Iconlar

const RatesGrid = () => {
  const { data: rates, isLoading } = useCurrencyRates("TRY");

  const formatRate = (rate) => {
    // TRY bazında döviz fiyatını göstermek için 1/rate
    const displayRate = 1 / rate;
    return new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(displayRate);
  };

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="glass rounded-xl p-5">
            <Skeleton className="h-6 w-20 mb-3" />
            <Skeleton className="h-8 w-32 mb-2" />
            <Skeleton className="h-4 w-24" />
          </div>
        ))}
      </div>
    );
  }

  if (!rates) return null;

  const currencies = Object.entries(rates.rates).slice(0, 6);

  return (
    <div className="pt-8 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">Anlık Kurlar</h2>
        <span className="text-sm text-muted-foreground">Baz: TRY</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currencies.map(([currency, rate], index) => {
          const info = CURRENCY_INFO[currency];
          const trend =
            index % 3 === 0 ? "up" : index % 3 === 1 ? "down" : "neutral";

          return (
            <div
              key={currency}
              className="glass rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className={`text-2xl ${CURRENCY_INFO[currency].flag}`}></span>
                  <span className="font-semibold text-foreground">{currency}</span>
                </div>
                {trend === "up" && (
                  <TrendingUp className="w-4 h-4 text-green-400" />
                )}
                {trend === "down" && (
                  <TrendingDown className="w-4 h-4 text-red-400" />
                )}
              </div>

              <div className="space-y-1">
                <p className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {info.symbol} {formatRate(rate)}
                </p>
                <p className="text-sm text-muted-foreground">{info.name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RatesGrid;
