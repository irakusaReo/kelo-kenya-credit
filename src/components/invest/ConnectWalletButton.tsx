
import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';

interface ConnectWalletButtonProps extends ButtonProps {
  onConnect?: () => void;
}

const ConnectWalletButton = ({ onConnect, variant = 'default', size = 'default', ...props }: ConnectWalletButtonProps) => {
  const handleClick = () => {
    console.log('Connect wallet clicked');
    if (onConnect) {
      onConnect();
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={variant === 'default' ? 'bg-kelo-blue hover:bg-kelo-blue/90' : ''}
      variant={variant}
      size={size}
      {...props}
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWalletButton;
