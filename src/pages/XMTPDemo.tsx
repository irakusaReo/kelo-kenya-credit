
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, MessageSquare, Zap, Shield, Globe } from 'lucide-react';
import XMTPChatAgent from '@/components/chat/XMTPChatAgent';
import MainLayout from '@/components/layouts/MainLayout';

const XMTPDemo = () => {
  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="kelo-container max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              🚀 Base Batch Messaging Buildathon
            </Badge>
            <h1 className="text-4xl font-bold mb-4">
              Kelo Chat Agent
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete BNPL ecosystem in secure messages. Split payments, M-Pesa integration, smart reminders, and micro-rewards. Powered by XMTP, Base, and Coinbase AgentKit.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card>
              <CardContent className="p-6 text-center">
                <MessageSquare className="h-8 w-8 text-kelo-blue mx-auto mb-3" />
                <h3 className="font-medium mb-2">Chat-Native BNPL</h3>
                <p className="text-sm text-gray-600">
                  Create loans with simple slash commands
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-8 w-8 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-medium mb-2">Split Payments</h3>
                <p className="text-sm text-gray-600">
                  Group purchases with custom ratios
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-medium mb-2">M-Pesa Integration</h3>
                <p className="text-sm text-gray-600">
                  Local payments with STK Push
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-medium mb-2">Smart Rewards</h3>
                <p className="text-sm text-gray-600">
                  KELO tokens for on-time payments
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Demo Section */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Try the Agent</h2>
              <XMTPChatAgent />
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Available Commands</h2>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">💳 BNPL Purchase</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-2">
                      /buy iPhone 15 KSh 120000 3x
                    </code>
                    <p className="text-sm text-gray-600">Creates instant 0% interest loan</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">👥 Split Payment</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-2">
                      /split @alice @bob 60/40
                    </code>
                    <p className="text-sm text-gray-600">Group purchase with custom ratios</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">📱 M-Pesa Payment</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-2">
                      /pay KSh 15000
                    </code>
                    <p className="text-sm text-gray-600">Triggers STK Push for Kenyan users</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-2">📊 Loan Status</h4>
                    <code className="bg-gray-100 px-2 py-1 rounded text-sm block mb-2">
                      /status
                    </code>
                    <p className="text-sm text-gray-600">Check active loans and rewards</p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Smart Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">Bilingual reminders (English/Swahili)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">KELO token rewards for on-time payments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Auto-detection of Kenyan locale</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Group loan coordination</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Enhanced Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">XMTP Protocol</h4>
                  <p className="text-sm text-gray-600">
                    Secure messaging with command parsing
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Base Contracts</h4>
                  <p className="text-sm text-gray-600">
                    LoanManager, SplitPayments, RewardsDistributor
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">AgentKit + AI</h4>
                  <p className="text-sm text-gray-600">
                    Smart reminders with language detection
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">M-Pesa Integration</h4>
                  <p className="text-sm text-gray-600">
                    STK Push webhooks for repayments
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready for the Future of Chat Commerce?</h2>
            <p className="text-gray-600 mb-6">
              Experience BNPL, split payments, and micro-rewards all in secure messages
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                <ExternalLink className="h-4 w-4 mr-2" />
                Try on xmtp.chat
              </Button>
              <Button variant="outline">
                View on GitHub
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default XMTPDemo;
