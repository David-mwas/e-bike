import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, ChevronRight, Truck, ShieldCheck, RefreshCcw, Minus, Plus, Heart, ShoppingCart } from 'lucide-react';
import { getProductById } from '../data/products';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductCard from '../components/product/ProductCard';
import { useCart } from '../context/CartContext';
import { Product } from '../types/product';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      
      if (!id) {
        navigate('/shop');
        return;
      }
      
      // Simulate a network request
      await new Promise(resolve => setTimeout(resolve, 300));
      
      const foundProduct = getProductById(id);
      if (foundProduct) {
        setProduct(foundProduct);
        
        // Set default selected color and size if available
        if (foundProduct.colors && foundProduct.colors.length > 0) {
          setSelectedColor(foundProduct.colors[0]);
        }
        
        if (foundProduct.sizes && foundProduct.sizes.length > 0) {
          setSelectedSize(foundProduct.sizes[0]);
        }
        
        // Get related products
        if (foundProduct.relatedProducts && foundProduct.relatedProducts.length > 0) {
          const relatedItems = foundProduct.relatedProducts
            .map(relatedId => getProductById(relatedId))
            .filter(item => item !== undefined) as Product[];
          
          setRelatedProducts(relatedItems);
        }
      } else {
        navigate('/shop');
      }
      
      setLoading(false);
    };
    
    fetchProduct();
    // Scroll to top when product changes
    window.scrollTo(0, 0);
  }, [id, navigate]);

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity > 0) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      // Provide feedback to user
      alert(`${quantity} ${product.name} added to cart!`);
    }
  };

  if (loading || !product) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="h-96 bg-gray-200 rounded"></div>
            <div>
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
              <div className="h-24 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-10 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-12 bg-gray-200 rounded w-full mb-6"></div>
              <div className="h-12 bg-gray-200 rounded w-full"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <nav className="text-sm mb-6">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link to="/" className="text-gray-500 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            </li>
            <li className="flex items-center">
              <Link to="/shop" className="text-gray-500 hover:text-blue-600 transition-colors">
                Shop
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            </li>
            <li className="flex items-center">
              <Link 
                to={`/shop?category=${product.category}`} 
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)} Bikes
              </Link>
              <ChevronRight className="h-4 w-4 mx-2 text-gray-400" />
            </li>
            <li className="text-gray-700 font-medium">{product.name}</li>
          </ol>
        </nav>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <ProductImageGallery images={product.images} productName={product.name} />
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => {
                    if (i < Math.floor(product.rating)) {
                      return <Star key={i} className="h-5 w-5 fill-current" />;
                    } else if (i === Math.floor(product.rating) && product.rating % 1 >= 0.5) {
                      return (
                        <div key={i} className="relative">
                          <Star className="h-5 w-5 text-gray-300" />
                          <div className="absolute top-0 left-0 overflow-hidden w-1/2">
                            <Star className="h-5 w-5 fill-current" />
                          </div>
                        </div>
                      );
                    } else {
                      return <Star key={i} className="h-5 w-5 text-gray-300" />;
                    }
                  })}
                </div>
                <span className="text-gray-600">{product.rating.toFixed(1)} ({product.reviews} reviews)</span>
              </div>
              
              <div className="mb-6">
                {product.discount > 0 ? (
                  <div className="flex items-center">
                    <span className="text-3xl font-bold text-gray-900">${product.salePrice}</span>
                    <span className="ml-3 text-xl text-gray-500 line-through">${product.price.toFixed(2)}</span>
                    <span className="ml-3 bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm font-medium">
                      Save {product.discount}%
                    </span>
                  </div>
                ) : (
                  <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                )}
              </div>
              
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Colors */}
              {product.colors && product.colors.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Color</h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`px-4 py-2 border rounded-md ${
                          selectedColor === color
                            ? 'border-blue-500 ring-2 ring-blue-200'
                            : 'border-gray-300'
                        }`}
                        onClick={() => setSelectedColor(color)}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Sizes */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-700 mb-3">Size</h3>
                  <div className="flex space-x-3">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`px-4 py-2 border rounded-md ${
                          selectedSize === size
                            ? 'border-blue-500 ring-2 ring-blue-200'
                            : 'border-gray-300'
                        }`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Quantity and Add to Cart */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                <div className="flex items-center border border-gray-300 rounded-md">
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-900 disabled:opacity-50"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <input
                    type="number"
                    min="1"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="w-12 text-center border-none focus:ring-0 focus:outline-none"
                  />
                  <button
                    className="px-4 py-2 text-gray-600 hover:text-gray-900"
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-grow bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </button>
                
                <button
                  className="p-3 border border-gray-300 rounded-md text-gray-600 hover:text-red-500 hover:border-red-500 transition-colors"
                  aria-label="Add to wishlist"
                >
                  <Heart className="h-5 w-5" />
                </button>
              </div>
              
              {/* Shipping and Returns */}
              <div className="border-t border-gray-200 pt-6 space-y-4">
                <div className="flex items-start">
                  <Truck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">Free Shipping</p>
                    <p className="text-sm text-gray-500">Free shipping on orders over $300</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ShieldCheck className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">2-Year Warranty</p>
                    <p className="text-sm text-gray-500">All our e-bikes come with a 2-year warranty</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <RefreshCcw className="h-5 w-5 text-gray-500 mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-700">30-Day Returns</p>
                    <p className="text-sm text-gray-500">Return or exchange within 30 days</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-12">
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'description'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'specifications'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('specifications')}
              >
                Specifications
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'features'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('features')}
              >
                Features
              </button>
              <button
                className={`py-4 px-6 text-center border-b-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === 'reviews'
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviews})
              </button>
            </div>
          </div>
          
          <div className="py-6">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-gray-700">{product.description}</p>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-3">
                    <dt className="text-sm font-medium text-gray-500">{key}</dt>
                    <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'features' && (
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {activeTab === 'reviews' && (
              <div>
                {/* Review Summary */}
                <div className="flex flex-col md:flex-row md:items-center mb-8">
                  <div className="flex flex-col items-center mb-4 md:mb-0 md:mr-8">
                    <div className="text-5xl font-bold text-gray-900">{product.rating.toFixed(1)}</div>
                    <div className="flex text-yellow-400 my-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < Math.round(product.rating) ? 'fill-current' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">{product.reviews} reviews</div>
                  </div>
                  
                  <div className="flex-grow">
                    {/* Rating Breakdown */}
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((star) => (
                        <div key={star} className="flex items-center">
                          <div className="text-sm text-gray-600 w-10">{star} stars</div>
                          <div className="w-full bg-gray-200 rounded-full h-2.5 mx-2 md:mx-4">
                            <div 
                              className="bg-yellow-400 h-2.5 rounded-full" 
                              style={{ width: `${Math.random() * 100}%` }}
                            ></div>
                          </div>
                          <div className="text-sm text-gray-500 w-10">{Math.floor(Math.random() * product.reviews)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* User reviews would go here */}
                <div className="space-y-6">
                  <p className="text-gray-500 text-center py-4">
                    This is a demo only. Actual user reviews would be shown here.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;