
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

interface MobileNavigationProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const MobileNavigation = ({ isMenuOpen, toggleMenu }: MobileNavigationProps) => {
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileInvestOpen, setMobileInvestOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 top-16 bg-white z-50 overflow-y-auto h-[calc(100vh-4rem)] shadow-lg">
      <nav className="flex flex-col p-6">
        <Link to="/" className="px-3 py-3 text-lg font-medium border-b border-gray-100" onClick={toggleMenu}>
          Home
        </Link>
        
        {/* Mobile Products Dropdown */}
        <div className="border-b border-gray-100">
          <button 
            className="flex items-center justify-between w-full px-3 py-3 text-lg font-medium"
            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
          >
            Products
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileProductsOpen && (
            <div className="pl-6 pb-2">
              <Link to="/consumer" className="block py-2 text-base text-gray-600" onClick={toggleMenu}>
                For Consumers
              </Link>
              <Link to="/merchant" className="block py-2 text-base text-gray-600" onClick={toggleMenu}>
                For Merchants
              </Link>
            </div>
          )}
        </div>
        
        {/* Mobile Invest Dropdown */}
        <div className="border-b border-gray-100">
          <button 
            className="flex items-center justify-between w-full px-3 py-3 text-lg font-medium"
            onClick={() => setMobileInvestOpen(!mobileInvestOpen)}
          >
            Invest
            <ChevronDown className={`h-4 w-4 transition-transform ${mobileInvestOpen ? 'rotate-180' : ''}`} />
          </button>
          {mobileInvestOpen && (
            <div className="pl-6 pb-2">
              <Link to="/invest" className="block py-2 text-base text-gray-600" onClick={toggleMenu}>
                Investment Pools
              </Link>
              <Link to="/invest/dashboard" className="block py-2 text-base text-gray-600" onClick={toggleMenu}>
                Investor Dashboard
              </Link>
              <Link to="/treasury" className="block py-2 text-base text-gray-600" onClick={toggleMenu}>
                Treasury Management
              </Link>
            </div>
          )}
        </div>
        
        <Link to="/about" className="px-3 py-3 text-lg font-medium border-b border-gray-100" onClick={toggleMenu}>
          About Us
        </Link>
        <Link to="/faq" className="px-3 py-3 text-lg font-medium border-b border-gray-100" onClick={toggleMenu}>
          FAQs
        </Link>
        <Link to="/help" className="px-3 py-3 text-lg font-medium border-b border-gray-100" onClick={toggleMenu}>
          Help
        </Link>
        
        <div className="flex flex-col space-y-3 mt-6 pt-4">
          {isAuthenticated ? (
            <>
              <Link to="/profile" onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Profile
                </Button>
              </Link>
              <Link to={user?.isVendor ? "/vendor/dashboard" : "/dashboard"} onClick={toggleMenu}>
                <Button variant="outline" className="w-full justify-start">
                  Dashboard
                </Button>
              </Link>
              {!user?.tutorialCompleted && (
                <Link to="/tutorial" onClick={toggleMenu}>
                  <Button variant="outline" className="w-full justify-start">
                    Complete Tutorial
                  </Button>
                </Link>
              )}
              <Button 
                onClick={() => {
                  logout();
                  toggleMenu();
                }} 
                variant="outline" 
                className="w-full justify-start text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login" onClick={toggleMenu}>
                <Button variant="outline" className="w-full">Log In</Button>
              </Link>
              <Link to="/register" onClick={toggleMenu}>
                <Button className="w-full bg-kelo-primary hover:bg-kelo-primary/90">Sign Up</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileNavigation;
