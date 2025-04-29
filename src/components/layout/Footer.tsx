import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, PhoneCall, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">E-Bike Central</h3>
            <p className="text-gray-300 mb-4">
              Your premier destination for high-quality electric bikes and accessories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/shop" className="text-gray-300 hover:text-white transition-colors">
                  Shop All Bikes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=mountain" className="text-gray-300 hover:text-white transition-colors">
                  Mountain E-Bikes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=city" className="text-gray-300 hover:text-white transition-colors">
                  City E-Bikes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=folding" className="text-gray-300 hover:text-white transition-colors">
                  Folding E-Bikes
                </Link>
              </li>
              <li>
                <Link to="/shop?category=accessories" className="text-gray-300 hover:text-white transition-colors">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-xl font-bold mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-gray-300 hover:text-white transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-gray-300 hover:text-white transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/warranty" className="text-gray-300 hover:text-white transition-colors">
                  Warranty
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-blue-400 mt-1" />
                <span className="text-gray-300">
                  123 E-Bike Street<br />
                  San Francisco, CA 94103
                </span>
              </div>
              <div className="flex items-center">
                <PhoneCall className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-blue-400" />
                <span className="text-gray-300">info@ebikecentral.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} E-Bike Central. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;