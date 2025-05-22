
export interface Pool {
  id: string;
  symbol: string;
  name: string;
  chain: string;
  chainId: number;
  decimals: number;
  address: string;
  poolAddress: string;
  tvl: number;
  baseAPY: number;
  bnplAPY: number;
  totalAPY: number;
  utilizationRate: number;
  riskScore: 1 | 2 | 3 | 4 | 5;
  logo: string;
  gradient: string;
}

export interface Strategy {
  id: string;
  name: string;
  type: string;
  allocation: number;
  currentYield: number;
  risk: string;
  description: string;
}

export interface HistoricalReturn {
  date: string;
  apy: number;
}
