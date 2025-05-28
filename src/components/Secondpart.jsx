// src/app/components/Secondpart.jsx
'use client';

import { useState } from 'react';
import Link from 'next/link'; // Import Next.js Link

function Secondpart({ product }) {
  const [currentSrc, setCurrentSrc] = useState(product.img);

  return (
    <div className='product-card'>
      {/* Link to the dynamic product detail page */}
      <Link href={`/products/${product.id}`} passHref>
        <img
          className='cursor-pointer w-full object-cover'
          alt={product.name}
          src={currentSrc}
          onMouseEnter={() => product.imgHover && setCurrentSrc(product.imgHover)}
          onMouseLeave={() => setCurrentSrc(product.img)}
        />
      </Link>
      <div className='text-center mt-2'>
        <p className='font-semibold text-lg'>{product.name}</p>
        <p className='text-gray-700'>PKR {product.price.toLocaleString()}</p>
        <p className='text-sm text-gray-500'>{product.brand}</p>
      </div>
    </div>
  );
}

export default Secondpart;