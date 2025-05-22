
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

interface ProductCardProps {
  product: any;
}

const ProductCard = ({ product }: ProductCardProps) => {
  // Generate a random rating between 3.5 and 5.0 for demo purposes if not provided
  const rating = product.rating || (Math.random() * 1.5 + 3.5).toFixed(1);
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  
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
          <div className="flex items-center mb-1">
            {product.partnerLogo && (
              <img 
                src={product.partnerLogo} 
                alt={product.partnerName || "Partner"} 
                className="h-4 w-4 object-contain mr-2"
              />
            )}
            <div className="text-sm text-gray-600">{product.partnerName}</div>
          </div>
          <h3 className="font-medium mb-2 leading-tight line-clamp-2">{product.name}</h3>
          
          {/* Rating display */}
          <div className="flex items-center mb-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className={`${i < fullStars ? 'text-amber-500 fill-amber-500' : 
                  (i === fullStars && hasHalfStar ? 'text-amber-500 fill-amber-500 opacity-50' : 
                  'text-gray-300')}`}
              />
            ))}
            <span className="ml-1 text-xs text-gray-600">{rating}</span>
          </div>
          
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
