
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { partners } from '@/data/partners';
import { products as staticProducts } from '@/data/products';
import { fetchFakeStoreProducts, mapFakeStoreProducts, MappedProduct } from '@/services/fakeStoreService';
import { Skeleton } from '@/components/ui/skeleton';

const PartnerDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [partner, setPartner] = useState<any>(null);
  const [products, setProducts] = useState<MappedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPartner = async () => {
      // Find partner by ID
      const currentPartner = partners.find(p => p.id === id);
      setPartner(currentPartner);

      if (currentPartner) {
        setLoading(true);
        
        // For Jumia and Carrefour, use FakeStore API
        if (currentPartner.id === 'jumia' || currentPartner.id === 'carrefour') {
          try {
            const fakeProducts = await fetchFakeStoreProducts();
            
            // For Jumia, use all products
            // For Carrefour, filter to only include electronics and jewelery
            const filteredProducts = currentPartner.id === 'carrefour' 
              ? fakeProducts.filter(p => p.category === 'electronics' || p.category === 'jewelery')
              : fakeProducts;
              
            const mappedProducts = mapFakeStoreProducts(
              filteredProducts, 
              currentPartner.id,
              currentPartner.name,
              currentPartner.logo,
              currentPartner.interestRate
            );
            
            setProducts(mappedProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        } else {
          // For other partners, use static products
          const partnerProducts = staticProducts
            .filter(p => p.partnerId === currentPartner.id)
            .map(p => ({
              ...p,
              partnerName: currentPartner.name,
              partnerLogo: currentPartner.logo
            }));
          
          setProducts(partnerProducts as MappedProduct[]);
        }
        
        setLoading(false);
      }
    };

    loadPartner();
  }, [id]);

  if (!partner && !loading) {
    return <div className="min-h-screen flex items-center justify-center">Partner not found</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Partner Header */}
        <section className="bg-white border-b">
          <div className="kelo-container py-8">
            {loading ? (
              <div className="flex items-center">
                <Skeleton className="h-20 w-20 rounded-lg" />
                <div className="ml-6 space-y-2">
                  <Skeleton className="h-8 w-40" />
                  <Skeleton className="h-4 w-64" />
                </div>
              </div>
            ) : (
              <div className="flex items-center">
                <div className="h-20 w-20 bg-white rounded-lg shadow-sm flex items-center justify-center p-3">
                  <img
                    src={partner?.logo}
                    alt={partner?.name}
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="ml-6">
                  <h1 className="text-3xl font-bold">{partner?.name}</h1>
                  <p className="text-gray-600 mt-1">{partner?.description}</p>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Products Grid */}
        <section className="section-padding bg-kelo-background">
          <div className="kelo-container">
            <h2 className="text-2xl font-semibold mb-6">Products</h2>
            
            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(8).fill(0).map((_, i) => (
                  <Skeleton key={i} className="h-80 w-full rounded-xl" />
                ))}
              </div>
            ) : products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-medium text-gray-600">No products found for this partner</h3>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PartnerDetail;
