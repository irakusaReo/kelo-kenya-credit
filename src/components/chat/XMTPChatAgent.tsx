
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, MessageSquare, Check, AlertCircle, Users, Smartphone, Gift } from 'lucide-react';
import MpesaPaymentModal from '@/components/MpesaPaymentModal';

// Temporarily removing XMTP and AgentKit imports to fix compiler issue
// import { Client } from '@xmtp/xmtp-js';
// import { AgentKit } from '@coinbase/agent-kit';

interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'bnpl-offer' | 'split-payment' | 'mpesa-payment' | 'status' | 'rewards';
  metadata?: any;
}

interface BNPLOffer {
  itemName: string;
  price: number;
  terms: string;
  installments: number;
  monthlyAmount: number;
  contractAddress?: string;
}

interface SplitPayment {
  users: string[];
  ratios: number[];
  message: string;
  totalUsers: number;
}

const XMTPChatAgent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showMpesaModal, setShowMpesaModal] = useState(false);

  // Initialize agent (simplified for demo)
  useEffect(() => {
    const initializeAgent = async () => {
      try {
        console.log('Initializing chat agent...');
        
        setIsConnected(true);
        
        // Add welcome message
        const welcomeMessage: ChatMessage = {
          id: '1',
          sender: 'kelo.base',
          content: 'Jambo! I\'m the Kelo Agent. I can help you with:\n\n💳 "/buy iPhone 15 KSh 120000 3x" - BNPL purchases\n👥 "/split @alice @bob 60/40" - Split payments\n📱 "/pay KSh 5000" - M-Pesa payments\n📊 "/status" - Check loan status',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages([welcomeMessage]);
      } catch (error) {
        console.error('Failed to initialize agent:', error);
      }
    };

    initializeAgent();
  }, []);

  // Parse different command types
  const parseCommand = (message: string) => {
    const patterns = {
      buy: /\/buy\s+(.+?)\s+KSh?\s*(\d+(?:,\d{3})*(?:\.\d{2})?)\s+(\d+)x?/i,
      split: /\/split\s+(@\w+(?:\s+@\w+)*)\s+(\d+(?:\/\d+)*)/i,
      pay: /\/pay\s+KSh?\s*(\d+(?:,\d{3})*(?:\.\d{2})?)/i,
      status: /\/status/i
    };

    for (const [command, regex] of Object.entries(patterns)) {
      const match = message.match(regex);
      if (match) {
        return { command, matches: match };
      }
    }
    return null;
  };

  // Handle message sending
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      content: inputValue,
      timestamp: new Date(),
      type: 'text'
    };

    setMessages(prev => [...prev, userMessage]);

    const parsedCommand = parseCommand(inputValue);
    
    if (parsedCommand) {
      setTimeout(() => {
        handleCommandResponse(parsedCommand);
      }, 1000);
    } else {
      // Regular AI response
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: 'I can help you with BNPL purchases, split payments, M-Pesa integration, and loan status. Try using one of the slash commands!',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 500);
    }

    setInputValue('');
  };

  const handleCommandResponse = (parsedCommand: any) => {
    const { command, matches } = parsedCommand;

    switch (command) {
      case 'buy':
        const [, itemName, priceStr, installmentsStr] = matches;
        const price = parseFloat(priceStr.replace(/,/g, ''));
        const installments = parseInt(installmentsStr);
        
        const offerMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: 'BNPL Offer Generated',
          timestamp: new Date(),
          type: 'bnpl-offer',
          metadata: {
            itemName: itemName.trim(),
            price,
            installments,
            monthlyAmount: Math.round(price / installments),
            terms: `${installments} monthly payments`,
            interestRate: 0
          }
        };
        setMessages(prev => [...prev, offerMessage]);
        break;

      case 'split':
        const [, usersStr, ratiosStr] = matches;
        const users = usersStr.split(/\s+/).filter((u: string) => u.startsWith('@'));
        const ratios = ratiosStr.split('/').map((r: string) => parseInt(r));
        
        const splitMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: 'Split Payment Setup',
          timestamp: new Date(),
          type: 'split-payment',
          metadata: { users, ratios, totalUsers: users.length }
        };
        setMessages(prev => [...prev, splitMessage]);
        break;

      case 'pay':
        const [, amountStr] = matches;
        const amount = parseFloat(amountStr.replace(/,/g, ''));
        
        const paymentMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: 'M-Pesa Payment Request',
          timestamp: new Date(),
          type: 'mpesa-payment',
          metadata: { amount }
        };
        setMessages(prev => [...prev, paymentMessage]);
        break;

      case 'status':
        const statusMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: 'Loan Status',
          timestamp: new Date(),
          type: 'status',
          metadata: {
            activeLoans: 2,
            nextPayment: 'KSh 15,000 due in 5 days',
            rewardsEarned: 'KELO 250 tokens'
          }
        };
        setMessages(prev => [...prev, statusMessage]);
        break;
    }
  };

  // Handle BNPL offer acceptance
  const handleAcceptOffer = async (offer: BNPLOffer) => {
    try {
      console.log('Creating loan on Base...', offer);
      
      const contractMessage: ChatMessage = {
        id: (Date.now() + 2).toString(),
        sender: 'kelo.base',
        content: `✅ Loan created! Contract: 0x...abc123\n\nFirst payment of KSh ${offer.monthlyAmount.toLocaleString()} due in 30 days.\n\nView on Base: https://basescan.org/tx/0x...`,
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, contractMessage]);

      // Add rewards notification
      setTimeout(() => {
        const rewardsMessage: ChatMessage = {
          id: (Date.now() + 3).toString(),
          sender: 'kelo.base',
          content: '🎁 Congratulations! You\'ve earned 50 KELO tokens for completing your first loan setup!',
          timestamp: new Date(),
          type: 'rewards'
        };
        setMessages(prev => [...prev, rewardsMessage]);
      }, 2000);
    } catch (error) {
      console.error('Failed to create loan:', error);
    }
  };

  const handleSplitPaymentSetup = (splitData: SplitPayment) => {
    const confirmMessage: ChatMessage = {
      id: (Date.now() + 2).toString(),
      sender: 'kelo.base',
      content: `✅ Split payment configured!\n\n${splitData.users.map((user, i) => `${user}: ${splitData.ratios[i]}%`).join('\n')}\n\nInvitations sent to all participants. They'll receive notifications for their payment obligations.`,
      timestamp: new Date(),
      type: 'text'
    };
    setMessages(prev => [...prev, confirmMessage]);
  };

  const renderMessage = (message: ChatMessage) => {
    if (message.type === 'bnpl-offer' && message.metadata) {
      const offer = message.metadata as BNPLOffer;
      return (
        <Card className="mb-4 border-kelo-blue">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Wallet className="h-5 w-5" />
              BNPL Offer Ready
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{offer.itemName}</h4>
                  <p className="text-sm text-gray-600">Total: KSh {offer.price.toLocaleString()}</p>
                </div>
                <Badge variant="secondary">{offer.terms}</Badge>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between text-sm">
                  <span>Monthly payment:</span>
                  <span className="font-medium">KSh {offer.monthlyAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Number of payments:</span>
                  <span className="font-medium">{offer.installments}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Interest rate:</span>
                  <span className="font-medium">0%</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button 
                  onClick={() => handleAcceptOffer(offer)}
                  className="flex-1 bg-kelo-blue hover:bg-kelo-blue/90"
                >
                  <Check className="h-4 w-4 mr-2" />
                  Accept Offer
                </Button>
                <Button variant="outline" className="flex-1">
                  Decline
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (message.type === 'split-payment' && message.metadata) {
      const splitData = message.metadata as SplitPayment;
      return (
        <Card className="mb-4 border-purple-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Users className="h-5 w-5" />
              Split Payment Setup
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">Setting up group payment with {splitData.totalUsers} participants:</p>
              <div className="space-y-2">
                {splitData.users.map((user, i) => (
                  <div key={i} className="flex justify-between items-center bg-gray-50 p-2 rounded">
                    <span className="font-medium">{user}</span>
                    <Badge variant="outline">{splitData.ratios[i]}%</Badge>
                  </div>
                ))}
              </div>
              <Button 
                onClick={() => handleSplitPaymentSetup(splitData)}
                className="w-full bg-purple-600 hover:bg-purple-700"
              >
                <Users className="h-4 w-4 mr-2" />
                Confirm Split Setup
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (message.type === 'mpesa-payment' && message.metadata) {
      return (
        <Card className="mb-4 border-green-500">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              M-Pesa Payment
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <p className="text-sm text-gray-600">
                Amount: <span className="font-medium">KSh {message.metadata.amount.toLocaleString()}</span>
              </p>
              <p className="text-sm text-blue-600">
                💡 Kenyan locale detected - M-Pesa integration available
              </p>
              <Button 
                onClick={() => setShowMpesaModal(true)}
                className="w-full bg-green-600 hover:bg-green-700"
              >
                <Smartphone className="h-4 w-4 mr-2" />
                Pay with M-Pesa
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (message.type === 'status' && message.metadata) {
      return (
        <Card className="mb-4 border-blue-500">
          <CardContent className="p-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Active loans:</span>
                <span className="font-medium">{message.metadata.activeLoans}</span>
              </div>
              <div className="flex justify-between">
                <span>Next payment:</span>
                <span className="font-medium text-orange-600">{message.metadata.nextPayment}</span>
              </div>
              <div className="flex justify-between">
                <span>Rewards earned:</span>
                <span className="font-medium text-green-600">{message.metadata.rewardsEarned}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    }

    if (message.type === 'rewards') {
      return (
        <Card className="mb-4 border-yellow-500 bg-yellow-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-yellow-800">
              <Gift className="h-5 w-5" />
              {message.content}
            </div>
          </CardContent>
        </Card>
      );
    }

    return (
      <div className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
          message.sender === 'user' 
            ? 'bg-kelo-blue text-white' 
            : 'bg-gray-100 text-gray-900'
        }`}>
          <div className="text-sm whitespace-pre-line">{message.content}</div>
          <div className="text-xs opacity-70 mt-1">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Kelo Chat Agent
            {isConnected ? (
              <Badge variant="secondary" className="bg-green-100 text-green-800">
                Connected
              </Badge>
            ) : (
              <Badge variant="secondary" className="bg-red-100 text-red-800">
                Disconnected
              </Badge>
            )}
          </CardTitle>
        </CardHeader>
        
        <CardContent className="flex-1 flex flex-col p-4">
          <div className="flex-1 overflow-y-auto mb-4">
            {messages.map(message => (
              <div key={message.id}>
                {renderMessage(message)}
              </div>
            ))}
          </div>
          
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Try: /buy iPhone 15 KSh 120000 3x or /split @alice @bob 60/40"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kelo-blue"
            />
            <Button onClick={handleSendMessage} className="bg-kelo-blue hover:bg-kelo-blue/90">
              Send
            </Button>
          </div>
        </CardContent>
      </Card>

      <MpesaPaymentModal 
        isOpen={showMpesaModal}
        onClose={() => setShowMpesaModal(false)}
        onPaymentSuccess={() => {
          setShowMpesaModal(false);
          const successMessage: ChatMessage = {
            id: (Date.now() + 4).toString(),
            sender: 'kelo.base',
            content: '✅ M-Pesa payment successful! You\'ve earned 25 KELO tokens for on-time payment. Keep up your streak! 🔥',
            timestamp: new Date(),
            type: 'rewards'
          };
          setMessages(prev => [...prev, successMessage]);
        }}
      />
    </>
  );
};

export default XMTPChatAgent;
