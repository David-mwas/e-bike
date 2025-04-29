import React from 'react';
import { X, ChevronDown, ChevronUp } from 'lucide-react';

interface FilterCategory {
  id: string;
  name: string;
  options: FilterOption[];
}

interface FilterOption {
  value: string;
  label: string;
  count: number;
}

interface FilterSidebarProps {
  categories: FilterCategory[];
  priceRange: [number, number];
  selectedFilters: Record<string, string[]>;
  onFilterChange: (categoryId: string, value: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onClearAll: () => void;
  onClose?: () => void;
  isMobile?: boolean;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  categories,
  priceRange,
  selectedFilters,
  onFilterChange,
  onPriceChange,
  onClearAll,
  onClose,
  isMobile = false,
}) => {
  const [expandedCategories, setExpandedCategories] = React.useState<Record<string, boolean>>(
    categories.reduce((acc, category) => ({ ...acc, [category.id]: true }), {})
  );
  
  const [localPriceRange, setLocalPriceRange] = React.useState<[number, number]>(priceRange);
  
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  };
  
  const handlePriceInputChange = (index: number, value: string) => {
    const newValue = parseInt(value, 10) || 0;
    const newRange = [...localPriceRange] as [number, number];
    newRange[index] = newValue;
    setLocalPriceRange(newRange);
  };
  
  const applyPriceFilter = () => {
    onPriceChange(localPriceRange);
  };
  
  return (
    <div className={`bg-white ${isMobile ? 'p-4' : 'p-6'} h-full overflow-y-auto`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={onClearAll}
            className="text-sm text-blue-600 hover:text-blue-800 transition-colors"
          >
            Clear All
          </button>
          {isMobile && (
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          )}
        </div>
      </div>
      
      {/* Price Range */}
      <div className="mb-8">
        <div 
          className="flex items-center justify-between cursor-pointer mb-4" 
          onClick={() => toggleCategory('price')}
        >
          <h3 className="text-lg font-medium text-gray-800">Price Range</h3>
          {expandedCategories['price'] ? (
            <ChevronUp className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDown className="h-5 w-5 text-gray-500" />
          )}
        </div>
        
        {expandedCategories['price'] && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="w-1/2">
                <label htmlFor="min-price" className="block text-sm text-gray-500 mb-1">
                  Min Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="min-price"
                    value={localPriceRange[0]}
                    onChange={(e) => handlePriceInputChange(0, e.target.value)}
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label htmlFor="max-price" className="block text-sm text-gray-500 mb-1">
                  Max Price
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                    $
                  </span>
                  <input
                    type="number"
                    id="max-price"
                    value={localPriceRange[1]}
                    onChange={(e) => handlePriceInputChange(1, e.target.value)}
                    className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            </div>
            <button
              onClick={applyPriceFilter}
              className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Apply Price
            </button>
          </div>
        )}
      </div>
      
      {/* Filter Categories */}
      {categories.map((category) => (
        <div key={category.id} className="mb-6">
          <div 
            className="flex items-center justify-between cursor-pointer mb-4" 
            onClick={() => toggleCategory(category.id)}
          >
            <h3 className="text-lg font-medium text-gray-800">{category.name}</h3>
            {expandedCategories[category.id] ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </div>
          
          {expandedCategories[category.id] && (
            <div className="space-y-3">
              {category.options.map((option) => {
                const isSelected = selectedFilters[category.id]?.includes(option.value);
                
                return (
                  <div key={option.value} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`${category.id}-${option.value}`}
                      checked={isSelected}
                      onChange={() => onFilterChange(category.id, option.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor={`${category.id}-${option.value}`}
                      className="ml-3 text-sm text-gray-700 cursor-pointer flex-grow"
                    >
                      {option.label}
                    </label>
                    <span className="text-xs text-gray-500">({option.count})</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FilterSidebar;