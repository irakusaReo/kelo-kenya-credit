
import { createPublicClient, http } from 'viem';
import { base, baseSepolia } from 'viem/chains';

export const BASE_CHAIN_CONFIG = {
  mainnet: {
    chain: base,
    rpcUrl: 'https://mainnet.base.org',
    explorerUrl: 'https://basescan.org'
  },
  testnet: {
    chain: baseSepolia,
    rpcUrl: 'https://sepolia.base.org',
    explorerUrl: 'https://sepolia.basescan.org'
  }
};

export const createBaseClient = (network: 'mainnet' | 'testnet' = 'testnet') => {
  const config = BASE_CHAIN_CONFIG[network];
  
  return createPublicClient({
    chain: config.chain,
    transport: http(config.rpcUrl)
  });
};

export const BASENAME_CONFIG = {
  registry: '0x4cCb0BB02FCABA27e82a56646E81d8c5bC4119a5', // Base Name Registry
  resolver: '0xC6d566A56A1aFf6508b41f6c90ff131615583BCD', // Base Name Resolver
  kelo: 'kelo.base' // Our registered basename
};

// Helper to format Base transaction URLs
export const getBaseTxUrl = (txHash: string, network: 'mainnet' | 'testnet' = 'testnet') => {
  const explorerUrl = BASE_CHAIN_CONFIG[network].explorerUrl;
  return `${explorerUrl}/tx/${txHash}`;
};

export const getBaseAddressUrl = (address: string, network: 'mainnet' | 'testnet' = 'testnet') => {
  const explorerUrl = BASE_CHAIN_CONFIG[network].explorerUrl;
  return `${explorerUrl}/address/${address}`;
};
