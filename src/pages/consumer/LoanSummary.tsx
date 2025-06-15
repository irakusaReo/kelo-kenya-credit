
import React, { useState } from "react";
import useLoanManager from "@/common/hooks/useLoanManager";

const LoanSummaryPage = () => {
  const [loanId, setLoanId] = useState<number>(1);
  const { useLoan } = useLoanManager(); // default: base_sepolia

  const { data: loan, error, isLoading } = useLoan(loanId);

  return (
    <div className="p-8 max-w-lg mx-auto bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-6">Loan Summary (On-Chain Demo)</h1>
      <div className="mb-4">
        <label className="font-semibold">Loan ID:</label>
        <input
          type="number"
          className="border rounded p-1 ml-2 w-16"
          value={loanId}
          min={1}
          onChange={e => setLoanId(Number(e.target.value))}
        />
      </div>
      {isLoading && <div>Loading...</div>}
      {error && <div className="text-red-500">Error: {String(error)}</div>}
      {loan && (
        <div className="bg-gray-50 rounded p-4">
          <div><b>Borrower:</b> {loan.borrower}</div>
          <div><b>Token:</b> {loan.token}</div>
          <div><b>Principal:</b> {loan.principal?.toString()}</div>
          <div><b>Repaid:</b> {loan.repaid?.toString()}</div>
          <div><b>Installments:</b> {loan.installments}</div>
          <div><b>Installments Paid:</b> {loan.installmentsPaid}</div>
          <div><b>Active:</b> {loan.active ? "Yes" : "No"}</div>
        </div>
      )}
      <div className="mt-6 text-xs text-gray-400">
        Network: Base Sepolia (demo) <br />
        See <code>src/common/hooks/useLoanManager.ts</code> and update addresses after deployment.
      </div>
    </div>
  );
};

export default LoanSummaryPage;
