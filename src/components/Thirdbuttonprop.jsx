// src/app/components/Thirdbuttonprop.jsx
'use client'
import React, { useState } from "react";
// import Button from 'react-bootstrap/Button'; // Not explicitly used but might be for styling
import Link from 'next/link'; // Make sure this is next/link
import Offcanvas from "react-bootstrap/Offcanvas";

function Thirdbuttonprop({ product }) { // Accept a 'product' prop
  const [showBag, setShowBag] = useState(false);
  const handleBagClose = () => setShowBag(false);
  const handleBagShow = () => setShowBag(true);

  // Fallback for product if not provided (though it should be)
  const defaultProduct = {
    id: 'placeholder',
    name: 'Selected Product',
    category: 'Category',
    price: 0,
    img: 'https://via.placeholder.com/120x160?text=No+Image', // Placeholder image
    piece: 'N/A',
  };
  const displayProduct = product || defaultProduct;

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
        // Hover styles applied directly via Tailwind classes instead of onMouseEnter/onMouseLeave for cleaner code
        onClick={handleBagShow}
      >
        ADD TO CART
      </button>

      <Offcanvas show={showBag} onHide={handleBagClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="flex justify-center">
            <div className="p-6 rounded-lg shadow-lg w-full">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold"></h2>
              </div>

              <div className="mb-4 text-sm border-b-2 border-t-2">
                You are eligible for free shipping.
              </div>

              {/* Display dynamically selected product */}
              <div className="flex items-center mb-6">
                <img
                  src={displayProduct.img}
                  alt={displayProduct.name}
                  className="w-24 h-32 object-cover rounded-lg mr-4"
                />
                <div className="flex flex-col w-full">
                  <span className="text-xs uppercase text-gray-600">{displayProduct.category}</span>
                  <span className="font-semibold">{displayProduct.name}</span>
                  <span className="text-lg font-bold">PKR {displayProduct.price.toLocaleString()}</span>
                  <span className="text-sm text-gray-500">{displayProduct.piece}</span>

                  {/* Quantity Selector - Hardcoded for now, but ideally connected to state/context */}
                  <div className="flex items-center mt-2">
                    <button className="border px-2 py-1">-</button>
                    <input
                      type="text"
                      value="1" // This should eventually come from cart state
                      readOnly
                      className="text-center w-12 border-t border-b px-2 py-1"
                    />
                    <button className="border px-2 py-1">+</button>
                  </div>

                  <button className="text-sm hover:underline">
                    Remove
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-4">
                Taxes and shipping calculated at checkout
              </div>

              <div className="text-center">
                <Link href="/LastForm"> {/* Consider closing offcanvas on click here too */}
                  <button className="bg-black text-white w-full py-3 rounded-lg text-lg">
                    CHECKOUT - PKR {displayProduct.price.toLocaleString()}
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