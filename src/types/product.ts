export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  fragranceFamily: string;
  occasion: string;
  description: string;
  notes: {
    top: string[];
    middle: string[];
    base: string[];
  };
  sizes: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}