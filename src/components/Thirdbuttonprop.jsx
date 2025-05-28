'use client';
import React, { useState } from "react";
import Link from 'next/link';
import Offcanvas from "react-bootstrap/Offcanvas";
import { useCart } from '../context/CartContext'; // Import useCart hook

function Thirdbuttonprop({ product, selectedType, selectedSize, quantity }) { // Accept new props
  const { cartItems, addToCart, removeFromCart, updateCartQuantity, getCartTotal, getTotalItems } = useCart(); // Use cart functions
  const [showBag, setShowBag] = useState(false);
  const handleBagClose = () => setShowBag(false);
  const handleBagShow = () => setShowBag(true);

  // Fallback for product if not provided (though it should be)
  const defaultProduct = {
    id: 'placeholder',
    name: 'Selected Product',
    category: 'Category',
    price: 0,
    img: 'https://via.placeholder.com/120x160?text=No+Image',
    piece: 'N/A',
  };
  const displayProduct = product || defaultProduct;

  const handleAddToCartClick = () => {
    addToCart(displayProduct, quantity, selectedType, selectedSize);
    handleBagShow(); // Show the cart offcanvas after adding
  };

  return (
    <>
      <button
        className="
          h-[50px]
          w-full
          border border-black
          bg-black
          text-white
          mt-[43px]
          transition-colors duration-200 ease-in-out
          hover:bg-transparent hover:text-black
        "
        onClick={handleAddToCartClick} // Call the new handler
      >
        ADD TO CART
      </button>

      {/* Cart Offcanvas (Duplicate logic, ideally reusable component) */}
      <Offcanvas show={showBag} onHide={handleBagClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART ({getTotalItems()})</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="flex justify-center">
            <div className="p-6 rounded-lg shadow-lg w-full">
              <div className="mb-4 text-sm border-b-2 border-t-2">
                You are eligible for free shipping.
              </div>

              {cartItems.length === 0 ? (
                <p className="text-center text-gray-500">Your cart is empty.</p>
              ) : (
                cartItems.map((item) => (
                  <div key={`${item.id}-${item.selectedType}-${item.selectedSize}`} className="flex items-center mb-6">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-24 h-32 object-cover rounded-lg mr-4"
                    />
                    <div className="flex flex-col w-full">
                      <span className="text-xs uppercase text-gray-600">{item.category}</span>
                      <span className="font-semibold">{item.name}</span>
                      <span className="text-lg font-bold">PKR {(item.price * item.quantity).toLocaleString()}</span>
                      <span className="text-sm text-gray-500">{item.selectedType} / {item.selectedSize}</span>

                      <div className="flex items-center mt-2">
                        <button
                          className="border px-2 py-1"
                          onClick={() => updateCartQuantity(item.id, item.selectedType, item.selectedSize, item.quantity - 1)}
                        >
                          -
                        </button>
                        <input
                          type="text"
                          value={item.quantity}
                          readOnly
                          className="text-center w-12 border-t border-b px-2 py-1"
                        />
                        <button
                          className="border px-2 py-1"
                          onClick={() => updateCartQuantity(item.id, item.selectedType, item.selectedSize, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <button
                        className="text-sm hover:underline text-left mt-1"
                        onClick={() => removeFromCart(item.id, item.selectedType, item.selectedSize)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))
              )}

              <div className="text-sm text-gray-500 mb-4">
                Taxes and shipping calculated at checkout
              </div>

              <div className="text-center">
                <Link href="/LastForm" onClick={handleBagClose}>
                  <button
                    className="bg-black text-white w-full py-3 rounded-lg text-lg"
                    disabled={cartItems.length === 0}
                  >
                    CHECKOUT - PKR {getCartTotal().toLocaleString()}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Thirdbuttonprop;