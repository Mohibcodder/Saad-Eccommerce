// src/data/products.js

export const allProducts = [
  // --- READY TO WEAR ---
  {
    id: 'rtw-1',
    category: 'Readytowear',
    name: 'Elegant Ready Wear Dress',
    price: 5999,
    sku: 'BQU-RTW-D5999-01',
    piece: '2 Piece',
    img: 'https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=400', // Ready to wear dress
    imgHover: 'https://baroque.pk/cdn/shop/files/43_5e82d93e-481b-4c53-9c9e-72067008c85e.jpg?v=1705564154&width=1000', // Hover image
    additionalImages: [
      'https://images.unsplash.com/photo-1627918542261-26c63b46985a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1627918542261-26c63b46985a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      'https://images.unsplash.com/photo-1627918542261-26c63b46985a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    ],
    brand: 'READY TO WEAR',
    availability: 'In Stock',
    productType: 'Dress',
    fabric: 'Silk',
    description: 'This elegant ready-to-wear dress features a timeless design with intricate embroidery. Perfect for evening events.',
    productDetails: 'Silk fabric, embellished neckline, full sleeves. Available in sizes S, M, L.',
    deliveryInfo: 'Dispatch time: Within 1 week. Free shipping available on orders above PKR 5000.',
    returnsExchange: '10-days exchange policy. Damaged/missing item concerns within 48 hours. See policy for details.',
    careInstructions: 'Dry clean only. Iron at moderate temperature. Do not bleach.',
  },
 

  // --- UNSTITCHED ---
  {
    id: 'unstitched-1',
    category: 'Unstitched',
    name: 'Unstitched Lawn Suit',
    price: 3200,
    sku: 'BQU-UNST-L3200-01',
    piece: '3 Piece',
    img: 'https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=400', // Unstitched lawn fabric
    imgHover: 'https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=1000', // Hover
    additionalImages: [
    ],
    brand: 'UNSTITCHED',
    availability: 'In Stock',
    productType: 'Unstitched Suit',
    fabric: 'Lawn',
    description: 'High-quality unstitched lawn fabric, perfect for creating a custom suit. Includes material for shirt, trousers, and dupatta.',
    productDetails: 'Printed lawn shirt (3m), plain lawn trousers (2.5m), printed lawn dupatta (2.5m).',
    deliveryInfo: 'Dispatch time: 2-3 business days. Free shipping on orders above PKR 5000.',
    returnsExchange: '10-days exchange policy for unused and unstitched fabric. See policy for details.',
    careInstructions: 'Hand wash or machine wash cold. Do not tumble dry. Iron at low temperature.',
  },

  // --- SHAWLS ---
  {
    id: 'shawl-1',
    category: 'Shawls',
    name: 'EMBROIDERED VELVET SHAWL VS-33',
    price: 19990,
    sku: 'BQU-SHWL-V19990-01',
    piece: '1 Piece',
    img: 'https://baroque.pk/cdn/shop/files/71_734b1969-aebe-442c-a05e-1f7c6add575d.jpg?v=1705736543&width=400', // Velvet shawl
    imgHover: 'https://baroque.pk/cdn/shop/files/81_bda2ea26-0a1f-47d0-83b1-4a65bda38160.jpg?v=1705564318&width=1000', // Hover
    additionalImages: [],
    brand: 'SHAWLS',
    availability: 'In Stock',
    productType: 'Shawl',
    fabric: 'Velvet',
    description: 'Exquisitely embroidered velvet shawl, perfect for adding a touch of elegance to any outfit.',
    productDetails: 'Soft velvet fabric, intricate gold embroidery, generous size (2.5m x 1.2m).',
    deliveryInfo: 'Dispatch time: Within 1 week. Free shipping available.',
    returnsExchange: '10-days exchange policy. See policy for details.',
    careInstructions: 'Dry clean only.',
  },


  // --- CHANTELLE ---
  {
    id: 'chantelle-1',
    category: 'Chantelle',
    name: 'Chantelle Embroidered Dress',
    price: 12500,
    sku: 'BQU-CHAN-D12500-01',
    piece: '2 Piece',
    img: 'https://baroque.pk/cdn/shop/files/01_d6888945-3a13-4ed1-bd17-da18cde3f068.jpg?v=1705561039&width=400', // Chantelle dress
    imgHover: 'https://baroque.pk/cdn/shop/files/06_07e8b545-794a-41e5-bfef-19770d37ad20.jpg?v=1705561039&width=1000', // Hover
    additionalImages: [
      'https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=400',
      'https://baroque.pk/cdn/shop/files/20_61db9535-36b9-4c8f-912b-a04110ca1593.jpg?v=1705564118&width=1000',
    ],
    brand: 'CHANTELLE',
    availability: 'In Stock',
    productType: 'Dress',
    fabric: 'Organza',
    description: 'An elegant Chantelle dress with delicate organza fabric and beautiful embroidery. Perfect for semi-formal events.',
    productDetails: 'Organza shirt with embroidered panels, raw silk trousers.',
    deliveryInfo: 'Dispatch time: 1 week. Standard shipping.',
    returnsExchange: '10-days exchange policy. See policy for details.',
    careInstructions: 'Dry clean only. Iron with care.',
  },

  // --- SPECIAL PRICES ---
  {
    id: 'sp-1',
    category: 'SpecialPrices',
    name: 'Sale Winter Collection',
    price: 8000,
    sku: 'BQU-SP-W8000-01',
    piece: '3 Piece',
    img: 'https://baroque.pk/cdn/shop/files/93_d9e554c5-5fa6-47ec-8845-5f1107d03181.jpg?v=1705734823&width=400', // Winter collection fabric
    imgHover: 'https://baroque.pk/cdn/shop/files/103_967139cc-d1e1-46d5-8e3e-a82c7aaccb7e.jpg?v=1705564352&width=1000', // Hover
    additionalImages: [],
    brand: 'SPECIAL PRICES',
    availability: 'In Stock',
    productType: 'Suit',
    fabric: 'Khaddar',
    description: 'Warm and stylish khaddar suit from our winter sale collection. Perfect for the colder months.',
    productDetails: 'Printed khaddar shirt, plain khaddar trousers, matching khaddar dupatta.',
    deliveryInfo: 'Dispatch time: 2-4 business days. Sale items ship faster.',
    returnsExchange: 'Sale items are final sale. No returns or exchanges.',
    careInstructions: 'Machine wash cold. Do not tumble dry. Iron on low heat.',
  },


  // --- BOTTOMS ---
  {
    id: 'bottoms-1',
    category: 'Bottoms',
    name: 'Plain Cotton Trouser',
    price: 1800,
    sku: 'BQU-BTTM-C1800-01',
    piece: '1 Piece',
    img: 'https://baroque.pk/cdn/shop/products/930A2091.jpg?v=1580707818&width=1000', // Plain trouser
    imgHover: 'https://baroque.pk/cdn/shop/products/930A2095.jpg?v=1580707818&width=1000', // Hover
    additionalImages: [
      'https://baroque.pk/cdn/shop/products/12_61a4b73c-79f3-4201-8aa3-ea3b1bd86249.jpg?v=1641196570&width=1000',
      'https://baroque.pk/cdn/shop/products/11_35a3035d-eef5-444f-8725-791eee3897ed.jpg?v=1641196354&width=1000'
    ],
    brand: 'BOTTOMS',
    availability: 'In Stock',
    productType: 'Trouser',
    fabric: 'Cotton',
    description: 'Comfortable and versatile plain cotton trousers, a wardrobe essential.',
    productDetails: 'High-quality cotton fabric, elasticized waist, straight fit. Available in various sizes.',
    deliveryInfo: 'Dispatch time: 2-3 business days. Free shipping on orders above PKR 5000.',
    returnsExchange: '10-days exchange policy. See policy for details.',
    careInstructions: 'Machine wash cold. Tumble dry low. Iron as needed.',
  },
  {
    id: 'bottoms-2',
    category: 'Bottoms',
    name: 'Embroidered Capri Pants',
    price: 2500,
    sku: 'BQU-BTTM-E2500-02',
    piece: '1 Piece',
    img: 'https://baroque.pk/cdn/shop/products/11_35a3035d-eef5-444f-8725-791eee3897ed.jpg?v=1641196354&width=1000',
    imgHover: 'https://baroque.pk/cdn/shop/products/12_61a4b73c-79f3-4201-8aa3-ea3b1bd86249.jpg?v=1641196570&width=1000',
    additionalImages: [],
    brand: 'BOTTOMS',
    availability: 'In Stock',
    productType: 'Capri',
    fabric: 'Linen',
    description: 'Stylish linen capri pants with delicate embroidery on the hem, perfect for a chic casual look.',
    productDetails: 'Breathable linen fabric, mid-calf length, subtle embroidery.',
    deliveryInfo: 'Dispatch time: 3-5 business days. Standard shipping.',
    returnsExchange: '10-days exchange policy. See policy for details.',
    careInstructions: 'Hand wash or dry clean. Iron on reverse side.',
  },

  // --- DUPATTAS ---
  {
    id: 'dupatta-1',
    category: 'Dupattas',
    name: 'Printed Silk Dupatta',
    price: 2500,
    sku: 'BQU-DUPL-S2500-01',
    piece: '1 Piece',
    img: 'https://baroque.pk/cdn/shop/products/5_8_ae9fac23-746f-4bfd-a71f-5ab8da59fa2b.jpg?v=1638602800&width=800', // Silk dupatta
    imgHover: 'https://baroque.pk/cdn/shop/products/3_13_cbf31baa-bbf1-450c-926b-cae46b6ac04e.jpg?v=1638602800&width=800', // Hover
    additionalImages: [
      'https://baroque.pk/cdn/shop/products/10_3_fbe3c0f2-2362-448f-89dd-03b43bbd89da.jpg?v=1638602834&width=800',
      'https://baroque.pk/cdn/shop/products/12_3.jpg?v=1638602834&width=800'
    ],
    brand: 'DUPATTAS',
    availability: 'In Stock',
    productType: 'Dupatta',
    fabric: 'Silk',
    description: 'A vibrant printed silk dupatta that can instantly elevate any outfit.',
    productDetails: 'Pure silk, digital print design, lightweight and flowy (2.5m).',
    deliveryInfo: 'Dispatch time: 2-3 business days. Standard shipping.',
    returnsExchange: '10-days exchange policy. See policy for details.',
    careInstructions: 'Dry clean recommended.',
  },
];