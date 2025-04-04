import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaYoutube,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaUser,
  FaSearch,
  FaHeart,
  FaShoppingCart,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { MdArrowDropDown } from "react-icons/md";

const Header = () => {
  const navigate = useNavigate();
  const [dropDown, setDropDown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categoriesDropdown = [
    { id: 1, title: "Mangalsutra", path: "/mangalsutra" },
    { id: 2, title: "Chain-Pendants", path: "/chainpendants" },
    { id: 3, title: "Tops", path: "/tops" },
  ];

  const handleClick = () => navigate("/ContactUs");

  return (
    <nav className="relative bg-white shadow-md">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-4 md:px-10 py-2 text-sm bg-gray-100">
        <div className="flex items-center gap-3 md:gap-5">
          <p className="text-gray-700 text-xs sm:text-sm">
            Free shipping on all orders above Rs. 499
          </p>
          <button
            onClick={handleClick}
            className="bg-pink-500 text-white px-3 py-1 rounded-full text-xs sm:text-sm"
          >
            Enquiry
          </button>
        </div>

        <div className="hidden md:flex items-center gap-6 text-gray-700 text-sm">
          <div className="flex gap-3">
            <FaFacebookF />
            <FaTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
          <div className="flex items-center gap-2 cursor-pointer">
            <FaUser />
            <h3>My Account</h3>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex justify-between items-center px-4 md:px-10  border-b">
        {/* Contact Info - Hidden on Mobile */}
        <div className="hidden md:flex gap-8 text-gray-700 text-sm">
          <div className="border-r pr-5">
            <h3 className="font-semibold">Call Us:</h3>
            <p>+91 88244 66669</p>
          </div>
          <div>
            <h3 className="font-semibold">Locations:</h3>
            <p>Satara | Karad</p>
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-between w-full md:w-auto">
  <Link to="/">
    <img src="./BreaLogo.png" alt="Logo" className="h-8" />
  </Link>

  {/* Hamburger icon moved to right */}
  <button
    className="md:hidden text-2xl text-pink-600 ml-auto"
    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
  >
    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
  </button>
</div>


        {/* Icons */}
        <div className="hidden md:flex gap-4 text-pink-500 text-lg">
          <FaSearch className="cursor-pointer" />
          <FaHeart className="cursor-pointer" />
          <FaShoppingCart className="cursor-pointer" />
        </div>
      </div>

      {/* Bottom Menu - Desktop */}
      <div className="hidden md:flex justify-center gap-6 py-4 bg-gray-50 text-pink-600 font-semibold text-lg">
        <div
          className="relative"
          onMouseEnter={() => setDropDown(true)}
          onMouseLeave={() => setDropDown(false)}
        >
          <button className="flex items-center  gap-1 cursor-pointer">
            Categories <MdArrowDropDown />
          </button>
          {dropDown && (
            <ul className="absolute left-0 mt-2 bg-white shadow-lg w-40 text-gray-700 z-50">
              {categoriesDropdown.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setDropDown(false)}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        <Link to="/bestofbrea" className="hover:text-pink-700">
          Best of Brea
        </Link>
        <Link to="/latestcollection" className="hover:text-pink-700">
          Latest Collection
        </Link>
        <Link to="/gifting" className="hover:text-pink-700">
          Gifting
        </Link>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden  bg-white text-gray-700 shadow-md px-4 py-4 space-y-4 text-base">
          <div className="flex flex-col gap-2">
            <div className="font-semibold text-pink-600">Categories</div>
            {categoriesDropdown.map((item) => (
              <Link
                key={item.id}
                to={item.path}
                className="hover:text-pink-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            to="/bestofbrea"
            className="block hover:text-pink-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Best of Brea
          </Link>
          <Link
            to="/latestcollection"
            className="block hover:text-pink-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Latest Collection
          </Link>
          <Link
            to="/gifting"
            className="block hover:text-pink-600"
            onClick={() => setMobileMenuOpen(false)}
          >
            Gifting
          </Link>
          <div className="flex gap-4 pt-2 border-t text-pink-500 text-xl">
            <FaSearch className="cursor-pointer" />
            <FaHeart className="cursor-pointer" />
            <FaShoppingCart className="cursor-pointer" />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
