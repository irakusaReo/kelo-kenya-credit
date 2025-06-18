
import React from 'react';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
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
          <div className="flex items-center p-4 border-b border-border md:hidden">
            <SidebarTrigger />
            <h1 className="ml-2 font-semibold">Kelo</h1>
          </div>
          <div className="hidden md:flex items-center p-4 border-b border-border">
            <SidebarTrigger />
          </div>
          <div className="flex-1 p-4 md:p-6 pb-20 md:pb-6">
            {children}
          </div>
        </main>
        <MobileTabBar />
      </div>
    </SidebarProvider>
  );
};

export default AppLayout;
