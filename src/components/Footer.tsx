
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-12 pb-6">
      <div className="container-padding mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-playfair font-bold text-white">Lux<span className="text-gold">Gems</span></span>
            </Link>
            <p className="mt-4 text-gray-300">
              Crafting exquisite jewelry pieces that celebrate life's most precious moments.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-white hover:text-gold">
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gold">
                <span className="sr-only">Pinterest</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.33 1.781.744 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">Shop</h3>
            <ul className="space-y-2">
              <li><Link to="/shop/rings" className="text-gray-300 hover:text-gold transition-colors">Rings</Link></li>
              <li><Link to="/shop/necklaces" className="text-gray-300 hover:text-gold transition-colors">Necklaces</Link></li>
              <li><Link to="/shop/earrings" className="text-gray-300 hover:text-gold transition-colors">Earrings</Link></li>
              <li><Link to="/shop/bracelets" className="text-gray-300 hover:text-gold transition-colors">Bracelets</Link></li>
              <li><Link to="/shop/new-arrivals" className="text-gray-300 hover:text-gold transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-gold transition-colors">Careers</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-gold transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-gold transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4 text-gold">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 bg-navy-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <button type="submit" className="btn-secondary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-navy-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} LuxGems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
