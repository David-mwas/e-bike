import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { SlidersHorizontal, Search, ChevronDown, X } from 'lucide-react';
import ProductGrid from '../components/product/ProductGrid';
import FilterSidebar from '../components/filter/FilterSidebar';
import { filterProducts, getAvailableFilters } from '../data/products';
import { ProductFilter } from '../types/product';

const ShopPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  // State for products and filtering
  const [filteredProducts, setFilteredProducts] = useState(filterProducts({}));
  const [isLoading, setIsLoading] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Get filter options
  const filterOptions = getAvailableFilters();
  
  // Extract and parse filters from URL query parameters
  const initialCategoryFilter = queryParams.get('category') 
    ? [queryParams.get('category') as string] 
    : [];
  
  const initialBrandFilter = queryParams.get('brand') 
    ? [queryParams.get('brand') as string] 
    : [];
  
  const initialMinPrice = queryParams.get('minPrice') 
    ? parseInt(queryParams.get('minPrice') as string, 10) 
    : filterOptions.priceRange[0];
  
  const initialMaxPrice = queryParams.get('maxPrice') 
    ? parseInt(queryParams.get('maxPrice') as string, 10) 
    : filterOptions.priceRange[1];
  
  const initialSearchQuery = queryParams.get('search') || '';
  
  const initialSortOption = queryParams.get('sort') || 'newest';

  // State for filters
  const [selectedFilters, setSelectedFilters] = useState<Record<string, string[]>>({
    category: initialCategoryFilter,
    brand: initialBrandFilter,
  });
  
  const [priceRange, setPriceRange] = useState<[number, number]>([
    initialMinPrice,
    initialMaxPrice,
  ]);
  
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [searchInput, setSearchInput] = useState(initialSearchQuery);
  const [sortOption, setSortOption] = useState(initialSortOption);

  // Filter categories for sidebar
  const filterCategories = [
    {
      id: 'category',
      name: 'Categories',
      options: filterOptions.categories,
    },
    {
      id: 'brand',
      name: 'Brands',
      options: filterOptions.brands,
    },
  ];

  // Update URL with filters
  const updateUrl = () => {
    const params = new URLSearchParams();

    if (selectedFilters.category && selectedFilters.category.length > 0) {
      params.set('category', selectedFilters.category.join(','));
    }

    if (selectedFilters.brand && selectedFilters.brand.length > 0) {
      params.set('brand', selectedFilters.brand.join(','));
    }

    if (priceRange[0] !== filterOptions.priceRange[0]) {
      params.set('minPrice', priceRange[0].toString());
    }

    if (priceRange[1] !== filterOptions.priceRange[1]) {
      params.set('maxPrice', priceRange[1].toString());
    }

    if (searchQuery) {
      params.set('search', searchQuery);
    }

    if (sortOption && sortOption !== 'newest') {
      params.set('sort', sortOption);
    }

    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  // Apply filters when they change
  useEffect(() => {
    setIsLoading(true);
    
    const applyFilters = async () => {
      // Simulate loading delay
      await new Promise((resolve) => setTimeout(resolve, 300));
      
      const categoryFilter = selectedFilters.category || [];
      const brandFilter = selectedFilters.brand || [];
      
      const filtered = filterProducts({
        category: categoryFilter,
        brand: brandFilter,
        priceRange: priceRange,
        search: searchQuery,
        sort: sortOption as any,
      });
      
      setFilteredProducts(filtered);
      setIsLoading(false);
    };
    
    applyFilters();
    updateUrl();
  }, [selectedFilters, priceRange, searchQuery, sortOption]);

  // Handle filter changes
  const handleFilterChange = (categoryId: string, value: string) => {
    setSelectedFilters((prev) => {
      const currentValues = prev[categoryId] || [];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      
      return {
        ...prev,
        [categoryId]: newValues,
      };
    });
  };

  // Handle price range changes
  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
  };

  // Handle search input
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchQuery(searchInput);
  };

  // Handle sort change
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  // Clear all filters
  const handleClearAll = () => {
    setSelectedFilters({});
    setPriceRange(filterOptions.priceRange);
    setSearchQuery('');
    setSearchInput('');
    setSortOption('newest');
  };

  // Toggle mobile filter sidebar
  const toggleMobileFilter = () => {
    setIsMobileFilterOpen(!isMobileFilterOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shop E-Bikes</h1>
          <p className="text-gray-600">
            Browse our collection of premium electric bikes for every rider and terrain.
          </p>
        </div>

        {/* Search and Sort Bar */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <form onSubmit={handleSearchSubmit} className="relative flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search bikes..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <button type="submit" className="sr-only">Search</button>
            </form>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMobileFilter}
                className="md:hidden bg-gray-100 text-gray-700 px-4 py-2 rounded-lg flex items-center hover:bg-gray-200 transition-colors"
              >
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                Filters
              </button>
              
              <div className="relative">
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <label htmlFor="sort" className="pl-4 text-gray-500">Sort:</label>
                  <select
                    id="sort"
                    value={sortOption}
                    onChange={handleSortChange}
                    className="appearance-none bg-transparent py-2 pl-2 pr-8 rounded-lg focus:outline-none"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          {(selectedFilters.category?.length > 0 || 
            selectedFilters.brand?.length > 0 || 
            priceRange[0] !== filterOptions.priceRange[0] || 
            priceRange[1] !== filterOptions.priceRange[1] || 
            searchQuery) && (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-gray-500">Active Filters:</span>
              
              {searchQuery && (
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Search: {searchQuery}
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setSearchInput('');
                    }}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              
              {selectedFilters.category?.map((category) => (
                <div 
                  key={`category-${category}`} 
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  Category: {filterOptions.categories.find(c => c.value === category)?.label}
                  <button 
                    onClick={() => handleFilterChange('category', category)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              
              {selectedFilters.brand?.map((brand) => (
                <div 
                  key={`brand-${brand}`} 
                  className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  Brand: {brand}
                  <button 
                    onClick={() => handleFilterChange('brand', brand)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              ))}
              
              {(priceRange[0] !== filterOptions.priceRange[0] || 
                priceRange[1] !== filterOptions.priceRange[1]) && (
                <div className="inline-flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  Price: ${priceRange[0]} - ${priceRange[1]}
                  <button 
                    onClick={() => setPriceRange(filterOptions.priceRange)}
                    className="ml-2 text-blue-600 hover:text-blue-800"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </div>
              )}
              
              <button 
                onClick={handleClearAll}
                className="text-sm text-red-600 hover:text-red-800 ml-2"
              >
                Clear All
              </button>
            </div>
          )}
        </div>

        {/* Main Content Area with Sidebar and Products */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Desktop Filter Sidebar */}
          <div className="hidden lg:block w-64 bg-white rounded-lg shadow-sm h-fit">
            <FilterSidebar
              categories={filterCategories}
              priceRange={priceRange}
              selectedFilters={selectedFilters}
              onFilterChange={handleFilterChange}
              onPriceChange={handlePriceChange}
              onClearAll={handleClearAll}
            />
          </div>
          
          {/* Mobile Filter Sidebar */}
          {isMobileFilterOpen && (
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75 z-50 lg:hidden">
              <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl z-50">
                <FilterSidebar
                  categories={filterCategories}
                  priceRange={priceRange}
                  selectedFilters={selectedFilters}
                  onFilterChange={handleFilterChange}
                  onPriceChange={handlePriceChange}
                  onClearAll={handleClearAll}
                  onClose={toggleMobileFilter}
                  isMobile={true}
                />
              </div>
            </div>
          )}
          
          {/* Product Grid */}
          <div className="flex-grow">
            <ProductGrid products={filteredProducts} loading={isLoading} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;