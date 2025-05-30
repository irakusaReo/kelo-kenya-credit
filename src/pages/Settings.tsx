
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Bell, 
  Shield, 
  CreditCard, 
  User, 
  Globe, 
  Moon, 
  Smartphone,
  Mail,
  MessageSquare
} from 'lucide-react';
import MobileTabBar from '@/components/MobileTabBar';

const Settings = () => {
  const [settings, setSettings] = useState({
    notifications: {
      pushNotifications: true,
      emailNotifications: true,
      smsNotifications: true,
      paymentReminders: true,
      marketingEmails: false,
      weeklyReports: true
    },
    privacy: {
      profileVisible: true,
      shareUsageData: false,
      biometricAuth: true
    },
    preferences: {
      darkMode: false,
      language: 'en',
      currency: 'KES',
      autoPayments: true
    }
  });

  const updateSetting = (category: string, key: string, value: boolean | string) => {
    setSettings(prev => ({
      ...prev,
      [category]: {
        ...prev[category as keyof typeof prev],
        [key]: value
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to="/more">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={24} />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Settings</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Account Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              Account Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue="user@example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" defaultValue="+254 700 123 456" />
            </div>
            <Link to="/profile">
              <Button variant="outline" className="w-full">
                Edit Profile
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* Notification Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="w-5 h-5 mr-2" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Smartphone className="w-4 h-4 text-gray-500" />
                <span>Push Notifications</span>
              </div>
              <Switch
                checked={settings.notifications.pushNotifications}
                onCheckedChange={(value) => updateSetting('notifications', 'pushNotifications', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span>Email Notifications</span>
              </div>
              <Switch
                checked={settings.notifications.emailNotifications}
                onCheckedChange={(value) => updateSetting('notifications', 'emailNotifications', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                <span>SMS Notifications</span>
              </div>
              <Switch
                checked={settings.notifications.smsNotifications}
                onCheckedChange={(value) => updateSetting('notifications', 'smsNotifications', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span>Payment Reminders</span>
              <Switch
                checked={settings.notifications.paymentReminders}
                onCheckedChange={(value) => updateSetting('notifications', 'paymentReminders', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span>Marketing Emails</span>
              <Switch
                checked={settings.notifications.marketingEmails}
                onCheckedChange={(value) => updateSetting('notifications', 'marketingEmails', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span>Weekly Reports</span>
              <Switch
                checked={settings.notifications.weeklyReports}
                onCheckedChange={(value) => updateSetting('notifications', 'weeklyReports', value)}
              />
            </div>
          </CardContent>
        </Card>

        {/* Security & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Shield className="w-5 h-5 mr-2" />
              Security & Privacy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Biometric Authentication</span>
              <Switch
                checked={settings.privacy.biometricAuth}
                onCheckedChange={(value) => updateSetting('privacy', 'biometricAuth', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span>Profile Visible to Others</span>
              <Switch
                checked={settings.privacy.profileVisible}
                onCheckedChange={(value) => updateSetting('privacy', 'profileVisible', value)}
              />
            </div>
            
            <div className="flex items-center justify-between">
              <span>Share Usage Data</span>
              <Switch
                checked={settings.privacy.shareUsageData}
                onCheckedChange={(value) => updateSetting('privacy', 'shareUsageData', value)}
              />
            </div>
            
            <Button variant="outline" className="w-full">
              Change Password
            </Button>
            
            <Button variant="outline" className="w-full">
              Two-Factor Authentication
            </Button>
          </CardContent>
        </Card>

        {/* Payment Settings */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CreditCard className="w-5 h-5 mr-2" />
              Payment Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <span>Auto-Pay Enabled</span>
              <Switch
                checked={settings.preferences.autoPayments}
                onCheckedChange={(value) => updateSetting('preferences', 'autoPayments', value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Default Payment Method</Label>
              <Button variant="outline" className="w-full justify-start">
                M-Pesa (+254 700 123 456)
              </Button>
            </div>
            
            <Link to="/wallet-addresses">
              <Button variant="outline" className="w-full">
                Manage Wallet Addresses
              </Button>
            </Link>
          </CardContent>
        </Card>

        {/* App Preferences */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Globe className="w-5 h-5 mr-2" />
              App Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Moon className="w-4 h-4 text-gray-500" />
                <span>Dark Mode</span>
              </div>
              <Switch
                checked={settings.preferences.darkMode}
                onCheckedChange={(value) => updateSetting('preferences', 'darkMode', value)}
              />
            </div>
            
            <div className="space-y-2">
              <Label>Language</Label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={settings.preferences.language}
                onChange={(e) => updateSetting('preferences', 'language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="sw">Kiswahili</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <Label>Currency</Label>
              <select 
                className="w-full p-2 border border-gray-300 rounded-md"
                value={settings.preferences.currency}
                onChange={(e) => updateSetting('preferences', 'currency', e.target.value)}
              >
                <option value="KES">KES (Kenyan Shilling)</option>
                <option value="USD">USD (US Dollar)</option>
              </select>
            </div>
          </CardContent>
        </Card>

        {/* Support */}
        <Card>
          <CardContent className="p-4">
            <div className="space-y-3">
              <Link to="/help">
                <Button variant="outline" className="w-full justify-start">
                  Help & Support
                </Button>
              </Link>
              
              <Link to="/legal/terms">
                <Button variant="outline" className="w-full justify-start">
                  Terms of Service
                </Button>
              </Link>
              
              <Link to="/legal/privacy">
                <Button variant="outline" className="w-full justify-start">
                  Privacy Policy
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* App Version */}
        <Card>
          <CardContent className="p-4 text-center">
            <p className="text-sm text-gray-600">Kelo App Version 1.0.0</p>
            <p className="text-xs text-gray-500 mt-1">© 2025 Kelo. All rights reserved.</p>
          </CardContent>
        </Card>
      </div>

      <MobileTabBar />
    </div>
  );
};

export default Settings;
