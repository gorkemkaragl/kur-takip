import React from "react";

const Hero = () => {
  return (
    <div className="text-center space-y-4 py-8">
      <h2 className="text-4xl md:text-5xl font-bold">
        <span className="text-foreground">Döviz Kurlarını</span>
        <br />
        <span className="gradient-text">Anlık Takip Edin</span>
      </h2>
      <p className="text-muted-foreground text-lg max-w-xl mx-auto">
        Güvenilir ve hızlı döviz çevirici ile paranızın değerini anında
        hesaplayın.
      </p>
    </div>
  );
};

export default Hero;
