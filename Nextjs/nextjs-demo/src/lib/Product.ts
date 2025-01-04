// types/Product.ts

// Define Review type
export interface Review {
  rating: number;
  comment: string;
  user: string;
}

// Define Product type
export interface Product {
  id: number; // Product ID
  name: string; // Product name
  price: number; // Product price
  description: string; // Product description
  category: string; // Category of the product
  discountPercentage: string; // Discount percentage as a string (e.g. "10%")
  rating: number; // Rating of the product
  stock: number; // Stock available
  tags: string[]; // Tags associated with the product
  brand: string; // Product brand
  sku: string; // SKU (Stock Keeping Unit)
  weight: number; // Product weight
  reviews: Review[]; // Array of reviews for the product
}

// Define Product Response type for API response
interface ProductResponse {
  products: Product[];
}
