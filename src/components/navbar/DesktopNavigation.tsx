
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const DesktopNavigation = () => {
  return (
    <nav className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-sm font-medium text-kelo-text hover:text-kelo-primary transition-colors">
        Home
      </Link>
      <div className="relative group">
        <button className="flex items-center text-sm font-medium text-kelo-text hover:text-kelo-primary transition-colors">
          Products <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full w-48 p-2 hidden group-hover:block bg-white rounded-md shadow-lg border border-gray-100 z-20">
          <Link to="/consumer" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
            For Consumers
          </Link>
          <Link to="/merchant" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
            For Merchants
          </Link>
        </div>
      </div>
      <div className="relative group">
        <button className="flex items-center text-sm font-medium text-kelo-text hover:text-kelo-primary transition-colors">
          Invest <ChevronDown className="ml-1 h-4 w-4" />
        </button>
        <div className="absolute left-0 top-full w-48 p-2 hidden group-hover:block bg-white rounded-md shadow-lg border border-gray-100 z-20">
          <Link to="/invest" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
            Investment Pools
          </Link>
          <Link to="/invest/dashboard" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
            Investor Dashboard
          </Link>
          <Link to="/treasury" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
            Treasury Management
          </Link>
        </div>
      </div>
      <Link to="/about" className="text-sm font-medium text-kelo-text hover:text-kelo-primary transition-colors">
        About Us
      </Link>
      <Link to="/faq" className="text-sm font-medium text-kelo-text hover:text-kelo-primary transition-colors">
        FAQs
      </Link>
      <Link to="/help" className="text-sm font-medium text-kelo-text hover:text-kelo-primary transition-colors">
        Help
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
