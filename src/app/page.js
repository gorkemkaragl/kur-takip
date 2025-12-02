import CurrencyConverter from "@/components/currency/CurrencyConverter";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import RatesGrid from "@/components/rates/RatesGrid";
import React from "react";

const page = () => {
  return (
 
      <div className="container max-w-5xl mx-auto px-4 pb-12">
        <Navbar />
        <Hero />
        <CurrencyConverter />
        <RatesGrid />
        <Footer />
      </div>
  );
};

export default page;
