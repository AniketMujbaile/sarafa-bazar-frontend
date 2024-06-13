import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const blogData = [
  {
    id: 1,
    date: '18/09/2022',
    title: 'Role of B2B Jewellery Marketplaces In the Future of the Jewellery Industry',
    description: 'The jewellery sector of India contributes significantly to its GDP. As per reports, weddings generate nearly 50% of the total demand for gold in the country. In fact, you will...',
    imageUrl: 'https://sarafabazar.in/cdn/shop/articles/Role_of_b2b_jewellery_marketplace_in_the_future_of_jewellery_market_1024x1024.jpg?v=1663495795',
  },
  {
    id: 2,
    date: '13/09/2022',
    title: '4 Reasons to Join an Online B2B Jewellery Marketplace',
    description: 'Reports from the Gem & Jewellery Export Promotion Council (GJEPC) state that in the month of July 2022, the total gross export of gems and jewellery was US$ 3129.91 million...',
    imageUrl: 'https://sarafabazar.in/cdn/shop/articles/4_Reasons_to_Join_an_Online_B2B_Jewellery_Marketplace_2048x2048.jpg?v=1663084319',
  },
  {
    id: 3,
    date: '06/09/2022',
    title: 'B2B Stylus India LLP to once again partner with Sarafa Bazar India for 9th edition of UGJIS',
    description: 'Recently, Sarafa Bazar India, a B2B platform for jewellery manufacturers, wholesalers, and retailers, announced their partnership with B2B Stylus India LLP for Maharashtra\'s Blue Chip B2B Gems and Jewellery\'s 9th...',
    imageUrl: 'https://sarafabazar.in/cdn/shop/articles/Why_is_Sarafa_Bazar_India_the_Best_B2B_Jewellery_Marketplace_2048x2048.jpg?v=1663606981',
  },
  {
    id: 4,
    date: '06/09/2022',
    title: 'B2B Stylus India LLP to once again partner with Sarafa Bazar India for 9th edition of UGJIS',
    description: 'Recently, Sarafa Bazar India, a B2B platform for jewellery manufacturers, wholesalers, and retailers, announced their partnership with B2B Stylus India LLP for Maharashtra\'s Blue Chip B2B Gems and Jewellery\'s 9th...',
    imageUrl: 'https://sarafabazar.in/cdn/shop/articles/4_Reasons_to_Join_an_Online_B2B_Jewellery_Marketplace_2048x2048.jpg?v=1663084319',
  }
];

const BlogSection = () => {
  const [slider, setSlider] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-semibold mb-6">Blogs</h2>
        <div className="relative">
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {blogData.map((blog) => (
              <div key={blog.id} className="px-2 cursor-pointer">
                <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                  <img src={blog.imageUrl} alt={blog.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <span className="text-gray-500 text-sm">{blog.date}</span>
                    <h3 className="text-lg font-semibold mt-2">{blog.title}</h3>
                    <p className="text-gray-600 mt-2">{blog.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-1 z-10 text-gray-700 hover:text-gray-900 cursor-pointer">
            <FaArrowLeft size={30} onClick={() => slider?.slickPrev()} />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-1 z-10 text-gray-700 hover:text-gray-900 cursor-pointer">
            <FaArrowRight size={30} onClick={() => slider?.slickNext()} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
