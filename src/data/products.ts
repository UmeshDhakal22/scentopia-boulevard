import { Product } from "@/types/product";
import perfume1 from "@/assets/perfume-1.jpg";
import perfume2 from "@/assets/perfume-2.jpg";
import perfume3 from "@/assets/perfume-3.jpg";
import perfume4 from "@/assets/perfume-4.jpg";

export const products: Product[] = [
  {
    id: "1",
    name: "Midnight Rose",
    brand: "Essence Luxe",
    price: 185,
    originalPrice: 220,
    image: perfume1,
    category: "Women",
    fragranceFamily: "Floral",
    occasion: "Evening",
    description: "A captivating evening fragrance that embodies sophistication and allure. Midnight Rose is a luxurious blend of deep florals and warm spices.",
    notes: {
      top: ["Bergamot", "Pink Pepper", "Blackcurrant"],
      middle: ["Rose", "Jasmine", "Iris"],
      base: ["Vanilla", "Musk", "Patchouli"]
    },
    sizes: ["30ml", "50ml", "100ml"],
    inStock: true,
    rating: 4.8,
    reviews: 234
  },
  {
    id: "2",
    name: "Ocean Breeze",
    brand: "Essence Luxe",
    price: 165,
    image: perfume2,
    category: "Unisex",
    fragranceFamily: "Fresh",
    occasion: "Daytime",
    description: "Fresh and invigorating, Ocean Breeze captures the essence of coastal mornings with its crisp, aquatic notes.",
    notes: {
      top: ["Sea Salt", "Lemon", "Mint"],
      middle: ["Marine Notes", "Lavender", "Geranium"],
      base: ["Cedarwood", "Amber", "White Musk"]
    },
    sizes: ["50ml", "100ml"],
    inStock: true,
    rating: 4.6,
    reviews: 189
  },
  {
    id: "3",
    name: "Golden Oud",
    brand: "Heritage Collection",
    price: 295,
    originalPrice: 350,
    image: perfume3,
    category: "Men",
    fragranceFamily: "Oriental",
    occasion: "Special Events",
    description: "An opulent fragrance featuring precious oud wood, Golden Oud is the epitome of luxury and refinement.",
    notes: {
      top: ["Saffron", "Cinnamon", "Nutmeg"],
      middle: ["Oud", "Rose", "Sandalwood"],
      base: ["Amber", "Vanilla", "Leather"]
    },
    sizes: ["50ml", "100ml"],
    inStock: true,
    rating: 4.9,
    reviews: 156
  },
  {
    id: "4",
    name: "Velvet Noir",
    brand: "Essence Luxe",
    price: 175,
    image: perfume4,
    category: "Women",
    fragranceFamily: "Oriental",
    occasion: "Evening",
    description: "Dark, mysterious, and utterly captivating. Velvet Noir is a seductive blend of rich florals and warm amber.",
    notes: {
      top: ["Plum", "Black Cherry", "Coriander"],
      middle: ["Tuberose", "Ylang-Ylang", "Chocolate"],
      base: ["Vanilla", "Benzoin", "Tonka Bean"]
    },
    sizes: ["30ml", "50ml", "100ml"],
    inStock: true,
    rating: 4.7,
    reviews: 201
  },
  {
    id: "5",
    name: "Citrus Garden",
    brand: "Summer Collection",
    price: 125,
    image: perfume1,
    category: "Unisex",
    fragranceFamily: "Citrus",
    occasion: "Daytime",
    description: "A vibrant celebration of Mediterranean citrus groves, perfect for sunny days and joyful moments.",
    notes: {
      top: ["Grapefruit", "Bergamot", "Lemon"],
      middle: ["Orange Blossom", "Petitgrain", "Neroli"],
      base: ["White Tea", "Musk", "Cedar"]
    },
    sizes: ["50ml", "100ml", "200ml"],
    inStock: true,
    rating: 4.5,
    reviews: 312
  },
  {
    id: "6",
    name: "Royal Amber",
    brand: "Heritage Collection",
    price: 245,
    image: perfume2,
    category: "Men",
    fragranceFamily: "Woody",
    occasion: "Evening",
    description: "A regal fragrance that commands attention. Royal Amber combines precious woods with warm amber accords.",
    notes: {
      top: ["Bergamot", "Apple", "Cinnamon"],
      middle: ["Geranium", "Clove", "Mahogany"],
      base: ["Amber", "Cedarwood", "Vetiver"]
    },
    sizes: ["50ml", "100ml"],
    inStock: true,
    rating: 4.8,
    reviews: 167
  },
  {
    id: "7",
    name: "White Jasmine",
    brand: "Essence Luxe",
    price: 155,
    originalPrice: 180,
    image: perfume3,
    category: "Women",
    fragranceFamily: "Floral",
    occasion: "Daytime",
    description: "Pure, elegant, and timeless. White Jasmine is a delicate floral bouquet perfect for any occasion.",
    notes: {
      top: ["Mandarin", "Green Tea", "Ivy"],
      middle: ["Jasmine", "White Rose", "Lily"],
      base: ["White Musk", "Sandalwood", "Amber"]
    },
    sizes: ["30ml", "50ml", "100ml"],
    inStock: false,
    rating: 4.6,
    reviews: 278
  },
  {
    id: "8",
    name: "Mystic Woods",
    brand: "Heritage Collection",
    price: 215,
    image: perfume4,
    category: "Men",
    fragranceFamily: "Woody",
    occasion: "All Day",
    description: "Journey into an enchanted forest with this sophisticated woody fragrance featuring rare botanicals.",
    notes: {
      top: ["Pine", "Eucalyptus", "Bergamot"],
      middle: ["Cypress", "Juniper", "Black Pepper"],
      base: ["Oakmoss", "Patchouli", "Leather"]
    },
    sizes: ["50ml", "100ml"],
    inStock: true,
    rating: 4.7,
    reviews: 145
  }
];