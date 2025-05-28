'use client';

import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CiUser, CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import Chaticon from "./Chaticon";
import { useCart } from '../context/CartContext'; // Import useCart hook

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const [announmentClass, setAnnounmentClass] = useState("");

  const handleNavbarClose = () => setShowNavbar(false);
  const handleNavbarShow = () => setShowNavbar(true);

  const handleBagClose = () => setShowBag(false);
  const handleBagShow = () => setShowBag(true);

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);

  const closeAllOverlays = () => {
    setShowNavbar(false);
    setShowBag(false);
    setShowSearchBar(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setAnnounmentClass("hidden overflow-hidden");
      } else {
        setAnnounmentClass("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { cartItems, removeFromCart, updateCartQuantity, getCartTotal, getTotalItems } = useCart(); // Use cart state and functions

  return (
    <div className="sticky top-0 z-20 border-b border-black">
      <div className={`bg-black text-white p-2 text-center ${announmentClass}`}>
        WE ARE OFFERING FREE SHIPPING!!
      </div>

      <div>
        <Navbar
          collapseOnSelect
          expand="false"
          bg="white"
          variant="light"
          className={`flex items-center justify-between`}
          style={{ zIndex: 1000 }}
        >
          <Container fluid>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleNavbarShow} className="border-0">
              <CiMenuBurger className="text-2xl" />
            </Navbar.Toggle>

            {/* Logo - Wrap Navbar.Brand content with Link */}
            <div className="relative hidden sm:block">
              <Link href="/" passHref legacyBehavior>
                <Navbar.Brand as="div">
                  <img
                    src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712"
                    alt="Logo"
                    className="h-10 ml-2"
                  />
                </Navbar.Brand>
              </Link>
            </div>

            <div className="relative block sm:hidden">
              <Link href="/" passHref legacyBehavior>
                <Navbar.Brand as="div">
                  <img
                    src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712"
                    alt="Logo"
                    className="h-5 ml-2"
                  />
                </Navbar.Brand>
              </Link>
            </div>

            <div className="block sm:hidden">
              <Navbar.Brand className="flex gap-2">
                <Link href="/Loginpage" onClick={closeAllOverlays}>
                  <CiUser className="w-4 h-4 text-black no-underline" />
                </Link>
                <CiSearch className="w-4 h-4 text-black" onClick={toggleSearchBar} />
                <div className="relative">
                  <IoBagOutline className="w-4 h-4 text-black cursor-pointer" onClick={handleBagShow} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Navbar.Brand>
            </div>

            <div className="hidden sm:block">
              <Navbar.Brand className="flex gap-3 ">
                <Link href="/Loginpage" onClick={closeAllOverlays}>
                  <CiUser className="w-6 h-6 text-black no-underline" />
                </Link>
                <CiSearch className="w-6 h-6 text-black cursor-pointer" onClick={toggleSearchBar} />
                <div className="relative">
                  <IoBagOutline className="w-6 h-6 text-black cursor-pointer" onClick={handleBagShow} />
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getTotalItems()}
                    </span>
                  )}
                </div>
              </Navbar.Brand>
            </div>

            {showSearchBar && (
              <div className="absolute top-0 left-0 w-full h-full bg-white z-30 flex items-center p-4">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2 text-lg"
                  placeholder="Search for..."
                />
                <button onClick={toggleSearchBar} className="ml-4 text-2xl text-black">
                  ✖
                </button>
              </div>
            )}

            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="start"
              show={showNavbar}
              onHide={handleNavbarClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="font-serif justify-content-end flex-grow-1 pe-3 text-1xl tracking-widest font-medium uppercase gap-3">
                  <Link href="/Chantelle" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Chantelle
                  </Link>
                  <hr />
                  <Link href="/Unstitched" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Unstitched
                  </Link>
                  <hr />
                  <Link href="/Shawls" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Shawls
                  </Link>
                  <hr />
                  <Link href="/Readytowear" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Ready to Wear
                  </Link>
                  <hr />
                  <Link href="/Specialprices" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Special Prices
                  </Link>
                  <hr />
                  <Link href="/Bottoms" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Bottoms
                  </Link>
                  <hr />
                  <Link href="/Dupattas" onClick={handleNavbarClose} className="text-black no-underline hover:text-gray-700">
                    Dupattas
                  </Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            <Offcanvas show={showBag} onHide={handleBagClose} placement="end">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>CART ({getTotalItems()})</Offcanvas.Title>
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
                          disabled={cartItems.length === 0} // Disable if cart is empty
                        >
                          CHECKOUT - PKR {getCartTotal().toLocaleString()}
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </Container>
        </Navbar>
      </div>
      <Chaticon />
    </div>
  );
}

export default Header;