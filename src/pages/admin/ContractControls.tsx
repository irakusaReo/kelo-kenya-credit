
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  Shield, 
  Pause, 
  Play,
  Settings,
  AlertTriangle,
  CheckCircle,
  Clock,
  Code,
  Lock,
  Unlock,
  RefreshCw
} from 'lucide-react';

const ContractControls = () => {
  const [selectedContract, setSelectedContract] = useState('');
  const [pauseReason, setPauseReason] = useState('');

  const contracts = [
    {
      id: 'lending-pool',
      name: 'Lending Pool Contract',
      address: '0x1234...5678',
      version: 'v2.1.0',
      status: 'active',
      last_updated: '2024-01-15',
      total_value_locked: 2450000,
      active_loans: 1234
    },
    {
      id: 'payment-gateway',
      name: 'Payment Gateway Contract',
      address: '0xabcd...efgh',
      version: 'v1.8.2',
      status: 'active',
      last_updated: '2024-01-10',
      total_value_locked: 850000,
      transactions_today: 456
    },
    {
      id: 'mpesa-bridge',
      name: 'M-Pesa Bridge Contract',
      address: '0x9876...5432',
      version: 'v1.5.1',
      status: 'paused',
      last_updated: '2024-01-08',
      total_value_locked: 0,
      pause_reason: 'Emergency maintenance'
    },
    {
      id: 'treasury-vault',
      name: 'Treasury Vault Contract',
      address: '0xfed...cba9',
      version: 'v3.0.0',
      status: 'upgrading',
      last_updated: '2024-01-20',
      total_value_locked: 5200000,
      upgrade_eta: '30 minutes'
    }
  ];

  const recentActions = [
    {
      id: 1,
      action: 'Contract Paused',
      contract: 'M-Pesa Bridge Contract',
      admin: 'John Admin',
      timestamp: '2024-01-20 14:30:00',
      reason: 'Emergency maintenance'
    },
    {
      id: 2,
      action: 'Parameter Updated',
      contract: 'Lending Pool Contract',
      admin: 'Sarah Admin',
      timestamp: '2024-01-20 09:15:00',
      reason: 'Risk threshold adjustment'
    },
    {
      id: 3,
      action: 'Contract Resumed',
      contract: 'Payment Gateway Contract',
      admin: 'Mike Admin',
      timestamp: '2024-01-19 16:45:00',
      reason: 'Maintenance completed'
    }
  ];

  const pendingUpgrades = [
    {
      contract: 'Lending Pool Contract',
      current_version: 'v2.1.0',
      target_version: 'v2.2.0',
      changes: ['Gas optimization', 'Security improvements', 'New interest rate model'],
      scheduled_for: '2024-01-25',
      risk_level: 'medium'
    },
    {
      contract: 'Payment Gateway Contract',
      current_version: 'v1.8.2',
      target_version: 'v1.9.0',
      changes: ['Bug fixes', 'Performance improvements'],
      scheduled_for: '2024-01-22',
      risk_level: 'low'
    }
  ];

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'active': { label: 'Active', variant: 'default' as const, icon: CheckCircle, color: 'text-green-600' },
      'paused': { label: 'Paused', variant: 'destructive' as const, icon: Pause, color: 'text-red-600' },
      'upgrading': { label: 'Upgrading', variant: 'secondary' as const, icon: RefreshCw, color: 'text-yellow-600' }
    };
    
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: 'outline' as const, icon: AlertTriangle, color: 'text-gray-600' };
  };

  const getRiskBadge = (level: string) => {
    const riskMap = {
      'low': { label: 'Low Risk', variant: 'default' as const },
      'medium': { label: 'Medium Risk', variant: 'secondary' as const },
      'high': { label: 'High Risk', variant: 'destructive' as const }
    };
    
    return riskMap[level as keyof typeof riskMap] || { label: level, variant: 'outline' as const };
  };

  const handlePauseContract = (contractId: string) => {
    console.log(`Pausing contract ${contractId} with reason: ${pauseReason}`);
    // Implement pause logic
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Contract Controls</h1>
              <p className="text-gray-600">Manage smart contracts and system parameters</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button variant="outline">
                <Shield className="h-4 w-4 mr-2" />
                Security Audit
              </Button>
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <Settings className="h-4 w-4 mr-2" />
                System Settings
              </Button>
            </div>
          </div>

          {/* Active Contracts */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5" />
                Smart Contracts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {contracts.map((contract) => {
                  const statusInfo = getStatusBadge(contract.status);
                  const StatusIcon = statusInfo.icon;
                  
                  return (
                    <Card key={contract.id} className="border-l-4 border-l-kelo-blue">
                      <CardContent className="p-6">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <StatusIcon className={`h-5 w-5 ${statusInfo.color}`} />
                              <h3 className="text-lg font-semibold">{contract.name}</h3>
                              <Badge variant={statusInfo.variant}>
                                {statusInfo.label}
                              </Badge>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                              <div>
                                <p className="text-gray-600">Address</p>
                                <p className="font-mono">{contract.address}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">Version</p>
                                <p className="font-semibold">{contract.version}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">TVL</p>
                                <p className="font-semibold">KES {contract.total_value_locked.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-gray-600">
                                  {contract.active_loans ? 'Active Loans' : 
                                   contract.transactions_today ? 'Transactions Today' :
                                   contract.upgrade_eta ? 'ETA' : 'Last Updated'}
                                </p>
                                <p className="font-semibold">
                                  {contract.active_loans || contract.transactions_today || contract.upgrade_eta || contract.last_updated}
                                </p>
                              </div>
                            </div>
                            
                            {contract.pause_reason && (
                              <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
                                <p className="text-sm text-red-800">
                                  <AlertTriangle className="h-4 w-4 inline mr-2" />
                                  {contract.pause_reason}
                                </p>
                              </div>
                            )}
                          </div>
                          
                          <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-2">
                            {contract.status === 'active' && (
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <Button variant="destructive" size="sm">
                                    <Pause className="h-4 w-4 mr-2" />
                                    Pause
                                  </Button>
                                </AlertDialogTrigger>
                                <AlertDialogContent>
                                  <AlertDialogHeader>
                                    <AlertDialogTitle>Pause Contract</AlertDialogTitle>
                                    <AlertDialogDescription>
                                      This will immediately pause the {contract.name}. All operations will be stopped.
                                    </AlertDialogDescription>
                                  </AlertDialogHeader>
                                  <div className="space-y-4">
                                    <div>
                                      <Label htmlFor="pause-reason">Reason for pausing</Label>
                                      <Input
                                        id="pause-reason"
                                        placeholder="Enter reason for emergency pause..."
                                        value={pauseReason}
                                        onChange={(e) => setPauseReason(e.target.value)}
                                      />
                                    </div>
                                    <div>
                                      <Label htmlFor="contract-confirm">Type contract name to confirm</Label>
                                      <Input
                                        id="contract-confirm"
                                        placeholder={contract.name}
                                        value={selectedContract}
                                        onChange={(e) => setSelectedContract(e.target.value)}
                                      />
                                    </div>
                                  </div>
                                  <AlertDialogFooter>
                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                    <AlertDialogAction
                                      className="bg-red-600 hover:bg-red-700"
                                      disabled={selectedContract !== contract.name || !pauseReason}
                                      onClick={() => handlePauseContract(contract.id)}
                                    >
                                      Pause Contract
                                    </AlertDialogAction>
                                  </AlertDialogFooter>
                                </AlertDialogContent>
                              </AlertDialog>
                            )}
                            
                            {contract.status === 'paused' && (
                              <Button variant="default" size="sm" className="bg-green-600 hover:bg-green-700">
                                <Play className="h-4 w-4 mr-2" />
                                Resume
                              </Button>
                            )}
                            
                            <Button variant="outline" size="sm">
                              <Settings className="h-4 w-4 mr-2" />
                              Configure
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Recent Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Recent Actions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActions.map((action) => (
                    <div key={action.id} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{action.action}</h4>
                        <Badge variant="outline" className="text-xs">
                          {action.timestamp}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{action.contract}</p>
                      <p className="text-sm text-gray-600 mb-2">by {action.admin}</p>
                      <p className="text-sm font-medium text-kelo-blue">{action.reason}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Pending Upgrades */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <RefreshCw className="h-5 w-5" />
                  Pending Upgrades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingUpgrades.map((upgrade, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium">{upgrade.contract}</h4>
                        <Badge variant={getRiskBadge(upgrade.risk_level).variant}>
                          {getRiskBadge(upgrade.risk_level).label}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        {upgrade.current_version} → {upgrade.target_version}
                      </div>
                      <div className="text-sm mb-3">
                        <p className="font-medium mb-1">Changes:</p>
                        <ul className="list-disc list-inside text-gray-600">
                          {upgrade.changes.map((change, i) => (
                            <li key={i}>{change}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">
                          Scheduled: {upgrade.scheduled_for}
                        </span>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Preview
                          </Button>
                          <Button size="sm" className="bg-kelo-blue hover:bg-kelo-blue/90">
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* System Parameters */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                System Parameters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="lending">
                <TabsList className="mb-6">
                  <TabsTrigger value="lending">Lending</TabsTrigger>
                  <TabsTrigger value="payment">Payment</TabsTrigger>
                  <TabsTrigger value="risk">Risk Management</TabsTrigger>
                  <TabsTrigger value="governance">Governance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="lending">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Maximum Loan Amount</Label>
                        <Input value="KES 500,000" readOnly />
                      </div>
                      <div>
                        <Label>Interest Rate</Label>
                        <Input value="0%" readOnly />
                      </div>
                      <div>
                        <Label>Processing Fee</Label>
                        <Input value="KES 500" readOnly />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label>Loan Term</Label>
                        <Input value="6 weeks" readOnly />
                      </div>
                      <div>
                        <Label>Late Payment Fee</Label>
                        <Input value="KES 500 (after 7 days)" readOnly />
                      </div>
                      <div>
                        <Label>Default Threshold</Label>
                        <Input value="30 days overdue" readOnly />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="payment">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label>M-Pesa Timeout</Label>
                        <Input value="300 seconds" readOnly />
                      </div>
                      <div>
                        <Label>Retry Attempts</Label>
                        <Input value="3" readOnly />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label>Settlement Frequency</Label>
                        <Input value="Bi-weekly" readOnly />
                      </div>
                      <div>
                        <Label>Merchant Fee</Label>
                        <Input value="5%" readOnly />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="risk">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Maximum Daily Exposure</Label>
                        <Input value="KES 10,000,000" readOnly />
                      </div>
                      <div>
                        <Label>Risk Score Threshold</Label>
                        <Input value="650" readOnly />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label>Fraud Detection Sensitivity</Label>
                        <Input value="High" readOnly />
                      </div>
                      <div>
                        <Label>Auto-pause Threshold</Label>
                        <Input value="10% default rate" readOnly />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="governance">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <Label>Proposal Threshold</Label>
                        <Input value="10,000 KELO tokens" readOnly />
                      </div>
                      <div>
                        <Label>Voting Period</Label>
                        <Input value="7 days" readOnly />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Label>Quorum Requirement</Label>
                        <Input value="20%" readOnly />
                      </div>
                      <div>
                        <Label>Execution Delay</Label>
                        <Input value="48 hours" readOnly />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="flex justify-end mt-6">
                <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                  Update Parameters
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default ContractControls;
