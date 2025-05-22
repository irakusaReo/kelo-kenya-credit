
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
  receiptToken?: string; // xKELO token symbol
  nativeStaking?: string; // Type of native staking used
  bridgeProtocol?: string; // Cross-chain bridge used
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

export interface ChainInfo {
  name: string;
  logo: string;
  nativeToken: string;
  vaultType: string;
  isActive: boolean;
  launchPhase: 'alpha' | 'beta' | 'v1.1' | 'v1.2' | 'v2';
  estimatedLaunch?: string;
}
