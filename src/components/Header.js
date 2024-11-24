import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/images/Ajanta-logo-transparent.webp';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="bg-[#f7f0e5] shadow-md top-0 z-50">
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
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
            
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="/safety-tips"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            Safety Tips
          </NavLink>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            Gallery
          </NavLink>
          <NavLink
            to="/where-to-buy"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            Where To Buy?
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            Contact Us
          </NavLink>
          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive
                ? "text-red-600 font-bold transition-colors duration-300"
                : "text-gray-700 hover:text-red-600 transition-colors duration-300"
            }
          >
            Blogs
          </NavLink>
          <NavLink
            to="/shop"
            className={({ isActive }) =>
              isActive
                ? "bg-green-600 text-white py-2 px-4 rounded-full transition-colors duration-300"
                : "bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-colors duration-300"
            }
          >
            Shop Now
          </NavLink>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-gray-800 focus:outline-none">
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              
              onClick={closeMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Products
            </NavLink>
            <NavLink
              to="/safety-tips"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Safety Tips
            </NavLink>
            <NavLink
              to="/gallery"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Gallery
            </NavLink>
            <NavLink
              to="/where-to-buy"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Where To Buy?
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Contact Us
            </NavLink>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive
                  ? "text-red-600 font-bold block transition-colors duration-300"
                  : "text-gray-700 hover:text-red-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Blogs
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                isActive
                  ? "bg-green-600 text-white py-2 px-4 rounded-full block transition-colors duration-300"
                  : "bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 block transition-colors duration-300"
              }
              onClick={closeMobileMenu}
            >
              Shop Now
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
