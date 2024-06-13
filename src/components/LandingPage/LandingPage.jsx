
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import backgroundImage1 from '../../Images/background1.png';
import backgroundImage2 from '../../Images/background2.png';
import backgroundImage3 from '../../Images/background3.png';
import backgroundImage4 from '../../Images/background4.png';
import Header from './Navbar.jsx';
import Footer from './Footer';
import HomeSlider from './Home.jsx';
import Sponsors from './Sponsors.jsx';
import JwelleryBrands from './JewelleryBrands.jsx';
import Wholesellers from './Wholesellers.jsx';
import Testimonials from './Testimonials.jsx';
import FeatureSection from './FeatureSection.jsx';
import Blogs from './Blogs.jsx';

 
const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageUrls = useMemo(() => [
    backgroundImage1,
    backgroundImage2,
    backgroundImage3,
    backgroundImage4,
  ], []);
  const [isAutoSliding, setIsAutoSliding] = useState(true);
  const autoSlideInterval = useRef(null);

  useEffect(() => {
    if (isAutoSliding) {
      autoSlideInterval.current = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
      }, 5000);
    }
    return () => clearInterval(autoSlideInterval.current);
  }, [imageUrls, isAutoSliding]);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
    setIsAutoSliding(false);
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    setIsAutoSliding(false);
  };

  const handleClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
    setIsAutoSliding(false);
  };

  return (
    <div className="relative h-screen">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center h-screen bg-cover bg-center md:mt-20"
        style={{ backgroundImage: `url(${imageUrls[currentIndex]})` }}
      ></div>

      {/* Header with higher z-index */}
      <div className="relative z-20">
        <Header />
      </div>

      {/* Main Content */}
      <div className="relative h-full">
        <div className="flex flex-col justify-center items-center h-full relative z-10">
          <div className="flex-grow" />
          <HomeSlider onClick={handleClick} />
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-4">
            <button
              onClick={handlePrevClick}
              className="bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700"
            >
              <FaChevronLeft />
            </button>
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4">
            <button
              onClick={handleNextClick}
              className="bg-gray-800 rounded-full p-2 text-white hover:bg-gray-700"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
     <Sponsors />
     <JwelleryBrands />
     <Wholesellers />
     <Testimonials />
     <FeatureSection />
     <Blogs />
     <Footer />
     </div>
  );
};

export default LandingPage;


 