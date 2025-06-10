
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
              Buy-Now-Pay-Later directly in your secure messages. Powered by XMTP, Base, and Coinbase AgentKit.
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
                <h3 className="font-medium mb-2">0% Interest</h3>
                <p className="text-sm text-gray-600">
                  No hidden fees, transparent pricing
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Shield className="h-8 w-8 text-green-500 mx-auto mb-3" />
                <h3 className="font-medium mb-2">Base Secured</h3>
                <p className="text-sm text-gray-600">
                  Smart contracts on Base network
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Globe className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <h3 className="font-medium mb-2">Kenya-First</h3>
                <p className="text-sm text-gray-600">
                  M-Pesa integration for local payments
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
              <h2 className="text-2xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-kelo-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Type Your Purchase</h4>
                        <p className="text-sm text-gray-600">
                          Use "/buy [item] KSh [price] [installments]x" in any XMTP chat
                        </p>
                        <code className="bg-gray-100 px-2 py-1 rounded text-xs mt-2 block">
                          /buy iPhone 15 KSh 120000 3x
                        </code>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-kelo-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Review & Accept</h4>
                        <p className="text-sm text-gray-600">
                          Agent generates instant BNPL terms with 0% interest
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-kelo-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">On-Chain Execution</h4>
                        <p className="text-sm text-gray-600">
                          Smart contract deployed on Base handles the loan lifecycle
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-kelo-blue text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">M-Pesa Repayments</h4>
                        <p className="text-sm text-gray-600">
                          Local payment integration for seamless repayments
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Technical Details */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Technical Architecture</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <h4 className="font-medium mb-2">XMTP Protocol</h4>
                  <p className="text-sm text-gray-600">
                    Secure, decentralized messaging with E2E encryption
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">Base Network</h4>
                  <p className="text-sm text-gray-600">
                    LoanManager & RewardsDistributor smart contracts
                  </p>
                </div>
                <div className="text-center">
                  <h4 className="font-medium mb-2">AgentKit</h4>
                  <p className="text-sm text-gray-600">
                    Coinbase's framework for on-chain AI agents
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience Chat Commerce?</h2>
            <p className="text-gray-600 mb-6">
              Join the future of BNPL with Kelo's chat-native agent
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
