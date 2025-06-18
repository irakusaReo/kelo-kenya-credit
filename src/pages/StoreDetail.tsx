
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, Filter, Star, ChevronDown } from 'lucide-react';
import { partners } from '@/data/partners';
import { products } from '@/data/products';

const StoreDetail = () => {
  const { storeId } = useParams();
  const [activeTab, setActiveTab] = useState('products');
  const [selectedFilter, setSelectedFilter] = useState('All');
  
  const store = partners.find(p => p.id === storeId);
  const storeProducts = products.filter(p => p.partnerId === storeId);
  
  if (!store) {
    return <div>Store not found</div>;
  }

  // Extract unique product types from the product names/descriptions for filtering
  const productCategories = ['All', 'Courses', 'Electronics', 'Appliances', 'Events', 'Travel'];
  const filteredProducts = selectedFilter === 'All' 
    ? storeProducts 
    : storeProducts.filter(p => {
        // Simple filtering based on product name/description content
        const productName = p.name.toLowerCase();
        const filterLower = selectedFilter.toLowerCase();
        
        if (filterLower === 'courses') return productName.includes('course') || productName.includes('bootcamp') || productName.includes('certificate');
        if (filterLower === 'electronics') return productName.includes('iphone') || productName.includes('tv') || productName.includes('phone');
        if (filterLower === 'appliances') return productName.includes('refrigerator') || productName.includes('fridge');
        if (filterLower === 'events') return productName.includes('festival') || productName.includes('experience');
        if (filterLower === 'travel') return productName.includes('flight') || productName.includes('getaway');
        
        return true;
      });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="px-4 py-4 flex items-center space-x-4">
          <Link to="/market">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={24} />
            </Button>
          </Link>
          <div className="flex-1">
            <p className="text-sm text-gray-600">Store / {store.name}</p>
          </div>
          <Button variant="ghost" size="icon">
            <Search size={24} />
          </Button>
        </div>

        {/* Store Hero */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 text-center">
          <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center">
            <img 
              src={store.logo} 
              alt={store.name}
              className="max-w-full max-h-full object-contain p-2"
            />
          </div>
          <h1 className="text-2xl font-bold mb-2">{store.name}</h1>
          <p className="text-white/90 mb-4">
            Simply create a Kelo one-time card below
          </p>
          <Button className="bg-white text-purple-600 hover:bg-gray-100">
            Create a one-time card
          </Button>
        </div>

        {/* Tabs */}
        <div className="px-4">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('payment')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'payment'
                  ? 'border-kelo-blue text-kelo-blue'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Pay with Kelo
            </button>
            <button
              onClick={() => setActiveTab('products')}
              className={`px-4 py-3 text-sm font-medium border-b-2 ${
                activeTab === 'products'
                  ? 'border-kelo-blue text-kelo-blue'
                  : 'border-transparent text-gray-500'
              }`}
            >
              Explore products
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === 'payment' && (
          <div className="space-y-4">
            <h2 className="text-xl font-bold">How to pay with Kelo at {store.name}</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">1. Log in or sign up</h3>
                <p className="text-gray-600 text-sm">
                  Log in or create an account online or in the app by clicking the button below.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">2. Create a one-time card</h3>
                <p className="text-gray-600 text-sm">
                  Enter your desired purchase amount, including shipping and taxes. At this time, there is an approval process to issue the card, after which you'll see the payment methods available to you.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            {/* Filter Buttons */}
            <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
              {productCategories.map((category) => (
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

            {/* Sort */}
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm text-gray-600">{filteredProducts.length}+ products</p>
              <Button variant="outline" size="sm" className="flex items-center space-x-2">
                <span>Popularity</span>
                <ChevronDown size={16} />
              </Button>
            </div>

            {/* Products Grid - Made smaller and more responsive */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
              {filteredProducts.map((product) => (
                <Link key={product.id} to={`/market/product/${product.id}`}>
                  <Card className="hover:shadow-md transition-shadow">
                    <CardContent className="p-2">
                      <div className="aspect-square bg-white rounded-lg mb-2 flex items-center justify-center relative">
                        {product.discountPercentage && (
                          <div className="absolute top-1 left-1 bg-red-500 text-white text-xs px-1 py-0.5 rounded">
                            -{product.discountPercentage}%
                          </div>
                        )}
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="max-w-full max-h-full object-contain p-1"
                        />
                      </div>
                      <h3 className="font-medium text-xs line-clamp-2 mb-1">{product.name}</h3>
                      
                      {/* Rating */}
                      <div className="flex items-center mb-1">
                        <Star size={10} className="text-amber-500 fill-amber-500" />
                        <span className="text-xs text-gray-600 ml-1">4.8</span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="font-bold text-sm">KES {product.price.toLocaleString()}</p>
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

export default StoreDetail;
