
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, QrCode, Camera, Flashlight } from 'lucide-react';

const QRScanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [flashOn, setFlashOn] = useState(false);

  const startScanning = () => {
    setIsScanning(true);
    // In a real app, this would access the camera API
    console.log('Starting QR code scanner...');
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-black/50 backdrop-blur absolute top-0 left-0 right-0 z-10">
        <Link to="/dashboard">
          <Button variant="ghost" size="icon" className="text-white">
            <ArrowLeft size={24} />
          </Button>
        </Link>
        <h1 className="text-lg font-semibold">Scan QR Code</h1>
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-white"
          onClick={() => setFlashOn(!flashOn)}
        >
          <Flashlight size={24} className={flashOn ? 'text-yellow-400' : ''} />
        </Button>
      </div>

      {!isScanning ? (
        <div className="flex items-center justify-center min-h-screen p-4">
          <Card className="w-full max-w-sm bg-white text-black">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-kelo-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <QrCode className="w-10 h-10 text-kelo-blue" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Scan & Pay</h2>
              <p className="text-gray-600 mb-6">
                Scan QR codes at partner stores to pay instantly with your Kelo account.
              </p>
              <Button 
                onClick={startScanning}
                className="w-full bg-kelo-blue hover:bg-kelo-blue/90"
              >
                <Camera className="mr-2 h-4 w-4" />
                Start Scanning
              </Button>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="relative min-h-screen">
          {/* Camera Viewfinder */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
            <div className="flex items-center justify-center min-h-screen">
              <div className="relative w-64 h-64">
                {/* QR Scanner Frame */}
                <div className="w-full h-full border-2 border-white rounded-lg relative">
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-4 border-l-4 border-kelo-blue rounded-tl-lg"></div>
                  <div className="absolute top-0 right-0 w-6 h-6 border-t-4 border-r-4 border-kelo-blue rounded-tr-lg"></div>
                  <div className="absolute bottom-0 left-0 w-6 h-6 border-b-4 border-l-4 border-kelo-blue rounded-bl-lg"></div>
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-4 border-r-4 border-kelo-blue rounded-br-lg"></div>
                  
                  {/* Scanning line animation */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="w-full h-0.5 bg-kelo-blue shadow-lg animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructions */}
          <div className="absolute bottom-20 left-0 right-0 p-4">
            <Card className="bg-black/70 backdrop-blur border-white/20">
              <CardContent className="p-4 text-center">
                <p className="text-white text-sm mb-3">
                  Position the QR code within the frame to scan
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setIsScanning(false)}
                  className="text-white border-white/30 hover:bg-white/10"
                >
                  Cancel Scan
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};

export default QRScanner;
