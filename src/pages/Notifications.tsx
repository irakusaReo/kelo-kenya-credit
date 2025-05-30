
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Bell, Check, X, Settings, CreditCard, ShoppingBag, TrendingUp } from 'lucide-react';
import MobileTabBar from '@/components/MobileTabBar';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: 'payment',
      title: 'Payment Due Tomorrow',
      message: 'Your next payment of KES 2,500 is due tomorrow for your Carrefour purchase.',
      time: '2 hours ago',
      read: false,
      icon: CreditCard,
      color: 'orange'
    },
    {
      id: 2,
      type: 'order',
      title: 'Order Shipped',
      message: 'Your order from Naivas has been shipped and will arrive within 2-3 days.',
      time: '4 hours ago',
      read: false,
      icon: ShoppingBag,
      color: 'blue'
    },
    {
      id: 3,
      type: 'investment',
      title: 'Weekly Yield Earned',
      message: 'You earned KES 450 in yield from your USDC pool investment this week.',
      time: '1 day ago',
      read: true,
      icon: TrendingUp,
      color: 'green'
    },
    {
      id: 4,
      type: 'system',
      title: 'Credit Limit Increased',
      message: 'Congratulations! Your credit limit has been increased to KES 100,000.',
      time: '2 days ago',
      read: true,
      icon: Bell,
      color: 'purple'
    }
  ]);

  const markAsRead = (id: number) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, read: true } : notif
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications(prev => 
      prev.map(notif => ({ ...notif, read: true }))
    );
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const unreadCount = notifications.filter(n => !n.read).length;

  const getColorClasses = (color: string) => {
    const colors = {
      orange: 'bg-orange-100 text-orange-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft size={24} />
              </Button>
            </Link>
            <div>
              <h1 className="text-xl font-semibold">Notifications</h1>
              {unreadCount > 0 && (
                <p className="text-sm text-gray-600">{unreadCount} unread</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {unreadCount > 0 && (
              <Button variant="ghost" size="sm" onClick={markAllAsRead}>
                <Check className="w-4 h-4 mr-1" />
                Mark All Read
              </Button>
            )}
            <Link to="/settings">
              <Button variant="ghost" size="icon">
                <Settings size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="p-4">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6">
            <TabsTrigger value="all">
              All
              {unreadCount > 0 && (
                <Badge variant="destructive" className="ml-1 text-xs">
                  {unreadCount}
                </Badge>
              )}
            </TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="system">System</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-3">
            {notifications.length > 0 ? (
              notifications.map((notification) => {
                const IconComponent = notification.icon;
                return (
                  <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-kelo-blue bg-blue-50/30' : ''}`}>
                    <CardContent className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(notification.color)}`}>
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className={`font-medium ${!notification.read ? 'text-gray-900' : 'text-gray-700'}`}>
                                {notification.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {notification.message}
                              </p>
                              <p className="text-xs text-gray-500 mt-2">
                                {notification.time}
                              </p>
                            </div>
                            <div className="flex items-center space-x-1 ml-2">
                              {!notification.read && (
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  className="h-8 w-8"
                                  onClick={() => markAsRead(notification.id)}
                                >
                                  <Check className="w-4 h-4" />
                                </Button>
                              )}
                              <Button
                                variant="ghost"
                                size="icon"
                                className="h-8 w-8 text-red-500 hover:text-red-700"
                                onClick={() => deleteNotification(notification.id)}
                              >
                                <X className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })
            ) : (
              <Card>
                <CardContent className="p-8 text-center">
                  <Bell className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No Notifications</h3>
                  <p className="text-gray-600">You're all caught up! Check back later for updates.</p>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="payments" className="space-y-3">
            {notifications.filter(n => n.type === 'payment').map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-kelo-blue bg-blue-50/30' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(notification.color)}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="orders" className="space-y-3">
            {notifications.filter(n => n.type === 'order').map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-kelo-blue bg-blue-50/30' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(notification.color)}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>

          <TabsContent value="system" className="space-y-3">
            {notifications.filter(n => n.type === 'system' || n.type === 'investment').map((notification) => {
              const IconComponent = notification.icon;
              return (
                <Card key={notification.id} className={`${!notification.read ? 'border-l-4 border-l-kelo-blue bg-blue-50/30' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${getColorClasses(notification.color)}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{notification.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
                        <p className="text-xs text-gray-500 mt-2">{notification.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>
      </div>

      <MobileTabBar />
    </div>
  );
};

export default Notifications;
