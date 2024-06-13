import React from 'react';

const jewelleryData = [
  {
    "image": "https://sarafabazar.in/cdn/shop/files/SRT_Web_2048x2048.jpg?v=1689083114",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/Web_Banner_2048x2048.jpg?v=1703336743",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/Laado_mangalsutra_manufacturer_sarafa_bazar_india1_2048x2048.jpg?v=1658487851",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/SK_Gold_-_App_Website-18_2048x2048.jpg?v=1705569425",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/shree_nakoda_creation_gold_manufacturer_sarafa_bazar_india_2048x2048.jpg?v=1658488055",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/SK_Gold_2048x2048.png?v=1678889852",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/Taru_brand_rose_gold_jewellery_2048x2048.jpg?v=1705043891",
  },
  {
    "image": "https://sarafabazar.in/cdn/shop/files/Emerald_Shree_Kalptaru_2048x2048.jpg?v=1705043984",
  }
];

const JewelleryBrands = () => {
  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8">Exclusive Jewellery Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {jewelleryData.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white shadow-md rounded-lg overflow-hidden">
            <img src={item.image} alt={item.brand} className="w-full h-56 object-cover"/>

          </div>
        ))}
      </div>
    </div>
  );
}

export default JewelleryBrands;


 