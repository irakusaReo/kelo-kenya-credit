
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Copy, Plus, Wallet, Check } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import EnhancedConnectWalletButton from '@/components/invest/EnhancedConnectWalletButton';

const WalletAddresses = () => {
  const { user } = useAuth();
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  // Mock wallet addresses - in real app this would come from user data
  const walletAddresses = user?.walletAddress ? [
    {
      id: 1,
      chain: user.chain || 'ethereum',
      address: user.walletAddress,
      wallet: user.wallet || 'metamask',
      balance: '1.25 ETH'
    }
  ] : [];

  const copyToClipboard = (address: string) => {
    navigator.clipboard.writeText(address);
    setCopiedAddress(address);
    setTimeout(() => setCopiedAddress(null), 2000);
  };

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const getChainName = (chain: string) => {
    const chainNames: { [key: string]: string } = {
      ethereum: 'Ethereum',
      solana: 'Solana',
      base: 'Base',
      arbitrum: 'Arbitrum',
      avalanche: 'Avalanche',
      celo: 'Celo',
      starknet: 'StarkNet',
      aptos: 'Aptos',
      sui: 'Sui'
    };
    return chainNames[chain] || chain;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
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

      <div className="p-4 space-y-4">
        {/* Connected Wallets */}
        {walletAddresses.length > 0 ? (
          <div className="space-y-3">
            <h2 className="text-lg font-semibold">Connected Wallets</h2>
            {walletAddresses.map((wallet) => (
              <Card key={wallet.id}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-kelo-blue/10 rounded-lg flex items-center justify-center">
                        <Wallet className="w-5 h-5 text-kelo-blue" />
                      </div>
                      <div>
                        <p className="font-medium">{getChainName(wallet.chain)}</p>
                        <p className="text-sm text-gray-600">{formatAddress(wallet.address)}</p>
                        <p className="text-xs text-gray-500 capitalize">{wallet.wallet} Wallet</p>
                      </div>
                    </div>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => copyToClipboard(wallet.address)}
                      className="h-10 w-10"
                    >
                      {copiedAddress === wallet.address ? (
                        <Check size={16} className="text-green-500" />
                      ) : (
                        <Copy size={16} />
                      )}
                    </Button>
                  </div>
                  {wallet.balance && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-sm text-gray-600">Balance: <span className="font-medium">{wallet.balance}</span></p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No Wallets Connected</h3>
              <p className="text-gray-600 mb-6">Connect your crypto wallet to start investing and managing your digital assets.</p>
            </CardContent>
          </Card>
        )}

        {/* Connect New Wallet */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus size={20} />
              <span>Connect New Wallet</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">Add a new wallet to access more investment opportunities across different blockchains.</p>
            <EnhancedConnectWalletButton 
              className="w-full"
              onConnect={(address, chain, wallet) => {
                console.log('New wallet connected:', { address, chain, wallet });
                // This would update the user's wallet addresses in real app
              }}
            >
              <Plus className="mr-2 h-4 w-4" />
              Connect Wallet
            </EnhancedConnectWalletButton>
          </CardContent>
        </Card>

        {/* Info Card */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-medium text-blue-900 mb-2">Why Connect Multiple Wallets?</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Access investment pools across different blockchains</li>
              <li>• Diversify your crypto portfolio</li>
              <li>• Take advantage of the best yields available</li>
              <li>• Seamless cross-chain investing</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default WalletAddresses;
