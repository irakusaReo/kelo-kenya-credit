
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MainLayout from '@/components/layouts/MainLayout';
import { 
  Search, 
  Filter, 
  UserPlus, 
  MoreVertical,
  Shield,
  Ban,
  CheckCircle,
  AlertTriangle,
  Users,
  Eye,
  Download
} from 'lucide-react';

const UserManagement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedUserType, setSelectedUserType] = useState('all');

  const userTypes = [
    { id: 'all', name: 'All Users' },
    { id: 'consumer', name: 'Consumers' },
    { id: 'merchant', name: 'Merchants' },
    { id: 'admin', name: 'Admins' }
  ];

  const users = [
    {
      id: 1,
      name: 'John Kamau',
      email: 'john.kamau@email.com',
      phone: '+254712345678',
      type: 'consumer',
      status: 'active',
      kyc_status: 'verified',
      registration_date: '2024-01-15',
      last_login: '2024-01-20',
      transactions: 12,
      total_spent: 245000
    },
    {
      id: 2,
      name: 'TechHub Kenya',
      email: 'support@techhub.co.ke',
      phone: '+254700123456',
      type: 'merchant',
      status: 'active',
      kyc_status: 'verified',
      registration_date: '2023-12-01',
      last_login: '2024-01-20',
      transactions: 456,
      total_earned: 2450000
    },
    {
      id: 3,
      name: 'Mary Wanjiku',
      email: 'mary.w@email.com',
      phone: '+254723456789',
      type: 'consumer',
      status: 'suspended',
      kyc_status: 'pending',
      registration_date: '2024-01-10',
      last_login: '2024-01-18',
      transactions: 3,
      total_spent: 45000
    },
    {
      id: 4,
      name: 'David Ochieng',
      email: 'david.admin@kelo.co.ke',
      phone: '+254734567890',
      type: 'admin',
      status: 'active',
      kyc_status: 'verified',
      registration_date: '2023-11-01',
      last_login: '2024-01-20',
      transactions: 0,
      total_spent: 0
    }
  ];

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.includes(searchTerm);
    const matchesType = selectedUserType === 'all' || user.type === selectedUserType;
    return matchesSearch && matchesType;
  });

  const getStatusBadge = (status: string) => {
    const statusMap = {
      'active': { label: 'Active', variant: 'default' as const, color: 'bg-green-500' },
      'suspended': { label: 'Suspended', variant: 'destructive' as const, color: 'bg-red-500' },
      'pending': { label: 'Pending', variant: 'secondary' as const, color: 'bg-yellow-500' }
    };
    
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: 'outline' as const, color: 'bg-gray-500' };
  };

  const getKycBadge = (status: string) => {
    const statusMap = {
      'verified': { label: 'Verified', variant: 'default' as const, icon: CheckCircle },
      'pending': { label: 'Pending', variant: 'secondary' as const, icon: AlertTriangle },
      'rejected': { label: 'Rejected', variant: 'destructive' as const, icon: Ban }
    };
    
    return statusMap[status as keyof typeof statusMap] || { label: status, variant: 'outline' as const, icon: AlertTriangle };
  };

  const getUserTypeColor = (type: string) => {
    switch (type) {
      case 'consumer':
        return 'text-blue-600 bg-blue-100';
      case 'merchant':
        return 'text-green-600 bg-green-100';
      case 'admin':
        return 'text-purple-600 bg-purple-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50">
        <div className="kelo-container py-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">User Management</h1>
              <p className="text-gray-600">Manage users, permissions, and account status</p>
            </div>
            <div className="flex gap-2 mt-4 lg:mt-0">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Export Users
              </Button>
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <UserPlus className="h-4 w-4 mr-2" />
                Add User
              </Button>
            </div>
          </div>

          {/* Search and Filters */}
          <Card className="mb-6">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, or phone..."
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
                {userTypes.map((type) => (
                  <Button
                    key={type.id}
                    variant={selectedUserType === type.id ? 'default' : 'outline'}
                    size="sm"
                    onClick={() => setSelectedUserType(type.id)}
                  >
                    {type.name}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* User Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Users</p>
                    <p className="text-2xl font-bold">12,456</p>
                  </div>
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Active Users</p>
                    <p className="text-2xl font-bold text-green-600">11,892</p>
                  </div>
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Pending KYC</p>
                    <p className="text-2xl font-bold text-yellow-600">234</p>
                  </div>
                  <AlertTriangle className="h-8 w-8 text-yellow-600" />
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Suspended</p>
                    <p className="text-2xl font-bold text-red-600">45</p>
                  </div>
                  <Ban className="h-8 w-8 text-red-600" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Users Table */}
          <Card>
            <CardHeader>
              <CardTitle>Users ({filteredUsers.length})</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4">User</th>
                      <th className="text-left py-3 px-4">Type</th>
                      <th className="text-left py-3 px-4">Status</th>
                      <th className="text-left py-3 px-4">KYC</th>
                      <th className="text-left py-3 px-4">Activity</th>
                      <th className="text-left py-3 px-4">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredUsers.map((user) => {
                      const kycStatus = getKycBadge(user.kyc_status);
                      const KycIcon = kycStatus.icon;
                      
                      return (
                        <tr key={user.id} className="border-b hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <div>
                              <p className="font-medium">{user.name}</p>
                              <p className="text-sm text-gray-600">{user.email}</p>
                              <p className="text-sm text-gray-600">{user.phone}</p>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <Badge className={getUserTypeColor(user.type)}>
                              {user.type}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <Badge variant={getStatusBadge(user.status).variant}>
                              {getStatusBadge(user.status).label}
                            </Badge>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex items-center gap-2">
                              <KycIcon className="h-4 w-4" />
                              <Badge variant={kycStatus.variant}>
                                {kycStatus.label}
                              </Badge>
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="text-sm">
                              <p>{user.transactions} transactions</p>
                              <p className="text-gray-600">
                                Last login: {user.last_login}
                              </p>
                              {user.type === 'consumer' && (
                                <p className="text-gray-600">
                                  Spent: KES {user.total_spent.toLocaleString()}
                                </p>
                              )}
                              {user.type === 'merchant' && (
                                <p className="text-gray-600">
                                  Earned: KES {user.total_earned?.toLocaleString()}
                                </p>
                              )}
                            </div>
                          </td>
                          <td className="py-3 px-4">
                            <div className="flex gap-1">
                              <Button variant="ghost" size="sm">
                                <Eye className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Shield className="h-4 w-4" />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <MoreVertical className="h-4 w-4" />
                              </Button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              {filteredUsers.length === 0 && (
                <div className="text-center py-12">
                  <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500 mb-4">No users found matching your criteria</p>
                  <Button onClick={() => { setSearchTerm(''); setSelectedUserType('all'); }}>
                    Clear Filters
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Activity */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle>Recent User Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="registrations">
                <TabsList className="mb-6">
                  <TabsTrigger value="registrations">New Registrations</TabsTrigger>
                  <TabsTrigger value="kyc">KYC Submissions</TabsTrigger>
                  <TabsTrigger value="suspensions">Account Actions</TabsTrigger>
                </TabsList>
                
                <TabsContent value="registrations">
                  <div className="space-y-3">
                    {[
                      { name: 'Alice Muthoni', email: 'alice@email.com', type: 'consumer', time: '2 hours ago' },
                      { name: 'Bob Kiprotich', email: 'bob@email.com', type: 'consumer', time: '4 hours ago' },
                      { name: 'Carol Tech Store', email: 'info@carol.co.ke', type: 'merchant', time: '6 hours ago' }
                    ].map((user, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{user.name}</p>
                          <p className="text-sm text-gray-600">{user.email}</p>
                        </div>
                        <div className="text-right">
                          <Badge className={getUserTypeColor(user.type)}>
                            {user.type}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{user.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="kyc">
                  <div className="space-y-3">
                    {[
                      { name: 'John Doe', status: 'pending', time: '1 hour ago' },
                      { name: 'Jane Smith', status: 'approved', time: '3 hours ago' },
                      { name: 'Tech Solutions Ltd', status: 'rejected', time: '5 hours ago' }
                    ].map((submission, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{submission.name}</p>
                          <p className="text-sm text-gray-600">KYC submission</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={getKycBadge(submission.status).variant}>
                            {getKycBadge(submission.status).label}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{submission.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="suspensions">
                  <div className="space-y-3">
                    {[
                      { name: 'Risk User', action: 'suspended', reason: 'Fraudulent activity', time: '30 minutes ago' },
                      { name: 'Good User', action: 'unsuspended', reason: 'Appeal approved', time: '2 hours ago' },
                      { name: 'Test Merchant', action: 'suspended', reason: 'Policy violation', time: '4 hours ago' }
                    ].map((action, index) => (
                      <div key={index} className="flex justify-between items-center p-3 border rounded-lg">
                        <div>
                          <p className="font-medium">{action.name}</p>
                          <p className="text-sm text-gray-600">{action.reason}</p>
                        </div>
                        <div className="text-right">
                          <Badge variant={action.action === 'suspended' ? 'destructive' : 'default'}>
                            {action.action}
                          </Badge>
                          <p className="text-xs text-gray-500 mt-1">{action.time}</p>
                        </div>
                      </div>
                    ))}
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

export default UserManagement;
