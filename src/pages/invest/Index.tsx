
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import PoolCard from '@/components/invest/PoolCard';
import ConnectWalletButton from '@/components/invest/ConnectWalletButton';
import { pools } from '@/data/invest/pools';
import { Pool } from '@/types/invest';

const InvestLanding = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow section-padding bg-kelo-background">
        <div className="kelo-container max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl font-bold mb-4">Invest in Kelo Pools</h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Supply crypto to Kelo loan pools, fund vendor payouts instantly, and earn competitive yield from both traditional sources and BNPL interest.
            </p>
          </div>
          
          <div className="mb-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Start Investing</h2>
                <p className="text-gray-600">Connect your wallet to view your portfolio or make a deposit</p>
              </div>
              <ConnectWalletButton />
            </div>
          </div>
          
          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">Available Pools</h2>
              <Link to="/invest/dashboard">
                <Button variant="outline">View Portfolio</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pools.map((pool) => (
                <PoolCard key={pool.id} pool={pool as Pool} />
              ))}
            </div>
          </div>
          
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-kelo-blue bg-opacity-10 p-4 rounded-full mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-kelo-blue text-white rounded-full font-bold">1</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Deposit Crypto</h3>
                  <p className="text-gray-600">Choose a pool and deposit your crypto assets to start earning yield</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-kelo-blue bg-opacity-10 p-4 rounded-full mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-kelo-blue text-white rounded-full font-bold">2</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Fund BNPL Transactions</h3>
                  <p className="text-gray-600">Your deposits are used to pay vendors instantly when customers use Kelo BNPL</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-kelo-blue bg-opacity-10 p-4 rounded-full mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-kelo-blue text-white rounded-full font-bold">3</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Earn Yield</h3>
                  <p className="text-gray-600">Receive competitive returns from both traditional yield sources and BNPL interest</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="bg-kelo-blue rounded-lg p-8 text-white">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h2 className="text-2xl font-bold mb-2">Ready to start earning?</h2>
                <p className="opacity-90">Connect your wallet and make your first deposit today</p>
              </div>
              <ConnectWalletButton variant="secondary" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InvestLanding;
