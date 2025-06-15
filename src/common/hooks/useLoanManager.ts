
import { useCallback, useMemo } from "react";
import { LOAN_MANAGER_ABI, LOAN_MANAGER_ADDRESSES } from "@/common/utils/contractAbis";
import { createPublicClient, http, encodeFunctionData } from "viem";
import { useQuery, useMutation } from "@tanstack/react-query";

// Chain RPCs – update after deployment
const RPCS = {
  base_sepolia: "https://sepolia.base.org",
  arbitrum_sepolia: "https://sepolia-rollup.arbitrum.io/rpc",
  celo_alfajores: "https://alfajores-forno.celo-testnet.org"
};

type ChainKey = keyof typeof RPCS;

interface Loan {
  borrower: string;
  token: string;
  principal: bigint;
  repaid: bigint;
  installments: number;
  installmentsPaid: number;
  active: boolean;
}

export function useLoanManager(chain: ChainKey = "base_sepolia") {
  // Simple memoized RPC + contract
  const client = useMemo(
    () =>
      createPublicClient({
        transport: http(RPCS[chain]),
        chain: undefined // Not needed for read-only
      }),
    [chain]
  );

  const contractAddress = LOAN_MANAGER_ADDRESSES[chain];

  // Demo: Fetch single loan
  const fetchLoan = useCallback(
    async (loanId: number) => {
      if (!contractAddress) throw new Error("LoanManager address not set");
      return client.readContract({
        address: contractAddress as `0x${string}`,
        abi: LOAN_MANAGER_ABI,
        functionName: "loans",
        args: [loanId]
      }) as Promise<Loan>;
    },
    [client, contractAddress]
  );

  // Demo: Issue a loan (admin only, must use wallet provider)
  // Here we just encode the data for a wallet, not send
  const getIssueLoanTxData = (
    to: string,
    token: string,
    principal: bigint,
    installments: number
  ) => {
    return encodeFunctionData({
      abi: LOAN_MANAGER_ABI,
      functionName: "issueLoan",
      args: [to, token, principal, installments]
    });
  };

  // React-query wrappers (read-only fetch)
  const useLoan = (loanId: number) =>
    useQuery({
      queryKey: ["loan", chain, loanId],
      queryFn: () => fetchLoan(loanId),
      enabled: !!contractAddress
    });

  return {
    fetchLoan,
    getIssueLoanTxData,
    contractAddress,
    client,
    useLoan
  };
}

export default useLoanManager;
