'use client'; // This is a client component

import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import Link from 'next/link'; // Use next/link
import { useCart } from '../../context/CartContext'; // Import useCart hook

function LastForm() {
  const { cartItems, getCartTotal, getTotalItems, clearCart } = useCart();

  const handleCompleteOrder = (e) => {
    e.preventDefault();
    // Here you would typically send the order to a backend
    // For now, let's just clear the cart and simulate a successful order.
    alert('Order Placed Successfully!');
    clearCart(); // Clear the cart after order completion
    // Optionally redirect to a thank you page
    // window.location.href = '/thank-you'; // Or use useRouter().push('/thank-you');
  };

  return (
    <Container fluid>
      {/* Logo */}
      <Row className="justify-content-center py-3 border-bottom">
        <Col xs="auto">
          <Link href="/"> {/* Use href for Next.js Link */}
            <img
              src="https://baroque.pk/cdn/shop/files/LOGO_PNG_V01.png?v=1689675712&width=180"
              alt="Logo"
            />
          </Link>
        </Col>
      </Row>

      <Row className="justify-content-center text-start">
        <Col lg={10}>
          <Row>
            {/* Left Side - Form */}
            <Col lg={6} className="pt-5">
              {/* Contact Section */}
              <div className="border-bottom pb-4">
                <h3 className="text-lg font-bold">Contact</h3>
                <Form>
                  <Form.Group controlId="formEmail" className="mb-3">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                  <Form.Group controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Email me with news and offers" />
                  </Form.Group>
                </Form>
              </div>

              {/* International Website Notice */}
              <div className="my-4 bg-light p-3 rounded">
                <p>
                  <strong>International Website</strong>
                  <br />
                  To deliver products outside of Pakistan, visit our International Website:
                  <a href="https://baroque.com.pk" target="_blank" rel="noreferrer">
                    https://baroque.com.pk
                  </a>
                </p>
              </div>

              {/* Delivery Section */}
              <div className="mb-5">
                <h3 className="text-lg font-bold">Delivery</h3>
                <Form>
                  <Form.Group controlId="formCountry" className="mb-3">
                    <Form.Control as="select">
                      <option>Pakistan</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group controlId="formFirstLastName" className="mb-3">
                    <Row>
                      <Col md={6}>
                        <Form.Control type="text" placeholder="First name" />
                      </Col>
                      <Col md={6}>
                        <Form.Control type="text" placeholder="Last name" />
                      </Col>
                    </Row>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Address" />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Apartment, suite, etc. (optional)"
                    />
                  </Form.Group>

                  <Row className="mb-3">
                    <Col md={6}>
                      <Form.Control type="text" placeholder="City" />
                    </Col>
                    <Col md={6}>
                      <Form.Control type="text" placeholder="Postal code (optional)" />
                    </Col>
                  </Row>

                  <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Phone" />
                  </Form.Group>

                  <Form.Group controlId="formSaveInfo">
                    <Form.Check type="checkbox" label="Save this information for next time" />
                  </Form.Group>
                </Form>
              </div>

              {/* City Selection */}
              <div className="mb-4">
                <Form.Group>
                  <Form.Label className="font-semibold">Select your city</Form.Label>
                  <Form.Select>
                    <option>Select a city</option>
                    <option>Lahore</option>
                    <option>Karachi</option>
                    <option>Islamabad</option>
                  </Form.Select>
                </Form.Group>
              </div>

              {/* Shipping Method */}
              <div className="mb-4">
                <Form.Group>
                  <Form.Label className="font-semibold">Shipping method</Form.Label>
                  <div className="border p-3 rounded">
                    <div className="d-flex justify-content-between">
                      <p className="mb-0">Local Delivery</p>
                      <p className="mb-0 font-weight-bold">FREE</p>
                    </div>
                  </div>
                </Form.Group>
              </div>

              {/* Payment Section */}
              <div className="mb-4">
                <h5 className="font-semibold">Payment</h5>
                <p className="text-muted">All transactions are secure and encrypted.</p>
                <div className="border p-3 mb-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Cash on Delivery (COD)"
                    name="paymentMethod"
                    defaultChecked // Set COD as default
                  />
                </div>
                <div className="border p-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Safepay Checkout - pay with debit & credit cards"
                    name="paymentMethod"
                  />
                  <div className="d-flex mt-2">
                    <img
                      src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/netbanking.C9e9yzjv.svg"
                      alt="Net Banking"
                      className="mr-2"
                      width="40"
                    />
                    <img
                      src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/visa.sxIq5Dot.svg"
                      alt="Visa"
                      className="mr-2"
                      width="40"
                    />
                    <img
                      src="https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/master.CzeoQWmc.svg"
                      alt="Mastercard"
                      width="40"
                    />
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div className="mb-4">
                <h5 className="font-semibold">Billing address</h5>
                <div className="border p-3 mb-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Same as shipping address"
                    name="billingAddress"
                    required
                    defaultChecked // Set "Same as shipping" as default
                  />
                </div>
                <div className="border p-3 rounded">
                  <Form.Check
                    type="radio"
                    label="Use a different billing address"
                    name="billingAddress"
                    required
                  />
                </div>
              </div>

              {/* Complete Order Button */}
              <Button type="submit" className="w-100 btn-dark" onClick={handleCompleteOrder}>
                Complete order
              </Button>
            </Col>

            {/* Right Side - Cart Summary */}
            <Col lg={6} className="sticky-top h-100 ">
              <Card className="p-4 shadow-sm ">
                {cartItems.length === 0 ? (
                  <p className="text-center text-gray-500">Your cart is empty.</p>
                ) : (
                  cartItems.map((item) => (
                    <div key={`${item.id}-${item.selectedType}-${item.selectedSize}`} className="d-flex justify-content-between mb-3 ">
                      <div className="d-flex align-items-center"> {/* Added align-items-center for vertical alignment */}
                        <img
                          src={item.img}
                          alt={item.name}
                          className="mr-3 rounded"
                          width="50"
                          height="50" // Added height for consistency
                          style={{ objectFit: 'cover' }} // Ensure image covers the area
                        />
                        <div>
                          <p className="mb-0 font-weight-bold">{item.name}</p>
                          <small className="text-muted">{item.selectedType} / {item.selectedSize} (x{item.quantity})</small>
                        </div>
                      </div>
                      <p className="mb-0">Rs {(item.price * item.quantity).toLocaleString()}</p>
                    </div>
                  ))
                )}

                {/* Discount Code Section */}
                <Form.Group controlId="formDiscount" className="d-flex my-3">
                  <Form.Control
                    type="text"
                    placeholder="Discount code or gift card"
                  />
                  <Button variant="outline-secondary" className="ml-2">
                    Apply
                  </Button>
                </Form.Group>

                {/* Subtotal */}
                <div className="d-flex justify-content-between">
                  <p>Subtotal ({getTotalItems()} items)</p>
                  <p>Rs {getCartTotal().toLocaleString()}</p>
                </div>

                {/* Shipping */}
                <div className="d-flex justify-content-between">
                  <p>Shipping</p>
                  <p>FREE</p>
                </div>

                {/* Total */}
                <div className="d-flex justify-content-between font-weight-bold border-top pt-3">
                  <p>Total</p>
                  <p>Rs {getCartTotal().toLocaleString()}</p>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="text-center mt-4">
        <a href="#" className="text-muted mx-2">Refund policy</a>
        <a href="#" className="text-muted mx-2">Shipping policy</a>
        <a href="#" className="text-muted mx-2">Privacy policy</a>
        <a href="#" className="text-muted mx-2">Terms of service</a>
        <a href="#" className="text-muted mx-2">Contact information</a>
      </div>
    </Container>
  );
}

export default LastForm;