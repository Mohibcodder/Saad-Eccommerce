'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";
import Container from 'react-bootstrap/Container';
import { Form } from 'react-bootstrap';


import Secondpart from '../../components/Secondpart';
import { allProducts } from '../../components/Data';


export default function CategoryPage() {
  const pathname = usePathname();
  // Extract categoryName from the pathname, e.g., /Readytowear -> Readytowear
  const categoryName = pathname.split('/').pop();

  // State for scroll effect
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const mainNav = document.getElementById("main-sticky-nav");

    const ScrollNav = () => {
      const scrollPosition = window.scrollY;
      if (mainNav) {
        if (scrollPosition > 247) {
          setScroll(true);
          mainNav.style.backgroundColor = "#FFFFFF";
          mainNav.style.position = "fixed";
          mainNav.style.top = "70px";
          mainNav.style.width = "100%";
        } else {
          setScroll(false);
          mainNav.style.backgroundColor = "";
          mainNav.style.position = "";
          mainNav.style.top = "";
          mainNav.style.width = "";
        }
      }
    };

    const handleScroll = () => {
      window.requestAnimationFrame(ScrollNav);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Filter states
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 44990]);
  const [selectedAvailability, setSelectedAvailability] = useState("All");
  const [selectedProductType, setSelectedProductType] = useState("All");
  const [selectedFabric, setSelectedFabric] = useState("All");
  const [selectedPiece, setSelectedPiece] = useState("All");


  // Effect to filter products when categoryName or filters change
  useEffect(() => {
    if (!categoryName) {
      return; // Wait until categoryName is available
    }

    let currentCategoryProducts = allProducts.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );

    const applyFilters = () => {
        let tempProducts = [...currentCategoryProducts];

        // Price Filter
        tempProducts = tempProducts.filter(
            (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
        );

        // Availability Filter
        if (selectedAvailability !== "All") {
            tempProducts = tempProducts.filter(
                (p) => p.availability === selectedAvailability
            );
        }

        // Product Type Filter
        if (selectedProductType !== "All") {
            tempProducts = tempProducts.filter(
                (p) => p.productType.toLowerCase() === selectedProductType.toLowerCase()
            );
        }

        // Fabric Filter
        if (selectedFabric !== "All") {
            tempProducts = tempProducts.filter(
                (p) => p.fabric.toLowerCase() === selectedFabric.toLowerCase()
            );
        }

        // Piece Filter
        if (selectedPiece !== "All") {
            tempProducts = tempProducts.filter(
                (p) => p.piece.toLowerCase() === selectedPiece.toLowerCase()
            );
        }

        setFilteredProducts(tempProducts);
    };

    applyFilters();

  }, [categoryName, priceRange, selectedAvailability, selectedProductType, selectedFabric, selectedPiece]);


  // Determine unique filter options for the current category
  const getUniqueOptions = (key) => {
    if (!categoryName) return [];

    const currentCategoryProducts = allProducts.filter(
      (p) => p.category.toLowerCase() === categoryName.toLowerCase()
    );
    const options = new Set(currentCategoryProducts.map(p => p[key]));
    return ['All', ...Array.from(options).sort()];
  };

  const uniqueProductTypes = getUniqueOptions('productType');
  const uniqueFabrics = getUniqueOptions('fabric');
  const uniquePieces = getUniqueOptions('piece');


  const handlePriceSliderChange = (e) => {
    setPriceRange([Number(e.target.value), priceRange[1]]);
  };
  const handleMinPriceChange = (e) => {
    setPriceRange([Number(e.target.value), priceRange[1]]);
  };
  const handleMaxPriceChange = (e) => {
    setPriceRange([priceRange[0], Number(e.target.value)]);
  };

  // Determine min/max price for the current category's products
  const categoryProductsForPriceRange = allProducts.filter(
    (p) => p.category.toLowerCase() === categoryName.toLowerCase()
  );
  const minCategoryPrice = categoryProductsForPriceRange.length > 0
    ? Math.min(...categoryProductsForPriceRange.map(p => p.price))
    : 0;
  const maxCategoryPrice = categoryProductsForPriceRange.length > 0
    ? Math.max(...categoryProductsForPriceRange.map(p => p.price))
    : 44990;


  // Set initial price range based on the actual category products
  useEffect(() => {
    if (categoryName && categoryProductsForPriceRange.length > 0) {
      setPriceRange([minCategoryPrice, maxCategoryPrice]);
    }
  }, [categoryName, minCategoryPrice, maxCategoryPrice]);


  const displayCategoryName = categoryName
    ? categoryName.replace(/([A-Z])/g, ' $1').trim()
    : 'Loading Category...';


  if (!categoryName) {
    return <div>Loading category details...</div>;
  }


  return (
    <>
      <div id='unstiched' className='uppercase font-serif d-flex justify-center items-center text-3xl border border-gray-800 h-48'>
        <h3>{displayCategoryName}</h3>
      </div>

      <div
        id='main-sticky-nav'
        className={`h-12 uppercase font-mono d-flex justify-center items-center text-xl border border-gray-800 cursor-pointer ${scroll ? 'sticky z-40 w-full' : ''}`}
      >
        {filteredProducts.length} products
      </div>

      <div id="secondpage" style={{ width: "99.3%" }}>
        <Container>
          <Row>
            <Col md={4}>
              <div className="hidden md:block sticky top-48">
                <Accordion className="flex flex-col gap-2">
                  <Accordion.Item eventKey="0">
                    <Accordion.Header className="font-serif tracking-wider">AVAILABILITY</Accordion.Header>
                    <Accordion.Body>
                      <Form.Check
                        type="radio"
                        label="All"
                        name="availability"
                        value="All"
                        checked={selectedAvailability === "All"}
                        onChange={() => setSelectedAvailability("All")}
                      />
                      <Form.Check
                        type="radio"
                        label="In stock only"
                        name="availability"
                        value="In Stock"
                        checked={selectedAvailability === "In Stock"}
                        onChange={() => setSelectedAvailability("In Stock")}
                      />
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="1">
                    <Accordion.Header className="font-serif tracking-wider">PRICE</Accordion.Header>
                    <Accordion.Body>
                      <div className="p-4">
                        <div className="font-semibold mb-2 text-lg">Price</div>
                        <Form className="space-y-4">
                          <Form.Label>PKR {priceRange[0].toLocaleString()} to PKR {priceRange[1].toLocaleString()}</Form.Label>
                          <input
                            type="range"
                            min={minCategoryPrice}
                            max={maxCategoryPrice}
                            value={priceRange[0]}
                            onChange={handlePriceSliderChange}
                            className="form-range w-full"
                          />
                          <div className="flex justify-between text-center">
                            <input
                              type="number"
                              min={minCategoryPrice}
                              max={maxCategoryPrice}
                              value={priceRange[0]}
                              onChange={handleMinPriceChange}
                              className="w-1/2 border rounded-md p-2"
                            />
                            <span className="mx-2">to</span>
                            <input
                              type="number"
                              min={minCategoryPrice}
                              max={maxCategoryPrice}
                              value={priceRange[1]}
                              onChange={handleMaxPriceChange}
                              className="w-1/2 border rounded-md p-2"
                            />
                          </div>
                        </Form>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="2">
                    <Accordion.Header className="font-serif tracking-wider">PRODUCT TYPE</Accordion.Header>
                    <Accordion.Body>
                      {uniqueProductTypes.map(type => (
                        <Form.Check
                          key={type}
                          type="radio"
                          label={`${type} (${allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase() && (type === 'All' || p.productType.toLowerCase() === type.toLowerCase())).length})`}
                          name="productType"
                          value={type}
                          checked={selectedProductType === type}
                          onChange={() => setSelectedProductType(type)}
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="3">
                    <Accordion.Header className="font-serif tracking-wider">FABRIC</Accordion.Header>
                    <Accordion.Body>
                      {uniqueFabrics.map(fabric => (
                        <Form.Check
                          key={fabric}
                          type="radio"
                          label={`${fabric} (${allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase() && (fabric === 'All' || p.fabric.toLowerCase() === fabric.toLowerCase())).length})`}
                          name="fabric"
                          value={fabric}
                          checked={selectedFabric === fabric}
                          onChange={() => setSelectedFabric(fabric)}
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>

                  <Accordion.Item eventKey="5">
                    <Accordion.Header className="font-serif tracking-wider">PIECE</Accordion.Header>
                    <Accordion.Body>
                      {uniquePieces.map(piece => (
                        <Form.Check
                          key={piece}
                          type="radio"
                          label={`${piece} (${allProducts.filter(p => p.category.toLowerCase() === categoryName.toLowerCase() && (piece === 'All' || p.piece.toLowerCase() === piece.toLowerCase())).length})`}
                          name="piece"
                          value={piece}
                          checked={selectedPiece === piece}
                          onChange={() => setSelectedPiece(piece)}
                        />
                      ))}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </div>
            </Col>

            <Col sm={8}>
              <Container className="mb-14">
                <Row>
                  {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                      <Col md={6} className="mt-4" key={product.id}>
                        <Secondpart product={product} />
                      </Col>
                    ))
                  ) : (
                    <p className="text-center mt-5 text-xl text-gray-600">No products found matching your criteria.</p>
                  )}
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}