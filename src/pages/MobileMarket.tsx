
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, Filter, Star } from 'lucide-react';
import { partners } from '@/data/partners';
import { products } from '@/data/products';

const MobileMarket = () => {
  const [activeTab, setActiveTab] = useState('brands');
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const categories = ['All', 'Electronics', 'Fashion', 'Education', 'Travel', 'Food'];
  
  const filteredPartners = selectedFilter === 'All' 
    ? partners 
    : partners.filter(p => {
        const categoryLower = selectedFilter.toLowerCase();
        const partnerName = p.name.toLowerCase();
        
        if (categoryLower === 'electronics') return partnerName.includes('tech') || partnerName.includes('apple') || partnerName.includes('samsung');
        if (categoryLower === 'fashion') return partnerName.includes('fashion') || partnerName.includes('clothing');
        if (categoryLower === 'education') return partnerName.includes('udemy') || partnerName.includes('course') || partnerName.includes('learn');
        if (categoryLower === 'travel') return partnerName.includes('airbnb') || partnerName.includes('travel') || partnerName.includes('booking');
        if (categoryLower === 'food') return partnerName.includes('uber') || partnerName.includes('food') || partnerName.includes('eats');
        
        return true;
      });

  const featuredProducts = products.slice(0, 6);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 w-full overflow-x-hidden">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 p-4 border-b border-gray-200 dark:border-gray-700 w-full">
        <div className="flex items-center space-x-4 mb-4 w-full">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search brands or products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-400"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200 dark:border-gray-700 w-full">
          <button
            onClick={() => setActiveTab('brands')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'brands'
                ? 'border-kelo-blue text-kelo-blue'
                : 'border-transparent text-gray-500 dark:text-gray-400'
            }`}
          >
            Brands
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'products'
                ? 'border-kelo-blue text-kelo-blue'
                : 'border-transparent text-gray-500 dark:text-gray-400'
            }`}
          >
            Featured Products
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 w-full">
        {activeTab === 'brands' && (
          <div className="w-full">
            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2 w-full">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className="whitespace-nowrap flex-shrink-0"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Brands Grid */}
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 w-full">
              {filteredPartners.map((partner) => (
                <Link key={partner.id} to={`/market/store/${partner.id}`} className="w-full">
                  <Card className="hover:shadow-md transition-shadow w-full">
                    <CardContent className="p-3">
                      <div className="aspect-square bg-white dark:bg-gray-700 rounded-lg mb-2 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xs font-medium text-center line-clamp-2 text-gray-900 dark:text-gray-100">{partner.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">Featured Products</h2>
            
            <div className="grid grid-cols-2 gap-4 w-full">
              {featuredProducts.map((product) => (
                <Link key={product.id} to={`/market/product/${product.id}`} className="w-full">
                  <Card className="hover:shadow-md transition-shadow w-full">
                    <CardContent className="p-3">
                      <div className="aspect-square bg-white dark:bg-gray-700 rounded-lg mb-3 flex items-center justify-center relative">
                        {product.discountPercentage && (
                          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                            -{product.discountPercentage}%
                          </div>
                        )}
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain p-2"
                        />
                      </div>
                      <h3 className="font-medium text-sm line-clamp-2 mb-1 text-gray-900 dark:text-gray-100">{product.name}</h3>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 ml-1">4.8</span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-bold text-lg text-gray-900 dark:text-gray-100">KES {product.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Pay 4x for KES {Math.round(product.price / 4).toLocaleString()}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMarket;
