
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PartnerCardProps {
  partner: any;
}

const PartnerCard = ({ partner }: PartnerCardProps) => {
  return (
    <Link to={`/partner/${partner.id}`}>
      <Card className="h-full hover:shadow-md transition-shadow duration-300">
        <CardContent className="p-6">
          <div className="flex items-center mb-4">
            <div className="h-16 w-16 bg-white rounded-lg shadow-sm flex items-center justify-center overflow-hidden p-2">
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className="h-full w-full object-contain"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold text-lg">{partner.name}</h3>
              <div className="flex items-center mt-1">
                {partner.featured && (
                  <Badge className="mr-2 bg-kelo-gold text-kelo-text">Featured</Badge>
                )}
                <span className="text-sm text-gray-600">{partner.productCount} Products</span>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 text-sm mb-4">{partner.description}</p>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <div className="text-xs text-gray-500">From</div>
              <div className="font-medium">KES {partner.minPrice.toLocaleString()}</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg text-center">
              <div className="text-xs text-gray-500">APR</div>
              <div className="font-medium">{partner.interestRate}%</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default PartnerCard;
