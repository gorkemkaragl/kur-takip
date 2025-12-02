import CurrencyConverter from "@/components/currency/CurrencyConverter";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import RatesGrid from "@/components/rates/RatesGrid";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>
      <div className="relative z-10 container max-w-5xl mx-auto px-4 pb-12">
        <Navbar />
        <Hero />
        <CurrencyConverter />
        <RatesGrid />
        <Footer />
      </div>
    </div>
  );
};

export default page;
