
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <div className="relative bg-navy h-64 flex items-center justify-center">
        <div className="absolute inset-0 bg-cover bg-center" style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1620567844605-73068cee2499?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D)',
          opacity: 0.3
        }}></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair text-white mb-4">About Us</h1>
          <nav className="flex justify-center text-sm">
            <Link to="/" className="text-gold hover:text-white transition-colors">Home</Link>
            <span className="mx-2 text-white">/</span>
            <span className="text-white">About</span>
          </nav>
        </div>
      </div>

      <section className="py-16 container-padding mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1569397339138-050429d8f427?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGpld2Vscnl8ZW58MHx8MHx8fDA%3D" 
              alt="Jewelry craftsmanship" 
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h2 className="text-3xl font-playfair font-medium text-navy mb-6">About Fineluxe</h2>
            <p className="text-gray-700 mb-6">
              Fineluxe is a premier jewelry enterprise dedicated to bringing you the finest handcrafted pieces that celebrate life's most treasured moments. Founded on a passion for exceptional design and unwavering quality, we specialize in a broad spectrum of jewelry—ranging from timeless gold and sterling silver classics to contemporary gemstone creations, bespoke engagement rings, and exclusive limited-edition collections. Each piece in our catalog is thoughtfully curated or custom-crafted by master artisans, ensuring that every jewel radiates elegance, durability, and individuality.
            </p>
            <p className="text-gray-700 mb-6">
              At Fineluxe, we believe that jewelry is more than adornment—it's an expression of personal style and a keepsake of memories. That's why we source only ethically mined gemstones and premium metals, and maintain rigorous quality control at every stage of production. Whether you're searching for a dazzling statement necklace to elevate a special occasion, a pair of refined earrings for everyday sophistication, or a custom design that tells your unique story, our expert team is here to guide you through every step of the process.
            </p>
            <p className="text-gray-700">
              Our mission is to make luxury accessible, transparent, and deeply personal. We're committed to exceptional customer care—from seamless online browsing and personalized design consultations, to secure packaging and timely delivery. At Fineluxe, your satisfaction is our highest priority: we invite you to explore our collections, discover your signature piece, and join a community that values artistry, integrity, and the enduring beauty of fine jewelry.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-padding mx-auto">
          <h2 className="section-title text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0A2463" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-navy mb-3">Craftsmanship</h3>
              <p className="text-gray-600">
                We honor traditional techniques while embracing innovation, ensuring every piece meets our exacting standards of quality and beauty.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0A2463" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-navy mb-3">Ethical Sourcing</h3>
              <p className="text-gray-600">
                We are committed to responsible sourcing, ensuring our gemstones and metals are ethically acquired and environmentally sustainable.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 rounded-full bg-navy-100 flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#0A2463" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-navy mb-3">Timeless Design</h3>
              <p className="text-gray-600">
                We create jewelry that transcends trends, pieces that will be cherished today and treasured by future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 container-padding mx-auto">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="section-title">Start Your Journey</h2>
          <p className="text-gray-600 mb-8">
            We invite you to explore our collections and discover pieces that speak to your personal style and story.
          </p>
          <Link to="/shop" className="btn-primary py-3 px-8 text-lg">
            Explore Our Collections
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
