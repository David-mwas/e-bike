import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: "bike-001",
    name: "Alpine Explorer Pro",
    price: 2499.99,
    salePrice: 2199.99,
    discount: 12,
    image: "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "mountain",
    brand: "VoltCycle",
    rating: 4.7,
    reviews: 128,
    inStock: true,
    shortDescription: "Powerful mountain e-bike with 750W motor and 60-mile range.",
    description: "The Alpine Explorer Pro is our top-of-the-line mountain e-bike, designed for the toughest trails and the most adventurous riders. With a powerful 750W motor, 60-mile range, and full suspension system, this bike will take your off-road experiences to the next level. The Alpine Explorer Pro features a lightweight aluminum frame, hydraulic disc brakes, and 27.5\" puncture-resistant tires for ultimate performance and durability.",
    specifications: {
      "Motor": "750W brushless mid-drive",
      "Battery": "48V 14Ah lithium-ion, removable",
      "Range": "Up to 60 miles per charge",
      "Top Speed": "28 mph (Class 3)",
      "Frame": "Aluminum alloy",
      "Suspension": "Full suspension, 120mm travel",
      "Brakes": "Hydraulic disc brakes",
      "Gears": "Shimano 10-speed",
      "Tires": "27.5\" × 2.8\" puncture-resistant",
      "Weight": "52 lbs",
      "Max Load": "300 lbs",
      "Charging Time": "4-6 hours"
    },
    features: [
      "Integrated headlight and taillight",
      "LCD display with USB charging",
      "Throttle and pedal assist modes",
      "Water-resistant electronics",
      "Adjustable front fork suspension",
      "Walk assist mode"
    ],
    colors: ["Black/Red", "Blue/Gray", "Green/Black"],
    relatedProducts: ["bike-002", "bike-003", "bike-008"]
  },
  {
    id: "bike-002",
    name: "Urban Commuter Elite",
    price: 1799.99,
    salePrice: 1599.99,
    discount: 11,
    image: "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4597829/pexels-photo-4597829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "city",
    brand: "EcoMotion",
    rating: 4.5,
    reviews: 92,
    inStock: true,
    shortDescription: "Sleek city e-bike with integrated lights and 50-mile range.",
    description: "The Urban Commuter Elite is designed for the modern city rider who values style, comfort, and efficiency. This premium e-bike features a sleek frame design with integrated battery and cables for a clean look. With a range of up to 50 miles per charge and a top speed of 20 mph, the Urban Commuter Elite is perfect for daily commutes and weekend adventures around the city. The bike comes equipped with fenders, rear rack, and integrated lighting system for ultimate convenience.",
    specifications: {
      "Motor": "500W rear hub motor",
      "Battery": "36V 13Ah lithium-ion, integrated",
      "Range": "Up to 50 miles per charge",
      "Top Speed": "20 mph (Class 2)",
      "Frame": "Aluminum alloy, step-through design",
      "Suspension": "Front suspension fork",
      "Brakes": "Tektro hydraulic disc brakes",
      "Gears": "Shimano 8-speed",
      "Tires": "27.5\" × 2.2\" puncture-resistant",
      "Weight": "48 lbs",
      "Max Load": "275 lbs",
      "Charging Time": "3-5 hours"
    },
    features: [
      "Integrated front and rear lights",
      "Color LCD display",
      "5 levels of pedal assist",
      "Thumb throttle",
      "Rear rack with 55 lb capacity",
      "Full fenders",
      "Comfort saddle with suspension seatpost"
    ],
    colors: ["Matte Black", "Pearl White", "Navy Blue"],
    relatedProducts: ["bike-004", "bike-007", "bike-010"]
  },
  {
    id: "bike-003",
    name: "Trail Blazer X1",
    price: 2199.99,
    salePrice: 2199.99,
    discount: 0,
    image: "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4597829/pexels-photo-4597829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "mountain",
    brand: "PeakRider",
    rating: 4.8,
    reviews: 76,
    inStock: true,
    shortDescription: "High-performance trail e-bike with full suspension and 70-mile range.",
    description: "The Trail Blazer X1 is a high-performance electric mountain bike built for serious trail enthusiasts. Featuring a full suspension system with 140mm travel, this e-bike can handle the most challenging terrains with ease. The powerful 750W motor provides smooth and consistent power delivery, while the large capacity battery ensures you can ride up to 70 miles on a single charge. With premium components throughout, the Trail Blazer X1 offers an exceptional off-road riding experience.",
    specifications: {
      "Motor": "750W high-torque mid-drive",
      "Battery": "48V 17.5Ah lithium-ion, removable",
      "Range": "Up to 70 miles per charge",
      "Top Speed": "28 mph (Class 3)",
      "Frame": "Hydroformed aluminum alloy",
      "Suspension": "Full suspension, 140mm travel",
      "Brakes": "SRAM 4-piston hydraulic disc brakes",
      "Gears": "SRAM Eagle 12-speed",
      "Tires": "29\" × 2.6\" tubeless-ready",
      "Weight": "54 lbs",
      "Max Load": "330 lbs",
      "Charging Time": "5-7 hours"
    },
    features: [
      "Advanced color display with navigation",
      "Bluetooth connectivity with smartphone app",
      "Remote lockout suspension",
      "Boost mode for steep climbs",
      "Integrated frame protection",
      "Dropper seatpost"
    ],
    colors: ["Carbon/Red", "Stealth Black", "Desert Tan"],
    relatedProducts: ["bike-001", "bike-008", "bike-009"]
  },
  {
    id: "bike-004",
    name: "City Glider Pro",
    price: 1499.99,
    salePrice: 1349.99,
    discount: 10,
    image: "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4597829/pexels-photo-4597829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "city",
    brand: "EcoMotion",
    rating: 4.4,
    reviews: 103,
    inStock: true,
    shortDescription: "Elegant city e-bike with step-through frame and 45-mile range.",
    description: "The City Glider Pro is the perfect companion for urban adventures. This elegant e-bike features a step-through frame design for easy mounting and dismounting, making it accessible for riders of all ages and abilities. With a range of up to 45 miles per charge and a comfortable upright riding position, the City Glider Pro is ideal for daily commutes, errands, and leisurely rides around town. The integrated front basket and rear rack provide ample storage space for your belongings.",
    specifications: {
      "Motor": "350W rear hub motor",
      "Battery": "36V 10.4Ah lithium-ion, removable",
      "Range": "Up to 45 miles per charge",
      "Top Speed": "20 mph (Class 2)",
      "Frame": "Aluminum alloy, step-through",
      "Suspension": "Front suspension fork",
      "Brakes": "Mechanical disc brakes",
      "Gears": "Shimano 7-speed",
      "Tires": "26\" × 2.0\" comfort",
      "Weight": "45 lbs",
      "Max Load": "265 lbs",
      "Charging Time": "3-4 hours"
    },
    features: [
      "LED display with battery level indicator",
      "Integrated front and rear lights",
      "Front basket included",
      "Rear cargo rack",
      "Full fenders",
      "Kickstand",
      "Comfort saddle with springs"
    ],
    colors: ["Mint Green", "Sky Blue", "Sandstone"],
    relatedProducts: ["bike-002", "bike-007", "bike-010"]
  },
  {
    id: "bike-005",
    name: "Compact Folder X3",
    price: 1299.99,
    salePrice: 1099.99,
    discount: 15,
    image: "https://images.pexels.com/photos/4597829/pexels-photo-4597829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/4597829/pexels-photo-4597829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "folding",
    brand: "UrbanFolder",
    rating: 4.2,
    reviews: 67,
    inStock: true,
    shortDescription: "Compact folding e-bike perfect for commuters with limited storage space.",
    description: "The Compact Folder X3 is the ultimate solution for commuters with limited storage space. This innovative e-bike folds down in seconds to a compact size that fits easily in car trunks, under desks, or in small apartments. Despite its small size, the Compact Folder X3 doesn't compromise on performance, featuring a 350W motor and a range of up to 35 miles per charge. The 20-inch wheels provide a smooth ride, while the adjustable stem and seat accommodate riders of various heights.",
    specifications: {
      "Motor": "350W rear hub motor",
      "Battery": "36V 7.8Ah lithium-ion, integrated",
      "Range": "Up to 35 miles per charge",
      "Top Speed": "20 mph (Class 2)",
      "Frame": "Aluminum alloy, folding",
      "Suspension": "None",
      "Brakes": "Mechanical disc brakes",
      "Gears": "Shimano 7-speed",
      "Tires": "20\" × 1.95\" urban",
      "Weight": "38 lbs",
      "Max Load": "250 lbs",
      "Charging Time": "2.5-4 hours",
      "Folded Dimensions": "30\" × 16\" × 26\""
    },
    features: [
      "Folds in 10 seconds",
      "LED display",
      "Integrated front and rear lights",
      "Quick-release seat post and handlebar stem",
      "Magnet catch for folded position",
      "Optional carrying bag available"
    ],
    colors: ["Graphite", "Silver", "Red"],
    relatedProducts: ["bike-006", "bike-007", "bike-012"]
  },
  {
    id: "bike-006",
    name: "Cruiser Classic Plus",
    price: 1699.99,
    salePrice: 1699.99,
    discount: 0,
    image: "https://images.pexels.com/photos/805303/pexels-photo-805303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/805303/pexels-photo-805303.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "cruiser",
    brand: "CoastRider",
    rating: 4.6,
    reviews: 89,
    inStock: true,
    shortDescription: "Comfortable beach cruiser e-bike with retro styling and 40-mile range.",
    description: "The Cruiser Classic Plus combines retro styling with modern electric technology, creating a beach cruiser e-bike that's as fun to ride as it is to look at. The relaxed riding position and wide handlebars provide exceptional comfort, while the powerful motor and battery deliver a range of up to 40 miles per charge. Perfect for beach boardwalks, neighborhood cruises, and Sunday adventures, the Cruiser Classic Plus will turn heads wherever you go with its classic design and available in vibrant colors.",
    specifications: {
      "Motor": "500W rear hub motor",
      "Battery": "48V 10.4Ah lithium-ion, removable",
      "Range": "Up to 40 miles per charge",
      "Top Speed": "20 mph (Class 2)",
      "Frame": "Steel, step-through design",
      "Suspension": "None",
      "Brakes": "Mechanical disc brakes",
      "Gears": "Shimano 7-speed",
      "Tires": "26\" × 2.35\" balloon",
      "Weight": "57 lbs",
      "Max Load": "300 lbs",
      "Charging Time": "3-5 hours"
    },
    features: [
      "Bright LED headlight and taillight",
      "LCD display with USB charging port",
      "Comfortable sprung saddle",
      "Full fenders",
      "Rear rack",
      "Wide handlebar with ergonomic grips",
      "Retro-styled lighting"
    ],
    colors: ["Aqua Blue", "Cherry Red", "Cream", "Matte Black"],
    relatedProducts: ["bike-004", "bike-007", "bike-010"]
  },
  {
    id: "bike-007",
    name: "Metro Commuter X2",
    price: 1399.99,
    salePrice: 1399.99,
    discount: 0,
    image: "https://images.pexels.com/photos/10079307/pexels-photo-10079307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/10079307/pexels-photo-10079307.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "city",
    brand: "CommuteEase",
    rating: 4.3,
    reviews: 125,
    inStock: true,
    shortDescription: "Affordable and reliable city commuter e-bike with 35-mile range.",
    description: "The Metro Commuter X2 is designed for urban riders who want a reliable, affordable electric bike for daily transportation. With a focus on practicality and value, this e-bike comes equipped with all the essential features for city riding, including integrated lights, fenders, and a rear rack. The 350W motor provides enough power for most urban terrain, while the battery delivers a range of up to 35 miles per charge. The Metro Commuter X2 is the perfect entry-level e-bike for those looking to replace car trips with clean, efficient electric transportation.",
    specifications: {
      "Motor": "350W rear hub motor",
      "Battery": "36V 10Ah lithium-ion, removable",
      "Range": "Up to 35 miles per charge",
      "Top Speed": "20 mph (Class 2)",
      "Frame": "Aluminum alloy",
      "Suspension": "Front suspension fork",
      "Brakes": "Mechanical disc brakes",
      "Gears": "Shimano 7-speed",
      "Tires": "26\" × 1.95\" commuter",
      "Weight": "47 lbs",
      "Max Load": "265 lbs",
      "Charging Time": "3-4 hours"
    },
    features: [
      "LED display",
      "Integrated front and rear lights",
      "Full fenders",
      "Rear rack included",
      "Adjustable stem",
      "Kickstand",
      "Bell"
    ],
    colors: ["Black", "White", "Dark Blue"],
    relatedProducts: ["bike-002", "bike-004", "bike-010"]
  },
  {
    id: "bike-008",
    name: "Summit Pro X5",
    price: 2899.99,
    salePrice: 2599.99,
    discount: 10,
    image: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    images: [
      "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/1149601/pexels-photo-1149601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/5465196/pexels-photo-5465196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/3006096/pexels-photo-3006096.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      "https://images.pexels.com/photos/4599358/pexels-photo-4599358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    ],
    category: "mountain",
    brand: "PeakRider",
    rating: 4.9,
    reviews: 52,
    inStock: true,
    shortDescription: "Premium carbon frame mountain e-bike with 80-mile range and top components.",
    description: "The Summit Pro X5 is our flagship mountain e-bike, featuring a premium carbon fiber frame and top-of-the-line components throughout. Designed for serious riders who demand the best, this e-bike comes equipped with a powerful mid-drive motor, long-range battery, and premium Fox suspension components. The Summit Pro X5 excels on challenging terrain, whether you're climbing steep mountain trails or descending technical singletrack. With a range of up to 80 miles per charge and class-leading performance, this is the ultimate electric mountain bike for those who refuse to compromise.",
    specifications: {
      "Motor": "Brose S Mag 750W mid-drive",
      "Battery": "48V 21Ah lithium-ion, integrated",
      "Range": "Up to 80 miles per charge",
      "Top Speed": "28 mph (Class 3)",
      "Frame": "Carbon fiber",
      "Suspension": "Fox Factory 150mm front, 140mm rear",
      "Brakes": "SRAM Code RSC 4-piston hydraulic disc",
      "Gears": "SRAM XX1 Eagle 12-speed",
      "Tires": "29\" × 2.6\" Maxxis tubeless",
      "Weight": "48 lbs",
      "Max Load": "330 lbs",
      "Charging Time": "5-7 hours"
    },
    features: [
      "Carbon fiber wheels",
      "Advanced color display with GPS",
      "Smartphone app integration",
      "Electronic suspension lockout",
      "Integrated frame protection",
      "Fox Transfer dropper post",
      "Multiple power modes"
    ],
    colors: ["Carbon/Gold", "Carbon/Red", "Stealth Black"],
    relatedProducts: ["bike-001", "bike-003", "bike-009"]
  }
];

