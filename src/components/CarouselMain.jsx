import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "../components/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";

const CarouselMain = () => {
  const carouselItems = [
    {
      src: require("../assets/img2.avif"),
      alt: "First slide",
      title: "The Chic Boutique",
      caption: "Where Quality Matters",
      className: "slide-1",
    },
    {
      src: require("../assets/mainimg.jpg"),
      alt: "Second slide",
      title: "Elegant Styles",
      caption: "Discover the latest trends",
      className: "slide-2",
    },
    {
      src: require("../assets/img1.webp"),
      alt: "Third slide",
      title: "Modern Fashion",
      caption:
        "Inspired by the nine emotions of life,where every emotion is not just felt but adorned",
      className: "slide-3",
    },
  ];
  return (
    <Carousel>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index} className={item.className}>
          <img
            className="d-block w-100"
            src={item.src}
            alt={item.alt}
            style={{ height: "500px" }}
          />
          <Carousel.Caption>
            <h3>{item.title}</h3>
            <p>{item.caption}</p>
            <Button variant="light">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselMain;
