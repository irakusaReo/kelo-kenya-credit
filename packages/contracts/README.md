
# Kelo Protocol Smart Contracts

## Deployment

1. **Install deps:**  
   `forge install openzeppelin/openzeppelin-contracts`
2. **Set your .env:**
   ```
   RPC_URL=<your testnet RPC>
   PRIVATE_KEY=<your deployer key>
   ```
3. **Set token addresses!**  
   In `deploy/DeployLoanManager.s.sol`, set the correct token addresses for the chain (see `TokenAddresses.sol` for placeholders).
4. **Deploy:**  
   `forge script deploy/DeployLoanManager.s.sol --rpc-url $RPC_URL --private-key $PRIVATE_KEY --broadcast`

## Testnet addresses to fill

- **Base Sepolia (testnet)**: Fill USDC/USDT
- **Arbitrum Sepolia (testnet)**: Fill USDC/USDT
- **Celo Alfajores (testnet)**: Fill cUSD

> Find the official testnet addresses in the relevant explorer or documentation.

## Notes
- Only pre-approved stablecoins are accepted per chain. You MUST change token addresses before deploying.
- KELO token (`IERC20Mintable`) must exist and the RewardsDistributor must have a minter role.

## TODO
- Add tests, further access control as needed.

