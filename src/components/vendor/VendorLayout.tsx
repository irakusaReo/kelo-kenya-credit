
import React from 'react';
import VendorNav from './VendorNav';
import { useNavigate } from 'react-router-dom';

interface VendorLayoutProps {
  children: React.ReactNode;
  title: string;
}

const VendorLayout = ({ children, title }: VendorLayoutProps) => {
  const navigate = useNavigate();

  // Mock authentication check - in a real app, this would check an auth token
  const isAuthenticated = true; // This should be replaced with actual auth check

  // Redirect to login if not authenticated
  React.useEffect(() => {
    if (!isAuthenticated) {
      navigate('/vendor/login');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen">
      <aside className="w-64 h-full hidden md:block">
        <VendorNav />
      </aside>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            {/* This would be a mobile menu toggle button */}
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default VendorLayout;
