'use client'
import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { CiUser, CiMenuBurger, CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import Link from "next/link";
import Chaticon from "./Chaticon";

function Header() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showBag, setShowBag] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);

  const [announment, setAnnounment] = useState("bg-light");

  const handleNavbarClose = () => setShowNavbar(false);
  const handleNavbarShow = () => setShowNavbar(true);

  const handleBagClose = () => setShowBag(false);
  const handleBagShow = () => setShowBag(true);

  const toggleSearchBar = () => setShowSearchBar(!showSearchBar);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >0) { 
        setAnnounment("hidden overflow-hidden"); 
      } 
      else {
         
        setAnnounment(""); 
      }
    };

    window.addEventListener("scroll", handleScroll);
  });

  return (
    <div className="sticky top-0 z-20 border-b border-black">
      {/* Announcement Bar */}
      <div className={`bg-black text-white p-2 text-center ${announment}`}>
        WE ARE OFFERING FREE SHIPPING!!
      </div>

      {/* Sticky Navbar */}
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
            {/* Offcanvas Toggle Button */}
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleNavbarShow} className="border-0">
              <CiMenuBurger className="text-2xl" />
            </Navbar.Toggle>

            {/* Logo */}
            <div className="relative top-5 hidden sm:block">
              <Link href="/">
                <Navbar.Brand > 
                  <img
                    src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712"
                    alt="Logo"
                    className="h-10 ml-2"
                  />
                </Navbar.Brand>
              </Link>
            </div>

            <div className="relative top-5 block sm:hidden">
              <Link href="/">
                <Navbar.Brand>
                  <img
                    src="//baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712"
                    alt="Logo"
                    className="h-5 ml-2"
                  />
                </Navbar.Brand>
              </Link>
            </div>

            {/* User, Search, and Bag Icons */}
            <div className="block sm:hidden">            
              <Navbar.Brand className="flex gap-2">
              <Link href="/Loginpage">
                <CiUser className="w-4 h-4" />
              </Link>
              <CiSearch className="w-4 h-4" onClick={toggleSearchBar} />
              <IoBagOutline className="w-4 h-4" onClick={handleBagShow} />
            </Navbar.Brand>
            </div>
            
            <div className="hidden sm:block">           
              <Navbar.Brand className="flex gap-3 ">
              <Link href="/Loginpage">
                <CiUser className="w-6 h-6" />
              </Link>
              <CiSearch className="w-6 h-6" onClick={toggleSearchBar} />
              <IoBagOutline className="w-6 h-6" onClick={handleBagShow} />
            </Navbar.Brand>
            </div>
 
            {/* Search Bar */}
            {showSearchBar && (
              <div className="absolute top-14  left-0 w-full h-full bg-white z-30 flex items-center p-4">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg w-full p-2 text-lg"
                  placeholder="Search for..."
                />
                <button onClick={toggleSearchBar} className="ml-4 text-2xl">
                  ✖
                </button>
              </div>
            )}
            
            

            {/* Offcanvas for Navbar */}
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
                  <Link href="/Chantelle">
                     Chantelle
                  </Link>
                  <hr />
                  <Link href="/secondpage">
                   Unstitched
                  </Link>
                  <hr />
                  <Link href="/Shawls">
                   Shawls
                  </Link>
                  <hr />
                  <Link href="/Readytowear">
                  Ready to Wear
                  </Link>
                  <hr />
                  <Link href="/Specialprices">
                  Special Prices
                  </Link>
                  <hr />
                  <Link href="/Bottoms">
                    Bottoms
                  </Link>
                  <hr />
                <Link href ="/Dupattas"> Dupattas</Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>

            {/* Offcanvas for Bag */}
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

                    <div className="flex items-center mb-6">
                      <img
                        src="https://cdn.shopify.com/s/files/1/2277/5269/files/126_0d9a3c70-1ded-4eaf-ae13-2eb1cc983a1d.jpg?v=1726813941&width=120"
                        alt="Product"
                        className="w-24 h-32 object-cover rounded-lg mr-4"
                      />
                      <div className="flex flex-col w-full">
                        <span className="text-xs uppercase text-gray-600">Unstitched</span>
                        <span className="font-semibold">Embroidered Printed Lawn UF-711</span>
                        <span className="text-lg font-bold">PKR 14,990.00</span>
                        <span className="text-sm text-gray-500">Stitched / XS</span>

                        <div className="flex items-center mt-2">
                          <button className="border px-2 py-1">-</button>
                          <input
                            type="text"
                            value="1"
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
                      <Link to="/LastForm">
                        <button className="bg-black text-white w-full py-3 rounded-lg text-lg">
                          CHECKOUT - PKR 14,990.00
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
