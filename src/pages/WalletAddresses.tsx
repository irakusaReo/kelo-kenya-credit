
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Wallet, Copy, Plus, Trash2 } from 'lucide-react';

const WalletAddresses = () => {
  const [wallets, setWallets] = useState([
    {
      id: 1,
      name: 'MetaMask Wallet',
      address: '0x742F35B...A8C9E4',
      type: 'Ethereum',
      connected: true
    },
    {
      id: 2,
      name: 'Trust Wallet',
      address: '0x8A7F2C1...B5D6F8',
      type: 'Binance Smart Chain',
      connected: false
    }
  ]);

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    // You could add a toast notification here
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center space-x-4">
          <Link to="/dashboard">
            <Button variant="ghost" size="icon">
              <ArrowLeft size={24} />
            </Button>
          </Link>
          <h1 className="text-xl font-semibold">Wallet Addresses</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Connect New Wallet Button */}
        <Button className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
          <Plus className="mr-2 h-4 w-4" />
          Connect New Wallet
        </Button>

        {/* Wallet List */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Connected Wallets</h2>
          
          {wallets.length > 0 ? (
            wallets.map((wallet) => (
              <Card key={wallet.id}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className="w-12 h-12 bg-kelo-blue/10 rounded-lg flex items-center justify-center">
                        <Wallet className="w-6 h-6 text-kelo-blue" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{wallet.name}</h3>
                        <p className="text-sm text-gray-600 mb-1">{wallet.type}</p>
                        <p className="text-sm font-mono text-gray-800">{wallet.address}</p>
                        <span className={`inline-block mt-2 px-2 py-1 rounded-full text-xs ${
                          wallet.connected 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-600'
                        }`}>
                          {wallet.connected ? 'Connected' : 'Disconnected'}
                        </span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => copyToClipboard(wallet.address)}
                      >
                        <Copy size={16} />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        className="text-red-600 border-red-200 hover:bg-red-50"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <Card>
              <CardContent className="p-8 text-center">
                <Wallet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No Wallets Connected</h3>
                <p className="text-gray-600 mb-4">Connect your first wallet to start using Kelo with crypto payments.</p>
                <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                  <Plus className="mr-2 h-4 w-4" />
                  Connect Your First Wallet
                </Button>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Information Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-900 mb-2">About Wallet Integration</h3>
            <p className="text-sm text-blue-800">
              Connect your crypto wallets to enable seamless payments and access exclusive BNPL offers for digital assets.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WalletAddresses;
