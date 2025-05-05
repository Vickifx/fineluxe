
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-padding mx-auto py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-navy">Fine<span className="text-gold">luxe</span></span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-navy hover:text-gold transition-colors">Home</Link>
            <Link to="/shop" className="text-navy hover:text-gold transition-colors">Shop</Link>
            <Link to="/collections" className="text-navy hover:text-gold transition-colors">Collections</Link>
            <Link to="/about" className="text-navy hover:text-gold transition-colors">About</Link>
            <Link to="/contact" className="text-navy hover:text-gold transition-colors">Contact</Link>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <Link to="/cart" className="relative p-2 text-navy hover:text-gold transition-colors">
              <ShoppingCart size={24} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu} 
              className="ml-4 md:hidden text-navy hover:text-gold transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-navy hover:text-gold transition-colors" onClick={toggleMenu}>Home</Link>
              <Link to="/shop" className="text-navy hover:text-gold transition-colors" onClick={toggleMenu}>Shop</Link>
              <Link to="/collections" className="text-navy hover:text-gold transition-colors" onClick={toggleMenu}>Collections</Link>
              <Link to="/about" className="text-navy hover:text-gold transition-colors" onClick={toggleMenu}>About</Link>
              <Link to="/contact" className="text-navy hover:text-gold transition-colors" onClick={toggleMenu}>Contact</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
