
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title AdminRegistry
/// @notice Manages admins, merchants, and customer roles/gating for protocol.
contract AdminRegistry is Ownable {
    enum AccessRole { None, Customer, Merchant, Admin }

    mapping(address => AccessRole) public roles;

    event RoleGranted(address indexed user, AccessRole role);
    event RoleRevoked(address indexed user);

    function grantRole(address user, AccessRole role) external onlyOwner {
        require(user != address(0), "Zero address");
        roles[user] = role;
        emit RoleGranted(user, role);
    }

    function revokeRole(address user) external onlyOwner {
        require(user != address(0), "Zero address");
        roles[user] = AccessRole.None;
        emit RoleRevoked(user);
    }

    function getRole(address user) external view returns (AccessRole) {
        return roles[user];
    }
}
