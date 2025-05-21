
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PartnerCard from '@/components/PartnerCard';
import ProductCard from '@/components/ProductCard';
import { verticals } from '@/data/verticals';
import { partners } from '@/data/partners';
import { products } from '@/data/products';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const VerticalDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [vertical, setVertical] = useState<any>(null);
  const [verticalPartners, setVerticalPartners] = useState<any[]>([]);
  const [featuredProducts, setFeaturedProducts] = useState<any[]>([]);
  
  useEffect(() => {
    // Find the vertical based on the slug
    const currentVertical = verticals.find(v => v.slug === slug);
    setVertical(currentVertical);
    
    if (currentVertical) {
      // Filter partners that belong to this vertical
      const matchingPartners = partners.filter(p => p.verticalId === currentVertical.id);
      setVerticalPartners(matchingPartners);
      
      // Get featured products from this vertical (up to 6)
      const matchingProducts = products
        .filter(p => p.verticalId === currentVertical.id)
        .sort(() => Math.random() - 0.5)
        .slice(0, 6);
      setFeaturedProducts(matchingProducts);
    }
  }, [slug]);
  
  if (!vertical) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Banner */}
        <section className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-r from-kelo-blue to-kelo-teal">
          <div className="kelo-container h-full flex flex-col justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {vertical.name}
            </h1>
            <p className="text-lg text-white/90 max-w-2xl">
              {vertical.description}
            </p>
          </div>
        </section>
        
        <section className="section-padding bg-kelo-background">
          <div className="kelo-container">
            <Tabs defaultValue="partners" className="mb-8">
              <TabsList>
                <TabsTrigger value="partners">Partners</TabsTrigger>
                <TabsTrigger value="trending">Trending Products</TabsTrigger>
              </TabsList>
              
              <TabsContent value="partners" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {verticalPartners.map((partner) => (
                    <PartnerCard key={partner.id} partner={partner} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="trending" className="mt-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default VerticalDetail;
