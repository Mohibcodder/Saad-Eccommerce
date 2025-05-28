// src/app/components/Thirdpart.jsx
import React from 'react';
// import Image from 'next/image'; // Use next/image for optimized images

function Thirdpart({ src, alt = "" }) { // Accept src prop and optional alt text
  return (
    <div className="product-image-wrapper">
      <img
        src={src}
        alt={alt}
        width={1000} // Set appropriate width for your images
        height={1000} // Set appropriate height (adjust aspect ratio as needed)
        layout="responsive" // Makes image responsive
        className='cursor-pointer'
      />
    </div>
  );
}

export default Thirdpart;