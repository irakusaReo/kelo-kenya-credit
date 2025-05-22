
import React from 'react';
import { Badge } from '@/components/ui/badge';

type TransactionType = 'deposit' | 'withdraw' | 'harvest' | undefined;

interface TransactionHistoryProps {
  type?: TransactionType;
}

// Mock transaction data
const mockTransactions = [
  {
    id: 'tx1',
    type: 'deposit',
    amount: 15000,
    symbol: 'USDC',
    pool: 'USD Coin',
    date: '2025-05-15',
    time: '14:32:45',
    status: 'completed',
    txHash: '0xabcd...1234'
  },
  {
    id: 'tx2',
    type: 'deposit',
    amount: 5000,
    symbol: 'WETH',
    pool: 'Wrapped Ethereum',
    date: '2025-05-10',
    time: '09:15:22',
    status: 'completed',
    txHash: '0xdef0...5678'
  },
  {
    id: 'tx3',
    type: 'withdraw',
    amount: 2500,
    symbol: 'USDC',
    pool: 'USD Coin',
    date: '2025-05-08',
    time: '16:45:11',
    status: 'completed',
    txHash: '0xffff...9876'
  },
  {
    id: 'tx4',
    type: 'harvest',
    amount: 325.75,
    symbol: 'USDC',
    pool: 'USD Coin',
    date: '2025-05-05',
    time: '00:05:32',
    status: 'completed',
    txHash: '0x1111...2222'
  },
  {
    id: 'tx5',
    type: 'withdraw',
    amount: 10000,
    symbol: 'WSOL',
    pool: 'Wrapped Solana',
    date: '2025-05-01',
    time: '11:22:43',
    status: 'pending',
    txHash: '0x3333...4444'
  },
];

const TransactionHistory = ({ type }: TransactionHistoryProps) => {
  const transactions = type 
    ? mockTransactions.filter(tx => tx.type === type)
    : mockTransactions;

  const getTypeColor = (txType: string): string => {
    switch (txType) {
      case 'deposit': return 'bg-green-100 text-green-800';
      case 'withdraw': return 'bg-blue-100 text-blue-800';
      case 'harvest': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="overflow-x-auto">
      {transactions.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          No transactions found
        </div>
      ) : (
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Type</th>
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Amount</th>
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Pool</th>
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Date & Time</th>
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Status</th>
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Transaction</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-3">
                  <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getTypeColor(tx.type)}`}>
                    {tx.type.charAt(0).toUpperCase() + tx.type.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-3">
                  <div className="font-medium">
                    {tx.type === 'deposit' ? '+' : tx.type === 'withdraw' ? '-' : '+'}{tx.amount.toLocaleString()} {tx.symbol}
                  </div>
                </td>
                <td className="py-4 px-3">
                  <div>{tx.pool}</div>
                </td>
                <td className="py-4 px-3">
                  <div>{new Date(tx.date).toLocaleDateString()}</div>
                  <div className="text-xs text-gray-500">{tx.time}</div>
                </td>
                <td className="py-4 px-3">
                  <Badge variant={tx.status === 'completed' ? 'default' : 'outline'}>
                    {tx.status.charAt(0).toUpperCase() + tx.status.slice(1)}
                  </Badge>
                </td>
                <td className="py-4 px-3">
                  <a 
                    href={`https://polygonscan.com/tx/${tx.txHash}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-kelo-blue hover:underline"
                  >
                    {tx.txHash.substring(0, 6)}...{tx.txHash.substring(tx.txHash.length - 4)}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default TransactionHistory;
