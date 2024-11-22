import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/images/Ajanta-logo-transparent.webp';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#f7f0e5] shadow-md  top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Prince Fireworks Logo"
            className="h-10 md:h-12 transition-transform duration-300 transform hover:scale-105"
          />
          <span className="ml-3 text-xl md:text-2xl font-bold text-gray-800 hover:text-red-600 transition-colors duration-300">
            Prince Fireworks
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
            Home
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
            About
          </Link>
          <Link to="/products" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
            Products
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-600 transition-colors duration-300">
            Contact Us
          </Link>
          <a
            href="/shop"
            className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300"
          >
            Shop Now
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md p-4 absolute top-16 left-0 w-full z-40">
          <nav className="space-y-4">
            <Link to="/" className="text-gray-700 hover:text-red-600 block transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 block transition-colors duration-300">
              About
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-red-600 block transition-colors duration-300">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 block transition-colors duration-300">
              Contact Us
            </Link>
            <a
              href="/shop"
              className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 block transition-colors duration-300"
            >
              Shop Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
