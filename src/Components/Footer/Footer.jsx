import React from 'react'
import { FaYoutube, FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-5">

        {/* Logo & Socials */}
        <div className="space-y-4 pl-5 ">
          <Link to="/">
            <img src="./BreaLogo.png" alt="Brea Logo" className="w-24" />
          </Link>
          <h3 className="text-xl font-bold ">BREA</h3>
          <ul className="flex gap-4 text-lg">
            <li><FaFacebookF className="hover:text-blue-500" /></li>
            <li><FaTwitter className="hover:text-blue-400" /></li>
            <li><FaLinkedinIn className="hover:text-blue-600" /></li>
            <li><FaInstagram className="hover:text-pink-500" /></li>
            <li><FaYoutube className="hover:text-red-600" /></li>
          </ul>
        </div>

        {/* Product Categories */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Product Categories</h3>
          <ul className="space-y-2">
            <li><Link to="/chainpendants" className="hover:text-gray-400">Chain Pendants</Link></li>
            <li><Link to="/tops" className="hover:text-gray-400">Tops</Link></li>
            <li><Link to="/mangalsutra" className="hover:text-gray-400">Mangalsutra</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4 ">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
            <li><Link to="/aboutus" className="hover:text-gray-400">About Us</Link></li>
            <li><Link to="/blogs" className="hover:text-gray-400">Blogs</Link></li>
            <li><Link to="/contactus" className="hover:text-gray-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Policies */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Policies</h3>
          <ul className="space-y-2">
            <li><Link to="/Terms_Conditions" className="hover:text-gray-400">Terms & Conditions</Link></li>
            <li><Link to="/Shipping_Return_policy" className="hover:text-gray-400">Shipping & Return Policy</Link></li>
            <li><Link to="/PrivacyPolicy" className="hover:text-gray-400">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li>
              <span className="font-medium">Address: </span>
              383B, Plot No. 39, Mangalmurti Jwell Palace, Shahupuri Chawk, Satara City, Satara, Maharashtra, 415002.
            </li>
            <li>
              <span className="font-medium">Phone: </span>+91 9422401209
            </li>
            <li>
              <span className="font-medium">Email: </span>care@brea.co.in
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 py-4">
        <p className="text-center text-sm">
          © 2024 All Rights Reserved | Designed & Developed by <a href="https://vm3techsolution.com/" className="text-blue-400 hover:underline">VM3 Tech Solutions LLP</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
