
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Store, TrendingUp, MoreHorizontal } from 'lucide-react';

const MobileTabBar = () => {
  const location = useLocation();
  
  const tabs = [
    { 
      id: 'dashboard', 
      label: 'Dashboard', 
      icon: Home, 
      path: '/dashboard',
      active: location.pathname === '/dashboard'
    },
    { 
      id: 'market', 
      label: 'Market', 
      icon: Store, 
      path: '/market',
      active: location.pathname.startsWith('/market')
    },
    { 
      id: 'invest', 
      label: 'Invest', 
      icon: TrendingUp, 
      path: '/invest',
      active: location.pathname.startsWith('/invest')
    },
    { 
      id: 'more', 
      label: 'More', 
      icon: MoreHorizontal, 
      path: '/more',
      active: location.pathname === '/more'
    }
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                tab.active 
                  ? 'text-kelo-blue bg-kelo-blue/10' 
                  : 'text-gray-500'
              }`}
            >
              <IconComponent size={24} />
              <span className="text-xs mt-1 font-medium">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabBar;
