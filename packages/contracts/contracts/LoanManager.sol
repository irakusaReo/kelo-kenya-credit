
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

/// @title Kelo LoanManager
/// @notice Handles BNPL loans in whitelisted stablecoins for supported chains.
/// @dev Only whitelisted tokens, onlyOwner for loan issuance, OpenZeppelin Ownable for upgrade safety.
contract LoanManager is Ownable {
    struct Loan {
        address borrower;
        address token; // Stablecoin address
        uint256 principal;
        uint256 repaid;
        uint8 installments;
        uint8 installmentsPaid;
        bool active;
    }

    uint256 public nextLoanId = 1;
    mapping(uint256 => Loan) public loans;

    mapping(address => bool) public acceptedTokens;

    event LoanIssued(uint256 indexed loanId, address indexed to, address token, uint256 principal, uint8 installments);
    event InstallmentPaid(uint256 indexed loanId, uint256 amount);

    /// @param tokens List of initial stablecoin token addresses (update for your chain)
    constructor(address[] memory tokens) {
        for (uint i = 0; i < tokens.length; i++) {
            acceptedTokens[tokens[i]] = true;
        }
    }

    // ADMIN ONLY
    function addAcceptedToken(address token) external onlyOwner {
        acceptedTokens[token] = true;
    }

    function removeAcceptedToken(address token) external onlyOwner {
        acceptedTokens[token] = false;
    }

    // LOAN LOGIC
    function issueLoan(address to, address token, uint256 principal, uint8 installments) external onlyOwner returns (uint256) {
        require(acceptedTokens[token], "Token not accepted");
        require(principal > 0 && installments > 0, "Zero value");
        require(to != address(0), "Invalid borrower");

        uint256 loanId = nextLoanId++;
        loans[loanId] = Loan({
            borrower: to,
            token: token,
            principal: principal,
            repaid: 0,
            installments: installments,
            installmentsPaid: 0,
            active: true
        });
        // Owner must have approved token for contract to transfer
        require(IERC20(token).transferFrom(owner(), to, principal), "Transfer failed");
        emit LoanIssued(loanId, to, token, principal, installments);
        return loanId;
    }

    function repayInstallment(uint256 loanId, uint256 amount) external {
        Loan storage loan = loans[loanId];
        require(loan.active, "Not active");
        require(msg.sender == loan.borrower, "Not borrower");
        require(amount > 0 && loan.repaid + amount <= loan.principal, "Invalid amount");

        // User must approve before calling this
        require(IERC20(loan.token).transferFrom(msg.sender, owner(), amount), "Transfer failed");
        loan.repaid += amount;
        loan.installmentsPaid += 1;
        emit InstallmentPaid(loanId, amount);
        if (loan.repaid >= loan.principal) {
            loan.active = false;
        }
    }
}
