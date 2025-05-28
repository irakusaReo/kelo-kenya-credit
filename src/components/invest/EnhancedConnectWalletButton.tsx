
import React, { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Wallet } from 'lucide-react';
import { SupportedChain, SupportedWallet } from '@/contexts/AuthContext';

interface EnhancedConnectWalletButtonProps extends ButtonProps {
  onConnect?: (address: string, chain: SupportedChain, wallet: SupportedWallet) => void;
}

const SUPPORTED_WALLETS: { value: SupportedWallet; label: string; logo: string; defaultChain: SupportedChain }[] = [
  { value: 'metamask', label: 'MetaMask', logo: '/assets/metamask-logo.svg', defaultChain: 'base' },
  { value: 'phantom', label: 'Phantom', logo: '/assets/phantom-logo.svg', defaultChain: 'solana' },
  { value: 'coinbase', label: 'Coinbase Wallet', logo: '/assets/coinbase-logo.svg', defaultChain: 'base' },
  { value: 'argent', label: 'Argent', logo: '/assets/argent-logo.svg', defaultChain: 'starknet' },
  { value: 'petra', label: 'Petra Wallet', logo: '/assets/petra-logo.svg', defaultChain: 'aptos' },
  { value: 'brave', label: 'Brave Wallet', logo: '/assets/brave-logo.svg', defaultChain: 'base' },
];

const EnhancedConnectWalletButton = ({ 
  onConnect, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}: EnhancedConnectWalletButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);

  const mockWalletConnect = async (wallet: SupportedWallet, chain: SupportedChain) => {
    setIsConnecting(true);
    
    setTimeout(() => {
      let mockAddress: string;
      
      switch (chain) {
        case 'solana':
          mockAddress = Array(44).fill(0).map(() => 
            'ABCDEFGHJKMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789'[Math.floor(Math.random() * 58)]
          ).join('');
          break;
        case 'starknet':
          mockAddress = '0x' + Array(63).fill(0).map(() => 
            Math.floor(Math.random() * 16).toString(16)
          ).join('');
          break;
        default:
          mockAddress = '0x' + Array(40).fill(0).map(() => 
            Math.floor(Math.random() * 16).toString(16)
          ).join('');
      }
      
      console.log('Wallet connected:', { address: mockAddress, chain, wallet });
      if (onConnect) {
        onConnect(mockAddress, chain, wallet);
      }
      setIsConnecting(false);
      setIsOpen(false);
    }, 1500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          className={variant === 'default' ? 'bg-kelo-primary hover:bg-kelo-primary/90' : ''}
          variant={variant}
          size={size}
          {...props}
        >
          <Wallet className="mr-2 h-5 w-5" />
          {children || 'Connect Wallet'}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect Your Wallet</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          {SUPPORTED_WALLETS.map((wallet) => (
            <Button
              key={wallet.value}
              onClick={() => mockWalletConnect(wallet.value, wallet.defaultChain)}
              disabled={isConnecting}
              variant="outline"
              className="w-full justify-start h-12"
            >
              <img 
                src={wallet.logo} 
                alt={wallet.label} 
                className="w-6 h-6 mr-3" 
                onError={(e) => {
                  // Fallback to emoji if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const span = document.createElement('span');
                  span.className = 'text-2xl mr-3';
                  span.textContent = wallet.value === 'metamask' ? '🦊' : 
                                   wallet.value === 'phantom' ? '👻' :
                                   wallet.value === 'coinbase' ? '🔵' :
                                   wallet.value === 'argent' ? '🛡️' :
                                   wallet.value === 'petra' ? '🪨' : '🦁';
                  target.parentNode?.insertBefore(span, target);
                }}
              />
              <span className="font-medium">{wallet.label}</span>
            </Button>
          ))}
          {isConnecting && (
            <div className="text-center text-sm text-gray-500 mt-4">
              Connecting wallet...
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedConnectWalletButton;
