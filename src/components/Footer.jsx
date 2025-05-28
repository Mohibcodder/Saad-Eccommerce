// src/app/components/Footer.jsx
'use client'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { FaFacebookF, FaYoutube, FaSnapchatGhost, FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { BsTiktok } from "react-icons/bs";
import Accordion from 'react-bootstrap/Accordion';

function Footer() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      <hr />
      {/* Desktop Footer */}
      <div className="hidden md:block">
        <Container className="mt-7">
          <Row>
            <Col sm={4}>
              <div className="d-flex">
                <ul className="list-unstyled">
                  <li className="mt-2 mb-9 text-lg font-normal text-black">
                    ABOUT
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/Whoweare"
                      // **IMPORTANT: ADD ! TO YOUR TAILWIND CLASSES IF THEY ARE NOT APPLYING**
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/OurResponsibility"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Our Responsibility
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/ServiceWeProvide"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Service We Provide
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/Careers"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/Legal"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* 2nd Column - Customer Service */}
            <Col sm={5}>
              <div className="d-flex">
                <ul className="list-unstyled">
                  <li className="mt-2 mb-9 text-lg font-normal tracking-wide text-black">
                    Customer Service
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/ContactUs"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/DispatchTimeline"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Dispatch Timeline
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="https://mail.google.com/mail/u/0/"
                      className="!text-gray-400 !no-underline hover:!text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Email: info@baroque.pk
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="tel:+923257001111"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Call: +92 325 700 1111
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="https://wa.me/923257001111"
                      className="!text-gray-400 !no-underline hover:!text-black"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WhatsApp: +92 325 7001111
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* 3rd Column - Policies */}
            <Col sm={3}>
              <div className="d-flex">
                <ul className="list-unstyled">
                  <li className="mt-2 mb-9 text-lg font-normal tracking-wide text-black">
                    Policies
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/PrivacyPolicy"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/Refundpolicy"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/ShippingPolicy"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/TermsofService"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li className="mb-2 text-sm">
                    <Link
                      href="/Exchangerefund"
                      className="!text-gray-400 !no-underline hover:!text-black"
                    >
                      Exchange Information
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          {/* Social Media Icons (Desktop) */}
          <div className="flex gap-4 p-3 pt-5 pb-4">
            <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </Link>
            <Link href="https://www.instagram.com/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
              <CiInstagram />
            </Link>
            <Link href="https://www.youtube.com/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </Link>
            <Link href="https://www.tiktok.com/en/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
              <BsTiktok />
            </Link>
            <Link href="https://www.snapchat.com/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
              <FaSnapchatGhost />
            </Link>
            <Link href="https://wa.me/923257001111" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp />
            </Link>
          </div>

          {/* Country Selector (Desktop) */}
          <button onClick={handleShow} className="pt-3 border-0 bg-transparent text-black cursor-pointer">
            <select className="border border-gray-300 rounded-md p-1 outline-none cursor-pointer">
              <option value="">Pakistan</option>
            </select>
          </button>
        </Container>
      </div>

      {/* Mobile Footer (Accordion) */}
      <Accordion defaultActiveKey="0" className="block md:hidden">
        {/* About Section */}
        <Accordion.Item eventKey="0">
          <Accordion.Header> About </Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li className="mb-2 text-sm">
                <Link
                  href="/Whoweare"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Who We Are
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/OurResponsibility"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Our Responsibility
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/ServiceWeProvide"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Service We Provide
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/Careers"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Careers
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/Legal"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Legal
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Customer Service Section */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>Customer Service</Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li className="mb-2 text-sm">
                <Link
                  href="/ContactUs"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Contact Us
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/DispatchTimeline"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Dispatch Timeline
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="https://mail.google.com/mail/u/0/"
                  className="!text-gray-400 !no-underline hover:!text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Email: info@baroque.pk
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="tel:+923257001111"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Call: +92 325 700 1111
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="https://wa.me/923257001111"
                  className="!text-gray-400 !no-underline hover:!text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: +92 325 7001111
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Policies Section */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>Policies</Accordion.Header>
          <Accordion.Body>
            <ul className="list-unstyled">
              <li className="mb-2 text-sm">
                <Link
                  href="/PrivacyPolicy"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/Refundpolicy"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Refund Policy
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/ShippingPolicy"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Shipping Policy
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/TermsofService"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Terms of Service
                </Link>
              </li>
              <li className="mb-2 text-sm">
                <Link
                  href="/Exchangerefund"
                  className="!text-gray-400 !no-underline hover:!text-black"
                >
                  Exchange Information
                </Link>
              </li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>

        {/* Social Media Icons (Mobile) */}
        <div className="flex justify-center gap-4 p-3 pt-5 pb-4">
          <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </Link>
          <Link href="https://www.instagram.com/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
            <CiInstagram />
          </Link>
          <Link href="https://www.youtube.com/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </Link>
          <Link href="https://www.tiktok.com/en/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
            <BsTiktok />
          </Link>
          <Link href="https://www.snapchat.com/" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
            <FaSnapchatGhost />
          </Link>
          <Link href="https://wa.me/923257001111" className="!text-gray-500 hover:!text-black" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </Link>
        </div>

        {/* Country Selector (Mobile) */}
        <button onClick={handleShow} className="pt-3 border-0 bg-transparent text-black cursor-pointer">
          <select className="border border-gray-300 rounded-md p-1 outline-none cursor-pointer">
            <option value="">Pakistan</option>
          </select>
        </button>
      </Accordion>

      {/* Modal (shared for both desktop and mobile) */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you in the right place?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please select your shipping country.</p>
          <p className="pt-3">
            Buy from the country of your choice. Remember that we can only ship
            your order to addresses located in the chosen country.
          </p>
          <h3 className="font-bold pt-3">Country</h3>
          <Form.Select
            aria-label="Select country in popup"
            className="mb-3 outline-0 bg-transparent"
            defaultValue="Pakistan"
          >
            <option>Pakistan</option>
            <option>India</option>
            <option>Dubai</option>
            <option>China</option>
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={handleClose}>
            Shop now
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Footer;