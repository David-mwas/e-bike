import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Check } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/product/ProductCard';

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState(products.slice(0, 4));
  const [topRatedProducts, setTopRatedProducts] = useState(products.slice(0, 4));

  useEffect(() => {
    // Get featured products (ones with discounts)
    const discountedProducts = products
      .filter(product => product.discount > 0)
      .sort((a, b) => b.discount - a.discount)
      .slice(0, 4);
    
    setFeaturedProducts(discountedProducts);

    // Get top rated products
    const highestRated = [...products]
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 4);
    
    setTopRatedProducts(highestRated);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Mountain E-Bike" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-transparent z-10"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Discover the Power of Electric Biking
            </h1>
            <p className="text-lg mb-8">
              Explore our premium selection of e-bikes designed for every terrain, journey, and adventure.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/shop" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/about" 
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center justify-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/shop?category=mountain" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Mountain E-Bikes" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Mountain E-Bikes</h3>
                  <p className="text-gray-200 text-sm">Conquer any trail with power and precision</p>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?category=city" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="City E-Bikes" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">City E-Bikes</h3>
                  <p className="text-gray-200 text-sm">Navigate urban environments with ease</p>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?category=folding" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/4597829/pexels-photo-4597829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Folding E-Bikes" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Folding E-Bikes</h3>
                  <p className="text-gray-200 text-sm">Compact power for commuters on the go</p>
                </div>
              </div>
            </Link>
            
            <Link to="/shop?category=cruiser" className="group">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/805303/pexels-photo-805303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Cruiser E-Bikes" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-1">Cruiser E-Bikes</h3>
                  <p className="text-gray-200 text-sm">Stylish comfort for relaxed riding</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl font-bold">Featured E-Bikes</h2>
            <Link 
              to="/shop" 
              className="inline-flex items-center mt-4 md:mt-0 text-blue-600 hover:text-blue-800 transition-colors"
            >
              View All Products <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">Why Choose E-Bike Central</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                    <line x1="4" y1="22" x2="4" y2="15"></line>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
              <p className="text-gray-400">
                All our e-bikes are built with high-quality components for durability and performance you can trust.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">2-Year Warranty</h3>
              <p className="text-gray-400">
                We stand behind our products with an industry-leading warranty on all frames and electrical components.
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-600 p-4 rounded-full">
                  <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2v2"></path>
                    <path d="M12 6v2"></path>
                    <path d="M12 10v2"></path>
                    <circle cx="12" cy="18" r="2"></circle>
                  </svg>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Support</h3>
              <p className="text-gray-400">
                Our knowledgeable team is always ready to help with personalized advice and technical support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <h2 className="text-3xl font-bold">Top Rated E-Bikes</h2>
            <Link 
              to="/shop?sort=rating" 
              className="inline-flex items-center mt-4 md:mt-0 text-blue-600 hover:text-blue-800 transition-colors"
            >
              View All Top Rated <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {topRatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "My Alpine Explorer Pro has transformed my mountain biking experience. The motor assistance is smooth and natural, and the battery life is exceptional. Worth every penny!"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-medium">Michael Johnson</h4>
                  <p className="text-sm text-gray-500">Mountain Bike Enthusiast</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "I commute 15 miles daily on my Urban Commuter Elite, and it's been a game-changer. No more traffic jams or parking hassles, and I arrive at work without breaking a sweat."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-medium">Sarah Williams</h4>
                  <p className="text-sm text-gray-500">Daily Commuter</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm">
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6">
                "The Compact Folder X3 is perfect for my city apartment. It folds easily, is lightweight enough to carry up stairs, and the battery life is impressive for such a compact bike."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                <div>
                  <h4 className="font-medium">David Chen</h4>
                  <p className="text-sm text-gray-500">Urban Apartment Dweller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the E-Bike Revolution?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who have transformed their commutes, adventures, and fitness journeys with our premium electric bikes.
          </p>
          <Link 
            to="/shop" 
            className="inline-block bg-white text-blue-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Shop Our Collection
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;