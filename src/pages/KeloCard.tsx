
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, EyeOff, Copy, Plus, CreditCard } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const KeloCard = () => {
  const { user } = useAuth();
  const [showCardDetails, setShowCardDetails] = useState(false);
  
  // Mock card data - in real app this would come from user data
  const hasCard = true; // Change to false to show the create card flow
  
  const cardData = {
    number: '4532 1234 5678 9012',
    expiryDate: '12/26',
    cvv: '123',
    holderName: user?.name || 'Andre Aila Owano',
    balance: 'KES 125,450.00',
    creditLimit: 'KES 250,000.00',
    availableCredit: 'KES 124,550.00'
  };

  const formatCardNumber = (number: string) => {
    if (!showCardDetails) {
      return '**** **** **** ' + number.slice(-4);
    }
    return number;
  };

  if (!hasCard) {
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
            <h1 className="text-xl font-semibold">Kelo Card</h1>
          </div>
        </div>

        <div className="p-4 flex items-center justify-center min-h-[60vh]">
          <Card className="w-full max-w-sm">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-kelo-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-10 h-10 text-kelo-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Get Your Kelo Card</h2>
              <p className="text-gray-600 mb-6">
                Apply for a Kelo card to make purchases at partner stores and build your credit history.
              </p>
              <Button className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
                <Plus className="mr-2 h-4 w-4" />
                Apply for Card
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
          <h1 className="text-xl font-semibold">My Kelo Card</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Card Display */}
        <div className="relative">
          <Card className="bg-gradient-to-r from-kelo-blue to-purple-600 border-0 text-white overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-8">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-white/20 rounded-md flex items-center justify-center">
                    <CreditCard className="w-5 h-5" />
                  </div>
                  <span className="font-semibold">Kelo Card</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowCardDetails(!showCardDetails)}
                  className="text-white h-8 w-8"
                >
                  {showCardDetails ? <EyeOff size={16} /> : <Eye size={16} />}
                </Button>
              </div>
              
              <div className="mb-6">
                <p className="text-2xl font-mono tracking-wider mb-4">
                  {formatCardNumber(cardData.number)}
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-white/80 text-sm">Card Holder</p>
                    <p className="font-semibold">{cardData.holderName}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/80 text-sm">Expires</p>
                    <p className="font-semibold">
                      {showCardDetails ? cardData.expiryDate : '**/**'}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/10 rounded-full"></div>
              <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 rounded-full"></div>
            </CardContent>
          </Card>

          {/* Card Actions */}
          <div className="flex space-x-3 mt-4">
            <Button variant="outline" className="flex-1">
              <Copy className="mr-2 h-4 w-4" />
              Copy Details
            </Button>
            <Button variant="outline" className="flex-1">
              Freeze Card
            </Button>
          </div>
        </div>

        {/* Card Details */}
        {showCardDetails && (
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-4">Card Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">CVV</span>
                  <span className="font-mono">{cardData.cvv}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Card Type</span>
                  <span>Virtual Visa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Status</span>
                  <span className="text-green-600 font-medium">Active</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Balance Information */}
        <div className="grid grid-cols-1 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600 text-sm">Available Credit</p>
                  <p className="text-2xl font-bold text-green-600">{cardData.availableCredit}</p>
                </div>
                <div className="text-right">
                  <p className="text-gray-600 text-sm">Credit Limit</p>
                  <p className="text-lg font-semibold">{cardData.creditLimit}</p>
                </div>
              </div>
              <div className="mt-4">
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <p className="text-xs text-gray-500 mt-1 text-right">85% Available</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Link to="/transactions">
            <Button variant="outline" className="w-full h-16 flex flex-col">
              <span className="font-medium">Transaction</span>
              <span className="text-sm text-gray-600">History</span>
            </Button>
          </Link>
          <Link to="/statements">
            <Button variant="outline" className="w-full h-16 flex flex-col">
              <span className="font-medium">Download</span>
              <span className="text-sm text-gray-600">Statement</span>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default KeloCard;
