
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  Mail, 
  Phone, 
  Wallet, 
  Settings, 
  CreditCard, 
  ShoppingBag, 
  BarChart3,
  FileText,
  ArrowRight
} from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { useAuth } from '@/contexts/AuthContext';

const Profile = () => {
  const { user } = useAuth();

  if (!user) {
    return <div>Please log in to view your profile.</div>;
  }

  const getUserInitials = () => {
    return user.name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  const quickActions = user.isVendor ? [
    {
      title: 'Vendor Dashboard',
      description: 'Manage your products and orders',
      icon: BarChart3,
      href: '/vendor/dashboard',
      color: 'bg-blue-500'
    },
    {
      title: 'Products',
      description: 'Add and manage your inventory',
      icon: ShoppingBag,
      href: '/vendor/products',
      color: 'bg-green-500'
    },
    {
      title: 'Analytics',
      description: 'View sales and performance metrics',
      icon: FileText,
      href: '/vendor/analytics',
      color: 'bg-purple-500'
    }
  ] : [
    {
      title: 'Dashboard',
      description: 'View your credit and transactions',
      icon: BarChart3,
      href: '/dashboard',
      color: 'bg-blue-500'
    },
    {
      title: 'Shop',
      description: 'Browse products and make purchases',
      icon: ShoppingBag,
      href: '/marketplace',
      color: 'bg-green-500'
    },
    {
      title: 'Credit Upload',
      description: 'Upload documents for credit scoring',
      icon: CreditCard,
      href: '/user/credit/upload',
      color: 'bg-purple-500'
    }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      <div className="kelo-container py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Profile Header */}
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-20 w-20">
                  <AvatarImage src={user.avatar} />
                  <AvatarFallback className="text-2xl">{getUserInitials()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2">
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    {user.isVendor && <Badge variant="secondary">Vendor</Badge>}
                    {user.walletAddress && <Badge variant="outline">Wallet Connected</Badge>}
                  </div>
                  <p className="text-gray-600">{user.email}</p>
                  {user.businessName && (
                    <p className="text-sm text-gray-500">{user.businessName}</p>
                  )}
                </div>
                <Link to="/settings">
                  <Button variant="outline">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </Link>
              </div>
            </CardHeader>
          </Card>

          {/* Profile Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="font-medium">{user.email}</p>
                  </div>
                </div>
                {user.phone && (
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Phone</p>
                      <p className="font-medium">{user.phone}</p>
                    </div>
                  </div>
                )}
                {user.walletAddress && (
                  <div className="flex items-center space-x-3">
                    <Wallet className="h-5 w-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500">Wallet ({user.chain})</p>
                      <p className="font-medium font-mono text-sm">
                        {user.walletAddress.substring(0, 8)}...{user.walletAddress.substring(user.walletAddress.length - 6)}
                      </p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Account Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Profile Completed</span>
                  <Badge variant={user.profileCompleted ? "default" : "secondary"}>
                    {user.profileCompleted ? "Complete" : "Incomplete"}
                  </Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Tutorial Completed</span>
                  <Badge variant={user.tutorialCompleted ? "default" : "secondary"}>
                    {user.tutorialCompleted ? "Complete" : "Incomplete"}
                  </Badge>
                </div>
                {!user.tutorialCompleted && (
                  <Link to="/tutorial">
                    <Button variant="outline" size="sm" className="w-full">
                      Complete Tutorial
                    </Button>
                  </Link>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Access your most used features</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.href}>
                    <Card className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-3">
                          <div className={`p-2 rounded-lg ${action.color} text-white`}>
                            <action.icon className="h-5 w-5" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium">{action.title}</h3>
                            <p className="text-sm text-gray-500">{action.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-gray-400" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
