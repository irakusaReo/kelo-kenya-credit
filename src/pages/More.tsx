
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  User, 
  Settings, 
  HelpCircle, 
  FileText, 
  Shield, 
  Bell,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import MobileTabBar from '@/components/MobileTabBar';

const More = () => {
  const { user, logout } = useAuth();

  const menuItems = [
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: Bell, label: 'Notifications', path: '/notifications' },
    { icon: HelpCircle, label: 'Help & Support', path: '/help' },
    { icon: FileText, label: 'Terms & Conditions', path: '/terms' },
    { icon: Shield, label: 'Privacy Policy', path: '/privacy' }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-6 border-b">
        <h1 className="text-2xl font-bold">More</h1>
        <p className="text-gray-600 text-sm">Account settings and information</p>
      </div>

      <div className="p-4 space-y-6">
        {/* User Profile Card */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-kelo-blue/10 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-kelo-blue" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{user?.name || 'User'}</h3>
                <p className="text-gray-600 text-sm">{user?.email || 'user@example.com'}</p>
                <Link to="/profile">
                  <Button variant="link" className="p-0 h-auto text-kelo-blue">
                    View & Edit Profile
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Menu Items */}
        <Card>
          <CardContent className="p-0">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.path}
                  to={item.path}
                  className={`flex items-center justify-between p-4 hover:bg-gray-50 transition-colors ${
                    index !== menuItems.length - 1 ? 'border-b border-gray-100' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </Link>
              );
            })}
          </CardContent>
        </Card>

        {/* Version Info */}
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-gray-600">Kelo App Version 1.0.0</p>
          </CardContent>
        </Card>

        {/* Logout Button */}
        <Button 
          variant="outline" 
          className="w-full text-red-600 border-red-200 hover:bg-red-50"
          onClick={logout}
        >
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>

      <MobileTabBar />
    </div>
  );
};

export default More;
