import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
  
  // Calculate shipping cost (free over $300)
  const shippingCost = subtotal > 300 ? 0 : 49.99;
  
  // Calculate tax (8.5%)
  const taxRate = 0.085;
  const tax = subtotal * taxRate;
  
  // Calculate total
  const total = subtotal + shippingCost + tax;

  if (cartItems.length === 0) {
    return (
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <div className="hidden md:flex border-b border-gray-200 pb-4 text-sm font-medium text-gray-500">
                <div className="w-2/5">Product</div>
                <div className="w-1/5 text-center">Price</div>
                <div className="w-1/5 text-center">Quantity</div>
                <div className="w-1/5 text-center">Total</div>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => {
                  const price = item.product.salePrice || item.product.price;
                  const totalPrice = price * item.quantity;
                  
                  return (
                    <div key={item.product.id} className="py-6 flex flex-col md:flex-row md:items-center">
                      {/* Product */}
                      <div className="flex items-start md:w-2/5 mb-4 md:mb-0">
                        <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded-md overflow-hidden">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <Link
                            to={`/product/${item.product.id}`}
                            className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors"
                          >
                            {item.product.name}
                          </Link>
                          {item.product.colors && (
                            <p className="text-sm text-gray-500">
                              Color: {item.product.colors[0]}
                            </p>
                          )}
                          <button
                            onClick={() => removeFromCart(item.product.id)}
                            className="mt-2 inline-flex items-center text-sm text-red-500 hover:text-red-700 transition-colors"
                          >
                            <Trash2 className="h-4 w-4 mr-1" />
                            Remove
                          </button>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="flex items-center justify-between md:justify-center md:w-1/5 mb-4 md:mb-0">
                        <span className="md:hidden text-sm font-medium text-gray-500">Price:</span>
                        <span className="font-medium text-gray-900">
                          ${price.toFixed(2)}
                        </span>
                      </div>
                      
                      {/* Quantity */}
                      <div className="flex items-center justify-between md:justify-center md:w-1/5 mb-4 md:mb-0">
                        <span className="md:hidden text-sm font-medium text-gray-500">Quantity:</span>
                        <div className="flex items-center border border-gray-300 rounded-md">
                          <button
                            className="px-3 py-1 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.product.id, parseInt(e.target.value) || 1)}
                            className="w-10 text-center border-none focus:ring-0 focus:outline-none"
                          />
                          <button
                            className="px-3 py-1 text-gray-600 hover:text-gray-900"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                      
                      {/* Total */}
                      <div className="flex items-center justify-between md:justify-center md:w-1/5">
                        <span className="md:hidden text-sm font-medium text-gray-500">Total:</span>
                        <span className="font-medium text-gray-900">
                          ${totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            {/* Continue Shopping */}
            <div className="text-left">
              <Link
                to="/shop"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
              >
                <ArrowRight className="h-4 w-4 mr-2 transform rotate-180" />
                Continue Shopping
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
              <h2 className="text-lg font-bold text-gray-800 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shipping</span>
                  {shippingCost === 0 ? (
                    <span className="font-medium text-green-600">Free</span>
                  ) : (
                    <span className="font-medium">${shippingCost.toFixed(2)}</span>
                  )}
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Tax (8.5%)</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-4 flex justify-between">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="font-bold text-gray-800">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Link
                to="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Proceed to Checkout
              </Link>
              
              <div className="mt-6 text-sm text-gray-500">
                <p className="mb-2">We accept:</p>
                <div className="flex space-x-2">
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                  <div className="w-10 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;