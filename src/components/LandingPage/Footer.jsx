import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faMapMarkerAlt,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">About Us</h3>
            <ul className="text-gray-400">
              <li className="mb-2">About Us</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Why Us</li>
              <li className="mb-2">Press</li>
              <li className="mb-2">Shree Nakoda Creation</li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">For Sellers</h3>
            <ul className="text-gray-400">
              <li className="mb-2">Become A Seller</li>
              <li className="mb-2">Membership Plan</li>
              <li className="mb-2">Backend Demo Videos</li>
              <li className="mb-2">Green India</li>
            </ul>
          </div>
          <div>
            <h3 className="text-yellow-500 font-bold mb-4">Shop</h3>
            <a href="https://sarafabazar.in" className="block mb-4">
              Shop sarafabazar.in
            </a>
            <div className="flex flex-col items-start">
              <a href="https://sarafabazar.in" className="mb-4">
                <img
                  src="https://getsby.com/wp-content/uploads/2023/06/google-play-badge.png"
                  alt="Google Play"
                  className="w-36 h-14"
                />
              </a>
              <a href="https://sarafabazar.in">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/800px-Download_on_the_App_Store_Badge.svg.png"
                  alt="App Store"
                  className="w-32 h-10 ml-2"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col md:flex-row items-center">
            <div>
              <p className="text-yellow-500 mb-2">Contact Us</p>
              <p className="text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
                715, Jewel World, Kalbadevl Road, Mumbai-400002
              </p>
              <p className="text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                contact@sarafabazar.in
              </p>
              <p className="text-gray-400">
                <FontAwesomeIcon icon={faPhone} className="mr-2" />
                76683-77540
              </p>
            </div>
            <div className="ml-8 mt-4 md:mt-0">
              <p className="text-yellow-500 mb-2">Signup for newsletter</p>
              <div className="flex items-center">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="bg-gray-800 text-white px-4 py-2 rounded-l-md"
                />
                <button className="text-gray-400 px-4 py-2 rounded-r-md ml-4">
                  Subscribe
                </button>
              </div>
              <label className="flex items-center mt-2 text-gray-400">
                <input type="checkbox" className="mr-2" />I agree to the{" "}
                <a href="#" className="text-yellow-500 hover:underline">
                  Terms of Service
                </a>
              </label>
            </div>
          </div>

            <h3 className="flex items-left text-yellow-500 mt-8">Follow us</h3>
           <div className="flex items-left mt-2">
            <a href="#" className="text-gray-400 mr-4">
              <FontAwesomeIcon icon={faFacebook} className="fa-1x" />
            </a>
            <a href="#" className="text-gray-400 mr-4">
              <FontAwesomeIcon icon={faInstagram} className="fa-1x" />
            </a>
            <a href="#" className="text-gray-400 mr-4">
              <FontAwesomeIcon icon={faLinkedin} className="fa-1x" />
            </a>
            <a href="#" className="text-gray-400">
              <FontAwesomeIcon icon={faTwitter} className="fa-1x" />
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <p className="text-gray-400 text-center">
          Privacy Policy | Terms and Condition | Copyright © 2024 HM Sarafa
          Bazar India Pvt. Ltd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;


 