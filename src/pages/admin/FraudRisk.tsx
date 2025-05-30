
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  Shield, 
  AlertTriangle, 
  TrendingUp,
  Eye,
  Ban,
  CheckCircle,
  Search,
  Filter,
  Download,
  Target,
  Activity
} from 'lucide-react';

const FraudRisk = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeverity, setSelectedSeverity] = useState('all');

  const riskStats = [
    {
      title: 'Active Alerts',
      value: '23',
      change: '+5 from yesterday',
      status: 'warning',
      icon: AlertTriangle
    },
    {
      title: 'Fraud Rate',
      value: '0.8%',
      change: '+0.2% from last week',
      status: 'normal',
      icon: Shield
    },
    {
      title: 'False Positives',
      value: '12%',
      change: '-3% from last week',
      status: 'good',
      icon: Target
    },
    {
      title: 'Investigations',
      value: '45',
      change: 'Pending review',
      status: 'normal',
      icon: Activity
    }
  ];

  const alerts = [
    {
      id: 'ALERT-001',
      type: 'fraud_pattern',
      severity: 'high',
      title: 'Suspicious Transaction Pattern',
      description: 'Multiple high-value transactions from same device',
      user: 'John Doe (+254712345678)',
      amount: 'KES 450,000',
      timestamp: '2024-01-20 14:30:00',
      status: 'open',
      risk_score: 95,
      ml_confidence: 89
    },
    {
      id: 'ALERT-002',
      type: 'velocity_check',
      severity: 'medium',
      title: 'High Transaction Velocity',
      description: 'User exceeded normal transaction frequency',
      user: 'Jane Smith (+254723456789)',
      amount: 'KES 125,000',
      timestamp: '2024-01-20 13:15:00',
      status: 'investigating',
      risk_score: 72,
      ml_confidence: 76
    },
    {
      id: 'ALERT-003',
      type: 'device_anomaly',
      severity: 'medium',
      title: 'New Device Login',
      description: 'Login from unrecognized device in different location',
      user: 'Mike Wilson (+254734567890)',
      amount: 'KES 85,000',
      timestamp: '2024-01-20 11:45:00',
      status: 'resolved',
      risk_score: 68,
      ml_confidence: 82
    },
    {
      id: 'ALERT-004',
      type: 'merchant_risk',
      severity: 'high',
      title: 'Merchant Chargeback Risk',
      description: 'High chargeback rate detected for merchant',
      user: 'TechHub Store',
      amount: 'KES 2,300,000',
      timestamp: '2024-01-20 09:20:00',
      status: 'escalated',
      risk_score: 88,
      ml_confidence: 91
    }
  ];

  const investigations = [
    {
      id: 'INV-001',
      case_type: 'Identity Fraud',
      subject: 'John Doe',
      investigator: 'Sarah Johnson',
      opened: '2024-01-18',
      priority: 'high',
      status: 'active',
      evidence_count: 5,
      last_activity: '2 hours ago'
    },
    {
      id: 'INV-002',
      case_type: 'Merchant Fraud',
      subject: 'QuickShop Electronics',
      investigator: 'Mike Chen',
      opened: '2024-01-15',
      priority: 'medium',
      status: 'pending_closure',
      evidence_count: 12,
      last_activity: '1 day ago'
    },
    {
      id: 'INV-003',
      case_type: 'Payment Fraud',
      subject: 'Alice Mwangi',
      investigator: 'David Kim',
      opened: '2024-01-12',
      priority: 'low',
      status: 'closed',
      evidence_count: 3,
      last_activity: '3 days ago'
    }
  ];

  const riskRules = [
    {
      id: 'RULE-001',
      name: 'High Value Transaction',
      description: 'Transactions above KES 100,000',
      trigger: 'amount > 100000',
      action: 'flag_for_review',
      status: 'active',
      triggered_today: 23
    },
    {
      id: 'RULE-002',
      name: 'Velocity Check',
      description: 'More than 5 transactions in 1 hour',
      trigger: 'transaction_count > 5 AND time_window = 1h',
      action: 'temporary_hold',
      status: 'active',
      triggered_today: 8
    },
    {
      id: 'RULE-003',
      name: 'Geolocation Anomaly',
      description: 'Transaction from unusual location',
      trigger: 'location_risk_score > 80',
      action: 'require_2fa',
      status: 'active',
      triggered_today: 15
    },
    {
      id: 'RULE-004',
      name: 'Device Fingerprint',
      description: 'New or suspicious device detected',
      trigger: 'device_trust_score < 50',
      action: 'flag_for_review',
      status: 'testing',
      triggered_today: 42
    }
  ];

  const severityLevels = [
    { id: 'all', name: 'All Severities' },
    { id: 'high', name: 'High' },
    { id: 'medium', name: 'Medium' },
    { id: 'low', name: 'Low' }
  ];

  const filteredAlerts = alerts.filter(alert => {
    const matchesSearch = 
      alert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alert.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeverity = selectedSeverity === 'all' || alert.severity === selectedSeverity;
    return matchesSearch && matchesSeverity;
  });

  const getSeverityBadge = (severity: string) => {
    const severityMap = {
      'high': { label: 'High', variant: 'destructive' as const },
      'medium': { label: 'Medium', variant: 'default' as const },
      'low': { label: 'Low', variant: 'secondary' as const }
    };
    
    return severityMap[severity as keyof typeof severityMap] || { label: severity, variant: 'outline' as const };
  };

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'open': { label: 'Open', variant: 'destructive' as const },
      'investigating': { label: 'Investigating', variant: 'default' as const },
      'resolved': { label: 'Resolved', variant: 'secondary' as const },
      'escalated': { label: 'Escalated', variant: 'outline' as const }
    };
    
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: 'outline' as const };
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'good':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Fraud & Risk Reports</h1>
              <p className="text-gray-600">Monitor and investigate fraud patterns and security threats</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <Shield className="h-4 w-4 mr-2" />
                Security Dashboard
              </Button>
            </div>
          </div>

          {/* Risk Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {riskStats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${getStatusColor(stat.status)}`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <TrendingUp className="h-4 w-4 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-500">{stat.change}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content */}
          <Tabs defaultValue="alerts">
            <TabsList className="mb-6">
              <TabsTrigger value="alerts">Active Alerts</TabsTrigger>
              <TabsTrigger value="investigations">Investigations</TabsTrigger>
              <TabsTrigger value="rules">Risk Rules</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>

            <TabsContent value="alerts">
              {/* Search and Filters */}
              <Card className="mb-6">
                <CardContent className="p-6">
                  <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        placeholder="Search alerts by ID, user, or description..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="h-4 w-4 mr-2" />
                      Advanced Filters
                    </Button>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mt-4">
                    {severityLevels.map((level) => (
                      <Button
                        key={level.id}
                        variant={selectedSeverity === level.id ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setSelectedSeverity(level.id)}
                      >
                        {level.name}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Alerts List */}
              <div className="space-y-4">
                {filteredAlerts.map((alert) => (
                  <Card key={alert.id} className="border-l-4 border-l-red-500">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <AlertTriangle className="h-5 w-5 text-red-600" />
                            <span className="font-semibold">{alert.id}</span>
                            <Badge variant={getSeverityBadge(alert.severity).variant}>
                              {getSeverityBadge(alert.severity).label}
                            </Badge>
                            <Badge variant={getStatusBadge(alert.status).variant}>
                              {getStatusBadge(alert.status).label}
                            </Badge>
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-1">{alert.title}</h3>
                          <p className="text-gray-600 mb-3">{alert.description}</p>
                          
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-600">User</p>
                              <p className="font-medium">{alert.user}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Amount</p>
                              <p className="font-semibold text-red-600">{alert.amount}</p>
                            </div>
                            <div>
                              <p className="text-gray-600">Risk Score</p>
                              <p className="font-semibold">{alert.risk_score}/100</p>
                            </div>
                            <div>
                              <p className="text-gray-600">ML Confidence</p>
                              <p className="font-semibold">{alert.ml_confidence}%</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-2">
                          <p className="text-sm text-gray-600">{alert.timestamp}</p>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                              <Eye className="h-4 w-4 mr-1" />
                              Investigate
                            </Button>
                            <Button variant="destructive" size="sm">
                              <Ban className="h-4 w-4 mr-1" />
                              Block
                            </Button>
                            <Button variant="default" size="sm">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Resolve
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="investigations">
              <Card>
                <CardHeader>
                  <CardTitle>Active Investigations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investigations.map((investigation) => (
                      <div key={investigation.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{investigation.id}</h4>
                            <p className="text-sm text-gray-600">{investigation.case_type}</p>
                          </div>
                          <div className="flex gap-2">
                            <Badge variant={
                              investigation.priority === 'high' ? 'destructive' :
                              investigation.priority === 'medium' ? 'default' : 'secondary'
                            }>
                              {investigation.priority} priority
                            </Badge>
                            <Badge variant={
                              investigation.status === 'active' ? 'default' :
                              investigation.status === 'pending_closure' ? 'secondary' : 'outline'
                            }>
                              {investigation.status.replace('_', ' ')}
                            </Badge>
                          </div>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm mb-3">
                          <div>
                            <p className="text-gray-600">Subject</p>
                            <p className="font-medium">{investigation.subject}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Investigator</p>
                            <p className="font-medium">{investigation.investigator}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Opened</p>
                            <p className="font-medium">{investigation.opened}</p>
                          </div>
                          <div>
                            <p className="text-gray-600">Evidence</p>
                            <p className="font-medium">{investigation.evidence_count} items</p>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-600">Last activity: {investigation.last_activity}</span>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">View Details</Button>
                            <Button size="sm">Update</Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="rules">
              <Card>
                <CardHeader>
                  <CardTitle>Risk Detection Rules</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {riskRules.map((rule) => (
                      <div key={rule.id} className="p-4 border rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-semibold">{rule.name}</h4>
                            <p className="text-sm text-gray-600">{rule.description}</p>
                          </div>
                          <Badge variant={rule.status === 'active' ? 'default' : 'secondary'}>
                            {rule.status}
                          </Badge>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded-lg mb-3">
                          <p className="text-sm font-mono">{rule.trigger}</p>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <div className="text-sm">
                            <span className="text-gray-600">Action: </span>
                            <span className="font-medium">{rule.action.replace('_', ' ')}</span>
                            <span className="text-gray-600 ml-4">Triggered today: </span>
                            <span className="font-semibold text-kelo-blue">{rule.triggered_today}</span>
                          </div>
                          <div className="flex gap-2">
                            <Button variant="outline" size="sm">Edit</Button>
                            <Button variant="outline" size="sm">
                              {rule.status === 'active' ? 'Disable' : 'Enable'}
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Fraud Trends</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>Identity Fraud</span>
                        <span className="font-semibold">↑ 15%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>Payment Fraud</span>
                        <span className="font-semibold">↓ 8%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>Account Takeover</span>
                        <span className="font-semibold">↑ 23%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>Merchant Fraud</span>
                        <span className="font-semibold">→ 0%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Detection Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>True Positive Rate</span>
                        <span className="font-semibold text-green-600">94.2%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>False Positive Rate</span>
                        <span className="font-semibold text-red-600">5.8%</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>Average Detection Time</span>
                        <span className="font-semibold">2.3 seconds</span>
                      </div>
                      <div className="flex justify-between items-center p-3 border rounded-lg">
                        <span>Model Accuracy</span>
                        <span className="font-semibold text-green-600">96.8%</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
};

export default FraudRisk;
