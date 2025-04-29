import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  // Calculate full stars and remaining part
  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating - fullStars >= 0.5;

  return (
    <div className="group relative bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full">
      {product.discount > 0 && (
        <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-2 py-1 text-xs font-bold rounded">
          {product.discount}% OFF
        </div>
      )}
      
      {/* Product Image with Hover Effect */}
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gray-100">
        <Link to={`/product/${product.id}`}>
          <div className="relative h-64 overflow-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="h-full w-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
          </div>
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="p-4 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => {
              if (i < fullStars) {
                return <Star key={i} className="h-4 w-4 fill-current" />;
              } else if (i === fullStars && hasHalfStar) {
                return (
                  <div key={i} className="relative">
                    <Star className="h-4 w-4 text-gray-300" />
                    <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                      <Star className="h-4 w-4 fill-current" />
                    </div>
                  </div>
                );
              } else {
                return <Star key={i} className="h-4 w-4 text-gray-300" />;
              }
            })}
          </div>
          <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
        </div>
        
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-4 flex-grow">{product.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center">
            {product.discount > 0 ? (
              <>
                <span className="text-lg font-bold text-gray-900">${product.salePrice}</span>
                <span className="ml-2 text-sm text-gray-500 line-through">
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
            )}
          </div>
          
          <button
            onClick={handleAddToCart}
            className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            aria-label="Add to cart"
          >
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;