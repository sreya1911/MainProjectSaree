// Code Generated by Sidekick is for learning and experimentation purposes only.

import React from "react";
import { Routes, Route } from "react-router-dom";
import ImpNav from "./components/Nav";
import Index from "./components/Index";
import Category from "./components/Category";
import Cart from "./components/Cart";
import { AuthProvider } from "./components/AuthContext";
import { CartProvider } from "./components/CartContext";
import Login from "./components/Login";
import CartModal from "./components/CartModal";
import "./App.css";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <ImpNav />
        <CartModal />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:categoryName" element={<Category />} />
          <Route path="/category/:categoryName/subcategory/:subcategoryName" element={<Category />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
