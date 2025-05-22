
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { products as staticProducts } from '@/data/products';
import { partners } from '@/data/partners';
import { useCartStore } from '@/stores/cartStore';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import RepaymentBreakdown from '@/components/RepaymentBreakdown';
import { toast } from 'sonner';
import { ShoppingCart } from 'lucide-react';
import { fetchFakeStoreProducts, mapFakeStoreProducts } from '@/services/fakeStoreService';
import { Skeleton } from '@/components/ui/skeleton';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [partner, setPartner] = useState<any>(null);
  const [selectedTenor, setSelectedTenor] = useState<number>(3);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCartStore();

  useEffect(() => {
    const loadProduct = async () => {
      if (!id) return;
      
      setLoading(true);
      
      // Check if this is a FakeStore API product (from Jumia or Carrefour)
      if (id.startsWith('jumia-') || id.startsWith('carrefour-')) {
        const partnerId = id.split('-')[0];
        const fakeStoreId = parseInt(id.split('-')[1]);
        
        const currentPartner = partners.find(p => p.id === partnerId);
        setPartner(currentPartner);
        
        try {
          const fakeProducts = await fetchFakeStoreProducts();
          const fakeProduct = fakeProducts.find(p => p.id === fakeStoreId);
          
          if (fakeProduct && currentPartner) {
            const mappedProducts = mapFakeStoreProducts(
              [fakeProduct], 
              currentPartner.id, 
              currentPartner.name, 
              currentPartner.logo,
              currentPartner.interestRate
            );
            
            setProduct(mappedProducts[0]);
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      } else {
        // Handle static products
        const currentProduct = staticProducts.find(p => p.id === id);
        setProduct(currentProduct);
        
        if (currentProduct) {
          const productPartner = partners.find(p => p.id === currentProduct.partnerId);
          setPartner(productPartner);
        }
      }
      
      setLoading(false);
    };
    
    loadProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (product && partner) {
      addToCart({
        ...product,
        selectedTenor,
        partnerName: partner.name || '',
        partnerLogo: partner.logo || '',
      });
      
      toast.success("Added to cart", {
        description: `${product.name} has been added to your cart.`
      });
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow section-padding bg-kelo-background">
          <div className="kelo-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <Skeleton className="h-96 w-full" />
              <div className="space-y-6">
                <div className="space-y-2">
                  <Skeleton className="h-8 w-32" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <Skeleton className="h-8 w-48" />
                <Skeleton className="h-80 w-full" />
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!product || !partner) {
    return <div className="min-h-screen flex items-center justify-center">Product not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow section-padding bg-kelo-background">
        <div className="kelo-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Product Image */}
            <div>
              <div className="bg-white rounded-xl overflow-hidden shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-96 object-contain"
                />
              </div>
            </div>
            
            {/* Product Details */}
            <div>
              <div className="flex items-center mb-4">
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="h-8 w-8 object-contain mr-3"
                />
                <span className="text-gray-600">{partner.name}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              
              <div className="flex items-center mb-6">
                <span className="text-2xl font-bold text-kelo-text mr-4">
                  KES {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through">
                    KES {product.originalPrice.toLocaleString()}
                  </span>
                )}
                {product.discountPercentage && (
                  <Badge className="ml-3 bg-kelo-gold text-kelo-text">
                    {product.discountPercentage}% OFF
                  </Badge>
                )}
              </div>
              
              <div className="mb-8">
                <h3 className="font-semibold mb-3">Pay with Kelo</h3>
                <div className="bg-white p-6 rounded-xl shadow-sm mb-4">
                  <div className="mb-6">
                    <div className="text-sm text-gray-600 mb-2">Select payment period:</div>
                    <div className="grid grid-cols-3 gap-3">
                      {[3, 6, 12].map((months) => (
                        <Button
                          key={months}
                          onClick={() => setSelectedTenor(months)}
                          variant={selectedTenor === months ? "default" : "outline"}
                          className={selectedTenor === months ? "bg-kelo-blue hover:bg-kelo-blue/90" : ""}
                        >
                          {months} Months
                        </Button>
                      ))}
                    </div>
                  </div>
                  
                  <RepaymentBreakdown 
                    price={product.price} 
                    months={selectedTenor} 
                    interestRate={product.interestRate || 5}
                  />
                  
                  <Button 
                    className="w-full mt-4 bg-kelo-blue hover:bg-kelo-blue/90" 
                    size="lg"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" /> Add to Cart
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="description">
                <TabsList>
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="mt-4">
                  <div className="prose max-w-none">
                    <p>{product.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="mt-4">
                  <div className="prose max-w-none">
                    <ul>
                      {product.specifications?.map((spec: string, index: number) => (
                        <li key={index}>{spec}</li>
                      )) || <p>No specifications available.</p>}
                    </ul>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
