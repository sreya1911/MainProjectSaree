// Code Generated by Sidekick is for learning and experimentation purposes only.

import React, { useState } from 'react';
import { Card, Row, Col, Form, Button, Alert, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import amex from '../assets/amex.jpg';
import axis from '../assets/axis.jpg';
import visacard from '../assets/visacard.jpg';
import mastercard from '../assets/mastercard.jpg';
import './Buy.css'; // Assuming you have a CSS file for custom styles

const Buy = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    const newErrors = {};
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Card number must be 16 digits long.';
    }
    if (name.length < 5) {
      newErrors.name = 'Name must be at least 5 characters long.';
    }
    if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(expiryDate)) {
      newErrors.expiryDate = 'Expiry date must be in MM/YY format.';
    }
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'CVV must be 3 digits long.';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert('Payment successful!');
      navigate('/');
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center mt-4" style={{ minHeight: '100vh' }}>
      <Col xs={12} md={6}>
        <Card className="shadow-lg p-3 mb-5 bg-white rounded custom-card">
          <Card.Body>
            <h1 className="text-center mb-4">Payment Details</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter card number"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  isInvalid={!!errors.cardNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cardNumber}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="formCardName">
                <Form.Label>Name on Card</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter name on card"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  isInvalid={!!errors.name}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.name}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="formExpiryDate">
                <Form.Label>Expiry Date</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                  isInvalid={!!errors.expiryDate}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.expiryDate}
                </Form.Control.Feedback>
              </Form.Group>
              <br />
              <Form.Group controlId="formCVV">
                <Form.Label>CVV</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Enter CVV"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  isInvalid={!!errors.cvv}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.cvv}
                </Form.Control.Feedback>
                <br />
              </Form.Group>
              <div className="d-flex justify-content-around mb-4">
                <img src={visacard} alt="Visa Card" className="card-logo" />
                <img src={amex} alt="Amex Card" className="card-logo" />
                <img src={axis} alt="Axis Card" className="card-logo" />
                <img src={mastercard} alt="MasterCard" className="card-logo" />
              </div>
              <Button variant="primary" type="submit" className="w-100 custom-button">
                Pay Now
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Container>
  );
};

export default Buy;
