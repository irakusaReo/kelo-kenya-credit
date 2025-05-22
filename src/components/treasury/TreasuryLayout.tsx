
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, BarChart2, AlertCircle, Settings } from 'lucide-react';

interface TreasuryLayoutProps {
  children: React.ReactNode;
  title: string;
}

const TreasuryLayout = ({ children, title }: TreasuryLayoutProps) => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Dashboard', path: '/treasury', icon: LayoutDashboard },
    { name: 'Risk Management', path: '/treasury/risk', icon: AlertCircle },
    { name: 'Settings', path: '/treasury/settings', icon: Settings },
  ];

  return (
    <div className="flex h-screen">
      <aside className="w-64 h-full hidden md:block bg-white border-r">
        <div className="p-4 border-b">
          <Link to="/treasury" className="flex items-center">
            <div className="h-8 w-32 bg-kelo-blue rounded-md flex items-center justify-center text-white font-bold">
              KELO TREASURY
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
          <div className="p-3 bg-blue-50 rounded-md">
            <h4 className="text-sm font-medium text-kelo-blue mb-1">Treasury Stats</h4>
            <div className="text-sm">
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Pools:</span>
                <span>6</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-600">Strategies:</span>
                <span>3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Health:</span>
                <span className="text-green-600">Good</span>
              </div>
            </div>
          </div>
        </div>
      </aside>
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b p-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default TreasuryLayout;
