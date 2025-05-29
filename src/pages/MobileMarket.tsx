
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, Filter, Grid3X3, List, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import MobileTabBar from '@/components/MobileTabBar';
import { partners } from '@/data/partners';
import { verticals } from '@/data/verticals';

const MobileMarket = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [showCategories, setShowCategories] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const categories = ['All categories', ...verticals.map(v => v.name)];

  const filteredPartners = partners.filter(partner => {
    const matchesSearch = partner.name.toLowerCase().includes(searchQuery.toLowerCase());
    // Find the vertical name using verticalId
    const partnerVertical = verticals.find(v => v.id === partner.verticalId);
    const partnerCategoryName = partnerVertical?.name || '';
    const matchesCategory = selectedCategory === 'All categories' || partnerCategoryName === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-6 border-b">
        <h1 className="text-2xl font-bold mb-4">Shop with Kelo at your favorite brands</h1>
        <p className="text-gray-600 text-sm mb-4">
          Get Kelo's flexible payment options everywhere. Plus, unlock cashback when you shop.
        </p>
        
        {/* Search Bar */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            placeholder="Search for stores"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 h-12"
          />
        </div>

        {/* Filter Row */}
        <div className="flex space-x-3 overflow-x-auto pb-2">
          <Button
            variant="outline"
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center space-x-2 whitespace-nowrap"
          >
            <span>{selectedCategory}</span>
            <ChevronDown size={16} />
          </Button>
          
          <Button variant="outline" className="whitespace-nowrap">
            Kelo at checkout
          </Button>
          
          <Button variant="outline" className="whitespace-nowrap">
            One-time card
          </Button>
          
          <Button variant="outline" className="whitespace-nowrap">
            Cashback
          </Button>
        </div>

        {/* Categories Dropdown */}
        {showCategories && (
          <Card className="mt-3 absolute left-4 right-4 z-10">
            <CardContent className="p-4">
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowCategories(false);
                    }}
                    className={`w-full text-left p-2 rounded-lg transition-colors ${
                      selectedCategory === category 
                        ? 'bg-kelo-blue text-white' 
                        : 'hover:bg-gray-100'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* View Toggle */}
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm text-gray-600">Showing {filteredPartners.length}+ stores</p>
          <div className="flex items-center space-x-2">
            <Button
              variant={viewMode === 'grid' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 size={16} />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'default' : 'outline'}
              size="icon"
              onClick={() => setViewMode('list')}
            >
              <List size={16} />
            </Button>
          </div>
        </div>
      </div>

      {/* Stores Grid/List */}
      <div className="p-4">
        {viewMode === 'grid' ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredPartners.map((partner) => (
              <Link key={partner.id} to={`/market/store/${partner.id}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="aspect-square bg-white rounded-lg mb-3 flex items-center justify-center border">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain p-2"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{partner.name}</h3>
                    <p className="text-xs text-gray-600 mt-1">2% cashback in the app</p>
                    <p className="text-xs text-gray-500">One-time card</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filteredPartners.map((partner) => (
              <Link key={partner.id} to={`/market/store/${partner.id}`}>
                <Card className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center border flex-shrink-0">
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{partner.name}</h3>
                      <p className="text-sm text-gray-600">2% cashback in the app</p>
                      <p className="text-xs text-gray-500">One-time card</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>

      <MobileTabBar />
    </div>
  );
};

export default MobileMarket;
