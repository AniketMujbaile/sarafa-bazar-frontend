import React, { useState } from 'react';
import { FaPhone, FaWhatsapp, FaMapMarkerAlt, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

const SellerProfile = () => {
  const [activeTab, setActiveTab] = useState('Seller Products');

  const products = new Array(6).fill({
    imgSrc: 'https://sarafabazar.in/cdn/shop/files/0MWruNN0W4_2048x2048.jpg?v=1717575017', 
    title: 'Diamond Necklace',
  });

  const renderContent = () => {
    switch (activeTab) {
      case 'Seller Products':
        return (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:ml-36 md:mr-36">
            {products.map((product, index) => (
              <div key={index} className="border p-4 text-center">
                <img src={product.imgSrc} alt={product.title} className="mb-4 w-full h-48 object-cover" />
                <h2 className="font-bold text-lg">{product.title}</h2>
              </div>
            ))}
          </div>
        );
      case 'Feedback':
        return <div className="mt-6">Feedback content goes here.</div>;
      case 'Policy':
        return <div className="mt-6">Policy content goes here.</div>;
      case 'Description':
        return <div className="mt-6">Description content goes here.</div>;
      case 'Badges':
        return <div className="mt-6">Badges content goes here.</div>;
      default:
        return null;
    }
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-start md:ml-20 md:mr-20">
        <div className="flex items-center space-x-4">
          <img src="https://media.licdn.com/dms/image/D4D0BAQERrwJ_1jDqFg/company-logo_200_200/0/1710154476870/jaina_diamond_gold_private_limited_logo?e=2147483647&v=beta&t=q1m8waNkViAjhWZt7jOlxkqkXP4BYcP3VCpreQGpWBo" alt="Dravya Diamond" className="w-24 h-24" />
          <div>
            <h1 className="text-2xl font-bold">Dravya Diamond</h1>
            <p className="text-lg">Manufacturer & Wholesaler of Lab Grown Diamond Jewellery, Mumbai.</p>
            <div className="flex items-center space-x-2 mt-2">
              <a href="tel:9111002000" className="flex items-center space-x-1 text-blue-500"><FaPhone /><span>9111002000</span></a>
              <a href="tel:9111004000" className="flex items-center space-x-1 text-blue-500"><FaPhone /><span>9111004000</span></a>
              <a href="https://wa.me/9111002000" className="flex items-center space-x-1 text-green-500"><FaWhatsapp /><span>WhatsApp</span></a>
            </div>
            <div className="flex items-center space-x-2 mt-2 text-gray-500">
              <FaMapMarkerAlt /><span>Mumbai, Maharashtra, India</span>
            </div>
            <div className="flex items-center space-x-2 mt-2 text-gray-500">
              <FaCalendarAlt /><span>Join Since 14 March, 2024 | Total Products 17</span>
            </div>
          </div>
        </div>
        {/* Director/Partner/Owner Section */}
        <div className="text-center">
          <h2 className="text-lg font-semibold">DIRECTOR / PARTNER / OWNER</h2>
          <img src="https://media.licdn.com/dms/image/D4D0BAQERrwJ_1jDqFg/company-logo_200_200/0/1710154476870/jaina_diamond_gold_private_limited_logo?e=2147483647&v=beta&t=q1m8waNkViAjhWZt7jOlxkqkXP4BYcP3VCpreQGpWBo" alt="Director Logo" className="mx-auto my-2 w-12 h-12" />
          <p className="font-semibold">Mukesh Jain</p>
          <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded flex items-center justify-center space-x-2 ml-20">
            <FaEnvelope /><span>Contact</span>
          </button>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-6 border-b md:ml-20 md:mr-20">
        <div className="flex space-x-4 md:ml-20 md:mr-20">
          {['Seller Products', 'Feedback', 'Policy', 'Description', 'Badges'].map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${activeTab === tab ? 'border-b-2 border-red-500' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Content Section */}
      {renderContent()}
    </div>
  );
};

export default SellerProfile;
