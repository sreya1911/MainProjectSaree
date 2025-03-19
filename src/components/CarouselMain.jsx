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
      link :"/category/silk"
    },
    {
      src: require("../assets/mainimg.jpg"),
      alt: "Second slide",
      title: "Elegant Styles",
      caption: "Discover the latest trends",
      className: "slide-2",
      link:"/category/cotton"
    },
    {
      src: "https://media.istockphoto.com/id/105680592/photo/indian-scarves-in-many-colors-for-display.jpg?s=612x612&w=0&k=20&c=eGIl-xZv6K7miZSCQjvezFqSoas3H6uVZ4OR7cAhDxs=",
      alt: "Second slide",
      title: "Celebrate Holi in Style",
      caption: "Flat 30% off",
      className: "slide-4",
      link:"/category/regional"
    },

    {
      src: require("../assets/img1.webp"),
      alt: "Third slide",
      title: "Modern Fashion",
      caption:
        "Inspired by the nine emotions of life,where every emotion is not just felt but adorned",
      className: "slide-3",
      link:"/category/salwar"
    },
    {
      src: "https://www.parisera.com/cdn/shop/files/DSC_4908-1_Copy.jpg?v=1724928476",
      alt: "Fifth slide",
      title: "Shaadi Carnival",
      caption: "Flat 20% off and more",
      className: "slide-5",
      link:"/category/lehenga"
    },
  ];
  return (
    <Carousel interval={2000}>
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
            <Button variant="light"href={item.link} >Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselMain;
