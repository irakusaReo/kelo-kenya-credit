
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/a03e0792-11a9-4fee-9c3e-f16e0c82aee2.png" 
        alt="Kelo Logo" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default NavbarLogo;
