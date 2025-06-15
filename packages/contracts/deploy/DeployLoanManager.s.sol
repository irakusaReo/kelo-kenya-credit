
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import "../contracts/LoanManager.sol";
import "../contracts/RewardsDistributor.sol";

// Deployment script for Foundry
contract DeployLoanRewardScript is Script {
    function setUp() public {}

    function run() external {
        // NOTE: Remember to set env vars for RPC URL and private key. See README.
        address[] memory tokens = new address[](1);
        // Example: use USDC address for the target testnet chain
        tokens[0] = address(0x0000000000000000000000000000000000000000); // <<<<<<<< Change this

        vm.startBroadcast();
        LoanManager lm = new LoanManager(tokens);
        RewardsDistributor rd = new RewardsDistributor(address(0x0000000000000000000000000000000000000000)); // <<<< KELO token address here
        vm.stopBroadcast();
    }
}
