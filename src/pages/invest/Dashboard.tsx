
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import EnhancedConnectWalletButton from '@/components/invest/EnhancedConnectWalletButton';
import PortfolioSummary from '@/components/invest/PortfolioSummary';
import PortfolioPositions from '@/components/invest/PortfolioPositions';
import PortfolioChart from '@/components/invest/PortfolioChart';
import TransactionHistory from '@/components/invest/TransactionHistory';
import HarvestAlert from '@/components/invest/HarvestAlert';

const InvestorDashboard = () => {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  
  // Placeholder for demonstration - in real app this would come from wallet connection
  const handleWalletConnect = () => {
    setIsWalletConnected(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-gray-900">
      <Navbar />
      <main className="flex-grow section-padding bg-kelo-background dark:bg-gray-900 pb-20 md:pb-6">
        <div className="kelo-container max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-8">
            <h1 className="text-3xl font-bold text-foreground">Investor Dashboard</h1>
            {isWalletConnected && (
              <Link to="/invest" className="w-full sm:w-auto">
                <Button className="w-full sm:w-auto bg-kelo-blue hover:bg-kelo-blue/90">
                  View Pools
                </Button>
              </Link>
            )}
          </div>
          
          {!isWalletConnected ? (
            <Card className="mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
              <CardContent className="p-8 sm:p-12 flex flex-col items-center text-center">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Connect Wallet to View Your Portfolio</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-lg">
                  Connect your crypto wallet to view your investment positions, track performance, and manage your portfolio.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                  <EnhancedConnectWalletButton 
                    variant="default" 
                    size="lg" 
                    onConnect={handleWalletConnect}
                    className="w-full sm:w-auto"
                  />
                  <Link to="/invest" className="w-full sm:w-auto">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-gray-300 dark:border-gray-600">
                      View Pools
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <>
              <HarvestAlert 
                pendingYield={425.6} 
                harvestable={true}
                onHarvest={() => console.log('Harvesting yield')}
              />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <PortfolioSummary 
                  totalValue={58750}
                  totalYield={2340.50}
                  yieldPercentage={4.15}
                  positionCount={3}
                />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                <div className="lg:col-span-2">
                  <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-6 text-foreground">Portfolio Performance</h2>
                      <PortfolioChart />
                    </CardContent>
                  </Card>
                </div>
                <div>
                  <Card className="h-full bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                    <CardContent className="p-6">
                      <h2 className="text-xl font-semibold mb-4 text-foreground">Next Distributions</h2>
                      
                      <div className="space-y-4">
                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600 dark:text-gray-300">USDC Pool</span>
                            <span className="font-medium text-foreground">KES 120.50</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Estimated in</span>
                            <span className="text-kelo-blue">2 days, 5 hours</span>
                          </div>
                        </div>
                        
                        <div className="border-b border-gray-200 dark:border-gray-700 pb-4">
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600 dark:text-gray-300">WETH Pool</span>
                            <span className="font-medium text-foreground">KES 85.25</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Estimated in</span>
                            <span className="text-kelo-blue">4 days, 12 hours</span>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between mb-2">
                            <span className="text-gray-600 dark:text-gray-300">wSOL Pool</span>
                            <span className="font-medium text-foreground">KES 210.30</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-500 dark:text-gray-400">Estimated in</span>
                            <span className="text-kelo-blue">6 days, 8 hours</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              <Card className="mb-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 text-foreground">Your Positions</h2>
                  <PortfolioPositions />
                </CardContent>
              </Card>
              
              <Card className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-6 text-foreground">Transaction History</h2>
                  <Tabs defaultValue="all">
                    <TabsList className="mb-4 bg-gray-100 dark:bg-gray-700">
                      <TabsTrigger value="all" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600">All</TabsTrigger>
                      <TabsTrigger value="deposits" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600">Deposits</TabsTrigger>
                      <TabsTrigger value="withdrawals" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600">Withdrawals</TabsTrigger>
                      <TabsTrigger value="harvests" className="data-[state=active]:bg-white dark:data-[state=active]:bg-gray-600">Harvests</TabsTrigger>
                    </TabsList>
                    <TabsContent value="all">
                      <TransactionHistory />
                    </TabsContent>
                    <TabsContent value="deposits">
                      <TransactionHistory type="deposit" />
                    </TabsContent>
                    <TabsContent value="withdrawals">
                      <TransactionHistory type="withdraw" />
                    </TabsContent>
                    <TabsContent value="harvests">
                      <TransactionHistory type="harvest" />
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default InvestorDashboard;
