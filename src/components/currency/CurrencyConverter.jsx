"use client";

import { useState, useEffect } from "react";
import { ArrowRightLeft, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CURRENCY_INFO, useCurrencyRates } from "@/hooks/useCurrencyRates";

const currencies = Object.keys(CURRENCY_INFO);

export const CurrencyConverter = () => {
  const [amount, setAmount] = useState("1000");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [convertedAmount, setConvertedAmount] = useState(null);
  
  const { data: rates, isLoading, refetch, dataUpdatedAt } = useCurrencyRates(fromCurrency);

  useEffect(() => {
    if (rates && amount) {
      const numAmount = parseFloat(amount);
      if (!isNaN(numAmount) && rates.rates[toCurrency]) {
        setConvertedAmount(numAmount * rates.rates[toCurrency]);
      }
    }
  }, [rates, amount, toCurrency]);

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat("tr-TR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 4,
    }).format(num);
  };

  const rate = rates?.rates[toCurrency];

  return (
    <div className="glass rounded-2xl p-6 md:p-8 animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-foreground">Döviz Çevirici</h2>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => refetch()}
          className="text-muted-foreground hover:text-primary transition-colors"
        >
          <RefreshCw className={`w-5 h-5 ${isLoading ? "animate-spin" : ""}`} />
        </Button>
      </div>

      <div className="space-y-6">
        {/* From Currency */}
        <div className="space-y-2">
          <label className="text-sm text-muted-foreground">Gönderilen Tutar</label>
          <div className="flex gap-3">
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="flex-1 bg-secondary/50 border-border/50 text-lg font-medium h-14"
              placeholder="0.00"
            />
            <Select value={fromCurrency} onValueChange={setFromCurrency}>
              <SelectTrigger className="w-32 bg-secondary/50 border-border/50 h-14">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    <span className="flex items-center gap-2">
                      <span className={`text-2xl ${CURRENCY_INFO[currency].flag}`}></span>

                      <span>{currency}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center">
          <Button
            variant="outline"
            size="icon"
            onClick={handleSwap}
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
              <span className="text-lg font-semibold text-primary">
                {convertedAmount !== null ? formatNumber(convertedAmount) : "—"}
              </span>
            </div>
            <Select value={toCurrency} onValueChange={setToCurrency}>
              <SelectTrigger className="w-32 bg-secondary/50 border-border/50 h-14">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {currencies.map((currency) => (
                  <SelectItem key={currency} value={currency}>
                    <span className="flex items-center gap-2">
                      <span className={`text-2xl ${CURRENCY_INFO[currency].flag}`}></span>

                      <span>{currency}</span>
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Exchange Rate Info */}
        {rate && (
          <div className="pt-4 border-t border-border/30">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Döviz Kuru</span>
              <span className="font-medium text-foreground">
                1 {fromCurrency} = {formatNumber(rate)} {toCurrency}
              </span>
            </div>
            {dataUpdatedAt && (
              <p className="text-xs text-muted-foreground mt-2">
                Son güncelleme: {new Date(dataUpdatedAt).toLocaleTimeString("tr-TR")}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;