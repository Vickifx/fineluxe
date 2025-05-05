
import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const { cart, getCartTotal } = useCart();
  
  if (!isOpen) return null;
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Format cart items for WhatsApp message
    const items = cart.map(item => 
      `– ${item.product.title} x ${item.quantity} ($${item.product.price * item.quantity})`
    ).join('%0A');
    
    const total = `Total: $${getCartTotal()}`;
    
    // Format customer details
    const customerDetails = `%0A%0ACustomer Details:%0AName: ${name}%0APhone: ${phone}%0AAddress: ${address}`;
    
    // Create WhatsApp message
    const message = `Order from LuxGems:%0A${items}%0A%0A${total}${customerDetails}`;
    
    // Create WhatsApp URL with dummy business phone number
    const whatsappUrl = `https://wa.me/1234567890?text=${message}`;
    
    // Open WhatsApp in a new window
    window.open(whatsappUrl, '_blank');
    
    onClose();
  };
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 animate-fade-in">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 animate-slide-up">
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-xl font-playfair font-semibold text-navy">Complete Your Order</h2>
          <button 
            onClick={onClose} 
            className="text-gray-500 hover:text-navy"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="mb-6">
            <h3 className="font-medium mb-2">Order Summary</h3>
            <div className="bg-gray-50 p-4 rounded-md">
              {cart.map(item => (
                <div key={item.product.id} className="flex justify-between mb-2">
                  <span>{item.product.title} × {item.quantity}</span>
                  <span>${item.product.price * item.quantity}</span>
                </div>
              ))}
              <div className="border-t border-gray-200 mt-3 pt-3 font-medium flex justify-between">
                <span>Total</span>
                <span>${getCartTotal()}</span>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address (Optional)
                </label>
                <textarea
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy"
                />
              </div>
            </div>
            
            <div className="mt-6">
              <p className="text-sm text-gray-500 mb-4">
                By clicking "Continue to WhatsApp", you'll be redirected to WhatsApp to confirm your order with our customer service team.
              </p>
              <button
                type="submit"
                className="w-full btn-primary py-3"
              >
                Continue to WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
