
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

/// @title Kelo RewardsDistributor
/// @notice Distributes KELO token rewards for user repayments/behavior.
/// @dev Must be given minter role on KELO token contract
contract RewardsDistributor is Ownable {
    IERC20Mintable public rewardsToken;

    /// @param _rewardsToken KELO Token address (update before deploy)
    constructor(address _rewardsToken) {
        rewardsToken = IERC20Mintable(_rewardsToken);
    }

    /// @notice Distribute rewards to a user
    /// @param to Recipient (user)
    /// @param amount Reward amount
    function distributeReward(address to, uint256 amount) external onlyOwner {
        require(to != address(0) && amount > 0, "Bad params");
        rewardsToken.mint(to, amount);
    }
}
