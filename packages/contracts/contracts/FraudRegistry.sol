
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

/// @title FraudRegistry
/// @notice Allows reporting and review of suspicious activity.
contract FraudRegistry is Ownable {
    enum FraudStatus { Pending, Reviewed, Dismissed, Confirmed }

    struct FraudReport {
        address reporter;
        address suspect;
        string reason;
        uint256 timestamp;
        FraudStatus status;
    }

    FraudReport[] public fraudReports;

    event FraudReported(address indexed reporter, address indexed suspect, string reason, uint256 reportId);
    event FraudStatusUpdated(uint256 indexed reportId, FraudStatus newStatus);

    function reportFraud(address suspect, string calldata reason) external {
        fraudReports.push(FraudReport({
            reporter: msg.sender,
            suspect: suspect,
            reason: reason,
            timestamp: block.timestamp,
            status: FraudStatus.Pending
        }));
        emit FraudReported(msg.sender, suspect, reason, fraudReports.length - 1);
    }

    function updateFraudStatus(uint256 reportId, FraudStatus newStatus) external onlyOwner {
        require(reportId < fraudReports.length, "Invalid reportId");
        fraudReports[reportId].status = newStatus;
        emit FraudStatusUpdated(reportId, newStatus);
    }

    function getReport(uint256 reportId) external view returns (FraudReport memory) {
        require(reportId < fraudReports.length, "Invalid reportId");
        return fraudReports[reportId];
    }

    function getReportCount() external view returns (uint256) {
        return fraudReports.length;
    }
}
