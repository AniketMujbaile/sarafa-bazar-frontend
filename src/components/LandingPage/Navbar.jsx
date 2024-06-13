import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
        setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <nav className="bg-gray-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between md:justify-center items-center">
            <a href="/" className="block cursor-pointer">
              <h1 className="text-black text-2xl font-bold">
                <span className="text-white">sarafa</span>
                <span className="text-amber-400">bazar</span>
              </h1>
            </a>
            <a href="/" className="block cursor-pointer">
              <div
                className="bg-transparent p-1"
                style={{ width: "80px", height: "64px" }}
              >
                <img
                  src="https://galaxygoldtrading.com/wp-content/uploads/2022/06/1.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </a>
            <div className="flex items-center space-x-4 lg:hidden">
              <button
                className="text-white hover:text-amber-400 focus:outline-none"
                onClick={toggleMenu}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={
                      isOpen
                        ? "M6 18L18 6M6 6l12 12"
                        : "M4 6h16M4 12h16M4 18h16"
                    }
                  />
                </svg>
              </button>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
            <a href="/search-page"><input
                type="text"
                placeholder="Search Wholesale Jewellery Sellers and Products"
                className="px-20 py-2 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 md:ml-12 md:mr-12"
              />
              </a>
              <div className="text-amber-400 flex space-x-2">
                <a href="/login" className="hover:text-gray-300">
                  Buyer's Account
                </a>
                <span>|</span>
                <a href="#" className="hover:text-gray-300">
                  Seller's Account
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isScrolled ? "fixed top-0 left-0 right-0 z-50" : ""
        } bg-gray-900 py-2 lg:hidden ${isOpen ? "block" : "hidden"}`}
      >
        <div className="flex flex-col items-center space-y-2">
          <input
            type="text"
            placeholder="Search Wholesale Jewellery Sellers and Products"
            className="px-4 py-2 rounded-full bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full max-w-xs"
          />
          <div className="text-amber-400 flex space-x-2">
            <a href="/login" className="hover:text-gray-300">
              Buyer's Account
            </a>
            <span>|</span>
            <a href="#" className="hover:text-gray-300">
              Seller's Account
            </a>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="#" className="text-white hover:text-amber-400 relative">
              Gold <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400 relative">
              Diamond <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Plain/CZ Casting <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Turkish/Italian <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Antique/Kundan <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Stone <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Platinum <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Silver <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Findings <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              Gemstones <span className="ml-1">&#9663;</span>
            </a>
            <a href="#" className="text-white hover:text-amber-400">
              More <span className="ml-1">&#9663;</span>
            </a>
            <a
              href="/company-page"
              className="text-white hover:text-amber-400 text-center mt-4"
            >
              Sellers
            </a>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-wrap justify-center space-x-2 space-y-2 bg-gray-900 py-2 ${
          isScrolled
            ? "fixed top-16 left-0 right-0 z-50 lg:top-0"
            : "hidden lg:flex"
        }`}
      >
        <a href="#" className="text-white hover:text-amber-400 relative">
          Gold <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400 relative">
          Diamond <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Plain/CZ Casting <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Turkish/Italian <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Antique/Kundan <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Stone <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Platinum <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Silver <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Findings <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          Gemstones <span className="ml-1">&#9663;</span>
        </a>
        <a href="#" className="text-white hover:text-amber-400">
          More <span className="ml-1">&#9663;</span>
        </a>
        <a
          href="/company-page"
          className="text-white hover:text-amber-400 text-center mt-4"
        >
          Sellers
        </a>
      </div>
      <div className="text-center mt-4"></div>
    </div>
  );
};

export default Navbar;

 