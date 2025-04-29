export interface Product {
  id: string;
  name: string;
  price: number;
  salePrice?: number;
  discount: number;
  image: string;
  images: string[];
  category: string;
  brand: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  shortDescription: string;
  description: string;
  specifications: Record<string, string | number>;
  features: string[];
  colors?: string[];
  sizes?: string[];
  relatedProducts?: string[];
}

export interface ProductFilter {
  category?: string[];
  brand?: string[];
  priceRange?: [number, number];
  inStock?: boolean;
  sort?: 'price-asc' | 'price-desc' | 'rating' | 'newest';
}