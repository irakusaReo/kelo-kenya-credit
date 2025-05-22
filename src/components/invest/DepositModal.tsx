
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight } from 'lucide-react';

interface Pool {
  id: string;
  symbol: string;
  name: string;
  logo: string;
  [key: string]: any;
}

interface DepositModalProps {
  isOpen: boolean;
  onClose: () => void;
  pool: Pool;
}

const DepositModal = ({ isOpen, onClose, pool }: DepositModalProps) => {
  const [step, setStep] = useState<'amount' | 'confirm' | 'processing' | 'complete'>('amount');
  const [amount, setAmount] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const resetAndClose = () => {
    setStep('amount');
    setAmount('');
    setTermsAccepted(false);
    onClose();
  };

  const handleNext = () => {
    if (step === 'amount') {
      setStep('confirm');
    } else if (step === 'confirm') {
      setStep('processing');
      // Simulate transaction processing
      setTimeout(() => {
        setStep('complete');
      }, 2000);
    } else if (step === 'complete') {
      resetAndClose();
    }
  };

  const handleBack = () => {
    if (step === 'confirm') {
      setStep('amount');
    }
  };

  const estimatedShares = parseFloat(amount) / 1.05; // Simple estimate for demo

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Deposit into {pool.name} Pool</DialogTitle>
          <DialogDescription>
            Supply assets to earn yield from BNPL loans and other strategies
          </DialogDescription>
        </DialogHeader>
        
        {step === 'amount' && (
          <>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-3 mb-2">
                <img src={pool.logo} alt={pool.symbol} className="w-8 h-8" />
                <div className="font-medium">{pool.symbol}</div>
              </div>
              
              <div className="grid gap-2">
                <Label htmlFor="amount">Amount to Deposit</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="text-sm text-right text-gray-500">
                  Available: 0 {pool.symbol}
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Estimated Gas Fee:</span>
                  <span>~$2.50</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bridging Fee (if applicable):</span>
                  <span>~$0.00</span>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={resetAndClose}>Cancel</Button>
              <Button 
                className="bg-kelo-blue hover:bg-kelo-blue/90" 
                onClick={handleNext}
                disabled={!amount || parseFloat(amount) <= 0}
              >
                Continue <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogFooter>
          </>
        )}
        
        {step === 'confirm' && (
          <>
            <div className="grid gap-4 py-4">
              <div className="p-4 bg-gray-50 rounded-md">
                <div className="flex justify-between mb-3">
                  <span className="text-gray-600">You deposit:</span>
                  <div className="font-medium">{amount} {pool.symbol}</div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">You receive:</span>
                  <div className="font-medium">~{estimatedShares.toFixed(6)} shares</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox 
                  id="terms" 
                  checked={termsAccepted} 
                  onCheckedChange={(checked) => setTermsAccepted(!!checked)}
                />
                <label 
                  htmlFor="terms" 
                  className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I acknowledge the risks involved and that past performance is not indicative of future results
                </label>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                className="bg-kelo-blue hover:bg-kelo-blue/90"
                onClick={handleNext}
                disabled={!termsAccepted}
              >
                Confirm Deposit
              </Button>
            </DialogFooter>
          </>
        )}
        
        {step === 'processing' && (
          <div className="py-8 flex flex-col items-center">
            <div className="w-12 h-12 border-4 border-kelo-blue border-t-transparent rounded-full animate-spin mb-4"></div>
            <h3 className="font-medium text-lg mb-2">Processing Transaction</h3>
            <p className="text-center text-gray-600">
              Please keep this window open until the transaction is complete
            </p>
          </div>
        )}
        
        {step === 'complete' && (
          <>
            <div className="py-6 flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-medium text-lg mb-2">Deposit Successful!</h3>
              <p className="text-center text-gray-600 mb-4">
                You have successfully deposited {amount} {pool.symbol} into the pool
              </p>
              <div className="p-4 bg-gray-50 rounded-md w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Transaction Hash:</span>
                  <a href="#" className="text-kelo-blue truncate max-w-[180px]">0x1234...5678</a>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shares Received:</span>
                  <span className="font-medium">{estimatedShares.toFixed(6)}</span>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button 
                className="bg-kelo-blue hover:bg-kelo-blue/90 w-full" 
                onClick={handleNext}
              >
                Close
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default DepositModal;
