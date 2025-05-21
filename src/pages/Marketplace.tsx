
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { verticals } from '@/data/verticals';

const Marketplace = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="section-padding bg-kelo-background">
          <div className="kelo-container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">Kelo Marketplace</h1>
              <p className="text-xl text-gray-600">
                Buy now, pay later with Kelo across these categories
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {verticals.map((vertical) => (
                <Link key={vertical.slug} to={`/vertical/${vertical.slug}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="h-48 bg-gray-100 relative overflow-hidden">
                      <img 
                        src={vertical.heroImage} 
                        alt={vertical.name} 
                        className="w-full h-full object-cover"
                      />
                      {vertical.badge && (
                        <div className="absolute top-4 right-4 bg-kelo-gold text-kelo-text px-3 py-1 rounded-full text-sm font-medium">
                          {vertical.badge}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{vertical.name}</h3>
                      <p className="text-gray-600">{vertical.description}</p>
                      <div className="mt-4 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{vertical.partnersCount} Partners</span>
                        <span className="text-kelo-blue font-medium">Explore →</span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Marketplace;
