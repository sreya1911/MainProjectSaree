import React from "react";
import "./ProductShowcase.css";
import img1 from "../assets/beauty.jpg";
import img3 from "../assets/home_kitchen.jpg";
import img4 from "../assets/wellness.jpg";
import img2 from "../assets/silk.jpg";
import img5 from "../assets/redclr.jpeg";

const products = [
  {
    src: img1,
    title: "Georgette",
    subtitle: "Multicolor Saree",
  },
  {
    src: img3,
    title: "Tissue",
    subtitle: " Kanchivaram Tissue ",
  },
  {
    src: img2,
    title: "Designer",
    subtitle: "Woven Silk",
  },
  {
    src: img4,
    title: "Lehanga",
    subtitle: "Fashion",
  },
  { src: img5, title: "Banarasi", subtitle: "Banarasi Silk" },
];

const ProductShowcase = () => {
  return (
    <div className="product-showcase">
      <h1>One Place To Elevate Your Lifestyle</h1>
      <div className="product-container">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <img
              src={product.src}
              alt={product.title}
              style={{ height: "300px" }}
            />
            <div className="overlay">
              <h2>{product.title}</h2>
              <p className="subtitle">{product.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
