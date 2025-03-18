// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from 'react';
import { Card, Row, Col, Button } from "react-bootstrap";
import { useCart } from './CartContext';

const Cart = () => {
  const { cart, removeFromCart, decreaseQuantity, increaseQuantity } = useCart();

  return (
    <div>
      <h1>Cart</h1>
      <Row>
        {cart.map((product, index) => (
          <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top"  src={require(`../assets/${product.images[0]}`)}  alt={product.name} 
              style={{ width: "100%", height: "350px", objectFit: "cover" }}/>
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="text-danger">Total: ₹{(product.price * product.quantity).toFixed(2)}</Card.Text>
                <Card.Text>Quantity: {product.quantity}</Card.Text>
                <Button variant="success" onClick={() => increaseQuantity(product)}>&nbsp;+&nbsp;</Button>  &nbsp; &nbsp; &nbsp;
                <Button variant="warning" onClick={() => decreaseQuantity(product)}>&nbsp;-&nbsp;</Button> &nbsp; &nbsp; &nbsp;
                <Button variant="danger" onClick={() => removeFromCart(product)}>Remove</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Cart;
