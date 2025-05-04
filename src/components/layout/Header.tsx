import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Menu, X, Search, ChevronDown } from "lucide-react";
import { useCart } from "../../context/CartContext";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const location = useLocation();

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false); // Close menu when route changes
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-700">
            E-Bike Central
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            <div className="relative group">
              <Link
                to="/shop"
                className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
              >
                Shop <ChevronDown className="ml-1 h-4 w-4" />
              </Link>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    to="/shop?category=mountain"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Mountain Bikes
                  </Link>
                  <Link
                    to="/shop?category=city"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    City Bikes
                  </Link>
                  <Link
                    to="/shop?category=folding"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Folding Bikes
                  </Link>
                  <Link
                    to="/shop?category=cruiser"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50"
                  >
                    Cruiser Bikes
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Controls */}
          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 hover:text-blue-600 transition-colors"
              aria-label="Search"
            >
              <Search className="h-6 w-6" />
            </button>

            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-blue-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700 hover:text-blue-600 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      <div
        className={`md:hidden fixed top-16 left-0 right-0 z-40 bg-white shadow-md transform transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="px-4 py-4 space-y-4">
          <Link
            to="/"
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/shop"
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Shop
          </Link>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="block text-gray-700 hover:text-blue-600 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
