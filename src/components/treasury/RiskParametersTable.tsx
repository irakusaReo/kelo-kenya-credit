
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Pencil, Save } from 'lucide-react';

const RiskParametersTable = () => {
  const [editing, setEditing] = useState(false);
  
  // Mock risk parameters
  const [params, setParams] = useState({
    utilizationCap: 85,
    delinquencyThreshold: 5.0,
    minCollateralization: 120,
    emergencyFee: 2.0,
    timelockPeriod: 72,
    maxWithdrawalPerDay: 25
  });

  const handleSave = () => {
    console.log('Saving risk parameters:', params);
    setEditing(false);
  };

  const handleChange = (key: keyof typeof params, value: number) => {
    setParams(prev => ({ ...prev, [key]: value }));
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        {editing ? (
          <Button className="bg-kelo-blue hover:bg-kelo-blue/90" onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Changes
          </Button>
        ) : (
          <Button variant="outline" onClick={() => setEditing(true)}>
            <Pencil className="h-4 w-4 mr-2" />
            Edit Parameters
          </Button>
        )}
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Parameter</th>
              <th className="text-left py-4 px-3 text-sm font-medium text-gray-500">Description</th>
              <th className="text-right py-4 px-3 text-sm font-medium text-gray-500">Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-3 font-medium">Utilization Cap</td>
              <td className="py-4 px-3 text-gray-600">Maximum allowed utilization before triggering rebalancing</td>
              <td className="py-4 px-3 text-right">
                {editing ? (
                  <div className="flex justify-end">
                    <Input
                      type="number"
                      value={params.utilizationCap}
                      onChange={(e) => handleChange('utilizationCap', Number(e.target.value))}
                      className="w-20 text-right"
                    />
                    <span className="ml-1">%</span>
                  </div>
                ) : (
                  <span>{params.utilizationCap}%</span>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-3 font-medium">Delinquency Threshold</td>
              <td className="py-4 px-3 text-gray-600">Maximum acceptable delinquency rate</td>
              <td className="py-4 px-3 text-right">
                {editing ? (
                  <div className="flex justify-end">
                    <Input
                      type="number"
                      value={params.delinquencyThreshold}
                      onChange={(e) => handleChange('delinquencyThreshold', Number(e.target.value))}
                      className="w-20 text-right"
                      step="0.1"
                    />
                    <span className="ml-1">%</span>
                  </div>
                ) : (
                  <span>{params.delinquencyThreshold}%</span>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-3 font-medium">Min Collateralization</td>
              <td className="py-4 px-3 text-gray-600">Minimum collateralization ratio for loans</td>
              <td className="py-4 px-3 text-right">
                {editing ? (
                  <div className="flex justify-end">
                    <Input
                      type="number"
                      value={params.minCollateralization}
                      onChange={(e) => handleChange('minCollateralization', Number(e.target.value))}
                      className="w-20 text-right"
                    />
                    <span className="ml-1">%</span>
                  </div>
                ) : (
                  <span>{params.minCollateralization}%</span>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-3 font-medium">Emergency Withdrawal Fee</td>
              <td className="py-4 px-3 text-gray-600">Fee for emergency withdrawals that bypass timelock</td>
              <td className="py-4 px-3 text-right">
                {editing ? (
                  <div className="flex justify-end">
                    <Input
                      type="number"
                      value={params.emergencyFee}
                      onChange={(e) => handleChange('emergencyFee', Number(e.target.value))}
                      className="w-20 text-right"
                      step="0.1"
                    />
                    <span className="ml-1">%</span>
                  </div>
                ) : (
                  <span>{params.emergencyFee}%</span>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-3 font-medium">Timelock Period</td>
              <td className="py-4 px-3 text-gray-600">Standard waiting period for withdrawals</td>
              <td className="py-4 px-3 text-right">
                {editing ? (
                  <div className="flex justify-end">
                    <Input
                      type="number"
                      value={params.timelockPeriod}
                      onChange={(e) => handleChange('timelockPeriod', Number(e.target.value))}
                      className="w-20 text-right"
                    />
                    <span className="ml-1">hrs</span>
                  </div>
                ) : (
                  <span>{params.timelockPeriod} hrs</span>
                )}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-3 font-medium">Max Daily Withdrawal</td>
              <td className="py-4 px-3 text-gray-600">Maximum percentage of pool that can be withdrawn per day</td>
              <td className="py-4 px-3 text-right">
                {editing ? (
                  <div className="flex justify-end">
                    <Input
                      type="number"
                      value={params.maxWithdrawalPerDay}
                      onChange={(e) => handleChange('maxWithdrawalPerDay', Number(e.target.value))}
                      className="w-20 text-right"
                    />
                    <span className="ml-1">%</span>
                  </div>
                ) : (
                  <span>{params.maxWithdrawalPerDay}%</span>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RiskParametersTable;
