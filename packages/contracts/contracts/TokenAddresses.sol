
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

/// @title TokenAddresses
/// @notice Placeholder for stablecoin addresses per chain. REMOVE IN PROD!
contract TokenAddresses {
    // Base Sepolia (testnet)
    address public constant USDC_BASE = 0x0000000000000000000000000000000000000000; // <<< FILL BEFORE DEPLOY
    address public constant USDT_BASE = 0x0000000000000000000000000000000000000000; // Optional

    // Arbitrum Sepolia (testnet)
    address public constant USDC_ARB = 0x0000000000000000000000000000000000000000; // <<< FILL BEFORE DEPLOY
    address public constant USDT_ARB = 0x0000000000000000000000000000000000000000; // <<< FILL BEFORE DEPLOY

    // Celo Alfajores (testnet)
    address public constant cUSD_CELO = 0x0000000000000000000000000000000000000000; // <<< FILL BEFORE DEPLOY

    // NOTE: These are NOT used at runtime, just for offchain mapping!
}
