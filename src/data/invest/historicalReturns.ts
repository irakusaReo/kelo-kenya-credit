
// Function to generate mock historical returns
const generateHistoricalData = (baseAPY: number, volatility: number, days: number) => {
  const data = [];
  let currentAPY = baseAPY;
  
  const today = new Date();
  
  for (let i = days; i >= 0; i--) {
    const date = new Date();
    date.setDate(today.getDate() - i);
    
    // Add some random variation to APY
    const randomChange = (Math.random() - 0.5) * volatility;
    currentAPY = Math.max(0, currentAPY + randomChange);
    
    data.push({
      date: date.toISOString().slice(0, 10),
      apy: parseFloat(currentAPY.toFixed(2))
    });
  }
  
  return data;
};

export const historicalReturns = {
  "usdc-polygon": {
    daily: generateHistoricalData(12.0, 0.3, 90),
    weekly: Array(12).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      return {
        date: date.toISOString().slice(0, 10),
        apy: 11.5 + Math.random() * 1.0
      };
    }),
    monthly: Array(3).fill(0).map((_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        date: date.toISOString().slice(0, 10),
        apy: 11.8 + Math.random() * 0.5
      };
    })
  },
  "weth-polygon": {
    daily: generateHistoricalData(9.0, 0.4, 90),
    weekly: Array(12).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      return {
        date: date.toISOString().slice(0, 10),
        apy: 8.7 + Math.random() * 0.8
      };
    }),
    monthly: Array(3).fill(0).map((_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        date: date.toISOString().slice(0, 10),
        apy: 8.9 + Math.random() * 0.4
      };
    })
  },
  "wsol-polygon": {
    daily: generateHistoricalData(14.0, 0.6, 90),
    weekly: Array(12).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      return {
        date: date.toISOString().slice(0, 10),
        apy: 13.5 + Math.random() * 1.2
      };
    }),
    monthly: Array(3).fill(0).map((_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        date: date.toISOString().slice(0, 10),
        apy: 13.8 + Math.random() * 0.7
      };
    })
  },
  "wavax-polygon": {
    daily: generateHistoricalData(13.5, 0.5, 90),
    weekly: Array(12).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      return {
        date: date.toISOString().slice(0, 10),
        apy: 13.2 + Math.random() * 0.9
      };
    }),
    monthly: Array(3).fill(0).map((_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        date: date.toISOString().slice(0, 10),
        apy: 13.3 + Math.random() * 0.5
      };
    })
  },
  "wsui-polygon": {
    daily: generateHistoricalData(17.0, 0.8, 90),
    weekly: Array(12).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      return {
        date: date.toISOString().slice(0, 10),
        apy: 16.5 + Math.random() * 1.5
      };
    }),
    monthly: Array(3).fill(0).map((_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        date: date.toISOString().slice(0, 10),
        apy: 16.8 + Math.random() * 0.7
      };
    })
  },
  "wapt-polygon": {
    daily: generateHistoricalData(18.0, 0.9, 90),
    weekly: Array(12).fill(0).map((_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (i * 7));
      return {
        date: date.toISOString().slice(0, 10),
        apy: 17.6 + Math.random() * 1.8
      };
    }),
    monthly: Array(3).fill(0).map((_, i) => {
      const date = new Date();
      date.setMonth(date.getMonth() - i);
      return {
        date: date.toISOString().slice(0, 10),
        apy: 17.9 + Math.random() * 0.8
      };
    })
  }
};
