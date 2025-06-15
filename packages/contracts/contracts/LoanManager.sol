
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

// --- IMPORTS ---
import "@openzeppelin/contracts/access/Ownable.sol";

// Minimal ERC20 interface
interface IERC20 {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
}

// --- LOAN MANAGER ---
contract LoanManager is Ownable {
    struct Loan {
        address borrower;
        address token; // USDC/USDT/cUSD address
        uint256 principal;
        uint256 repaid;
        uint8 installments;
        uint8 installmentsPaid;
        bool active;
    }

    // --- STATE ---
    uint256 public nextLoanId = 1;
    mapping(uint256 => Loan) public loans;

    // Acceptable tokens per chain (update for production!)
    mapping(address => bool) public acceptedTokens;

    event LoanIssued(uint256 indexed loanId, address indexed to, address token, uint256 principal, uint8 installments);
    event InstallmentPaid(uint256 indexed loanId, uint256 amount);

    // --- CONSTRUCTOR ---
    constructor(address[] memory tokens) {
        for (uint i = 0; i < tokens.length; i++) {
            acceptedTokens[tokens[i]] = true;
        }
    }

    // --- ADMIN ONLY ---
    function addAcceptedToken(address token) external onlyOwner {
        acceptedTokens[token] = true;
    }

    function removeAcceptedToken(address token) external onlyOwner {
        acceptedTokens[token] = false;
    }

    // --- LOAN LOGIC ---
    function issueLoan(address to, address token, uint256 principal, uint8 installments) external onlyOwner returns (uint256) {
        require(acceptedTokens[token], "Token not accepted");
        require(principal > 0 && installments > 0, "Zero value");
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
        // Transfer principal to borrower
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
