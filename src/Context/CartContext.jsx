import React, { createContext, useState } from "react";

// Create Context
export const CartContext = createContext();

// Create Provider Component
export const CartProvider = ({ children }) => {
  const [cartCount, setCartCount] = useState(0);

  // Function to add item to cart
  const addToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
