
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.title} added to cart`);
  };

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="product-card overflow-hidden group">
      <Link to={`/product/${product.id}`} className="block">
        <div className="relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
              <span className="text-white font-semibold">{formattedPrice}</span>
              <button 
                onClick={handleAddToCart} 
                className="bg-gold hover:bg-gold-600 text-white p-2 rounded-full transition-colors"
                aria-label="Add to cart"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-navy font-medium text-lg mb-1 truncate">
            {product.title}
          </h3>
          <p className="text-gray-500 text-sm">
            {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
