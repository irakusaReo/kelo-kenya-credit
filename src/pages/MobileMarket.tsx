
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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white p-4 border-b">
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search brands or products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
            />
          </div>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab('brands')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'brands'
                ? 'border-kelo-blue text-kelo-blue'
                : 'border-transparent text-gray-500'
            }`}
          >
            Brands
          </button>
          <button
            onClick={() => setActiveTab('products')}
            className={`px-4 py-2 text-sm font-medium border-b-2 ${
              activeTab === 'products'
                ? 'border-kelo-blue text-kelo-blue'
                : 'border-transparent text-gray-500'
            }`}
          >
            Featured Products
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'brands' && (
          <div>
            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedFilter === category ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedFilter(category)}
                  className="whitespace-nowrap"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Brands Grid - Made smaller */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
              {filteredPartners.map((partner) => (
                <Link key={partner.id} to={`/market/store/${partner.id}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-3">
                      <div className="aspect-square bg-white rounded-lg mb-2 flex items-center justify-center">
                        <img 
                          src={partner.logo} 
                          alt={partner.name}
                          className="max-w-full max-h-full object-contain p-1"
                        />
                      </div>
                      <h3 className="text-xs font-medium text-center line-clamp-2">{partner.name}</h3>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <h2 className="text-lg font-semibold mb-4">Featured Products</h2>
            
            <div className="grid grid-cols-2 gap-4">
              {featuredProducts.map((product) => (
                <Link key={product.id} to={`/market/product/${product.id}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-3">
                      <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center relative">
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
                      <h3 className="font-medium text-sm line-clamp-2 mb-1">{product.name}</h3>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-2">
                        <Star size={12} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs text-gray-600 ml-1">4.8</span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-bold text-lg">KES {product.price.toLocaleString()}</p>
                        <p className="text-xs text-gray-600">
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
