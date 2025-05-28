
import React, { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Wallet } from 'lucide-react';
import { SupportedChain, SupportedWallet } from '@/contexts/AuthContext';

interface EnhancedConnectWalletButtonProps extends ButtonProps {
  onConnect?: (address: string, chain: SupportedChain, wallet: SupportedWallet) => void;
}

const SUPPORTED_CHAINS: { value: SupportedChain; label: string }[] = [
  { value: 'solana', label: 'Solana' },
  { value: 'base', label: 'Base' },
  { value: 'lisk', label: 'Lisk' },
  { value: 'avalanche', label: 'Avalanche' },
  { value: 'arbitrum', label: 'Arbitrum' },
  { value: 'celo', label: 'Celo' },
  { value: 'starknet', label: 'Starknet' },
  { value: 'aptos', label: 'Aptos' },
  { value: 'sui', label: 'Sui' },
];

const SUPPORTED_WALLETS: { value: SupportedWallet; label: string; chains: SupportedChain[] }[] = [
  { value: 'phantom', label: 'Phantom', chains: ['solana', 'base'] },
  { value: 'metamask', label: 'MetaMask', chains: ['base', 'avalanche', 'arbitrum', 'celo'] },
  { value: 'coinbase', label: 'Coinbase Wallet', chains: ['base', 'avalanche', 'arbitrum'] },
  { value: 'argent', label: 'Argent', chains: ['starknet'] },
  { value: 'petra', label: 'Petra Wallet', chains: ['aptos'] },
  { value: 'slush', label: 'Slush', chains: ['sui'] },
  { value: 'brave', label: 'Brave Wallet', chains: ['base', 'avalanche', 'arbitrum'] },
];

const EnhancedConnectWalletButton = ({ 
  onConnect, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}: EnhancedConnectWalletButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedChain, setSelectedChain] = useState<SupportedChain>('base');
  const [selectedWallet, setSelectedWallet] = useState<SupportedWallet>('metamask');
  const [isConnecting, setIsConnecting] = useState(false);

  const availableWallets = SUPPORTED_WALLETS.filter(wallet => 
    wallet.chains.includes(selectedChain)
  );

  const mockWalletConnect = async () => {
    setIsConnecting(true);
    
    // Mock wallet connection with chain-specific address format
    setTimeout(() => {
      let mockAddress: string;
      
      switch (selectedChain) {
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
      
      console.log('Wallet connected:', { address: mockAddress, chain: selectedChain, wallet: selectedWallet });
      if (onConnect) {
        onConnect(mockAddress, selectedChain, selectedWallet);
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
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Select Chain</label>
            <Select value={selectedChain} onValueChange={(value: SupportedChain) => {
              setSelectedChain(value);
              // Reset wallet selection if current wallet doesn't support the new chain
              const compatibleWallets = SUPPORTED_WALLETS.filter(w => w.chains.includes(value));
              if (!compatibleWallets.find(w => w.value === selectedWallet)) {
                setSelectedWallet(compatibleWallets[0]?.value || 'metamask');
              }
            }}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {SUPPORTED_CHAINS.map((chain) => (
                  <SelectItem key={chain.value} value={chain.value}>
                    {chain.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Select Wallet</label>
            <Select value={selectedWallet} onValueChange={(value: SupportedWallet) => setSelectedWallet(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {availableWallets.map((wallet) => (
                  <SelectItem key={wallet.value} value={wallet.value}>
                    {wallet.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button
            onClick={mockWalletConnect}
            disabled={isConnecting}
            className="w-full bg-kelo-primary hover:bg-kelo-primary/90"
          >
            {isConnecting ? 'Connecting...' : `Connect ${availableWallets.find(w => w.value === selectedWallet)?.label}`}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EnhancedConnectWalletButton;
