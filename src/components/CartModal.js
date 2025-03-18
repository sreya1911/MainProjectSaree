import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useCart } from './CartContext';

const CartModal = () => {
  const { showModal, handleCloseModal } = useCart();

  return (
    <Modal show={showModal} onHide={handleCloseModal} >
      {/* <Modal.Header closeButton>
        <Modal.Title>Item Added</Modal.Title>
      </Modal.Header> */}
      <Modal.Body style={{textAlign: 'center', justifyContent: 'center'}}>
        <p>Item added</p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer> */}
    </Modal>
  );
};
export default CartModal;