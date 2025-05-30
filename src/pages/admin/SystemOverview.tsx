
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  Activity,
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Database,
  Server,
  Users,
  TrendingUp,
  Shield,
  Zap
} from 'lucide-react';

const SystemOverview = () => {
  const systemStats = [
    {
      title: 'System Uptime',
      value: '99.9%',
      status: 'healthy',
      icon: Activity,
      description: '30 days'
    },
    {
      title: 'Active Users',
      value: '12,456',
      status: 'healthy',
      icon: Users,
      description: '+5.2% from yesterday'
    },
    {
      title: 'API Response Time',
      value: '120ms',
      status: 'healthy',
      icon: Zap,
      description: 'Average'
    },
    {
      title: 'Database Load',
      value: '68%',
      status: 'warning',
      icon: Database,
      description: 'Current utilization'
    }
  ];

  const alerts = [
    {
      id: 1,
      type: 'warning',
      title: 'High Database Load',
      description: 'Database utilization above 65% threshold',
      time: '5 minutes ago',
      severity: 'medium'
    },
    {
      id: 2,
      type: 'info',
      title: 'Scheduled Maintenance',
      description: 'System maintenance scheduled for tonight 2:00 AM',
      time: '2 hours ago',
      severity: 'low'
    },
    {
      id: 3,
      type: 'success',
      title: 'Payment Gateway Update',
      description: 'M-Pesa integration successfully updated',
      time: '6 hours ago',
      severity: 'low'
    }
  ];

  const services = [
    {
      name: 'API Gateway',
      status: 'healthy',
      uptime: '99.9%',
      last_check: '2 minutes ago'
    },
    {
      name: 'Payment Processing',
      status: 'healthy',
      uptime: '99.8%',
      last_check: '1 minute ago'
    },
    {
      name: 'M-Pesa Integration',
      status: 'healthy',
      uptime: '99.7%',
      last_check: '3 minutes ago'
    },
    {
      name: 'SMS Service',
      status: 'warning',
      uptime: '98.5%',
      last_check: '5 minutes ago'
    },
    {
      name: 'Email Service',
      status: 'healthy',
      uptime: '99.9%',
      last_check: '1 minute ago'
    },
    {
      name: 'Analytics Engine',
      status: 'healthy',
      uptime: '99.6%',
      last_check: '4 minutes ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'healthy':
        return 'text-green-600 bg-green-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'error':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />;
      case 'error':
        return <AlertTriangle className="h-4 w-4 text-red-600" />;
      case 'success':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Clock className="h-4 w-4 text-blue-600" />;
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">System Overview</h1>
              <p className="text-gray-600">Monitor system health and performance</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button variant="outline">
                <Shield className="h-4 w-4 mr-2" />
                Security Dashboard
              </Button>
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <Server className="h-4 w-4 mr-2" />
                View Logs
              </Button>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {systemStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(stat.status)}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      {getStatusIcon(stat.status)}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Alerts */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Recent Alerts
                </CardTitle>
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {alerts.map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-medium">{alert.title}</h4>
                          <Badge variant={
                            alert.severity === 'high' ? 'destructive' :
                            alert.severity === 'medium' ? 'default' :
                            'secondary'
                          } size="sm">
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{alert.description}</p>
                        <p className="text-xs text-gray-500">{alert.time}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Resolve
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Service Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Service Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'healthy' ? 'bg-green-500' :
                          service.status === 'warning' ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`} />
                        <div>
                          <p className="font-medium">{service.name}</p>
                          <p className="text-sm text-gray-600">Uptime: {service.uptime}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={
                          service.status === 'healthy' ? 'default' :
                          service.status === 'warning' ? 'secondary' :
                          'destructive'
                        }>
                          {service.status}
                        </Badge>
                        <p className="text-xs text-gray-500 mt-1">{service.last_check}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="transactions">Transactions</TabsTrigger>
                  <TabsTrigger value="users">Users</TabsTrigger>
                  <TabsTrigger value="errors">Errors</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-kelo-blue">2.4M</p>
                      <p className="text-sm text-gray-600">Total API Calls (24h)</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-green-600">99.7%</p>
                      <p className="text-sm text-gray-600">Success Rate</p>
                    </div>
                    <div className="text-center p-4 border rounded-lg">
                      <p className="text-2xl font-bold text-purple-600">156ms</p>
                      <p className="text-sm text-gray-600">Avg Response Time</p>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="transactions">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Total Transactions (24h)</span>
                      <span className="font-semibold">45,678</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Successful Transactions</span>
                      <span className="font-semibold text-green-600">45,234</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Failed Transactions</span>
                      <span className="font-semibold text-red-600">444</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Average Transaction Value</span>
                      <span className="font-semibold">KES 18,500</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="users">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Active Users (24h)</span>
                      <span className="font-semibold">12,456</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>New Registrations</span>
                      <span className="font-semibold text-green-600">234</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>User Sessions</span>
                      <span className="font-semibold">18,672</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Average Session Duration</span>
                      <span className="font-semibold">8.5 minutes</span>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="errors">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Total Errors (24h)</span>
                      <span className="font-semibold text-red-600">156</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Critical Errors</span>
                      <span className="font-semibold text-red-600">12</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Warning Errors</span>
                      <span className="font-semibold text-yellow-600">89</span>
                    </div>
                    <div className="flex justify-between items-center p-4 border rounded-lg">
                      <span>Info Errors</span>
                      <span className="font-semibold text-blue-600">55</span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default SystemOverview;
