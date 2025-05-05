
import React from 'react';
import { Link } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import FeaturedProducts from '../components/FeaturedProducts';

const Index = () => {
  return (
    <div>
      <HeroBanner />
      <FeaturedProducts />
      
      {/* Categories Section */}
      <section className="py-16 container-padding mx-auto">
        <h2 className="section-title text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* Category Card 1 */}
          <Link to="/shop/rings" className="group relative h-64 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlhbW9uZCUyMHJpbmd8ZW58MHx8MHx8fDA%3D" 
              alt="Rings" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-medium text-white mb-1">Rings</h3>
              <span className="text-gold text-sm group-hover:underline">Shop Now</span>
            </div>
          </Link>
          
          {/* Category Card 2 */}
          <Link to="/shop/necklaces" className="group relative h-64 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88552?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVhcmwlMjBuZWNrbGFjZXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Necklaces" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-medium text-white mb-1">Necklaces</h3>
              <span className="text-gold text-sm group-hover:underline">Shop Now</span>
            </div>
          </Link>
          
          {/* Category Card 3 */}
          <Link to="/shop/earrings" className="group relative h-64 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1599643477877-530eb83abc8e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FwcGhpcmUlMjBlYXJyaW5nc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Earrings" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-medium text-white mb-1">Earrings</h3>
              <span className="text-gold text-sm group-hover:underline">Shop Now</span>
            </div>
          </Link>
          
          {/* Category Card 4 */}
          <Link to="/shop/bracelets" className="group relative h-64 overflow-hidden rounded-lg">
            <img 
              src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z29sZCUyMGJyYWNlbGV0fGVufDB8fDB8fHww" 
              alt="Bracelets" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-xl font-medium text-white mb-1">Bracelets</h3>
              <span className="text-gold text-sm group-hover:underline">Shop Now</span>
            </div>
          </Link>
        </div>
      </section>
      
      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-padding mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-4">Our Craftsmanship</h2>
              <p className="text-gray-700 mb-6">
                Each piece in our collection is meticulously designed and handcrafted by our team of master artisans, using only the finest materials sourced from around the world. Our commitment to excellence ensures that every jewelry item meets our exacting standards of quality and beauty.
              </p>
              <p className="text-gray-700 mb-8">
                From initial sketch to final polish, our pieces undergo a rigorous creation process, blending traditional techniques with contemporary design to create jewelry that's both timeless and modern.
              </p>
              <Link to="/about" className="btn-primary">
                Discover Our Story
              </Link>
            </div>
            <div className="order-first lg:order-last">
              <img 
                src="https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGpld2VscnklMjBjcmFmdHxlbnwwfHwwfHx8MA%3D%3D" 
                alt="Jewelry craftsmanship" 
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 container-padding mx-auto">
        <h2 className="section-title text-center mb-12">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex text-gold mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "My engagement ring from LuxGems exceeded all my expectations. The craftsmanship is impeccable, and it sparkles like nothing I've ever seen. I couldn't be happier!"
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy font-medium">
                  ES
                </div>
              </div>
              <div>
                <h4 className="font-medium">Emily S.</h4>
                <p className="text-sm text-gray-500">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex text-gold mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "The pearl necklace I purchased for my anniversary is absolutely stunning. The customer service was exceptional, and the gift packaging was elegant and thoughtful."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy font-medium">
                  JT
                </div>
              </div>
              <div>
                <h4 className="font-medium">James T.</h4>
                <p className="text-sm text-gray-500">Chicago, IL</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex text-gold mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "I've been a LuxGems customer for years, and they never disappoint. Their designs are unique and timeless, and the quality is always superb. Highly recommend!"
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <div className="w-10 h-10 rounded-full bg-navy-100 flex items-center justify-center text-navy font-medium">
                  ML
                </div>
              </div>
              <div>
                <h4 className="font-medium">Maria L.</h4>
                <p className="text-sm text-gray-500">New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-navy py-16">
        <div className="container-padding mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair text-white mb-6">Ready to Find Your Perfect Piece?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Browse our collections and discover jewelry that celebrates your unique style and story. 
          </p>
          <Link to="/shop" className="bg-white text-navy hover:bg-gray-100 px-8 py-3 rounded-md transition-all text-lg font-medium">
            Shop Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Index;
