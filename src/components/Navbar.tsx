
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import NavbarLogo from './navbar/NavbarLogo';
import DesktopNavigation from './navbar/DesktopNavigation';
import AuthButtons from './navbar/AuthButtons';
import MobileNavigation from './navbar/MobileNavigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="kelo-container flex h-16 items-center justify-between">
        <div className="flex items-center">
          <NavbarLogo />
        </div>

        <DesktopNavigation />

        <div className="hidden md:flex items-center space-x-4">
          <AuthButtons />
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

      <MobileNavigation isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Navbar;
