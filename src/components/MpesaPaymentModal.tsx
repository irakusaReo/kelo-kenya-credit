
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';

interface MpesaPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
}

const MpesaPaymentModal = ({ isOpen, onClose, onPaymentSuccess }: MpesaPaymentModalProps) => {
  const [status, setStatus] = useState<'sending' | 'waiting' | 'verifying' | 'success'>('sending');
  const [progress, setProgress] = useState(0);
  
  // Simulate payment flow
  useEffect(() => {
    if (!isOpen) return;
    
    // Reset states
    setStatus('sending');
    setProgress(10);
    
    // Simulate sending request to M-Pesa
    const sendingTimeout = setTimeout(() => {
      setStatus('waiting');
      setProgress(30);
    }, 2000);
    
    // Simulate waiting for user approval
    const waitingTimeout = setTimeout(() => {
      setStatus('verifying');
      setProgress(70);
    }, 5000);
    
    // Simulate payment success
    const successTimeout = setTimeout(() => {
      setStatus('success');
      setProgress(100);
      
      // Notify parent component
      setTimeout(() => {
        onPaymentSuccess();
      }, 1500);
    }, 7000);
    
    return () => {
      clearTimeout(sendingTimeout);
      clearTimeout(waitingTimeout);
      clearTimeout(successTimeout);
    };
  }, [isOpen, onPaymentSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>M-Pesa Payment</DialogTitle>
        </DialogHeader>
        
        <div className="py-4">
          <Progress value={progress} className="mb-6" />
          
          <div className="flex items-center justify-center py-4">
            <div className="text-center">
              {status === 'sending' && (
                <>
                  <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="animate-spin h-8 w-8 text-kelo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Sending request to M-Pesa</h3>
                  <p className="text-gray-600">Please wait while we connect to Safaricom...</p>
                </>
              )}
              
              {status === 'waiting' && (
                <>
                  <div className="h-16 w-16 mx-auto bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Check your phone</h3>
                  <p className="text-gray-600">
                    We've sent an M-Pesa payment request to your phone.<br />
                    Please enter your M-Pesa PIN to complete the transaction.
                  </p>
                </>
              )}
              
              {status === 'verifying' && (
                <>
                  <div className="h-16 w-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="animate-spin h-8 w-8 text-kelo-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Verifying payment</h3>
                  <p className="text-gray-600">Almost there! We're confirming your payment with Safaricom...</p>
                </>
              )}
              
              {status === 'success' && (
                <>
                  <div className="h-16 w-16 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium mb-2">Payment Successful!</h3>
                  <p className="text-gray-600">Your M-Pesa payment has been processed successfully.</p>
                </>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MpesaPaymentModal;
