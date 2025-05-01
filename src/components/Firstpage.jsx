'use client'
import "bootstrap/dist/css/bootstrap.min.css";
import Smallpics from "./Smallpics";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Email from "./Email";

import MVideo from "./MVideo";
import Mainpic from "./Mainpic";
import Small from "./Small";
import Link from "next/link";


function Firstpage() {
  return (
    <>
        
    <div className="App">

    
      <div     
        className=" mainpic position cursor-pointer	hidden  md:block h-1/5 "
      >
        <Mainpic
          img
          src="https://baroque.pk/cdn/shop/files/MAin_BAnner68.jpg?v=1726313443&width=2000"/>
      </div>

  
      <div
   
        className=" position-relative cursor-pointer	block md:hidden">
        <Mainpic
          img
          src="https://baroque.pk/cdn/shop/files/mobilebanner_68_ebbfd7ed-c640-4682-b4c2-e5984826166a.jpg?v=1726313560&width=800"
        />
      </div>

  

      <div className=" secpic ml-9 mr-9 ">
        <Row>
          <Col md={4}>
           <Link href="/Readytowear"> <Smallpics
              img
              src="https://baroque.pk/cdn/shop/files/02_Banner186.jpg?v=1725974261&width=800"
              title="READY TO WEAR"
              Button="SHOP NOW"
            />
            </Link>
          </Col>

      
          <Col md={4}>
          <Link href="/Shawls">   <Smallpics
              img
              src="https://baroque.pk/cdn/shop/files/02_Banner15_a036f587-c326-4c84-b635-f1353a2df2fa.jpg?v=1725974235&width=800"
              title="SHAWLS"
              Button="SHOP NOW"
            /></Link>
          </Col>
      
          <Col md={4}>
          <Link href="/Chantelle">   <Smallpics
              img
              src="https://baroque.pk/cdn/shop/files/02_Banner125.jpg?v=1726313623&width=800"
              title="CHANTELLE"
              Button="SHOP NOW"
            /></Link>
          </Col>
        </Row>
      </div>

      <Small />

      <hr />
      
      <div className=" ml-5 mr-5">
        <Row>
          <Col sm={4}>
            <MVideo

              video
              src="https://baroque.pk/cdn/shop/videos/c/vp/8fc59a5cb22a4beb84cae8305256b751/8fc59a5cb22a4beb84cae8305256b751.HD-1080p-2.5Mbps-28444638.mp4?v=0"
              muted={true}
              autoPlay={true}
              Button="CLIENT LOVE"
            />
          </Col>

          <Col sm={4}>
            <MVideo
              video
              src="https://baroque.pk/cdn/shop/videos/c/vp/0bf46de8408d43f2a95a61ce1db9cf76/0bf46de8408d43f2a95a61ce1db9cf76.HD-720p-1.6Mbps-34838812.mp4?v=0"
              muted={true}
              autoPlay={true}
              Button="CELEBRITY STYLE"
            />
          </Col>

          <Col sm={4}>
            <MVideo
              video
              src="https://baroque.pk/cdn/shop/videos/c/vp/c4f8512cecd141088ba3cdfe059a0c55/c4f8512cecd141088ba3cdfe059a0c55.HD-1080p-7.2Mbps-34838829.mp4?v=0"
              muted={true}
              autoPlay={true}
              Button="CELEBRITY STYLE"
            />
          </Col>
        </Row>
      </div>

      <Email/>
      
    </div>



    </>
  )
}

export default Firstpage
