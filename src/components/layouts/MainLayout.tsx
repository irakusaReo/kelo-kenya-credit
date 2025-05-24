
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCartButton from '@/components/FloatingCartButton';

interface MainLayoutProps {
  children: React.ReactNode;
  showFloatingCart?: boolean;
}

const MainLayout = ({ children, showFloatingCart = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      {showFloatingCart && <FloatingCartButton />}
      <Footer />
    </div>
  );
};

export default MainLayout;