// Helper function to get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find((product) => product.id === id);
};

// Helper function to filter products
export const filterProducts = (filters: {
  category?: string[];
  brand?: string[];
  priceRange?: [number, number];
  inStock?: boolean;
  search?: string;
  sort?: string;
}): Product[] => {
  return products.filter((product) => {
    // Category filter
    if (filters.category && filters.category.length > 0) {
      if (!filters.category.includes(product.category)) {
        return false;
      }
    }

    // Brand filter
    if (filters.brand && filters.brand.length > 0) {
      if (!filters.brand.includes(product.brand)) {
        return false;
      }
    }

    // Price range filter
    if (filters.priceRange) {
      const productPrice = product.salePrice || product.price;
      if (
        productPrice < filters.priceRange[0] ||
        productPrice > filters.priceRange[1]
      ) {
        return false;
      }
    }

    // In stock filter
    if (filters.inStock !== undefined) {
      if (filters.inStock && !product.inStock) {
        return false;
      }
    }

    // Search filter
    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(searchTerm);
      const descriptionMatch = product.description.toLowerCase().includes(searchTerm);
      const categoryMatch = product.category.toLowerCase().includes(searchTerm);
      const brandMatch = product.brand.toLowerCase().includes(searchTerm);

      if (!(nameMatch || descriptionMatch || categoryMatch || brandMatch)) {
        return false;
      }
    }

    return true;
  }).sort((a, b) => {
    // Sort products
    if (filters.sort) {
      switch (filters.sort) {
        case 'price-asc':
          return (a.salePrice || a.price) - (b.salePrice || b.price);
        case 'price-desc':
          return (b.salePrice || b.price) - (a.salePrice || a.price);
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          // For simplicity, we'll use alphabetical sorting as a proxy for "newest"
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    }
    return 0;
  });
};

// Get available filters from products
export const getAvailableFilters = () => {
  const categories = new Set<string>();
  const brands = new Set<string>();
  let minPrice = Infinity;
  let maxPrice = 0;

  products.forEach((product) => {
    categories.add(product.category);
    brands.add(product.brand);
    
    const price = product.salePrice || product.price;
    minPrice = Math.min(minPrice, price);
    maxPrice = Math.max(maxPrice, price);
  });

  return {
    categories: Array.from(categories).map((category) => ({
      value: category,
      label: category.charAt(0).toUpperCase() + category.slice(1) + ' Bikes',
      count: products.filter((p) => p.category === category).length,
    })),
    brands: Array.from(brands).map((brand) => ({
      value: brand,
      label: brand,
      count: products.filter((p) => p.brand === brand).length,
    })),
    priceRange: [Math.floor(minPrice), Math.ceil(maxPrice)] as [number, number],
  };
};