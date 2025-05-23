
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Button } from '@/components/ui/button';
import { useCartStore } from '@/stores/cartStore';
import { Trash2 } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import CartSummary from '@/components/CartSummary';

const Cart = () => {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCartStore();
  const navigate = useNavigate();
  
  const handleCheckout = () => {
    navigate('/checkout');
  };
  
  return (
    <MainLayout showFloatingCart={false}>
      <div className="section-padding bg-kelo-background">
        <div className="kelo-container">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {cart.length === 0 ? (
            <div className="text-center py-16">
              <h2 className="text-2xl font-semibold mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any items to your cart yet.</p>
              <Link to="/marketplace">
                <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6">
                  {cart.map((item) => (
                    <div key={item.id} className="mb-6">
                      <div className="flex flex-col sm:flex-row">
                        <div className="sm:w-32 h-32 mb-4 sm:mb-0 flex-shrink-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="sm:ml-6 flex-grow">
                          <div className="flex flex-wrap justify-between">
                            <div>
                              <div className="flex items-center">
                                <img 
                                  src={item.partnerLogo} 
                                  alt={item.partnerName} 
                                  className="h-5 w-5 object-contain mr-2"
                                />
                                <span className="text-sm text-gray-600">{item.partnerName}</span>
                              </div>
                              <h3 className="font-medium text-lg">{item.name}</h3>
                              <p className="text-gray-600 text-sm">
                                {item.selectedTenor} month payment plan
                              </p>
                            </div>
                            <div className="text-right">
                              <div className="font-bold">
                                KES {item.price.toLocaleString()}
                              </div>
                              <div className="text-sm text-gray-600">
                                KES {Math.round(item.price / item.selectedTenor).toLocaleString()} / month
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-4">
                            <div className="flex items-center">
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))}
                                disabled={(item.quantity || 1) <= 1}
                              >
                                -
                              </Button>
                              <span className="mx-3">{item.quantity || 1}</span>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8"
                                onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)}
                              >
                                +
                              </Button>
                            </div>
                            
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => removeFromCart(item.id)}
                            >
                              <Trash2 size={16} className="mr-2" />
                              Remove
                            </Button>
                          </div>
                        </div>
                      </div>
                      <Separator className="mt-6" />
                    </div>
                  ))}
                  
                  <div className="flex justify-between mt-6">
                    <Button
                      variant="ghost"
                      onClick={() => clearCart()}
                    >
                      Clear Cart
                    </Button>
                    <Link to="/marketplace">
                      <Button variant="outline">
                        Continue Shopping
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="sticky top-24">
                  <CartSummary onCheckout={handleCheckout} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default Cart;
