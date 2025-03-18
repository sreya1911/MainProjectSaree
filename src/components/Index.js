import React from "react";
import Features from "./Features";
import SareeCoverPromo from "./SareeCoverPromo";
import CarouselMain from "./CarouselMain";
import ProductShowcase from "./ProductShowcase";

const Index = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Features />
      <CarouselMain />
      <ProductShowcase />
      <SareeCoverPromo />
    </div>
  );
};

export default Index;
