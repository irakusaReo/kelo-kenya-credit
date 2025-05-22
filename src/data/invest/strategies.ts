
export const strategies = {
  "usdc-polygon": [
    {
      id: "aave-v3-usdc",
      name: "Aave V3",
      type: "MoneyMarket",
      allocation: 40,
      currentYield: 3.8,
      risk: "Low",
      description: "Lending on Aave V3 protocol"
    },
    {
      id: "ondo-tbill-usdc",
      name: "Ondo Finance T-Bill",
      type: "TBillToken",
      allocation: 30,
      currentYield: 5.1,
      risk: "Very Low",
      description: "US Treasury Bills via Ondo Finance"
    },
    {
      id: "bnpl-interest-usdc",
      name: "BNPL Interest Share",
      type: "BNPLInterest",
      allocation: 30,
      currentYield: 7.8,
      risk: "Medium",
      description: "Interest from Kelo BNPL loans"
    }
  ],
  "weth-polygon": [
    {
      id: "aave-v3-weth",
      name: "Aave V3",
      type: "MoneyMarket",
      allocation: 35,
      currentYield: 2.8,
      risk: "Low",
      description: "Lending on Aave V3 protocol"
    },
    {
      id: "bnpl-interest-weth",
      name: "BNPL Interest Share",
      type: "BNPLInterest",
      allocation: 65,
      currentYield: 5.5,
      risk: "Medium",
      description: "Interest from Kelo BNPL loans"
    }
  ],
  "wsol-polygon": [
    {
      id: "aave-v3-wsol",
      name: "Aave V3",
      type: "MoneyMarket",
      allocation: 30,
      currentYield: 4.2,
      risk: "Medium",
      description: "Lending on Aave V3 protocol"
    },
    {
      id: "bnpl-interest-wsol",
      name: "BNPL Interest Share",
      type: "BNPLInterest",
      allocation: 70,
      currentYield: 8.9,
      risk: "Medium-High",
      description: "Interest from Kelo BNPL loans"
    }
  ],
  "wavax-polygon": [
    {
      id: "aave-v3-wavax",
      name: "Aave V3",
      type: "MoneyMarket",
      allocation: 40,
      currentYield: 5.5,
      risk: "Medium",
      description: "Lending on Aave V3 protocol"
    },
    {
      id: "bnpl-interest-wavax",
      name: "BNPL Interest Share",
      type: "BNPLInterest",
      allocation: 60,
      currentYield: 7.3,
      risk: "Medium",
      description: "Interest from Kelo BNPL loans"
    }
  ],
  "wsui-polygon": [
    {
      id: "aave-v3-wsui",
      name: "Aave V3",
      type: "MoneyMarket",
      allocation: 25,
      currentYield: 6.0,
      risk: "Medium-High",
      description: "Lending on Aave V3 protocol"
    },
    {
      id: "bnpl-interest-wsui",
      name: "BNPL Interest Share",
      type: "BNPLInterest",
      allocation: 75,
      currentYield: 9.5,
      risk: "High",
      description: "Interest from Kelo BNPL loans"
    }
  ],
  "wapt-polygon": [
    {
      id: "aave-v3-wapt",
      name: "Aave V3",
      type: "MoneyMarket",
      allocation: 20,
      currentYield: 7.0,
      risk: "Medium-High",
      description: "Lending on Aave V3 protocol"
    },
    {
      id: "bnpl-interest-wapt",
      name: "BNPL Interest Share",
      type: "BNPLInterest",
      allocation: 80,
      currentYield: 10.0,
      risk: "High",
      description: "Interest from Kelo BNPL loans"
    }
  ]
};
