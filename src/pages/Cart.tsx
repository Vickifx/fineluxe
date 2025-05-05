
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Trash2, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CheckoutModal from '../components/CheckoutModal';

const Cart = () => {
  const { cart, removeFromCart, addToCart, decreaseQuantity, getCartTotal } = useCart();
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState(false);

  if (cart.length === 0) {
    return (
      <div className="container-padding mx-auto py-16">
        <h1 className="section-title text-center">Shopping Cart</h1>
        <div className="flex flex-col items-center justify-center py-12">
          <ShoppingBag className="text-gray-300 w-16 h-16 mb-4" />
          <p className="text-lg text-gray-500 mb-6">Your cart is empty</p>
          <Link to="/shop" className="btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container-padding mx-auto py-16">
      <h1 className="section-title text-center mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="hidden md:flex text-sm text-gray-500 border-b pb-4 mb-4">
              <div className="w-2/5">Product</div>
              <div className="w-1/5 text-center">Price</div>
              <div className="w-1/5 text-center">Quantity</div>
              <div className="w-1/5 text-right">Total</div>
            </div>
            
            {cart.map((item) => (
              <div key={item.product.id} className="flex flex-col md:flex-row items-start md:items-center py-4 border-b last:border-0">
                {/* Product Info (Mobile: Top Row) */}
                <div className="flex w-full md:w-2/5 mb-4 md:mb-0">
                  <div className="w-20 h-20 bg-gray-100 rounded">
                    <img 
                      src={item.product.image} 
                      alt={item.product.title} 
                      className="w-full h-full object-cover rounded"
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-navy font-medium">
                      <Link to={`/product/${item.product.id}`} className="hover:text-gold">
                        {item.product.title}
                      </Link>
                    </h3>
                    <p className="text-sm text-gray-500 capitalize mt-1">{item.product.category}</p>
                    <button 
                      className="text-red-500 text-sm flex items-center mt-2 md:hidden"
                      onClick={() => removeFromCart(item.product.id)}
                    >
                      <Trash2 size={14} className="mr-1" /> Remove
                    </button>
                  </div>
                </div>
                
                {/* Price (Mobile: Part of Bottom Row) */}
                <div className="w-1/3 md:w-1/5 md:text-center">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Price</div>
                  <div>${item.product.price}</div>
                </div>
                
                {/* Quantity (Mobile: Part of Bottom Row) */}
                <div className="w-1/3 md:w-1/5 md:text-center flex justify-start md:justify-center">
                  <div className="md:hidden text-xs text-gray-500 mb-1 absolute -mt-5">Quantity</div>
                  <div className="flex items-center border rounded-md">
                    <button 
                      onClick={() => decreaseQuantity(item.product.id)}
                      className="px-2 py-1 text-gray-500 hover:text-navy"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="px-2 py-1 min-w-[30px] text-center">{item.quantity}</span>
                    <button 
                      onClick={() => addToCart(item.product)}
                      className="px-2 py-1 text-gray-500 hover:text-navy"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>
                
                {/* Total & Remove (Mobile: Part of Bottom Row) */}
                <div className="w-1/3 md:w-1/5 text-right flex flex-col items-end">
                  <div className="md:hidden text-xs text-gray-500 mb-1">Total</div>
                  <div className="font-medium">${item.product.price * item.quantity}</div>
                  <button 
                    className="text-gray-400 hover:text-red-500 mt-2 hidden md:inline-block"
                    onClick={() => removeFromCart(item.product.id)}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Order Summary</h2>
            
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t my-4 pt-4">
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${getCartTotal()}</span>
              </div>
            </div>
            
            <button
              onClick={() => setIsCheckoutModalOpen(true)}
              className="w-full btn-primary py-3 mt-4"
            >
              Proceed to Checkout
            </button>
            
            <Link
              to="/shop"
              className="w-full flex justify-center items-center text-navy hover:text-gold mt-4 py-2"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
      
      <CheckoutModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
      />
    </div>
  );
};

export default Cart;
