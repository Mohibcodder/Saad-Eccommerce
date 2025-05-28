'use client';

import React, { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, ToggleButtonGroup, ToggleButton, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import Container from 'react-bootstrap/Container';
import { HiOutlineTag } from "react-icons/hi2";
import { RiBox3Line } from "react-icons/ri";
import { PiAirplaneTiltLight } from "react-icons/pi";
import { GiReturnArrow } from "react-icons/gi";
import { BiLeaf } from "react-icons/bi";

import Thirdpart from "../../../components/Thirdpart";
import Thirdbuttonprop from "../../../components/Thirdbuttonprop";
import { allProducts } from '../../../components/Data';

function ProductDetailPage() {
  const pathname = usePathname();
  const productId = pathname.split('/').pop();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [selectedType, setSelectedType] = useState("UNSTITCHED");
  const [selectedSize, setSelectedSize] = useState("DEFAULT"); // New state for selected size
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (productId) {
      setLoading(true);
      setError(null);
      const foundProduct = allProducts.find(p => p.id === productId);

      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedType(foundProduct.productType === 'Stitched' ? 'STITCHED' : 'UNSTITCHED');
        // Reset size and quantity on product change
        setSelectedSize("DEFAULT");
        setQuantity(1);
      } else {
        setError("Product not found.");
      }
      setLoading(false);
    }
  }, [productId]);

  const handleTypeChange = (val) => setSelectedType(val);
  const handleSizeChange = (e) => setSelectedSize(e.target.value); // Handler for size change
  const handleQuantityChange = (amount) => {
    if (quantity + amount > 0) {
      setQuantity(quantity + amount);
    }
  };

  if (loading) {
    return (
      <>
        <div className="flex justify-center items-center h-screen text-xl">Loading product details...</div>
      </>
    );
  }

  if (error || !product) {
    return (
      <>
        <div className="flex justify-center items-center h-screen text-xl text-red-500">{error || "Product not found."}</div>
      </>
    );
  }

  const { name, price, img, imgHover, description, productDetails, deliveryInfo, returnsExchange, careInstructions, sku, piece } = product;

  const productImages = [img, imgHover, ...product.additionalImages || []];

  return (
    <>
      <div>
        <Container className="mt-2">
          <Row>
            <Col md={1}></Col>
            <Col md={6}>
              <div className="hidden md:block">
                {productImages.map((imageSrc, index) => (
                  <div className="mt-4" key={index}>
                    <Thirdpart src={imageSrc} alt={`${name} image ${index + 1}`} />
                  </div>
                ))}
              </div>
            </Col>

            <Col className="block md:hidden" md={12}>
              <Carousel>
                {productImages.map((imageSrc, index) => (
                  <Carousel.Item key={index}>
                    <img
                      src={imageSrc}
                      alt={`${name} slide ${index + 1}`}
                      className="d-block w-100"
                      style={{ maxHeight: '70vh', objectFit: 'contain' }}
                    />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Col>

            <Col md={5}>
              <div className="">
                <div className="p-8 max-w-md bg-white shadow-md space-y-4">
                  <h1 className="text-lg font-semibold text-gray-600">
                    {name}
                  </h1>
                  <p className="text-lg text-gray-600">PKR {price.toLocaleString()}</p>
                  <p className="text-sm text-gray-500">SKU: {sku}</p>
                  <p className="text-sm text-gray-500">{piece}</p>

                  <div className="space-y-2">
                    <h4 className="text-md mt-2 mb-3 text-gray-700">Type:</h4>
                    <ToggleButtonGroup
                      type="radio"
                      name="type"
                      value={selectedType}
                      onChange={handleTypeChange}
                    >
                      <ToggleButton
                        id="tbg-btn-unstiched"
                        value="UNSTITCHED"
                        variant={selectedType === "UNSTITCHED" ? "dark" : "light"}
                      >
                        UNSTITCHED
                      </ToggleButton>
                      <ToggleButton
                        id="tbg-btn-stitched"
                        value="STITCHED"
                        variant={selectedType === "STITCHED" ? "dark" : "light"}
                      >
                        STITCHED
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </div>

                  <div className="space-y-2 mb-4">
                    <h4 className="text-md text-gray-700">Size:</h4>
                    <Form.Select
                      aria-label="Default select size"
                      value={selectedSize} // Controlled component
                      onChange={handleSizeChange} // Handle size change
                    >
                      <option value="DEFAULT">DEFAULT</option>
                      <option value="XS">XS</option>
                      <option value="S">S</option>
                      <option value="M">M</option>
                      <option value="L">L</option>
                      <option value="XL">XL</option>
                    </Form.Select>
                  </div>
                  <p className="text-sm text-black underline">
                    Size Chart
                  </p>

                  <div className="flex space-x-2 items-center flex-col">
                    <div>
                      <Button
                        variant="outline-secondary"
                        className="border"
                        onClick={() => handleQuantityChange(-1)}
                      >
                        -
                      </Button>
                      <span className="text-md mx-2">{quantity}</span>
                      <Button
                        variant="outline-secondary"
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </Button>
                    </div>
                    {/* Pass product, selectedType, selectedSize, and quantity to Thirdbuttonprop */}
                    <Thirdbuttonprop
                      product={product}
                      selectedType={selectedType}
                      selectedSize={selectedSize}
                      quantity={quantity}
                    />
                  </div>
                </div>
              </div>
              <Accordion className="sticky top-32">
                <Accordion.Item eventKey="0">
                  <Accordion.Header className="font-serif tracking-wider">
                    <HiOutlineTag className="w-10 h-6 " /> Description
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{description || "No description available."}</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header className="font-serif tracking-wider ">
                    <RiBox3Line className="w-10 h-6 " /> Product Details
                  </Accordion.Header>
                  <Accordion.Body>
                    <p>{productDetails || "No product details available."}</p>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header className="font-serif tracking-wider">
                    <PiAirplaneTiltLight className="w-10 h-6 " /> Delivery
                  </Accordion.Header>
                  <Accordion.Body>
                    {deliveryInfo || "Delivery information not available."}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header className="font-serif tracking-wider">
                    <GiReturnArrow className="w-10 h-6 " /> Returns and Exchange
                  </Accordion.Header>
                  <Accordion.Body>
                    {returnsExchange || "Returns and exchange policy not available."}
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header className="font-serif tracking-wider">
                    <BiLeaf className="w-10 h-6 " /> Care Instructions
                  </Accordion.Header>
                  <Accordion.Body>
                    {careInstructions || "Care instructions not available."}
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
        </Container>

        <hr />
      </div>
    </>
  );
}

export default ProductDetailPage;