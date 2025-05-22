
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import InvestmentSection from '@/components/InvestmentSection';
import { Button } from '@/components/ui/button';
import { verticals } from '@/data/verticals';
import { products } from '@/data/products';

const Index = () => {
  // Select featured products (one from each vertical)
  const featuredProducts = verticals.map(vertical => {
    const verticalProducts = products.filter(p => p.verticalId === vertical.id);
    return verticalProducts[0]; // Get first product from each vertical
  }).filter(Boolean); // Remove any undefined entries
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        
        {/* New section: Featured Categories */}
        <section className="section-padding bg-kelo-background">
          <div className="kelo-container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Shop by Category</h2>
              <p className="mt-4 text-lg text-gray-600">
                Explore our diverse catalog of products and services available with Kelo's buy now, pay later option.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticals.slice(0, 3).map((vertical) => (
                <Link 
                  key={vertical.slug} 
                  to={`/vertical/${vertical.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="h-48 overflow-hidden relative">
                      <img 
                        src={vertical.heroImage} 
                        alt={vertical.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {vertical.badge && (
                        <div className="absolute top-4 right-4 bg-kelo-gold text-kelo-text px-3 py-1 rounded-full text-sm font-medium">
                          {vertical.badge}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{vertical.name}</h3>
                      <p className="text-gray-600 mb-4">{vertical.description}</p>
                      <div className="text-kelo-blue font-medium">Explore category →</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/marketplace">
                <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                  View All Categories
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Investment Section */}
        <InvestmentSection />
        
        {/* New section: Featured Products */}
        <section className="section-padding bg-white">
          <div className="kelo-container">
            <div className="max-w-2xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Trending Products</h2>
              <p className="mt-4 text-lg text-gray-600">
                Popular items our customers are buying with Kelo's flexible payment plans.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.slice(0, 4).map((product) => (
                <Link key={product.id} to={`/product/${product.id}`}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
                    <div className="h-40 bg-gray-50 p-4">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="h-full w-full object-contain"
                      />
                    </div>
                    <div className="p-4">
                      <div className="text-sm text-gray-600 mb-1">{product.partnerName}</div>
                      <h3 className="font-medium mb-2 line-clamp-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold">KES {product.price.toLocaleString()}</div>
                          <div className="text-xs text-gray-500">
                            From KES {Math.round(product.price / 3).toLocaleString()}/mo
                          </div>
                        </div>
                        {product.discountPercentage && (
                          <div className="bg-kelo-gold text-kelo-text text-xs font-medium px-2 py-1 rounded">
                            {product.discountPercentage}% OFF
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Link to="/marketplace">
                <Button className="bg-kelo-blue hover:bg-kelo-blue/90">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>
        
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
