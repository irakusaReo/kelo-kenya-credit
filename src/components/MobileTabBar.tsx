
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
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 px-2 py-2 z-50 md:hidden">
      <div className="flex justify-around items-center max-w-sm mx-auto">
        {tabs.map((tab) => {
          const IconComponent = tab.icon;
          return (
            <Link
              key={tab.id}
              to={tab.path}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors min-w-0 flex-1 ${
                tab.active 
                  ? 'text-kelo-blue bg-kelo-blue/10' 
                  : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              <IconComponent size={20} className="flex-shrink-0" />
              <span className="text-xs mt-1 font-medium truncate">{tab.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileTabBar;
