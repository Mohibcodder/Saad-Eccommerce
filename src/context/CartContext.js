'use client'; // This context will be used in client components

import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage, or an empty array if not found
  const [cartItems, setCartItems] = useState(() => {
    if (typeof window !== 'undefined') { // Check if window is defined (i.e., we are in the browser)
      const savedCart = localStorage.getItem('cartItems');
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return []; // Default to empty array for server-side render
  });

  // Save cart items to localStorage whenever they change
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }, [cartItems]);


  const addToCart = (product, quantity = 1, selectedType = 'UNSTITCHED', selectedSize = 'DEFAULT') => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(
        (item) => item.id === product.id &&
                  item.selectedType === selectedType &&
                  item.selectedSize === selectedSize
      );

      if (existingItem) {
        // If item exists, update its quantity
        return prevItems.map((item) =>
          item.id === product.id &&
          item.selectedType === selectedType &&
          item.selectedSize === selectedSize
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        // Otherwise, add new item to cart
        return [...prevItems, { ...product, quantity, selectedType, selectedSize }];
      }
    });
  };

  const removeFromCart = (productId, selectedType, selectedSize) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => !(item.id === productId &&
                    item.selectedType === selectedType &&
                    item.selectedSize === selectedSize)
      )
    );
  };

  const updateCartQuantity = (productId, selectedType, selectedSize, newQuantity) => {
    setCartItems((prevItems) => {
      if (newQuantity <= 0) {
        return prevItems.filter(
          (item) => !(item.id === productId &&
                      item.selectedType === selectedType &&
                      item.selectedSize === selectedSize)
        );
      }
      return prevItems.map((item) =>
        item.id === productId &&
        item.selectedType === selectedType &&
        item.selectedSize === selectedSize
          ? { ...item, quantity: newQuantity }
          : item
      );
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        getTotalItems,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};