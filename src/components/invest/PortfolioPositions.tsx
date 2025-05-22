
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

// Mock data for demonstration
const positions = [
  {
    poolId: 'usdc-polygon',
    symbol: 'USDC',
    name: 'USD Coin',
    logo: '/assets/usdc-logo.svg',
    chainLogo: '/assets/polygon-logo.svg',
    shareBalance: '10,500.75',
    assetValue: 38250.55,
    initialDeposit: 36000,
    depositDate: '2025-04-15',
    unrealizedYield: 2250.55,
    realizedYield: 450.25,
    apy: 12.5
  },
  {
    poolId: 'weth-polygon',
    symbol: 'WETH',
    name: 'Wrapped Ethereum',
    logo: '/assets/eth-logo.svg',
    chainLogo: '/assets/polygon-logo.svg',
    shareBalance: '0.525',
    assetValue: 15750.25,
    initialDeposit: 15000,
    depositDate: '2025-05-01',
    unrealizedYield: 750.25,
    realizedYield: 0,
    apy: 9.0
  },
  {
    poolId: 'wsol-polygon',
    symbol: 'wSOL',
    name: 'Wrapped Solana',
    logo: '/assets/sol-logo.svg',
    chainLogo: '/assets/polygon-logo.svg',
    shareBalance: '12.58',
    assetValue: 4750.85,
    initialDeposit: 4500,
    depositDate: '2025-05-10',
    unrealizedYield: 250.85,
    realizedYield: 0,
    apy: 14.0
  }
];

const PortfolioPositions = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Pool</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Balance</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Value (KES)</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Unrealized Yield</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">APY</th>
            <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {positions.map((position) => (
            <tr key={position.poolId} className="border-b hover:bg-gray-50">
              <td className="py-4 px-3">
                <div className="flex items-center">
                  <div className="relative">
                    <img 
                      src={position.logo} 
                      alt={position.symbol}
                      className="w-8 h-8 rounded-full" 
                    />
                    <img 
                      src={position.chainLogo}
                      alt="Chain"
                      className="w-4 h-4 absolute -right-1 -bottom-1 rounded-full border border-white"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="font-medium">{position.symbol}</div>
                    <div className="text-xs text-gray-500">{position.name}</div>
                  </div>
                </div>
              </td>
              <td className="py-4 px-3 text-right">
                <div className="font-medium">{position.shareBalance}</div>
                <div className="text-xs text-gray-500">Shares</div>
              </td>
              <td className="py-4 px-3 text-right">
                <div className="font-medium">{position.assetValue.toLocaleString()}</div>
                <div className="text-xs text-gray-500">
                  {((position.assetValue / position.initialDeposit - 1) * 100).toFixed(2)}% gain
                </div>
              </td>
              <td className="py-4 px-3 text-right">
                <div className="font-medium text-green-600">
                  +{position.unrealizedYield.toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">
                  Since {new Date(position.depositDate).toLocaleDateString()}
                </div>
              </td>
              <td className="py-4 px-3 text-right">
                <div className="font-medium">{position.apy}%</div>
                <div className="text-xs text-gray-500">Current</div>
              </td>
              <td className="py-4 px-3 text-right">
                <Link to={`/invest/pool/${position.symbol.toLowerCase()}`}>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioPositions;
