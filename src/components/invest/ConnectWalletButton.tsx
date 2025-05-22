
import React, { useState } from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Wallet } from 'lucide-react';

interface ConnectWalletButtonProps extends ButtonProps {
  onConnect?: (address: string) => void;
}

const ConnectWalletButton = ({ 
  onConnect, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}: ConnectWalletButtonProps) => {
  const [isConnecting, setIsConnecting] = useState(false);
  
  const mockWalletConnect = () => {
    setIsConnecting(true);
    
    // Mock wallet connection - in a real app, this would use a provider like MetaMask
    setTimeout(() => {
      const mockAddress = '0x' + Array(40).fill(0).map(() => 
        Math.floor(Math.random() * 16).toString(16)
      ).join('');
      
      console.log('Connect wallet clicked, address:', mockAddress);
      if (onConnect) {
        onConnect(mockAddress);
      }
      setIsConnecting(false);
    }, 1000);
  };

  return (
    <Button
      onClick={mockWalletConnect}
      className={variant === 'default' ? 'bg-kelo-blue hover:bg-kelo-blue/90' : ''}
      variant={variant}
      size={size}
      disabled={isConnecting}
      {...props}
    >
      <Wallet className="mr-2 h-5 w-5" />
      {children || (isConnecting ? 'Connecting...' : 'Connect Wallet')}
    </Button>
  );
};

export default ConnectWalletButton;
