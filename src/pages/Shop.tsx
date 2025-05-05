
import React, { useState, useEffect } from 'react';
import { useLocation, Link, useParams } from 'react-router-dom';
import { getProducts, getCategories } from '../services/api';
import { Product } from '../context/CartContext';
import ProductCard from '../components/ProductCard';
import { Filter, X } from 'lucide-react';

const Shop = () => {
  const location = useLocation();
  const { category } = useParams<{ category?: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(category);

  // Price filter state
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (err) {
        console.error('Failed to load categories', err);
      }
    };

    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const data = await getProducts(selectedCategory);
        // Filter by price range
        const filteredData = data.filter(
          (product) => product.price >= priceRange[0] && product.price <= priceRange[1]
        );
        setProducts(filteredData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products');
        setLoading(false);
      }
    };

    fetchProducts();
  }, [selectedCategory, priceRange]);
  
  useEffect(() => {
    setSelectedCategory(category);
  }, [category]);

  const handleCategoryChange = (cat: string | undefined) => {
    setSelectedCategory(cat);
  };

  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  const clearFilters = () => {
    setSelectedCategory(undefined);
    setPriceRange([0, 5000]);
  };

  return (
    <div className="container-padding mx-auto py-16">
      <div className="flex justify-between items-center mb-8">
        <h1 className="section-title mb-0">Shop {selectedCategory && <span className="capitalize">- {selectedCategory}</span>}</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center text-navy"
        >
          <Filter size={18} className="mr-2" />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`md:w-1/4 ${showFilters ? 'block' : 'hidden md:block'}`}>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-4 md:hidden">
              <h2 className="text-lg font-medium">Filters</h2>
              <button onClick={() => setShowFilters(false)}>
                <X size={18} />
              </button>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-navy">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <button
                    className={`w-full text-left py-1 px-2 rounded ${!selectedCategory ? 'bg-navy-100 text-navy font-medium' : 'hover:bg-gray-100'}`}
                    onClick={() => handleCategoryChange(undefined)}
                  >
                    All Products
                  </button>
                </li>
                {categories.map((cat) => (
                  <li key={cat}>
                    <button
                      className={`w-full text-left py-1 px-2 rounded capitalize ${selectedCategory === cat ? 'bg-navy-100 text-navy font-medium' : 'hover:bg-gray-100'}`}
                      onClick={() => handleCategoryChange(cat)}
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price Range */}
            <div className="mb-8">
              <h3 className="font-medium mb-3 text-navy">Price Range</h3>
              <div className="space-y-2">
                <button
                  className={`w-full text-left py-1 px-2 rounded ${priceRange[0] === 0 && priceRange[1] === 1000 ? 'bg-navy-100 text-navy font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => handlePriceChange(0, 1000)}
                >
                  Under $1,000
                </button>
                <button
                  className={`w-full text-left py-1 px-2 rounded ${priceRange[0] === 1000 && priceRange[1] === 2500 ? 'bg-navy-100 text-navy font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => handlePriceChange(1000, 2500)}
                >
                  $1,000 - $2,500
                </button>
                <button
                  className={`w-full text-left py-1 px-2 rounded ${priceRange[0] === 2500 && priceRange[1] === 5000 ? 'bg-navy-100 text-navy font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => handlePriceChange(2500, 5000)}
                >
                  $2,500 - $5,000
                </button>
                <button
                  className={`w-full text-left py-1 px-2 rounded ${priceRange[0] === 0 && priceRange[1] === 5000 ? 'bg-navy-100 text-navy font-medium' : 'hover:bg-gray-100'}`}
                  onClick={() => handlePriceChange(0, 5000)}
                >
                  All Prices
                </button>
              </div>
            </div>

            {/* Clear Filters */}
            <button
              onClick={clearFilters}
              className="text-navy hover:text-gold transition-colors text-sm flex items-center"
            >
              <X size={16} className="mr-1" /> Clear Filters
            </button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="md:w-3/4">
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="animate-pulse bg-white rounded-md shadow-sm h-72">
                  <div className="bg-gray-200 h-48 rounded-t-md"></div>
                  <div className="p-4">
                    <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="mt-4 text-navy hover:text-gold underline"
              >
                Try again
              </button>
            </div>
          ) : products.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-sm">
              <h3 className="text-xl mb-2">No products found</h3>
              <p className="text-gray-500 mb-6">Try changing your filters or browse our categories.</p>
              <button 
                onClick={clearFilters}
                className="btn-primary"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
