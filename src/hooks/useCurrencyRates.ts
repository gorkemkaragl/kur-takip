import { useQuery } from "@tanstack/react-query";

export interface ExchangeRates {
  base: string;
  date: string;
  rates: Record<string, number>;
}

const POPULAR_CURRENCIES = ["USD", "EUR", "GBP", "TRY", "JPY", "CHF", "CAD", "AUD", "CNY", "INR"];

// api çağrısı yaparak döviz kurlarını getirir
export const fetchExchangeRates = async (base: string = "EUR"): Promise<ExchangeRates> => {
  const response = await fetch(
    `https://api.frankfurter.app/latest?from=${base}&to=${POPULAR_CURRENCIES.filter(c => c !== base).join(",")}`
  );
  
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rates");
  }
  
  return response.json();
};

// döviz kurlarını getiren özel hook
export const useCurrencyRates = (base: string = "EUR") => {
  return useQuery({
    queryKey: ["exchangeRates", base],
    queryFn: () => fetchExchangeRates(base),
    refetchInterval: 60000, // Refetch every minute
    staleTime: 30000,
  });
};

// döviz bilgilerini içeren sabit nesne
export const CURRENCY_INFO = {
  USD: { name: "ABD Doları", symbol: "$", flag: "fi fi-us" },
  EUR: { name: "Euro", symbol: "€", flag: "fi fi-eu" },
  GBP: { name: "İngiliz Sterlini", symbol: "£", flag: "fi fi-gb" },
  TRY: { name: "Türk Lirası", symbol: "₺", flag: "fi fi-tr" },
  JPY: { name: "Japon Yeni", symbol: "¥", flag: "fi fi-jp" },
  CHF: { name: "İsviçre Frangı", symbol: "Fr", flag: "fi fi-ch" },
  CAD: { name: "Kanada Doları", symbol: "C$", flag: "fi fi-ca" },
  AUD: { name: "Avustralya Doları", symbol: "A$", flag: "fi fi-au" },
  CNY: { name: "Çin Yuanı", symbol: "¥", flag: "fi fi-cn" },
  INR: { name: "Hindistan Rupisi", symbol: "₹", flag: "fi fi-in" },
};
