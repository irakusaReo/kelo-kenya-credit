
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Activity, 
  Users, 
  CreditCard, 
  DollarSign, 
  AlertTriangle, 
  CheckCircle, 
  Clock,
  TrendingUp,
  Server,
  Database
} from 'lucide-react';

const SystemOverview = () => {
  const systemMetrics = [
    {
      title: "API Uptime",
      value: "99.9%",
      change: "+0.1%",
      icon: Server,
      status: "healthy"
    },
    {
      title: "Active Users",
      value: "12,543",
      change: "+18%",
      icon: Users,
      status: "healthy"
    },
    {
      title: "Queue Lag",
      value: "2.3s",
      change: "-0.5s",
      icon: Clock,
      status: "warning"
    },
    {
      title: "Database Load",
      value: "67%",
      change: "+5%",
      icon: Database,
      status: "healthy"
    }
  ];

  const criticalAlerts = [
    {
      id: 1,
      message: "High memory usage on payment processor",
      severity: "high",
      time: "2 minutes ago",
      status: "investigating"
    },
    {
      id: 2,
      message: "M-Pesa webhook timeout rate increased",
      severity: "medium",
      time: "15 minutes ago",
      status: "resolved"
    },
    {
      id: 3,
      message: "Database connection pool near capacity",
      severity: "low",
      time: "1 hour ago",
      status: "monitoring"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'healthy':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Healthy</Badge>;
      case 'warning':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Warning</Badge>;
      case 'critical':
        return <Badge variant="destructive">Critical</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getSeverityBadge = (severity: string) => {
    switch (severity) {
      case 'high':
        return <Badge variant="destructive">High</Badge>;
      case 'medium':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Medium</Badge>;
      case 'low':
        return <Badge variant="secondary">Low</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  const getAlertStatusBadge = (status: string) => {
    switch (status) {
      case 'investigating':
        return <Badge variant="secondary" className="bg-orange-100 text-orange-800">Investigating</Badge>;
      case 'resolved':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Resolved</Badge>;
      case 'monitoring':
        return <Badge variant="secondary" className="bg-blue-100 text-blue-800">Monitoring</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="kelo-container py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">System Overview</h1>
          <p className="text-gray-600">Monitor system health and critical alerts</p>
        </div>

        {/* System Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card key={index}>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">{metric.title}</CardTitle>
                  <Icon className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-2xl font-bold">{metric.value}</div>
                    {getStatusBadge(metric.status)}
                  </div>
                  <p className="text-xs text-muted-foreground mt-1">
                    {metric.change} from last hour
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Alerts and Activity */}
        <Tabs defaultValue="alerts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="alerts">Critical Alerts</TabsTrigger>
            <TabsTrigger value="activity">System Activity</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="alerts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Critical Alerts</CardTitle>
                <CardDescription>
                  Real-time system alerts requiring attention
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {criticalAlerts.map((alert) => (
                    <Alert key={alert.id}>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">{alert.message}</p>
                          <p className="text-sm text-gray-500">{alert.time}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          {getSeverityBadge(alert.severity)}
                          {getAlertStatusBadge(alert.status)}
                        </div>
                      </AlertDescription>
                    </Alert>
                  ))}
                </div>
                
                <div className="mt-6 flex justify-between items-center">
                  <Button variant="outline">View All Alerts</Button>
                  <Button>Configure Alerts</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Recent System Activity</CardTitle>
                <CardDescription>
                  Latest system events and operations
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <div className="flex-1">
                      <p className="font-medium">Payment processor restarted</p>
                      <p className="text-sm text-gray-500">5 minutes ago</p>
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800">Success</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <Activity className="h-5 w-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="font-medium">Database backup completed</p>
                      <p className="text-sm text-gray-500">1 hour ago</p>
                    </div>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800">Completed</Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 border rounded-lg">
                    <TrendingUp className="h-5 w-5 text-purple-500" />
                    <div className="flex-1">
                      <p className="font-medium">Load balancer scaled up</p>
                      <p className="text-sm text-gray-500">3 hours ago</p>
                    </div>
                    <Badge variant="secondary" className="bg-purple-100 text-purple-800">Automated</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="performance" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Response Times</CardTitle>
                  <CardDescription>Average API response times</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Payment API</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">234ms</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Good</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>User API</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">156ms</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Good</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Merchant API</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">445ms</span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Slow</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Resources</CardTitle>
                  <CardDescription>Current resource utilization</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>CPU Usage</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">45%</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Normal</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Memory Usage</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">67%</span>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">Normal</Badge>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Disk Usage</span>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">82%</span>
                        <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">High</Badge>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Common administrative tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Server className="h-5 w-5" />
                Restart Services
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <Database className="h-5 w-5" />
                Backup Database
              </Button>
              <Button variant="outline" className="h-20 flex flex-col gap-2">
                <AlertTriangle className="h-5 w-5" />
                Emergency Mode
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SystemOverview;
