import React from 'react';
import Slider from 'react-slick';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import testimonials from './testimonials.json';
 

const TestimonialsSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="bg-gray-100 relative p-4 md:p-8 testimonial-slider">
    
      <h2 className="text-2xl md:text-3xl text-center mb-2 md:mb-2">Testimonials</h2>
      <p className="text-sm md:text-sm text-center text-gray-500 mb-4 md:mb-6">What They Say</p>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="text-center p-4 mt-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 md:w-24 md:h-24 rounded-full mx-auto mb-4"
            />
            <p className="italic text-base md:text-lg max-w-xs md:max-w-4xl mx-auto">“{testimonial.testimonial}”</p>
            <p className="font-semibold mt-2 mt-4 text-base md:text-lg">{testimonial.name}</p>
            <p className="mt-2 mb-6 md:mb-8 text-base md:text-sm">{testimonial.location}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-2/3 md:top-1/2 transform -translate-y-1/2 right-2 z-10 text-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-2/3 md:top-1/2 transform -translate-y-1/2 left-2 z-10 text-gray-700 cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );
};

export default TestimonialsSlider;


 