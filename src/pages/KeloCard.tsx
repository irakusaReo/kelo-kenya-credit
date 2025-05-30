
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, EyeOff, Copy, CreditCard, Calendar, Shield, Settings } from 'lucide-react';

const KeloCard = () => {
  const [showCardDetails, setShowCardDetails] = useState(false);
  const [hasCard, setHasCard] = useState(true); // Set to false to show "create card" state

  const cardDetails = {
    number: '4532 1234 5678 9012',
    holder: 'ANDRE AILA OWANO',
    expiry: '12/27',
    cvv: '123',
    creditLimit: 50000,
    availableCredit: 35000,
    nextPayment: 'Feb 15, 2025',
    nextAmount: 5200
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // Add toast notification here
  };

  if (!hasCard) {
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
            <h1 className="text-xl font-semibold">Kelo Card</h1>
          </div>
        </div>

        {/* Create Card Prompt */}
        <div className="p-4 flex items-center justify-center min-h-[70vh]">
          <Card className="max-w-md w-full">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-kelo-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CreditCard className="w-10 h-10 text-kelo-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Get Your Kelo Card</h2>
              <p className="text-gray-600 mb-6">
                Apply for your Kelo card to unlock flexible payment options and exclusive benefits.
              </p>
              <Button className="w-full bg-kelo-blue hover:bg-kelo-blue/90 mb-4">
                Apply for Kelo Card
              </Button>
              <p className="text-sm text-gray-500">
                Approval typically takes 2-3 business days
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Back Button */}
      <div className="bg-white border-b px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="ghost" size="icon">
                <ArrowLeft size={24} />
              </Button>
            </Link>
            <h1 className="text-xl font-semibold">My Kelo Card</h1>
          </div>
          <Button variant="ghost" size="icon">
            <Settings size={24} />
          </Button>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Card Display */}
        <div className="relative">
          <Card className="bg-gradient-to-r from-kelo-blue to-purple-600 text-white border-0 overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-semibold">Kelo Card</h3>
                  <p className="text-white/80 text-sm">Buy Now, Pay Later</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white"
                  onClick={() => setShowCardDetails(!showCardDetails)}
                >
                  {showCardDetails ? <EyeOff size={20} /> : <Eye size={20} />}
                </Button>
              </div>

              <div className="mb-6">
                <p className="text-white/80 text-sm mb-1">Card Number</p>
                <p className="text-xl font-mono">
                  {showCardDetails ? cardDetails.number : '•••• •••• •••• ••••'}
                </p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white/80 text-sm mb-1">Card Holder</p>
                  <p className="font-semibold">{cardDetails.holder}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/80 text-sm mb-1">Expires</p>
                  <p className="font-semibold">
                    {showCardDetails ? cardDetails.expiry : '••/••'}
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
            </CardContent>
          </Card>

          {/* Copy Card Details Button */}
          {showCardDetails && (
            <Button
              variant="outline"
              className="w-full mt-3"
              onClick={() => copyToClipboard(cardDetails.number)}
            >
              <Copy className="mr-2 h-4 w-4" />
              Copy Card Number
            </Button>
          )}
        </div>

        {/* Card Details */}
        {showCardDetails && (
          <Card>
            <CardContent className="p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">CVV</p>
                  <p className="font-semibold">{cardDetails.cvv}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Card Type</p>
                  <p className="font-semibold">Virtual Kelo Card</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Credit Information */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-4">Credit Information</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Credit Limit</span>
                <span className="font-semibold">KES {cardDetails.creditLimit.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Available Credit</span>
                <span className="font-semibold text-green-600">KES {cardDetails.availableCredit.toLocaleString()}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-kelo-blue h-2 rounded-full" 
                  style={{ width: `${((cardDetails.creditLimit - cardDetails.availableCredit) / cardDetails.creditLimit) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Payment */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-orange-600" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold">Next Payment Due</h3>
                <p className="text-sm text-gray-600">{cardDetails.nextPayment}</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-lg">KES {cardDetails.nextAmount.toLocaleString()}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Security */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-5 h-5 text-green-600" />
              <div>
                <h3 className="font-semibold">Security</h3>
                <p className="text-sm text-gray-600">Your card is protected with bank-level security</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Card Actions */}
        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline">
            Freeze Card
          </Button>
          <Button variant="outline">
            Card Settings
          </Button>
        </div>
      </div>
    </div>
  );
};

export default KeloCard;
