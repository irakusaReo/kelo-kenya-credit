
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
import { ArrowRight, AlertCircle } from 'lucide-react';

interface Pool {
  id: string;
  symbol: string;
  name: string;
  logo: string;
  [key: string]: any;
}

interface WithdrawModalProps {
  isOpen: boolean;
  onClose: () => void;
  pool: Pool;
}

const WithdrawModal = ({ isOpen, onClose, pool }: WithdrawModalProps) => {
  const [step, setStep] = useState<'amount' | 'confirm' | 'processing' | 'complete'>('amount');
  const [amount, setAmount] = useState('');
  const [withdrawType, setWithdrawType] = useState<'standard' | 'emergency'>('standard');
  
  // For demonstration purposes
  const userShareBalance = 10.5;
  const shareValue = 1.05;
  const maxWithdraw = userShareBalance * shareValue;

  const resetAndClose = () => {
    setStep('amount');
    setAmount('');
    setWithdrawType('standard');
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

  const estimatedShares = parseFloat(amount) / shareValue; 

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && resetAndClose()}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Withdraw from {pool.name} Pool</DialogTitle>
          <DialogDescription>
            Withdraw your assets from the pool
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
                <Label htmlFor="amount">Amount to Withdraw</Label>
                <Input
                  id="amount"
                  type="number"
                  placeholder="0.00"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <div className="text-sm text-right text-gray-500 flex justify-between">
                  <span>Available:</span>
                  <div className="flex items-center gap-1">
                    <span>{maxWithdraw.toFixed(2)} {pool.symbol}</span>
                    <button 
                      className="text-xs text-kelo-blue"
                      onClick={() => setAmount(maxWithdraw.toString())}
                    >
                      MAX
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div 
                  className={`p-4 border rounded-md cursor-pointer ${
                    withdrawType === 'standard' ? 'border-kelo-blue bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setWithdrawType('standard')}
                >
                  <div className="font-medium">Standard Withdrawal</div>
                  <div className="text-sm text-gray-600">
                    3-day processing time, no additional fees
                  </div>
                </div>
                
                <div 
                  className={`p-4 border rounded-md cursor-pointer ${
                    withdrawType === 'emergency' ? 'border-kelo-blue bg-blue-50' : 'border-gray-200'
                  }`}
                  onClick={() => setWithdrawType('emergency')}
                >
                  <div className="flex items-center">
                    <span className="font-medium">Emergency Withdrawal</span>
                    <AlertCircle className="h-4 w-4 text-yellow-500 ml-1" />
                  </div>
                  <div className="text-sm text-gray-600">
                    Immediate processing, 2% additional fee
                  </div>
                </div>
              </div>
              
              <div className="p-3 bg-gray-50 rounded-md text-sm">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-600">Estimated Gas Fee:</span>
                  <span>~$3.20</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Withdrawal Fee:</span>
                  <span>
                    {withdrawType === 'emergency' 
                      ? `~${(parseFloat(amount || '0') * 0.02).toFixed(2)} ${pool.symbol}` 
                      : '0.00'}
                  </span>
                </div>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={resetAndClose}>Cancel</Button>
              <Button 
                className="bg-kelo-blue hover:bg-kelo-blue/90" 
                onClick={handleNext}
                disabled={!amount || parseFloat(amount) <= 0 || parseFloat(amount) > maxWithdraw}
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
                  <span className="text-gray-600">You withdraw:</span>
                  <div className="font-medium">{amount} {pool.symbol}</div>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Shares burned:</span>
                  <div className="font-medium">~{estimatedShares.toFixed(6)} shares</div>
                </div>
                {withdrawType === 'emergency' && (
                  <div className="flex justify-between mt-3 pt-3 border-t">
                    <span className="text-red-600">Emergency fee:</span>
                    <div className="font-medium text-red-600">
                      {(parseFloat(amount) * 0.02).toFixed(4)} {pool.symbol}
                    </div>
                  </div>
                )}
              </div>
              
              {withdrawType === 'standard' && (
                <div className="flex items-center p-3 bg-blue-50 text-blue-800 rounded-md">
                  <AlertCircle className="h-4 w-4 flex-shrink-0 mr-2" />
                  <span className="text-sm">
                    Standard withdrawals are processed within 72 hours to optimize pool liquidity
                  </span>
                </div>
              )}
              
              <div className="flex items-center space-x-2 mt-2">
                <Checkbox id="confirm" />
                <label 
                  htmlFor="confirm" 
                  className="text-sm text-gray-600 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I confirm this withdrawal and understand the associated fees and processing time
                </label>
              </div>
            </div>
            
            <DialogFooter>
              <Button variant="outline" onClick={handleBack}>Back</Button>
              <Button 
                className="bg-kelo-blue hover:bg-kelo-blue/90"
                onClick={handleNext}
              >
                Confirm Withdrawal
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
              <h3 className="font-medium text-lg mb-2">
                {withdrawType === 'standard' 
                  ? 'Withdrawal Request Submitted!' 
                  : 'Withdrawal Successful!'}
              </h3>
              <p className="text-center text-gray-600 mb-4">
                {withdrawType === 'standard'
                  ? `Your withdrawal of ${amount} ${pool.symbol} will be processed within 72 hours`
                  : `You have successfully withdrawn ${amount} ${pool.symbol} from the pool`}
              </p>
              <div className="p-4 bg-gray-50 rounded-md w-full">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Transaction Hash:</span>
                  <a href="#" className="text-kelo-blue truncate max-w-[180px]">0x1234...5678</a>
                </div>
                {withdrawType === 'standard' && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Expected Completion:</span>
                    <span className="font-medium">May 25, 2025</span>
                  </div>
                )}
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

export default WithdrawModal;
