
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20Mintable {
    function mint(address to, uint256 amount) external;
}

// KELO rewards: call mint() on rewards token (should have minter role)
contract RewardsDistributor is Ownable {
    IERC20Mintable public rewardsToken;

    constructor(address _rewardsToken) {
        rewardsToken = IERC20Mintable(_rewardsToken);
    }

    function distributeReward(address to, uint256 amount) external onlyOwner {
        require(to != address(0) && amount > 0, "Bad params");
        rewardsToken.mint(to, amount);
    }
}
