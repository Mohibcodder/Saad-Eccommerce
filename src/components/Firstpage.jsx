// src/app/components/Firstpage.jsx
'use client'; // This is essential since you're using Link and potentially other client-side features

import "bootstrap/dist/css/bootstrap.min.css";
import Smallpics from "./Smallpics"; // Path relative to Firstpage.jsx
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Import other components you're using (ensure paths are correct relative to Firstpage.jsx)
import Email from "./Email";
import MVideo from "./MVideo";
import Mainpic from "./Mainpic";
import Small from "./Small";
import Link from "next/link"; // Next.js Link component

function Firstpage() {
  const categories = [
    {
      href: "/Readytowear",
      src: "https://baroque.pk/cdn/shop/files/02_Banner186.jpg?v=1725974261&width=800",
      title: "READY TO WEAR",
    },
    {
      href: "/Unstitched",
      src: "https://baroque.pk/cdn/shop/files/02_Banner125.jpg?v=1726313623&width=800", // **Replace with your actual Unstitched image**
      title: "UNSTITCHED",
    },
    {
      href: "/Shawls",
      src: "https://baroque.pk/cdn/shop/files/02_Banner15_a036f587-c326-4c84-b635-f1353a2df2fa.jpg?v=1725974235&width=800",
      title: "SHAWLS",
    },
    {
      href: "/Chantelle",
      src: "https://baroque.pk/cdn/shop/files/02_Banner125.jpg?v=1726313623&width=800",
      title: "CHANTELLE",
    },
    {
      href: "/SpecialPrices",
      src: "https://baroque.pk/cdn/shop/files/special_prices_banner_example.jpg?v=1234567890&width=800", // **Replace with your actual Special Prices image**
      title: "SPECIAL PRICES",
    },
    {
      href: "/Bottoms",
      src: "https://baroque.pk/cdn/shop/files/bottoms_banner_example.jpg?v=1234567890&width=800", // **Replace with your actual Bottoms image**
      title: "BOTTOMS",
    },
    {
      href: "/Dupattas",
      src: "https://baroque.pk/cdn/shop/files/dupattas_banner_example.jpg?v=1234567890&width=800", // **Replace with your actual Dupattas image**
      title: "DUPATTAS",
    },
  ];

  // You can show all categories on the homepage, or just the first 3 as before.
  // For now, let's assume you still want to show only the first 3.
  const categoriesToShowOnHomepage = categories.slice(0, 3); // Displays only the first 3 categories

  return (
    <>
      <div className="App">
        <div className="mainpic position cursor-pointer hidden md:block h-1/5">
          <Mainpic
            img
            src="https://baroque.pk/cdn/shop/files/MAin_BAnner68.jpg?v=1726313443&width=2000"
          />
        </div>

        <div className="position-relative cursor-pointer block md:hidden">
          <Mainpic
            img
            src="https://baroque.pk/cdn/shop/files/mobilebanner_68_ebbfd7ed-c640-4682-b4c2-e5984826166a.jpg?v=1726313560&width=800"
          />
        </div>

        <div className="secpic ml-9 mr-9">
          <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Shop By Category</h2>
          <Row>
            {/* Map through the categories to render them dynamically */}
            {categoriesToShowOnHomepage.map((category) => (
              <Col md={4} key={category.href}> {/* Use category.href as key as it's unique */}
                <Link href={category.href}>
                  <Smallpics
                    img
                    src={category.src}
                    title={category.title}
                    Button="SHOP NOW"
                  />
                </Link>
              </Col>
            ))}
          </Row>
          {/* Optional: Add a link to a separate "All Categories" page if needed */}
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/all-categories"> {/* You would create src/app/all-categories/page.js for this */}
              <button style={{ padding: '10px 20px', fontSize: '1rem', cursor: 'pointer' }}>View All Categories</button>
            </Link>
          </div>
        </div>

        <Small />

        <hr />

        <div className="ml-5 mr-5">
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

        <Email />
      </div>
    </>
  );
}

export default Firstpage;