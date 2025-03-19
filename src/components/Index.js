import React from "react";
import Features from "./Features";
import SareeCoverPromo from "./SareeCoverPromo";
import CarouselMain from "./CarouselMain";
import ProductShowcase from "./ProductShowcase";
import Carousel from 'react-bootstrap/Carousel';
const Index = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      
      <CarouselMain />
      <Features />
      <ProductShowcase />
      <SareeCoverPromo />
    </div>
  );
};

export default Index;
