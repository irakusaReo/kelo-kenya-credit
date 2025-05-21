
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link to={`/product/${product.id}`}>
      <Card className="h-full overflow-hidden hover:shadow-md transition-shadow duration-300">
        <div className="h-48 bg-white p-4 relative">
          {product.discountPercentage && (
            <Badge className="absolute top-3 left-3 bg-kelo-gold text-kelo-text">
              {product.discountPercentage}% OFF
            </Badge>
          )}
          <img 
            src={product.image} 
            alt={product.name} 
            className="h-full w-full object-contain"
          />
        </div>
        <CardContent className="p-4">
          <div className="text-sm text-gray-600 mb-1">{product.partnerName}</div>
          <h3 className="font-medium mb-2 leading-tight line-clamp-2">{product.name}</h3>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-bold">KES {product.price.toLocaleString()}</div>
              <div className="text-xs text-gray-600">
                From KES {Math.round(product.price / 3).toLocaleString()}/mo
              </div>
            </div>
            <div className="text-kelo-blue text-sm font-medium">View →</div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;
