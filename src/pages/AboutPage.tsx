import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Bike, Award, Leaf, PenTool as Tool, Heart } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-blue-700 text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <img
            src="https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg"
            alt="E-Bike Background"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About E-Bike Central</h1>
          <p className="text-xl max-w-2xl">
            Leading the electric revolution in personal transportation with premium e-bikes
            for every rider and every journey.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-8">
              Founded in 2020, E-Bike Central was born from a passion for sustainable
              transportation and a vision of making premium electric bikes accessible to
              everyone. What started as a small showroom in San Francisco has grown into
              one of the leading e-bike retailers in North America.
            </p>
            <p className="text-gray-600">
              Our commitment to quality, innovation, and customer satisfaction has helped
              thousands of riders discover the joy of electric biking. We believe that
              e-bikes are not just a trend, but a fundamental shift in how people move,
              commute, and explore their world.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Leaf className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to reducing carbon emissions and promoting eco-friendly
                transportation solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality</h3>
              <p className="text-gray-600">
                Every e-bike we sell meets our rigorous standards for performance,
                durability, and safety.
              </p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-gray-600">
                We're building a community of e-bike enthusiasts and supporting local
                cycling initiatives.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg"
                  alt="John Smith"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">John Smith</h3>
              <p className="text-gray-600 mb-2">Founder & CEO</p>
              <p className="text-gray-500 text-sm">
                20+ years experience in cycling industry
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg"
                  alt="Sarah Johnson"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
              <p className="text-gray-600 mb-2">Head of Design</p>
              <p className="text-gray-500 text-sm">
                Leading e-bike innovation and design
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 relative w-48 h-48 mx-auto rounded-full overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"
                  alt="Mike Chen"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Mike Chen</h3>
              <p className="text-gray-600 mb-2">Technical Director</p>
              <p className="text-gray-500 text-sm">
                Expert in e-bike systems and maintenance
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5000+</div>
              <p>Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p>Bike Models</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">15+</div>
              <p>Service Centers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">4.9</div>
              <p>Average Rating</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Start Your E-Bike Journey?</h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/shop"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Shop Our Collection
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;