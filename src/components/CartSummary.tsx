
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCartStore } from '@/stores/cartStore';

interface CartSummaryProps {
  onCheckout?: () => void;
  readOnly?: boolean;
}

const CartSummary = ({ onCheckout, readOnly = false }: CartSummaryProps) => {
  const { cart } = useCartStore();
  
  // Calculate totals
  const subtotal = cart.reduce((sum, item) => sum + (item.price * (item.quantity || 1)), 0);
  const processingFee = 350; // Fixed processing fee in KES
  const total = subtotal + processingFee;
  
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4">Order Summary</h3>
        
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Subtotal</span>
            <span>KES {subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Processing Fee</span>
            <span>KES {processingFee.toLocaleString()}</span>
          </div>
          <Separator className="my-2" />
          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>KES {total.toLocaleString()}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <h4 className="font-medium mb-2">Payment Plan</h4>
          <div className="bg-gray-50 p-3 rounded-lg">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">First payment today</span>
              <span className="font-medium">KES {Math.round(total / 3).toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">2 monthly payments</span>
              <span className="font-medium">KES {Math.round(total / 3).toLocaleString()}</span>
            </div>
          </div>
          <div className="mt-3 text-xs text-gray-500">
            *Default plan shown. Adjust at checkout.
          </div>
        </div>
      </CardContent>
      
      {!readOnly && (
        <CardFooter className="p-6 pt-0">
          <Button 
            className="w-full bg-kelo-blue hover:bg-kelo-blue/90" 
            onClick={onCheckout}
          >
            Proceed to Checkout
          </Button>
        </CardFooter>
      )}
    </Card>
  );
};

export default CartSummary;
