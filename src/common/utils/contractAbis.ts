
/**
 * Centralizes smart contract ABIs and available addresses per chain.
 * Update addresses after each deployment!
 */
export const LOAN_MANAGER_ABI = [
  // Minimal ABI for read/write demonstration
  {
    "inputs": [
      { "internalType": "address", "name": "to", "type": "address" },
      { "internalType": "address", "name": "token", "type": "address" },
      { "internalType": "uint256", "name": "principal", "type": "uint256" },
      { "internalType": "uint8", "name": "installments", "type": "uint8" }
    ],
    "name": "issueLoan",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "loanId", "type": "uint256" }],
    "name": "loans",
    "outputs": [
      { "internalType": "address", "name": "borrower", "type": "address" },
      { "internalType": "address", "name": "token", "type": "address" },
      { "internalType": "uint256", "name": "principal", "type": "uint256" },
      { "internalType": "uint256", "name": "repaid", "type": "uint256" },
      { "internalType": "uint8", "name": "installments", "type": "uint8" },
      { "internalType": "uint8", "name": "installmentsPaid", "type": "uint8" },
      { "internalType": "bool", "name": "active", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  }
  // Extend ABI with other methods/events as needed
];

// Update these after deployment on each chain:
export const LOAN_MANAGER_ADDRESSES: Record<string, string> = {
  base_sepolia: "0x000...000",      // TODO: Fill in after deploy
  arbitrum_sepolia: "0x000...000",  // TODO: Fill in after deploy
  celo_alfajores: "0x000...000",    // TODO: Fill in after deploy
};

