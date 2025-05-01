'use client'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Link from "next/link";
import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";
import { FaFacebookF,FaYoutube,FaSnapchatGhost,FaWhatsapp } from "react-icons/fa";
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
      <div className=" hidden md:block	">
        <Container className="mt-7">
          <Row>
            <Col sm={4}>
              <div className="d-flex">
              <ul className="text-gray-400">
                  <li className="mt-2 mb-9 text-lg font-normal text-black">
                    ABOUT
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/Whoweare"
                      className="no-underline"

                    >
                      Who We Are
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/OurResponsibility"
                      className="no-underline"

                    >
                      Our Responsibility
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href="/ServiceWeProvide"
                      className="no-underline "

                    >
                      Service We Provide
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href="/Careers"
                      className="no-underline "

                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/Legal"
                      className="no-underline"

                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* 2nd */}
            <Col sm={5}>
              <div className="d-flex">
                <ul className="text-gray-400">
                  <li className="mt-2 mb-9 text-lg font-normal tracking-wide text-black">
                    Customer Service
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/ContactUs"
                      className="no-underline "
                     
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/DispatchTimeline"
                      className="no-underline"
                    
                    >
                      Dispatch Timeline
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="https://mail.google.com/mail/u/0/"
                      className="no-underline"
                     
                    >
                      Email: info@baroque.pk
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="https://web.whatsapp.com/"
                      className="no-underline "
                     
                    >
                      Call: +92 325 700 1111
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="https://web.whatsapp.com/"
                      className="no-underline"
                      
                    >
                      WhatsApp: +92 325 7001111
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

            {/* 3rd */}
            <Col sm={3}>
            <div className="d-flex">
            <ul className="text-gray-400">
            <li className="mt-2 mb-9 text-lg font-normal tracking-wide text-black">
                    Policies
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href="/PrivacyPolicy"
                      className="no-underline"
                    
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link
                      href="/Refundpolicy"
                      className="no-underline"
                     
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/ShippingPolicy"
                      className="no-underline"
                     
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/TermsofService"
                      className="no-underline"
                   
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link
                      href="/Exchangerefund"
                      className="no-underline"
                      
                    >
                      Exchange Information
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>


        <div className="flex gap-4 p-3 pt-5 pb-4 text-gray-500">
         <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className=" hover:text-black"> <FaFacebookF />
         </Link>
        <Link href="https://www.instagram.com/"  className=" hover:text-black">  <CiInstagram />  </Link>
        <Link href="https://www.youtube.com/"  className=" hover:text-black">  <FaYoutube />  </Link>
        <Link href="https://www.tiktok.com/en/"  className=" hover:text-black">  <BsTiktok />  </Link>
        <Link href="https://www.snapchat.com/"  className=" hover:text-black">  <FaSnapchatGhost />  </Link>
         <Link href="https://web.whatsapp.com/"  className=" hover:text-black"> <FaWhatsapp /></Link>
        </div>



          {/* Modal Trigger */}
       <button onClick={handleShow} className="pt-3">

       
            <select>
            <option value="" >Pakistan</option>
            </select>
            </button>   
        

          {/* Modal */}
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
        </Container>
      </div>


      
      <Accordion defaultActiveKey="0" className="block md:hidden">
      <Accordion.Item >
        <Accordion.Header> About </Accordion.Header>
        <Accordion.Body>
        <Col sm={4}>
              <div className="d-flex 	">
              <ul className="text-gray-400">
                 
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/Whoweare"
                      className="no-underline"
                      
                    >
                      Who We Are
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/OurResponsibility"
                      className="no-underline"
                      
                    >
                      Our Responsibility
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href="/ServiceWeProvide"
                      className="no-underline "
                    
                    >
                      Service We Provide
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href="/Careers"
                      className="no-underline "
                      
                    >
                      Careers
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/Legal"
                      className="no-underline"
                      
                    >
                      Legal
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Customer Service</Accordion.Header>
        <Accordion.Body>
       
        <Col sm={5}>
              <div className="d-flex 	">
              <ul className="text-gray-400">
                 
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/ContactUs"
                      className="no-underline "
                
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/DispatchTimeline"
                      className="no-underline"
                
                    >
                      Dispatch Timeline
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="https://mail.google.com/mail/u/0/"
                      className="no-underline"
                
                    >
                      Email: info@baroque.pk
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="https://web.whatsapp.com/"
                      className="no-underline "
                
                    >
                      Call: +92 325 700 1111
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="https://web.whatsapp.com/"
                      className="no-underline"
                                      >
                      WhatsApp: +92 325 7001111
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Policies</Accordion.Header>
        <Accordion.Body>
        <Col sm={3}>
              <div className="d-flex flex-col justify-center mr-10	">
              <ul className="text-gray-400">
         
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href="/PrivacyPolicy"
                      className="no-underline"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link
                      href="/Refundpolicy"
                      className="no-underline"
                    >
                      Refund Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/ShippingPolicy"
                      className="no-underline"
                    >
                      Shipping Policy
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link href ="/TermsofService"
                      className="no-underline"
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li className="mb-2 text-sm hover:text-black">
                    <Link
                      href="/Exchangerefund"
                      className="no-underline"
                      
                    >
                      Exchange Information
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>

        </Accordion.Body>
      </Accordion.Item>



      {/* for icons */}

      
      <div className="flex gap-4 p-3 pt-5 pb-4 text-gray-500">
         <Link href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F" className=" hover:text-black"> <FaFacebookF />
         </Link>
        <Link href="https://www.instagram.com/"  className=" hover:text-black">  <CiInstagram />  </Link>
        <Link href="https://www.youtube.com/"  className=" hover:text-black">  <FaYoutube />  </Link>
        <Link href="https://www.tiktok.com/en/"  className=" hover:text-black">  <BsTiktok />  </Link>
        <Link href="https://www.snapchat.com/"  className=" hover:text-black">  <FaSnapchatGhost />  </Link>
         <Link href="https://web.whatsapp.com/"  className=" hover:text-black"> <FaWhatsapp /></Link>
        </div>


      {/* for country */}

      <button onClick={handleShow} className="pt-3">

       
<select>
<option value="" >Pakistan</option>
</select>
</button>   


{/* Modal */}
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



    </Accordion>
    </>
  );
}

export default Footer;
