
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';

const RiskSimulator = () => {
  const [simulationParams, setSimulationParams] = useState({
    marketCondition: 'normal',
    delinquencyIncrease: 2,
    utilizationIncrease: 10,
    durationDays: 30
  });
  
  const [simulating, setSimulating] = useState(false);
  const [results, setResults] = useState<null | {
    projectedLosses: number;
    maxDrawdown: number;
    recoveryTime: number;
    riskLevel: string;
  }>(null);

  const handleParamChange = (key: keyof typeof simulationParams, value: any) => {
    setSimulationParams(prev => ({ ...prev, [key]: value }));
  };

  const runSimulation = () => {
    setSimulating(true);
    setTimeout(() => {
      // Mock simulation results based on params
      const baseRisk = simulationParams.marketCondition === 'stressed' ? 5 : 
                        simulationParams.marketCondition === 'recession' ? 8 : 2;
      
      const projectedLosses = baseRisk * simulationParams.delinquencyIncrease * 
                          (simulationParams.utilizationIncrease / 10) *
                          (simulationParams.durationDays / 30);
      
      const maxDrawdown = projectedLosses * 1.5;
      const recoveryTime = simulationParams.marketCondition === 'recession' ? 90 : 
                           simulationParams.marketCondition === 'stressed' ? 45 : 14;
      
      let riskLevel = 'Low';
      if (projectedLosses > 15) riskLevel = 'Extreme';
      else if (projectedLosses > 10) riskLevel = 'High';
      else if (projectedLosses > 5) riskLevel = 'Medium';
      
      setResults({
        projectedLosses,
        maxDrawdown,
        recoveryTime,
        riskLevel
      });
      
      setSimulating(false);
    }, 1500);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-1">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Market Condition</Label>
            <Select 
              value={simulationParams.marketCondition}
              onValueChange={(value) => handleParamChange('marketCondition', value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select market condition" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="normal">Normal</SelectItem>
                <SelectItem value="stressed">Stressed</SelectItem>
                <SelectItem value="recession">Recession</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label>Delinquency Increase (percentage points)</Label>
            <Input 
              type="number" 
              value={simulationParams.delinquencyIncrease}
              onChange={(e) => handleParamChange('delinquencyIncrease', Number(e.target.value))}
              min="0"
              max="20"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Utilization Increase (percentage points)</Label>
            <Input 
              type="number" 
              value={simulationParams.utilizationIncrease}
              onChange={(e) => handleParamChange('utilizationIncrease', Number(e.target.value))}
              min="0"
              max="30"
            />
          </div>
          
          <div className="space-y-2">
            <Label>Duration (days)</Label>
            <Input 
              type="number" 
              value={simulationParams.durationDays}
              onChange={(e) => handleParamChange('durationDays', Number(e.target.value))}
              min="1"
              max="365"
            />
          </div>
          
          <Button 
            className="w-full bg-kelo-blue hover:bg-kelo-blue/90"
            onClick={runSimulation}
            disabled={simulating}
          >
            {simulating ? (
              <>
                <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-t-transparent"></div>
                Simulating...
              </>
            ) : 'Run Simulation'}
          </Button>
        </div>
      </div>
      
      <div className="md:col-span-2">
        {results ? (
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-bold mb-4">Simulation Results</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Projected Losses</div>
                  <div className="text-3xl font-bold">{results.projectedLosses.toFixed(2)}%</div>
                  <div className="text-sm text-gray-500">of total pool value</div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Maximum Drawdown</div>
                    <div className="text-xl font-bold">{results.maxDrawdown.toFixed(2)}%</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Recovery Time</div>
                    <div className="text-xl font-bold">{results.recoveryTime} days</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Overall Risk Level</div>
                    <div className={`
                      text-xl font-bold
                      ${results.riskLevel === 'Low' ? 'text-green-600' : 
                        results.riskLevel === 'Medium' ? 'text-amber-600' : 
                        results.riskLevel === 'High' ? 'text-orange-600' : 'text-red-600'}
                    `}>
                      {results.riskLevel}
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-md">
                  <h4 className="font-medium mb-2">Recommended Actions:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {results.riskLevel === 'Low' && (
                      <>
                        <li>No immediate actions needed</li>
                        <li>Continue regular monitoring</li>
                      </>
                    )}
                    {results.riskLevel === 'Medium' && (
                      <>
                        <li>Increase utilization buffer by 5%</li>
                        <li>Review credit scoring parameters</li>
                        <li>Prepare contingency plans</li>
                      </>
                    )}
                    {(results.riskLevel === 'High' || results.riskLevel === 'Extreme') && (
                      <>
                        <li>Temporarily reduce maximum loan values</li>
                        <li>Increase emergency reserves by 10%</li>
                        <li>Adjust interest rates to discourage new loans</li>
                        <li>Prepare for potential liquidity support</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="h-full flex items-center justify-center border border-dashed rounded-lg bg-gray-50 p-12">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-2">No Simulation Results</h3>
              <p className="text-gray-600 mb-4">
                Adjust parameters and run a simulation to see risk assessment results
              </p>
              <div className="text-sm text-gray-500">
                The simulator helps predict potential risks under various market conditions
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RiskSimulator;
