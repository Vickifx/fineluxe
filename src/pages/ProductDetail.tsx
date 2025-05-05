
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingBag, Star } from 'lucide-react';
import { getProductById } from '../services/api';
import { Product, useCart } from '../context/CartContext';
import { toast } from 'sonner';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        setError('Product ID is missing');
        setLoading(false);
        return;
      }

      try {
        const data = await getProductById(id);
        setProduct(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load product details');
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      toast.success(`${quantity} ${product.title} added to cart`);
    }
  };

  if (loading) {
    return (
      <div className="container-padding mx-auto py-16">
        <div className="flex justify-center">
          <div className="animate-pulse w-full max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-200 rounded-md h-96"></div>
              <div className="space-y-4">
                <div className="h-8 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-12 bg-gray-200 rounded w-1/2 mt-8"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="container-padding mx-auto py-16">
        <div className="text-center">
          <h1 className="text-2xl font-medium text-red-500 mb-4">Error</h1>
          <p>{error || 'Product not found'}</p>
          <Link to="/shop" className="btn-primary mt-6 inline-block">
            Return to Shop
          </Link>
        </div>
      </div>
    );
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(product.price);

  return (
    <div className="container-padding mx-auto py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Product Details */}
        <div>
          <nav className="flex mb-4 text-sm">
            <Link to="/" className="text-gray-500 hover:text-navy">Home</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to="/shop" className="text-gray-500 hover:text-navy">Shop</Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link to={`/shop/${product.category}`} className="text-gray-500 hover:text-navy capitalize">{product.category}</Link>
          </nav>

          <h1 className="text-3xl md:text-4xl font-playfair font-medium text-navy mb-2">{product.title}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex text-gold">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} fill="#D4AF37" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-500">(12 reviews)</span>
          </div>

          <div className="text-2xl text-navy font-medium mb-6">{formattedPrice}</div>

          <div className="prose text-gray-600 mb-8">
            <p>{product.description}</p>
          </div>

          <div className="border-t border-b py-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">Quantity</span>
              
              <div className="flex items-center border border-gray-300 rounded-md">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="px-3 py-2 text-gray-500 hover:text-navy"
                  disabled={quantity <= 1}
                >
                  -
                </button>
                <span className="px-4 py-2 min-w-[40px] text-center">{quantity}</span>
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="px-3 py-2 text-gray-500 hover:text-navy"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <button
              onClick={handleAddToCart}
              className="btn-primary flex items-center justify-center py-3 px-6"
            >
              <ShoppingBag className="mr-2" size={18} />
              Add to Cart
            </button>
            
            <Link
              to="/cart"
              className="bg-gold text-white hover:bg-gold-600 px-6 py-3 rounded-md transition-all flex items-center justify-center"
            >
              Buy Now
            </Link>
          </div>

          <div className="mt-6 text-sm text-gray-500">
            <p>Category: <span className="text-navy capitalize">{product.category}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
