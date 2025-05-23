
import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/components/layouts/MainLayout';
import { Card, CardContent } from '@/components/ui/card';
import { verticals } from '@/data/verticals';
import { partners } from '@/data/partners';

const Marketplace = () => {
  return (
    <MainLayout>
      <div className="bg-kelo-blue text-white py-20">
        <div className="kelo-container">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop Now, Pay Later</h1>
            <p className="text-lg opacity-90 mb-6">
              Browse our partners across different categories and shop flexibly with Kelo's payment plans.
            </p>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <section className="section-padding bg-kelo-background">
        <div className="kelo-container">
          <h2 className="text-2xl font-semibold mb-8">Shop by Category</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {verticals.map((vertical) => (
              <Link to={`/vertical/${vertical.slug}`} key={vertical.id}>
                <Card className="hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-4 flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-3 flex items-center justify-center">
                      <img 
                        src={vertical.icon} 
                        alt={vertical.name} 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium">{vertical.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="section-padding bg-white">
        <div className="kelo-container">
          <h2 className="text-2xl font-semibold mb-8">Our Partners</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partners.map((partner) => (
              <Link to={`/partner/${partner.id}`} key={partner.id}>
                <Card className="hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <div className="w-full h-24 mb-4 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium">{partner.name}</h3>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Marketplace;
