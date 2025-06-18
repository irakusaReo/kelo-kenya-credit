
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
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {verticals.map((vertical) => (
              <Link to={`/vertical/${vertical.slug}`} key={vertical.id}>
                <Card className="hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-3 flex flex-col items-center text-center">
                    <div className="w-12 h-12 mb-2 flex items-center justify-center">
                      {/* Using the first letter of the vertical name instead of an icon */}
                      <div className="w-10 h-10 rounded-full bg-kelo-blue/10 flex items-center justify-center text-kelo-blue text-lg font-bold">
                        {vertical.name.charAt(0)}
                      </div>
                    </div>
                    <h3 className="font-medium text-sm">{vertical.name}</h3>
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
          
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {partners.map((partner) => (
              <Link to={`/partner/${partner.id}`} key={partner.id}>
                <Card className="hover:shadow-md transition-shadow duration-300 h-full">
                  <CardContent className="p-4 flex flex-col items-center justify-center text-center h-full">
                    <div className="w-full h-16 mb-3 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{partner.name}</h3>
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
