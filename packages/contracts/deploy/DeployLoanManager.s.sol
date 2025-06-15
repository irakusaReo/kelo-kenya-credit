
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../contracts/LoanManager.sol";
import "../contracts/RewardsDistributor.sol";

/// @notice Deployment script for LoanManager and RewardsDistributor
/// @dev Use Foundry/forge. See README for filling in correct addresses.
contract DeployLoanRewardScript is Script {
    function setUp() public {}

    function run() external {
        // NOTE: SET THE ENV VARS for RPC URL and PRIVATE KEY before running!
        address[] memory tokens = new address[](1);
        // Example: use USDC for target testnet. FILL with TokenAddresses.* for actual deploy.
        tokens[0] = address(0x0000000000000000000000000000000000000000); // <<< FILL BEFORE DEPLOY

        vm.startBroadcast();
        LoanManager lm = new LoanManager(tokens);
        RewardsDistributor rd = new RewardsDistributor(address(0x0000000000000000000000000000000000000000)); // <<< KELO token address here
        vm.stopBroadcast();
    }
}
