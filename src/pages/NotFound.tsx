
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ArrowLeft, Search } from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';

const NotFound = () => {
  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16">
        <div className="kelo-container max-w-2xl mx-auto text-center">
          <Card>
            <CardContent className="p-12">
              {/* 404 Illustration */}
              <div className="mb-8">
                <div className="text-8xl font-bold text-kelo-blue mb-4">404</div>
                <div className="w-32 h-32 bg-kelo-blue/10 rounded-full flex items-center justify-center mx-auto">
                  <Search className="w-16 h-16 text-kelo-blue" />
                </div>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">Page Not Found</h1>
              <p className="text-gray-600 mb-8 text-lg">
                Sorry, we couldn't find the page you're looking for. The page might have been moved, 
                deleted, or you might have typed the wrong URL.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Button size="lg" className="bg-kelo-blue hover:bg-kelo-blue/90">
                    <Home className="mr-2 h-4 w-4" />
                    Go Home
                  </Button>
                </Link>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => window.history.back()}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Go Back
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Need help? Try these popular pages:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Link to="/market">
                    <Button variant="ghost" size="sm">Shop Now</Button>
                  </Link>
                  <Link to="/dashboard">
                    <Button variant="ghost" size="sm">Dashboard</Button>
                  </Link>
                  <Link to="/help">
                    <Button variant="ghost" size="sm">Help Center</Button>
                  </Link>
                  <Link to="/faq">
                    <Button variant="ghost" size="sm">FAQ</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
