import React, { useState } from "react";
import { FaTh, FaThList } from "react-icons/fa";

const ProductGrid = () => {
  const [view, setView] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);
  const products = new Array(50).fill({
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5MDBv01XYpzXHylAyKMaYHwUzyUsuq8WB20yQ4-MX2cqHThFbxSRhUlgHTD1IT8FkoYg&usqp=CAU", // Replace with your image source
    title: "Diamond Jewellery",
    description: "Diamond Gents Ring",
  });
  const productsPerPage = 10;

  const totalPages = Math.ceil(products.length / productsPerPage);
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-1/4 p-4">
        <h1 className="text-semibold text-xl mb-2">Search</h1>
        <div className="border-t border-gray-400 w-full mb-4"></div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Our Store"
            className="w-full px-4 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">PRODUCT</label>
          <select className="w-full px-4 py-2 border rounded">
            <option>All</option>
            <option>Rings</option>
            <option>Earrings</option>
            <option>Necklace</option>
            <option>Anklet</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">CITY</label>
          <select className="w-full px-4 py-2 border rounded">
            <option>All</option>
            <option>Mumbai</option>
            <option>Ahmedabad</option>
            <option>Delhi</option>
            <option>Jaipur</option>
            <option>Hyderabad</option>
            <option>Surat</option>
            <option>Bangalore</option>
            <option>Jalandhar</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block mb-2">FOR</label>
          <select className="w-full px-4 py-2 border rounded">
            <option>All</option>
            <option>Ladies</option>
            <option>Gents</option>
            <option>General</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Vendors</label>
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Aakash Jewels
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Aarvi Diamonds
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Ada Jewels
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Crafted Jewels
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Dravya Diamond
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Future Gold And Diamond
              Jewellery Pvt Ltd
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> GLITORA By Zemerra
              Jewels Pvt Ltd
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Gokul Dass & Co.
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Jewel Veda
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Meena Gold
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> NL Jewels
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Pluto Jewels
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Ravi Kumar Agarwal
              Jewellers
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Shalibhadra Jewels
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Shri Vardhaman
              Ornaments Pvt. Ltd.
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Shridaksh Designer
              Jewels Private Limited
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Zemerra Jewels Pvt.Ltd.
            </label>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 p-4">
        <div className="flex justify-between mb-4 items-center">
          <div>
            Showing {(currentPage - 1) * productsPerPage + 1} -{" "}
            {Math.min(currentPage * productsPerPage, products.length)} of{" "}
            {products.length} Results
          </div>
          <div className="flex space-x-4">
            <button
              onClick={() => setView("grid")}
              className={`p-2 rounded ${
                view === "grid" ? "bg-gray-200" : "bg-white"
              } border`}
            >
              <FaTh />
            </button>
            <button
              onClick={() => setView("list")}
              className={`p-2 rounded ${
                view === "list" ? "bg-gray-200" : "bg-white"
              } border`}
            >
              <FaThList />
            </button>
            <select className="border px-4 py-2 rounded">
              <option>Best Selling</option>
              <option>Alphabetically, A-Z</option>
              <option>Alphabetically, Z-A</option>
              <option>aarvi DIAMONDS</option>
              <option>Price, low to high </option>
              <option>Price, high to low </option>
              <option>Date, new to old</option>
              <option>Date, old to new</option>
            </select>
          </div>
        </div>
        <div
          className={
            view === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
              : "space-y-4"
          }
        >
          {currentProducts.map((product, index) => (
            <div key={index} className="border p-4 text-center">
              <img
                src={product.imgSrc}
                alt={product.description}
                className="mb-4 w-full h-40 object-cover"
              />
              <h2 className="font-bold text-lg">{product.title}</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>
          ))}
        </div>
        {/* Pagination */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 border rounded-l disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 border-t border-b ${
                i + 1 === currentPage ? "bg-gray-200" : "bg-white"
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 border rounded-r disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
