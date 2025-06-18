
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import UserDropdown from './UserDropdown';

const AuthButtons = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <UserDropdown />;
  }

  return (
    <>
      <Link to="/login">
        <Button variant="outline" size="sm">Log In</Button>
      </Link>
      <Link to="/register">
        <Button size="sm" className="bg-kelo-primary hover:bg-kelo-primary/90">Sign Up</Button>
      </Link>
    </>
  );
};

export default AuthButtons;
