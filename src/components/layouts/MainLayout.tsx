
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingCartButton from '@/components/FloatingCartButton';
import { ThemeToggle } from '@/components/ThemeToggle';

interface MainLayoutProps {
  children: React.ReactNode;
  showFloatingCart?: boolean;
}

const MainLayout = ({ children, showFloatingCart = true }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3">
        {showFloatingCart && <FloatingCartButton />}
        <ThemeToggle />
      </div>
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
