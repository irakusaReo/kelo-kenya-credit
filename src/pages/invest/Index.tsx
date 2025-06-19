import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import PoolCard from '@/components/invest/PoolCard';
import ConnectWalletButton from '@/components/invest/ConnectWalletButton';
import { pools, chainInfo } from '@/data/invest/pools';
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
              Supply crypto to Kelo's native chain vaults, fund vendor payouts instantly, and earn competitive yield from both traditional sources and BNPL interest.
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
                  <h3 className="font-semibold text-lg mb-2">Deposit Native Tokens</h3>
                  <p className="text-gray-600">Choose a pool and deposit your native chain tokens without wrapping - no extra gas fees</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-kelo-blue bg-opacity-10 p-4 rounded-full mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-kelo-blue text-white rounded-full font-bold">2</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Earn Multi-source Yield</h3>
                  <p className="text-gray-600">Your deposits earn yield from both native chain staking and BNPL interest payments</p>
                </div>
                <div className="flex flex-col items-center text-center">
                  <div className="bg-kelo-blue bg-opacity-10 p-4 rounded-full mb-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-kelo-blue text-white rounded-full font-bold">3</div>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Withdraw Anytime</h3>
                  <p className="text-gray-600">Redeem your xKELO receipt tokens anytime, on any supported chain</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Omnichain Architecture</h2>
              
              <Tabs defaultValue="overview">
                <TabsList className="mb-6">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="chains">Supported Chains</TabsTrigger>
                  <TabsTrigger value="roadmap">Roadmap</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview">
                  <div className="space-y-6">
                    <p className="text-gray-700">
                      Kelo's investment module uses an innovative "Native-home vaults + Omnichain control-plane" architecture that:
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Friction-free deposits</h3>
                        <p className="text-gray-600">No wrapping required - deposit native tokens directly from your wallet</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Composable liquidity</h3>
                        <p className="text-gray-600">Capital is accessible for BNPL payouts across any chain</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Capital efficiency</h3>
                        <p className="text-gray-600">Tokens stay on their native chain, earning local yield with minimal bridging risk</p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">Progressive rollout</h3>
                        <p className="text-gray-600">Starting with EVM chains, expanding to Solana, Aptos, and Sui</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="chains">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(chainInfo).map(([id, info]: [string, any]) => (
                      <div key={id} className="bg-white border rounded-lg overflow-hidden">
                        <div className="p-4 border-b flex items-center gap-3">
                          <img src={info.logo} alt={info.name} className="w-8 h-8" />
                          <h3 className="font-medium">{info.name}</h3>
                          <Badge className="ml-auto bg-green-100 text-green-800 hover:bg-green-100">Live</Badge>
                        </div>
                        <div className="p-4 space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Native Token</span>
                            <span>{info.nativeToken}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Vault Type</span>
                            <span>{info.vaultType}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Bridge</span>
                            <span>{info.bridgeProtocol || 'Native'}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Status</span>
                            <span className="uppercase text-green-600 font-medium">{info.launchPhase}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="roadmap">
                  <div className="space-y-6">
                    <div className="relative border-l-2 border-kelo-blue pl-6 pb-10">
                      <div className="absolute w-4 h-4 bg-kelo-blue rounded-full -left-[9px] top-0"></div>
                      <div className="mb-2">
                        <Badge className="bg-kelo-blue mb-2">Current Phase</Badge>
                        <h3 className="text-lg font-semibold">Multi-chain Live</h3>
                      </div>
                      <p className="text-gray-600 mb-2">All supported chains are now live with full functionality</p>
                      <p className="text-sm text-gray-500">Ethereum, Arbitrum, Avalanche, Solana, Aptos, Sui, Celo, Starknet</p>
                    </div>
                    
                    <div className="relative border-l-2 border-gray-300 pl-6 pb-10">
                      <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-lg font-semibold mb-2">Enhanced Features</h3>
                      <p className="text-gray-600 mb-2">Advanced portfolio management and analytics tools</p>
                      <p className="text-sm text-gray-500">Expected: Q2 2025</p>
                    </div>
                    
                    <div className="relative pl-6">
                      <div className="absolute w-4 h-4 bg-gray-300 rounded-full -left-[9px] top-0"></div>
                      <h3 className="text-lg font-semibold mb-2">v2</h3>
                      <p className="text-gray-600 mb-2">Algorithmic re-balancer & DAO treasury votes</p>
                      <p className="text-sm text-gray-500">Community decides target portfolio weights</p>
                      <p className="text-sm text-gray-500 mt-2">Expected: Q1 2026</p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
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
