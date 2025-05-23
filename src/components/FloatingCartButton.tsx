
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCartStore } from '@/stores/cartStore';
import { cn } from '@/lib/utils';

const FloatingCartButton = () => {
  const { cart } = useCartStore();
  const itemCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  
  return (
    <Link 
      to="/cart"
      className={cn(
        "fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full bg-kelo-blue shadow-lg hover:bg-kelo-blue/90 transition-all",
        "h-14 w-14"
      )}
      aria-label="Go to cart"
    >
      <ShoppingCart className="text-white h-6 w-6" />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-kelo-gold text-kelo-text text-xs font-medium h-6 w-6 flex items-center justify-center rounded-full">
          {itemCount > 99 ? '99+' : itemCount}
        </span>
      )}
    </Link>
  );
};

export default FloatingCartButton;
