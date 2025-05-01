'use client'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { GiSewingMachine } from "react-icons/gi";
import Link from "next/link";
import { useState } from "react";

function Email() {
  const [showContent, setshowContent] = useState(1); // Tracks which item to display
  const [email, setEmail] = useState("");

  const DotClick = (item) => {
    setshowContent(item); // Update active content based on clicked dot
  };

 

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Replace localhost URL with your local dev URL or Vercel URL in production
    const response = await fetch("http://localhost:5173/api/helo", { // Adjust URL as needed
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }), // Send email only
    });
  
    const data = await response.json(); // Parse the response
  
    if (response.ok) {
      alert(data.message); // Success message
    } else {
      alert(data.error || "Something went wrong"); // Error message
    }
  };
  

  return (
    <>
        <div className="mt-10">
        <p className=" text-center mt-24  text-xl md:text-3xl italic font-normal  tracking-widest	">
          SUBSCRIBE FOR NEWSLETTER
        </p>
      </div>

      

      <Container fluid="md">
      <Row>
        <Col>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="size-6/12 mt-3 mb-4 w-[400px] p-[10px] border border-black"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button
                type="submit"
                variant="dark"
                className="h-[43px] w-[260px] bg-black rounded-none tracking-tight mt-3 ml-4"
              >
                SUBSCRIBE
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>

      <div className="mt-10 mb-20 hidden  md:block">
        <Container>
          <Row>
            <Col md={3}>
              <div className="d-flex flex-col justify-center">
                <svg
                  className="h-5 mt-5  mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                </svg>
                <p className="font-sans text-xl	font-light text-center	tracking-wider">
                  
                  Priority Stitching
                </p>
                <p className="font-sans font-medium	text-center tracking-wider">
                  Receive your stitched orders more quickly in a timeline of 2
                  weeks
                </p>
              </div>
            </Col>

            {/* 2nd */}

            <Col md={3}>
              <div className="d-flex flex-col items-center justify-center mt-4">
                <GiSewingMachine className=" h-10 w-7 mb-7" />
                <p className="font-sans text-xl font-light tracking-wider">
                  Custom Size
                </p>
                <p className="font-sans font-medium tracking-wide text-center">
                  Get your outfit tailored to perfection as per your desired
                  measurements
                </p>
              </div>
            </Col>

       
            <Col md={3}>
              <div className="d-flex flex-col justify-center ">
                <svg
                  className="h-5 mt-5 mb-4 "
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                  fill="black"
                >
                  <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
                </svg>
                <p className="font-sans text-xl text-center	font-light	tracking-wider">
                  
                  Free Shipping
                </p>
                <p className="font-sans font-medium text-center	 tracking-wide">
                  We provide free shipping all across Pakistan on all of our
                  orders
                </p>
              </div>
            </Col>

  

            <Col md={3}>
              <div className="d-flex flex-col text-center justify-center">
                <svg
                  className="h-5 mt-5 mb-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
                </svg>
                <p className="font-sans text-xl	font-light	tracking-wider">
                  
                  ORDER EXCHANGE
                </p>
                <p className="font-sans font-medium	 tracking-wider">
                  For a hassle free exchange service, fill out the  
                </p>
                  <Link href="/Exchangeform" className="text-black underline">
                    exchange form
                  </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
{/* // */}
<div className="flex justify-center">
<div className="block md:hidden w-[400px] text-center  ">
      <Col>
        <Row>
          {showContent === 1 && (
            <>
              <svg
                className="h-5 mt-5 mb-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
              </svg>
              <p className="font-sans text-xl font-light text-center tracking-wider">
                Priority Stitching
              </p>
              <p className="font-sans font-small text-center p-3">
                Receive your stitched orders more quickly in a timeline of 2 weeks
              </p>
            </>
          )}
        </Row>
        <Row>{showContent === 2 && (
          <div className="d-flex flex-col items-center justify-center mt-4">
          <GiSewingMachine className=" h-10 w-7 mb-7" />
          <p className="font-sans text-xl font-light tracking-wider">
            Custom Size
          </p>
          <p className="font-sans text-sm text-center p-3">
            Get your outfit tailored to perfection as per your desired
            measurements
          </p>
        </div>
        )}</Row>
        <Row>{showContent === 3 && (
           <div className="d-flex flex-col justify-center ">
           <svg
             className="h-5 mt-5 mb-4 "
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 640 512"
             fill="black"
           >
             <path d="M112 0C85.5 0 64 21.5 64 48l0 48L16 96c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 208 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 160l-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l16 0 176 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 224l-48 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l48 0 144 0c8.8 0 16 7.2 16 16s-7.2 16-16 16L64 288l0 128c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L112 0zM544 237.3l0 18.7-128 0 0-96 50.7 0L544 237.3zM160 368a48 48 0 1 1 0 96 48 48 0 1 1 0-96zm272 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0z" />
           </svg>
           <p className="font-sans text-xl text-center	font-light	tracking-wider">
             
             Free Shipping
           </p>
           <p className="font-sans font-small text-center p-3">
             We provide free shipping all across Pakistan on all of our
             orders
           </p>
         </div>
      
      )}</Row>
        <Row>{showContent === 4 && (
          <div className="d-flex flex-col text-center justify-center">
          <svg
            className="h-5 mt-5 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M96 128a128 128 0 1 0 256 0A128 128 0 1 0 96 128zm94.5 200.2l18.6 31L175.8 483.1l-36-146.9c-2-8.1-9.8-13.4-17.9-11.3C51.9 342.4 0 405.8 0 481.3c0 17 13.8 30.7 30.7 30.7l131.7 0c0 0 0 0 .1 0l5.5 0 112 0 5.5 0c0 0 0 0 .1 0l131.7 0c17 0 30.7-13.8 30.7-30.7c0-75.5-51.9-138.9-121.9-156.4c-8.1-2-15.9 3.3-17.9 11.3l-36 146.9L238.9 359.2l18.6-31c6.4-10.7-1.3-24.2-13.7-24.2L224 304l-19.7 0c-12.4 0-20.1 13.6-13.7 24.2z" />
          </svg>
          <p className="font-sans text-xl	font-light	tracking-wider">
            
            ORDER EXCHANGE
          </p>
          <p className="font-sans text-sm text-center p-3">
            For a hassle free exchange service, fill out the   
            <Link href="/Exchangeform" className="text-black underline">
              exchange form
            </Link>
          </p>
        </div>
        )}</Row>
      </Col>

      <div className="size-20 font-bold text-4xl flex gap-3 justify-center mt-6 w-96 ">
        <span
          onClick={() => DotClick(1)}
          className={`cursor-pointer ${showContent === 1 ? "text-black" : "text-gray-400"}`}
        >
          .
        </span>
        <span
          onClick={() => DotClick(2)}
          className={`cursor-pointer ${showContent === 2 ? "text-black" : "text-gray-400"}`}
        >
          .
        </span>
        <span
          onClick={() => DotClick(3)}
          className={`cursor-pointer ${showContent === 3 ? "text-black" : "text-gray-400"}`}
        >
          .
        </span>
        <span
          onClick={() => DotClick(4)}
          className={`cursor-pointer ${showContent === 4 ? "text-black" : "text-gray-400"}`}
        >
          .
        </span>
      </div>
    </div>
    </div>
    </>
  )
}

export default Email