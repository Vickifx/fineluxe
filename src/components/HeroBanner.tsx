
import React from 'react';
import { Link } from 'react-router-dom';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-brown h-[80vh] flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D)',
        }}
      >
        <div className="absolute inset-0 bg-brown/60"></div>
      </div>

      {/* Content */}
      <div className="container-padding mx-auto relative z-10 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            Luxury <span className="text-nude-300">Jewelry</span> for Every Occasion
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Discover our handcrafted collection that celebrates life's most precious moments.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/shop" className="btn-primary py-3 px-8 text-lg">
              Shop Collection
            </Link>
            <Link to="/about" className="border border-white text-white hover:bg-white hover:text-brown px-8 py-3 rounded-md transition-colors text-lg">
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
