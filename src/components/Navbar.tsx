
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="kelo-container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Logo placeholder - will use kelo_logo.svg when uploaded */}
            <div className="h-8 w-32 bg-kelo-blue rounded-md flex items-center justify-center text-white font-bold">
              KELO
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium text-kelo-text hover:text-kelo-blue transition-colors">
            Home
          </Link>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-kelo-text hover:text-kelo-blue transition-colors">
              Products <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            <div className="absolute left-0 top-full w-48 p-2 hidden group-hover:block bg-white rounded-md shadow-lg border border-gray-100">
              <Link to="/consumer" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
                For Consumers
              </Link>
              <Link to="/merchant" className="block px-3 py-2 text-sm rounded-md hover:bg-gray-50">
                For Merchants
              </Link>
            </div>
          </div>
          <div className="relative group">
            <button className="flex items-center text-sm font-medium text-kelo-text hover:text-kelo-blue transition-colors">
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
          <Link to="/about" className="text-sm font-medium text-kelo-text hover:text-kelo-blue transition-colors">
            About Us
          </Link>
          <Link to="/faqs" className="text-sm font-medium text-kelo-text hover:text-kelo-blue transition-colors">
            FAQs
          </Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login">
            <Button variant="outline" size="sm">Log In</Button>
          </Link>
          <Link to="/register">
            <Button size="sm" className="bg-kelo-blue hover:bg-kelo-blue/90">Sign Up</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden" 
          onClick={toggleMenu}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-white z-40 p-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="px-3 py-2 text-lg font-medium" onClick={toggleMenu}>
              Home
            </Link>
            <div className="px-3 py-2 text-lg font-medium">Products</div>
            <Link to="/consumer" className="px-6 py-2 text-base" onClick={toggleMenu}>
              For Consumers
            </Link>
            <Link to="/merchant" className="px-6 py-2 text-base" onClick={toggleMenu}>
              For Merchants
            </Link>
            
            <div className="px-3 py-2 text-lg font-medium">Invest</div>
            <Link to="/invest" className="px-6 py-2 text-base" onClick={toggleMenu}>
              Investment Pools
            </Link>
            <Link to="/invest/dashboard" className="px-6 py-2 text-base" onClick={toggleMenu}>
              Investor Dashboard
            </Link>
            <Link to="/treasury" className="px-6 py-2 text-base" onClick={toggleMenu}>
              Treasury Management
            </Link>
            
            <Link to="/about" className="px-3 py-2 text-lg font-medium" onClick={toggleMenu}>
              About Us
            </Link>
            <Link to="/faqs" className="px-3 py-2 text-lg font-medium" onClick={toggleMenu}>
              FAQs
            </Link>
            <div className="flex flex-col space-y-3 mt-4 pt-4 border-t">
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-kelo-blue hover:bg-kelo-blue/90">Sign Up</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
