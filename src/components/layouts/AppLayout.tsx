
import React from 'react';
import { SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import MobileTabBar from '@/components/MobileTabBar';

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <main className="flex-1 flex flex-col">
          <div className="flex-1 p-4 md:p-6">
            {children}
          </div>
        </main>
        <MobileTabBar />
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
