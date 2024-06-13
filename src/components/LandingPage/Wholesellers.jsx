import React from 'react';

const jewelleryData = [
  {
    "image": "https://sarafabazar.in/cdn/shop/files/BANNER_2_2048x2048.png?v=1626413590",
    "title": "Exclusive Gold Chains",
    "link": "/search-now"
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/BANNER_3_2048x2048.png?v=1626413650",
    "title": "Elegant Necklace Designs",
    "link": "/search-now"
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/BANNER_4_2048x2048.png?v=1626413672",
    "title": "Designer Earrings",
    "link": "/search-now"
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/BANNER_5_8176ab90-bacc-4127-893d-825c6d289916_2048x2048.png?v=1626413700",
    "title": "Traditional Bangles",
    "link": "/search-now"
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/BANNER_6A_2048x2048.png?v=1626413738",
    "title": "Bridal Jewellery Sets",
    "link": "/search-now"
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/BANNER_8A_2048x2048.png?v=1626413774",
    "title": "Antique Jewellery",
    "link": "/search-now"
  }
];

const JewelleryBrands = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6 mt-12">
      <h2 className="max-w-4xl text-3xl font-semibold text-center mb-8">Sarafa Bazar India Find Leading Jewellery Manufacturers & Wholesalers</h2>
      <p className="text-sm text-center mb-8">Mumbai | Rajkot | Delhi | Ahmedabad | Surat | Jaipur | Meerut | Hyderabad | Pune | Bangalore | Nathdwara | Jalandhar | Thrissur</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jewelleryData.map((item, index) => (
          <div key={index} className="relative flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.title} className="w-full h-56 object-cover"/>
            <div className="absolute top-4 right-4 left-48 px-3 py-1 rounded text-lg text-right font-semibold text-gray-500">Manufacturers & Wholesalers</div>
            <div className="absolute top-20 right-4 left-48 p-4 rounded text-right">
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <a href={item.link} className="text-blue-500 hover:underline">Search Now</a>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-yellow-500  text-white py-2 px-8 rounded-full hover:bg-amber-400">VIEW ALL PRODUCTS</button>
      </div>
    </div>
  );
}

export default JewelleryBrands;



 