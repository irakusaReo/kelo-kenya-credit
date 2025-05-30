
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Store, 
  CreditCard, 
  Calendar, 
  TrendingUp,
  ArrowUpRight,
  Eye,
  Copy,
  Settings,
  Package,
  Clock,
  Plus
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import MobileTabBar from '@/components/MobileTabBar';

const MobileDashboard = () => {
  const { user } = useAuth();
  
  // BNPL-specific quick actions
  const quickActions = [
    { icon: Store, label: 'Shop Now', path: '/market' },
    { icon: Package, label: 'My Orders', path: '/purchases' },
    { icon: Calendar, label: 'Payment Schedule', path: '/payment-schedule' },
    { icon: TrendingUp, label: 'Credit Score', path: '/credit-score' }
  ];

  // Mock credit data
  const creditLimit = 50000;
  const usedCredit = 15000;
  const availableCredit = creditLimit - usedCredit;
  const utilization = (usedCredit / creditLimit) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-kelo-blue to-purple-600 pb-20">
      {/* Header */}
      <div className="px-6 pt-12 pb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-white text-2xl font-bold">
              Hi {user?.name || 'User'}
            </h1>
            <p className="text-white/80 text-sm">Welcome back to Kelo</p>
          </div>
          <Button variant="ghost" size="icon" className="text-white">
            <Settings size={24} />
          </Button>
        </div>

        {/* Credit Limit Card */}
        <Card className="bg-gradient-to-r from-purple-500 to-indigo-600 border-0 text-white overflow-hidden relative">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                  <CreditCard className="w-5 h-5" />
                </div>
                <span className="font-semibold">Credit Limit</span>
              </div>
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                  <Eye size={16} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white h-8 w-8">
                  <Copy size={16} />
                </Button>
              </div>
            </div>
            
            <div className="mb-4">
              <p className="text-white/80 text-sm">Available Credit</p>
              <p className="text-3xl font-bold">KES {availableCredit.toLocaleString()}</p>
              <p className="text-white/80 text-sm">of KES {creditLimit.toLocaleString()}</p>
            </div>
            
            {/* Credit Utilization Bar */}
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-white/80">Credit Used</span>
                <span className="text-white">{utilization.toFixed(1)}%</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-white h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${utilization}%` }}
                ></div>
              </div>
            </div>
            
            <div className="flex justify-between items-end">
              <div>
                <p className="text-white/80 text-sm">Used: KES {usedCredit.toLocaleString()}</p>
              </div>
              <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center">
                <span className="text-xs font-bold">KELO</span>
              </div>
            </div>
            
            {/* Decorative pattern */}
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
            <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
          </CardContent>
        </Card>

        {/* Upgrade Credit Limit Button */}
        <Button className="w-full mt-4 bg-white/10 border-white/20 text-white hover:bg-white/20" variant="outline">
          <Plus className="mr-2 h-4 w-4" />
          Upgrade Credit Limit
        </Button>
      </div>

      {/* BNPL Quick Actions */}
      <div className="px-6 mb-6">
        <Card className="bg-white/95 backdrop-blur">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">What would you like to do today:</h3>
            <div className="grid grid-cols-2 gap-4">
              {quickActions.map((action, index) => {
                const IconComponent = action.icon;
                return (
                  <Link 
                    key={index}
                    to={action.path}
                    className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-kelo-blue/10 rounded-lg flex items-center justify-center mb-2">
                      <IconComponent className="w-6 h-6 text-kelo-blue" />
                    </div>
                    <span className="text-xs text-center font-medium">{action.label}</span>
                  </Link>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="px-6 space-y-3">
        <Link to="/card">
          <Card className="bg-white/95 backdrop-blur hover:bg-white transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-kelo-blue/10 rounded-lg flex items-center justify-center">
                  <CreditCard className="w-5 h-5 text-kelo-blue" />
                </div>
                <span className="font-medium">View My Kelo Card</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </CardContent>
          </Card>
        </Link>

        <Link to="/purchases">
          <Card className="bg-white/95 backdrop-blur hover:bg-white transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center">
                  <Package className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <span className="font-medium block">Recent Orders</span>
                  <span className="text-sm text-gray-600">2 active payments</span>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </CardContent>
          </Card>
        </Link>

        <Link to="/wallet-addresses">
          <Card className="bg-white/95 backdrop-blur hover:bg-white transition-colors">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-500/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-purple-500" />
                </div>
                <span className="font-medium">Wallet Addresses</span>
              </div>
              <ArrowUpRight className="w-5 h-5 text-gray-400" />
            </CardContent>
          </Card>
        </Link>
      </div>

      <MobileTabBar />
    </div>
  );
};

export default MobileDashboard;
