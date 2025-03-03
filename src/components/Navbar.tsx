
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm' : 'bg-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <ShoppingCart className="h-6 w-6 text-purple" />
              <span className="text-xl font-bold text-purple">ShopEase</span>
            </Link>
          </div>

          {/* Nav Links - Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link to="/" className="nav-link text-gray-700 hover:text-purple transition-colors">
              Home
            </Link>
            <Link to="/products" className="nav-link text-gray-700 hover:text-purple transition-colors">
              Products
            </Link>
            <Link to="/about" className="nav-link text-gray-700 hover:text-purple transition-colors">
              About
            </Link>
            <Link to="/contact" className="nav-link text-gray-700 hover:text-purple transition-colors">
              Contact
            </Link>
          </nav>

          {/* Cart and Login Buttons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link to="/cart" className="p-2 text-gray-700 hover:text-purple transition-colors">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-1 -right-1 bg-purple text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
                  10
                </span>
              </Link>
            </div>
            <Link 
              to="/login" 
              className="bg-purple hover:bg-purple-dark text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
