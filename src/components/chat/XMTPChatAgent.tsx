
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, MessageSquare, Check, AlertCircle } from 'lucide-react';

// Temporarily removing XMTP and AgentKit imports to fix compiler issue
// import { Client } from '@xmtp/xmtp-js';
// import { AgentKit } from '@coinbase/agent-kit';

interface ChatMessage {
  id: string;
  sender: string;
  content: string;
  timestamp: Date;
  type: 'text' | 'bnpl-offer' | 'payment-request';
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

const XMTPChatAgent = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [inputValue, setInputValue] = useState('');

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
          content: 'Hi! I\'m the Kelo Agent. I can help you with Buy-Now-Pay-Later purchases. Try: "/buy iPhone 15 KSh 120000 3x"',
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

  // Parse slash commands for BNPL
  const parseSlashCommand = (message: string): BNPLOffer | null => {
    const buyRegex = /\/buy\s+(.+?)\s+KSh?\s*(\d+(?:,\d{3})*(?:\.\d{2})?)\s+(\d+)x?/i;
    const match = message.match(buyRegex);
    
    if (match) {
      const [, itemName, priceStr, installmentsStr] = match;
      const price = parseFloat(priceStr.replace(/,/g, ''));
      const installments = parseInt(installmentsStr);
      const monthlyAmount = Math.round(price / installments);
      
      return {
        itemName: itemName.trim(),
        price,
        terms: `${installments} monthly payments`,
        installments,
        monthlyAmount
      };
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

    // Check if it's a slash command
    const bnplOffer = parseSlashCommand(inputValue);
    
    if (bnplOffer) {
      // Simulate processing delay
      setTimeout(() => {
        const offerMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: `BNPL Offer Generated`,
          timestamp: new Date(),
          type: 'bnpl-offer',
          metadata: bnplOffer
        };
        setMessages(prev => [...prev, offerMessage]);
      }, 1000);
    } else {
      // Regular AI response
      setTimeout(() => {
        const aiResponse: ChatMessage = {
          id: (Date.now() + 1).toString(),
          sender: 'kelo.base',
          content: 'I can help you with BNPL purchases. Use "/buy [item] KSh [price] [installments]x" to get started!',
          timestamp: new Date(),
          type: 'text'
        };
        setMessages(prev => [...prev, aiResponse]);
      }, 500);
    }

    setInputValue('');
  };

  // Handle BNPL offer acceptance
  const handleAcceptOffer = async (offer: BNPLOffer) => {
    try {
      // Simulate contract interaction
      console.log('Creating loan on Base...', offer);
      
      const contractMessage: ChatMessage = {
        id: (Date.now() + 2).toString(),
        sender: 'kelo.base',
        content: `✅ Loan created! Contract: 0x...abc123\n\nFirst payment of KSh ${offer.monthlyAmount.toLocaleString()} due in 30 days.\n\nView on Base: https://basescan.org/tx/0x...`,
        timestamp: new Date(),
        type: 'text'
      };
      
      setMessages(prev => [...prev, contractMessage]);
    } catch (error) {
      console.error('Failed to create loan:', error);
    }
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

    return (
      <div className={`mb-3 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}>
        <div className={`inline-block max-w-[80%] p-3 rounded-lg ${
          message.sender === 'user' 
            ? 'bg-kelo-blue text-white' 
            : 'bg-gray-100 text-gray-900'
        }`}>
          <div className="text-sm">{message.content}</div>
          <div className="text-xs opacity-70 mt-1">
            {message.timestamp.toLocaleTimeString()}
          </div>
        </div>
      </div>
    );
  };

  return (
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
            placeholder="Try: /buy iPhone 15 KSh 120000 3x"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-kelo-blue"
          />
          <Button onClick={handleSendMessage} className="bg-kelo-blue hover:bg-kelo-blue/90">
            Send
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default XMTPChatAgent;
