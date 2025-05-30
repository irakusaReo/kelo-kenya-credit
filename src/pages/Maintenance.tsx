
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wrench, RefreshCw, Clock, AlertCircle } from 'lucide-react';

const Maintenance = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [countdown, setCountdown] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        if (prev <= 1) {
          window.location.reload();
          return 30;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardContent className="p-8 text-center">
          {/* Maintenance Icon */}
          <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Wrench className="w-10 h-10 text-orange-600" />
          </div>
          
          <h1 className="text-2xl font-bold mb-4">Under Maintenance</h1>
          <p className="text-gray-600 mb-6">
            We're currently performing scheduled maintenance to improve your Kelo experience. 
            We'll be back online shortly.
          </p>
          
          {/* Status Updates */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div className="text-left">
                <p className="font-medium text-blue-900 text-sm">Latest Update</p>
                <p className="text-blue-700 text-sm">
                  Upgrading payment processing systems for better performance
                </p>
                <p className="text-blue-600 text-xs mt-1">2 minutes ago</p>
              </div>
            </div>
          </div>
          
          {/* Auto-refresh countdown */}
          <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-6">
            <Clock className="w-4 h-4" />
            <span>Auto-refresh in {countdown} seconds</span>
          </div>
          
          <Button 
            onClick={handleRefresh}
            disabled={isRefreshing}
            className="w-full bg-kelo-blue hover:bg-kelo-blue/90"
          >
            {isRefreshing ? (
              <>
                <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                Refreshing...
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                Refresh Page
              </>
            )}
          </Button>
          
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-xs text-gray-500">
              For urgent matters, contact support at{' '}
              <a href="tel:+254700123456" className="text-kelo-blue">
                +254 700 123 456
              </a>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Maintenance;
