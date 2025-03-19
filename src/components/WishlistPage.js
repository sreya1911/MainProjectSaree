// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from 'react';
import { useWishlist } from './WishlistContext';
import { Card, Row, Col, Button } from 'react-bootstrap';
import { useCart } from './CartContext';
import {FaTimes} from 'react-icons/fa'

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const handle=(product)=>{
    addToCart(product)
    removeFromWishlist(product)
  }
  return (
    <div>
      <h1 style={{textAlign: 'center', marginTop: '10px'}}>My Wishlist</h1>
      <Row>
        {wishlist.length === 0 ? (
          <p style={{textAlign: 'center'}}>Your wishlist is empty.</p>
        ) : (
          wishlist.map(product => (
            <Col xs={12} sm={6} md={4} lg={3} key={product.name} className="mb-4">
              <Card className="hover-card">
                <Card.Img
                  variant="top"
                  src={require(`../assets/${product.images[0]}`)}
                  alt={product.name}
                  style={{ width: "100%", height: "350px", objectFit: "cover" }}
                />
                <Button
      variant="link"
      onClick={() => removeFromWishlist(product)}
      style={{
        position: 'absolute',
        top: '10px',
        right: '10px',
        color: 'black',
        fontSize: '14px', // Adjusted for a thinner appearance
        background: 'none',
        border: 'none',
        padding: '0',
        cursor: 'pointer',
      }}
>
<div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          border: '1px solid black',
        }}
>
<FaTimes />
</div>
</Button>
                <Card.Body>
                  <Card.Title>{product.name}</Card.Title>
                  <Card.Text>{product.description}</Card.Text>
                  <Card.Text className="text-danger">${product.price}</Card.Text>
                  <Button onClick={() => handle(product)}>Add to Cart</Button>
                  {/* <Button variant="danger" onClick={() => removeFromWishlist(product)}>Remove</Button> */}
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default WishlistPage;
