import React from 'react';
import Features from './Features';
import SareeCoverPromo from './SareeCoverPromo';
import Carousel from 'react-bootstrap/Carousel';
const Index = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={500}>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/id/105680592/photo/indian-scarves-in-many-colors-for-display.jpg?s=612x612&w=0&k=20&c=eGIl-xZv6K7miZSCQjvezFqSoas3H6uVZ4OR7cAhDxs="
              style={{ height: '75vh' }}
              alt="Image One"
            />
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '5%',
              color: '#FFD700', // Gold color
              padding: '20px',
              textAlign: 'right',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Text shadow for better visibility
            }}>
              <h1 style={{ fontSize: '3rem', margin: '0' }}>Celebrate Holi in Style</h1>
              <h2 style={{ fontSize: '2rem', margin: '0' }}>Flat 30% off</h2>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item interval={1500}>
          <div style={{ position: 'relative' }}>
            <img
              className="d-block w-100"
              src="https://www.parisera.com/cdn/shop/files/DSC_4908-1_Copy.jpg?v=1724928476"
              style={{ height: '75vh' }}
              alt="Image Two"
            />
            <div style={{
              position: 'absolute',
              top: '20%',
              right: '5%',
              color: '#efdfbb', // Hot pink color
              padding: '20px',
              textAlign: 'right',
              fontFamily: 'Arial, sans-serif',
              fontWeight: 'bold',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' // Text shadow for better visibility
            }}>
              <h1 style={{ fontSize: '3rem', margin: '0' }}>Shaadi Carnival</h1>
              <h2 style={{ fontSize: '2rem', margin: '0' }}>Flat 20% off and more</h2>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Features />
      <SareeCoverPromo/>
    </div>
  );
};

export default Index;
