
// Base contract interfaces for BNPL on Base network
export interface LoanTerms {
  itemName: string;
  principal: bigint;
  installments: number;
  interestRate: number; // 0 for Kelo's 0% interest
  startDate: bigint;
  borrower: string;
}

export interface LoanStatus {
  id: string;
  borrower: string;
  principal: bigint;
  remainingBalance: bigint;
  installmentsPaid: number;
  totalInstallments: number;
  isActive: boolean;
  isDefaulted: boolean;
}

export const LOAN_MANAGER_ABI = [
  {
    "inputs": [
      {
        "name": "terms",
        "type": "tuple",
        "components": [
          {"name": "itemName", "type": "string"},
          {"name": "principal", "type": "uint256"},
          {"name": "installments", "type": "uint8"},
          {"name": "interestRate", "type": "uint16"},
          {"name": "startDate", "type": "uint256"},
          {"name": "borrower", "type": "address"}
        ]
      }
    ],
    "name": "createLoan",
    "outputs": [{"name": "loanId", "type": "uint256"}],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{"name": "loanId", "type": "uint256"}],
    "name": "getLoanStatus",
    "outputs": [
      {
        "name": "status",
        "type": "tuple",
        "components": [
          {"name": "id", "type": "string"},
          {"name": "borrower", "type": "address"},
          {"name": "principal", "type": "uint256"},
          {"name": "remainingBalance", "type": "uint256"},
          {"name": "installmentsPaid", "type": "uint8"},
          {"name": "totalInstallments", "type": "uint8"},
          {"name": "isActive", "type": "bool"},
          {"name": "isDefaulted", "type": "bool"}
        ]
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "name": "loanId", "type": "uint256"},
      {"indexed": true, "name": "borrower", "type": "address"},
      {"indexed": false, "name": "principal", "type": "uint256"},
      {"indexed": false, "name": "itemName", "type": "string"}
    ],
    "name": "LoanCreated",
    "type": "event"
  }
] as const;

export const REWARDS_DISTRIBUTOR_ABI = [
  {
    "inputs": [
      {"name": "recipient", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "mint",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
] as const;

// Contract addresses on Base (these would be deployed addresses)
export const BASE_CONTRACTS = {
  LOAN_MANAGER: "0x0000000000000000000000000000000000000000", // Placeholder
  REWARDS_DISTRIBUTOR: "0x0000000000000000000000000000000000000000", // Placeholder
  KELO_TOKEN: "0x0000000000000000000000000000000000000000" // Placeholder
} as const;
