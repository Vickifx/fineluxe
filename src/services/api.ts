import { Product } from '../context/CartContext';

// Mock API data for products since we're not connecting to a real backend yet
const mockProducts: Product[] = [
  {
    id: "1",
    title: "Diamond Solitaire Ring",
    price: 2999,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D",
    category: "rings",
    description: "A stunning 1.5 carat diamond solitaire ring set in 18k white gold. The perfect symbol of eternal love."
  },
  {
    id: "2",
    title: "Pearl Necklace",
    price: 1299,
    image: "https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhcmwlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D",
    category: "necklaces",
    description: "Elegant freshwater pearl necklace with 14k gold clasp. Each pearl is hand-selected for its luster and shape."
  },
  {
    id: "3",
    title: "Sapphire Earrings",
    price: 1899,
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FwcGhpcmUlMjBlYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D",
    category: "earrings",
    description: "Stunning blue sapphire drop earrings surrounded by diamonds, set in 18k white gold."
  },
  {
    id: "4",
    title: "Gold Tennis Bracelet",
    price: 3499,
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGJyYWNlbGV0fGVufDB8fDB8fHww",
    category: "bracelets",
    description: "Classic diamond tennis bracelet featuring 5 carats of round brilliant diamonds set in 18k yellow gold."
  },
  {
    id: "5",
    title: "Emerald Pendant",
    price: 2199,
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1lcmFsZCUyMHBlbmRhbnR8ZW58MHx8MHx8fDA%3D",
    category: "necklaces",
    description: "Vibrant Colombian emerald pendant surrounded by a halo of diamonds, suspended on an 18k white gold chain."
  },
  {
    id: "6",
    title: "Rose Gold Wedding Band",
    price: 999,
    image: "https://images.unsplash.com/photo-1595925889916-5412a7d51570?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cm9zZSUyMGdvbGQlMjByaW5nfGVufDB8fDB8fHww",
    category: "rings",
    description: "Elegant 4mm comfort-fit wedding band crafted in 14k rose gold with a high-polish finish."
  },
  {
    id: "7",
    title: "Diamond Hoop Earrings",
    price: 1599,
    image: "https://images.unsplash.com/photo-1656428851901-77b5bf16687b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRpYW1vbmQlMjBlYXJyaW5nc3xlbnwwfHwwfHx8MA%3D",
    category: "earrings",
    description: "Sophisticated diamond hoop earrings featuring 2 carats of round brilliant diamonds set in 18k white gold."
  },
  {
    id: "8",
    title: "Platinum Chain Bracelet",
    price: 2799,
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhdGludW0lMjBicmFjZWxldHxlbnwwfHwwfHx8MA%3D%3D",
    category: "bracelets",
    description: "Luxurious platinum chain bracelet with a sleek contemporary design and secure lobster clasp."
  }
];

// Get all products with optional filtering
export const getProducts = async (category?: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Filter by category if provided
  if (category) {
    return mockProducts.filter(product => product.category === category);
  }
  
  return mockProducts;
};

// Get a single product by ID
export const getProductById = async (id: string) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  const product = mockProducts.find(product => product.id === id);
  
  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }
  
  return product;
};

// Get featured products
export const getFeaturedProducts = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Return a subset of products as featured
  return mockProducts.slice(0, 4);
};

// Get product categories
export const getCategories = async () => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 200));
  
  // Extract unique categories
  const categories = Array.from(new Set(mockProducts.map(product => product.category)));
  return categories;
};
