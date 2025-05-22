
import React from 'react';
import { Button } from '@/components/ui/button';
import { AlertCircle } from 'lucide-react';

interface HarvestAlertProps {
  pendingYield: number;
  harvestable: boolean;
  onHarvest: () => void;
}

const HarvestAlert = ({ pendingYield, harvestable, onHarvest }: HarvestAlertProps) => {
  if (!harvestable) return null;
  
  return (
    <div className="mb-6 p-4 border border-kelo-gold bg-amber-50 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4">
      <div className="flex items-center">
        <div className="bg-amber-100 p-2 rounded-full mr-3">
          <AlertCircle className="h-6 w-6 text-kelo-gold" />
        </div>
        <div>
          <h3 className="font-medium">Yield Ready to Harvest</h3>
          <p className="text-sm text-gray-600">
            You have KES {pendingYield.toLocaleString()} in unclaimed yield across your positions
          </p>
        </div>
      </div>
      <Button 
        className="bg-kelo-gold hover:bg-kelo-gold/90 text-white min-w-[120px]"
        onClick={onHarvest}
      >
        Harvest Now
      </Button>
    </div>
  );
};

export default HarvestAlert;
