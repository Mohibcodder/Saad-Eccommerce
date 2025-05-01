// import React from 'react';
'use client'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/esm/Container';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
function Small() {
  return (
    <>
      <Container style={{ paddingTop: '60px', textAlign: 'center', fontSize: '30px', paddingBottom: '10px' }}>
        <Row>
          <Col className='underline mb-10 	font-serif	'>SHOP THE LOOK</Col>
        </Row>
        
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <Container>
              <Row>

                <Col md = {1}></Col>
                <Col md= {6} >
                  <Image  height={270} width={450} className='ml-2'  src="https://baroque.pk/cdn/shop/files/Shop_The_Look76.jpg?v=1725975148&width=700" />
                </Col>
                <Col  className='mt-10 flex flex-col justify-center items-center' md = {4}>
                  <Image className=' hidden md:block' height={250} width={250}  src="https://baroque.pk/cdn/shop/files/24_d8ca67ea-d0ee-48da-95db-a57ed8b3055f.jpg?v=1725975148" />
                  <p className='text-sm text-center  mt-1 hidden md:block  '>EMBROIDERED PRINTED LAWN UF-711</p>
                  <p className='text-sm text-center  hidden md:block'>PXR 8,990.00</p>

                  <Link href="/Thirdpage">     <Button
          className="mt-3"
          style={{
            height: '44px',
            width: '190px',
            border: '1px solid black', // Correct border property
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '0px',
            letterSpacing: '0.005em',
            transition: 'background-color 0.2s ease all', // Ensure transition is smooth
          }}

        >
          VIEW PRODUCTS
        </Button>
        </Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>

          
            {/* 2nd slider */}


            <Carousel.Item>
            <Container>
              <Row>

                <Col md = {1}></Col>
                <Col md= {6} >
                  <Image  height={270} width={450} className='ml-2'  src="https://baroque.pk/cdn/shop/files/Shop_The_Look75.jpg?v=1725265568&width=800" />
                </Col>
                <Col  className='mt-10 flex flex-col justify-center items-center' md = {4}>
                  <Image className=' hidden md:block' height={250} width={250}  src="https://baroque.pk/cdn/shop/files/133_b58ef877-3768-4a51-be77-57b70661e81e.jpg?v=1724493924&width=1000" />
                  <p className='text-sm text-center  mt-1 hidden md:block  '>EMBROIDERED PRINTED LAWN UF-711</p>
                  <p className='text-sm text-center  hidden md:block'>PXR 8,990.00</p>

              <Link href="/Thirdpage">    <Button
          className="mt-3"
          style={{
            height: '44px',
            width: '190px',
            border: '1px solid black', // Correct border property
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '0px',
            letterSpacing: '0.005em',
            transition: 'background-color 0.2s ease all', // Ensure transition is smooth
          }}

        >
          VIEW PRODUCTS
        </Button>
        </Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>


          {/* 3rd slider */}


          <Carousel.Item>
            <Container>
              <Row>

                <Col md = {1}></Col>
                <Col md= {6} >
                  <Image  height={270} width={450} className='ml-2'  src="https://baroque.pk/cdn/shop/files/Shop_The_Look77.jpg?v=1725975311&width=800" />
                </Col>
                <Col  className='mt-10 flex flex-col justify-center items-center' md = {4}>
                  <Image className=' hidden md:block' height={250} width={250}  src="https://baroque.pk/cdn/shop/files/62_9bb5b00f-523f-4430-86e6-54b287245c7b.jpg?v=1725626909&width=1000" />
                  <p className='text-sm text-center  mt-1 hidden md:block  '>EMBROIDERED PRINTED LAWN UF-711</p>
                  <p className='text-sm text-center  hidden md:block'>PXR 8,990.00</p>

                  <Link href="/Thirdpage">        <Button
          className="mt-3"
          style={{
            height: '44px',
            width: '190px',
            border: '1px solid black', // Correct border property
            backgroundColor: 'black',
            color: 'white',
            borderRadius: '0px',
            letterSpacing: '0.005em',
            transition: 'background-color 0.2s ease all', // Ensure transition is smooth
          }}

        >
          VIEW PRODUCTS
        </Button>
        </Link>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>


        </Carousel>
      </Container>
    </>
  );
}


export default Small;
