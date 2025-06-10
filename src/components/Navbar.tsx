
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, User, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileInvestOpen, setMobileInvestOpen] = useState(false);
  const { user, isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileProductsOpen(false);
    setMobileInvestOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="kelo-container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            {/* Using the provided Kelo logo */}
            <img 
              src="/lovable-uploads/a03e0792-11a9-4fee-9c3e-f16e0c82aee2.png" 
              alt="Kelo Logo" 
              className="h-10 w-auto"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
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

        <div className="hidden md:flex items-center space-x-4">
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="flex items-center">
                  <User className="h-4 w-4 mr-2" />
                  {user?.name || 'Account'}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="cursor-pointer">Profile</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to={user?.isVendor ? "/vendor/dashboard" : "/dashboard"} className="cursor-pointer">
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                {user?.walletAddress && (
                  <DropdownMenuItem asChild>
                    <Link to="/invest/dashboard" className="cursor-pointer">Investments</Link>
                  </DropdownMenuItem>
                )}
                {!user?.tutorialCompleted && (
                  <DropdownMenuItem asChild>
                    <Link to="/tutorial" className="cursor-pointer">Complete Tutorial</Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={logout} className="cursor-pointer text-red-600">
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" size="sm">Log In</Button>
              </Link>
              <Link to="/register">
                <Button size="sm" className="bg-kelo-primary hover:bg-kelo-primary/90">Sign Up</Button>
              </Link>
            </>
          )}
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
      )}
    </header>
  );
};

export default Navbar;
