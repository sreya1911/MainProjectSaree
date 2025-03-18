// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import { useCart } from "./CartContext";
import "./All.css";
// import './Cart.css';

const Carddisplay = ({ category, subcategory }) => {
  const { addToCart } = useCart();

  if (!category) {
    return <div>No category selected</div>;
  }

  const itemsToDisplay = subcategory
    ? subcategory.sarees
    : category.subcategories.flatMap((sub) => sub.sarees);

  return (
    <div className="cart-container">
      <div className="category-section">
        <Row>
          {itemsToDisplay.map((item, index) => (
            <Col xs={12} sm={6} md={4} lg={3} key={index} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={require(`../assets/${item.images[0]}`)}
                  alt={item.name}
                  style={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>Price: ₹{item.price}</Card.Text>
                  <Button onClick={() => addToCart(item)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Carddisplay;
