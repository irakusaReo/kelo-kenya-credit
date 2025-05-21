
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Package, BarChart2, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';

const VendorNav = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/vendor/dashboard', icon: LayoutDashboard },
    { name: 'Products', path: '/vendor/products', icon: Package },
    { name: 'Analytics', path: '/vendor/analytics', icon: BarChart2 },
    { name: 'Settings', path: '/vendor/settings', icon: Settings },
  ];

  return (
    <div className="flex flex-col h-full border-r bg-white">
      <div className="p-4 border-b">
        <Link to="/vendor/dashboard" className="flex items-center">
          <div className="h-8 w-32 bg-kelo-blue rounded-md flex items-center justify-center text-white font-bold">
            KELO VENDOR
          </div>
        </Link>
      </div>
      
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          const Icon = item.icon;
          
          return (
            <Link 
              key={item.name} 
              to={item.path}
              className={`flex items-center p-2 rounded-md ${
                isActive 
                  ? 'bg-kelo-blue text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
      
      <div className="p-4 border-t">
        <Button variant="outline" className="w-full flex items-center justify-center" onClick={() => console.log('Logout clicked')}>
          <LogOut className="w-4 h-4 mr-2" />
          <span>Sign Out</span>
        </Button>
      </div>
    </div>
  );
};

export default VendorNav;
