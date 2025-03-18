import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name);
      if (existingProduct) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    setShowModal(true);
  };

  const removeFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.name !== product.name));
  };

  const decreaseQuantity = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.name === product.name);
      if (existingProduct.quantity > 1) {
        return prevCart.map(item =>
          item.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prevCart.filter((item) => item.name !== product.name);
      }
    });
  };

  const increaseQuantity = (product) => {
    setCart((prevCart) => {
      return prevCart.map(item =>
        item.name === product.name
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    });
  };

  const handleCloseModal = () => setShowModal(false);
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, decreaseQuantity, increaseQuantity, showModal, handleCloseModal }}>
      {children}
    </CartContext.Provider>
  );
};