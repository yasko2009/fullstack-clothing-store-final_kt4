export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export let products: Product[] = [
  {
    id: 1,
    name: "Classic Black Jacket",
    price: 5990,
    category: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=800&q=80",
    description: "Classic black jacket for everyday wear.",
  },
  {
    id: 2,
    name: "White Oversized T-Shirt",
    price: 1990,
    category: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80",
    description: "Comfortable oversized cotton T-shirt.",
  },
  {
    id: 3,
    name: "Blue Denim Jeans",
    price: 4490,
    category: "Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=800&q=80",
    description: "Straight-fit blue denim jeans.",
  },
  {
    id: 4,
    name: "Beige Hoodie",
    price: 3990,
    category: "Hoodies",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80",
    description: "Soft beige hoodie with a relaxed fit.",
  },
  {
    id: 5,
    name: "Casual Shoes",
    price: 6990,
    category: "Shoes",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    description: "Modern casual shoes for everyday outfits.",
  },
  {
    id: 6,
    name: "Minimal Backpack",
    price: 3290,
    category: "Accessories",
    image:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80",
    description: "Minimal backpack for daily use.",
  },
];