import React, { createContext, useContext, useState, useEffect } from 'react';

// Define product type
export interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
  description?: string;
}

// Define cart item type which includes product and quantity
export interface CartItem {
  product: Product;
  quantity: number;
}

// Define context type
interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  clearCart: () => void;
  getCartTotal: () => number;
}

// Create context
const CartContext = createContext<CartContextType | undefined>(undefined);

// Provider component
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error parsing cart data from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        // If product already exists in cart, increase quantity
        return prevCart.map(item => 
          item.product.id === product.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        // If product is new to cart, add with quantity 1
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  // Decrease quantity of a product in cart
  const decreaseQuantity = (productId: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === productId);
      if (existingItem && existingItem.quantity === 1) {
        // If quantity is 1, remove item from cart
        return prevCart.filter(item => item.product.id !== productId);
      }
      // Otherwise decrease quantity
      return prevCart.map(item => 
        item.product.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      );
    });
  };

  // Clear entire cart
  const clearCart = () => {
    setCart([]);
  };

  // Calculate total price of items in cart
  const getCartTotal = () => {
    return cart.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart, 
      removeFromCart, 
      decreaseQuantity, 
      clearCart, 
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
