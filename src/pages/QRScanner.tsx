
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Camera, QrCode, AlertCircle, CheckCircle } from 'lucide-react';

const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const startScanning = () => {
    setIsScanning(true);
    setError(null);
    // Simulate camera access and scanning
    setTimeout(() => {
      // Mock successful scan
      setScanResult('MERCHANT_CODE_12345');
      setIsScanning(false);
    }, 2000);
  };

  const resetScanner = () => {
    setScanResult(null);
    setError(null);
    setIsScanning(false);
  };

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
          <h1 className="text-xl font-semibold">Scan QR Code</h1>
        </div>
      </div>

      <div className="p-4 space-y-6">
        {/* Scanner Area */}
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              {!isScanning && !scanResult && (
                <>
                  <div className="w-32 h-32 bg-kelo-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <QrCode className="w-16 h-16 text-kelo-blue" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4">Scan to Pay</h2>
                  <p className="text-gray-600 mb-6">
                    Point your camera at the QR code to make a payment with Kelo
                  </p>
                  <Button 
                    className="w-full bg-kelo-blue hover:bg-kelo-blue/90"
                    onClick={startScanning}
                  >
                    <Camera className="mr-2 h-4 w-4" />
                    Start Scanning
                  </Button>
                </>
              )}

              {isScanning && (
                <>
                  <div className="w-32 h-32 bg-kelo-blue/10 rounded-full mx-auto mb-6 flex items-center justify-center animate-pulse">
                    <Camera className="w-16 h-16 text-kelo-blue" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4">Scanning...</h2>
                  <p className="text-gray-600 mb-6">
                    Hold your device steady and point it at the QR code
                  </p>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                    <div className="bg-kelo-blue h-2 rounded-full animate-pulse" style={{ width: '60%' }}></div>
                  </div>
                </>
              )}

              {scanResult && (
                <>
                  <div className="w-32 h-32 bg-green-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>
                  <h2 className="text-xl font-semibold mb-4">QR Code Detected!</h2>
                  <p className="text-gray-600 mb-2">Merchant Code:</p>
                  <p className="font-mono text-lg font-semibold mb-6">{scanResult}</p>
                  <div className="space-y-3">
                    <Button className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
                      Proceed to Payment
                    </Button>
                    <Button variant="outline" className="w-full" onClick={resetScanner}>
                      Scan Another Code
                    </Button>
                  </div>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h3 className="font-semibold text-blue-900 mb-2">How to Use QR Scanner</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>• Look for Kelo QR codes at participating merchants</li>
              <li>• Hold your phone steady when scanning</li>
              <li>• Ensure good lighting for best results</li>
              <li>• Complete your purchase with flexible payment options</li>
            </ul>
          </CardContent>
        </Card>

        {/* Supported Merchants */}
        <Card>
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3">Supported Merchants</h3>
            <div className="grid grid-cols-3 gap-3">
              {['Carrefour', 'Naivas', 'Quickmart', 'Java House', 'KFC', 'Uber Eats'].map((merchant) => (
                <div key={merchant} className="text-center p-2 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 bg-gray-200 rounded mx-auto mb-1"></div>
                  <p className="text-xs text-gray-600">{merchant}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default QRScanner;
