
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title ContractStatusRegistry
/// @notice Tracks upgrade/maintenance status of protocol for admins and UI
contract ContractStatusRegistry is Ownable {
    enum Status { Active, Paused, Emergency, Upgrading }
    Status public contractStatus;

    event ContractStatusChanged(Status newStatus);

    function setStatus(Status newStatus) external onlyOwner {
        contractStatus = newStatus;
        emit ContractStatusChanged(newStatus);
    }

    function getStatus() external view returns (Status) {
        return contractStatus;
    }
}
