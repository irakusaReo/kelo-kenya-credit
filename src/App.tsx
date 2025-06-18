
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

// Layouts
import MainLayout from "@/components/layouts/MainLayout";
import AppLayout from "@/components/layouts/AppLayout";

// Public Pages
import Index from "./pages/Index";
import Home from "./pages/Home";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Help from "./pages/Help";
import NotFound from "./pages/NotFound";
import Maintenance from "./pages/Maintenance";
import XMTPDemo from "./pages/XMTPDemo";

// Auth Pages
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Tutorial from "./pages/Tutorial";

// Consumer Pages
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import VerticalDetail from "./pages/VerticalDetail";
import PartnerDetail from "./pages/PartnerDetail";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import ProductCatalog from "./pages/consumer/ProductCatalog";
import CheckoutFlow from "./pages/consumer/CheckoutFlow";
import LoanSummary from "./pages/consumer/LoanSummary";

// Mobile pages
import MobileDashboard from "./pages/MobileDashboard";
import MobileMarket from "./pages/MobileMarket";
import WalletAddresses from "./pages/WalletAddresses";
import KeloCard from "./pages/KeloCard";
import QRScanner from "./pages/QRScanner";
import Purchases from "./pages/Purchases";
import StoreDetail from "./pages/StoreDetail";
import More from "./pages/More";
import Notifications from "./pages/Notifications";
import Settings from "./pages/Settings";

// Vendor Portal Pages
import VendorSignup from "./pages/vendor/Signup";
import VendorLogin from "./pages/vendor/Login";
import VendorDashboard from "./pages/vendor/Dashboard";
import VendorProducts from "./pages/vendor/Products";
import VendorAnalytics from "./pages/vendor/Analytics";

// Merchant Portal Pages
import MerchantDashboard from "./pages/merchant/MerchantDashboard";
import ProductManagement from "./pages/merchant/ProductManagement";
import Settlements from "./pages/merchant/Settlements";

// Admin Portal Pages
import SystemOverview from "./pages/admin/SystemOverview";
import UserManagement from "./pages/admin/UserManagement";
import ContractControls from "./pages/admin/ContractControls";
import FraudRisk from "./pages/admin/FraudRisk";

// User Credit Scoring Pages
import UserCreditUpload from "./pages/user/credit/Upload";
import UserCreditReview from "./pages/user/credit/Review";

// Investor Yield Module Pages
import InvestLanding from "./pages/invest/Index";
import PoolDetail from "./pages/invest/pool/PoolDetail";
import InvestorDashboard from "./pages/invest/Dashboard";
import TreasuryDashboard from "./pages/treasury/Index";
import TreasuryRisk from "./pages/treasury/Risk";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {/* Public Routes - use MainLayout */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/help" element={<Help />} />
              <Route path="/legal/terms" element={<Terms />} />
              <Route path="/legal/privacy" element={<Privacy />} />
              <Route path="/maintenance" element={<Maintenance />} />
              <Route path="/xmtp-demo" element={<XMTPDemo />} />
              
              {/* Auth Routes - use MainLayout */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              
              {/* Authenticated Routes - use AppLayout with sidebar */}
              <Route path="/profile" element={<AppLayout><Profile /></AppLayout>} />
              <Route path="/tutorial" element={<AppLayout><Tutorial /></AppLayout>} />
              
              {/* Consumer Routes - use AppLayout */}
              <Route path="/dashboard" element={<AppLayout><MobileDashboard /></AppLayout>} />
              <Route path="/consumer" element={<AppLayout><Marketplace /></AppLayout>} />
              <Route path="/consumer/catalog" element={<AppLayout><ProductCatalog /></AppLayout>} />
              <Route path="/consumer/checkout" element={<AppLayout><CheckoutFlow /></AppLayout>} />
              <Route path="/consumer/loan-summary" element={<AppLayout><LoanSummary /></AppLayout>} />
              
              {/* Mobile-specific routes - use AppLayout */}
              <Route path="/market" element={<AppLayout><MobileMarket /></AppLayout>} />
              <Route path="/market/store/:storeId" element={<AppLayout><StoreDetail /></AppLayout>} />
              <Route path="/market/product/:id" element={<AppLayout><ProductDetail /></AppLayout>} />
              <Route path="/wallet-addresses" element={<AppLayout><WalletAddresses /></AppLayout>} />
              <Route path="/card" element={<AppLayout><KeloCard /></AppLayout>} />
              <Route path="/scan" element={<AppLayout><QRScanner /></AppLayout>} />
              <Route path="/purchases" element={<AppLayout><Purchases /></AppLayout>} />
              <Route path="/notifications" element={<AppLayout><Notifications /></AppLayout>} />
              <Route path="/settings" element={<AppLayout><Settings /></AppLayout>} />
              <Route path="/more" element={<AppLayout><More /></AppLayout>} />
              
              {/* Marketplace Routes - use AppLayout */}
              <Route path="/marketplace" element={<AppLayout><Marketplace /></AppLayout>} />
              <Route path="/vertical/:slug" element={<AppLayout><VerticalDetail /></AppLayout>} />
              <Route path="/partner/:id" element={<AppLayout><PartnerDetail /></AppLayout>} />
              <Route path="/product/:id" element={<AppLayout><ProductDetail /></AppLayout>} />
              <Route path="/cart" element={<AppLayout><Cart /></AppLayout>} />
              <Route path="/checkout" element={<AppLayout><Checkout /></AppLayout>} />
              <Route path="/success" element={<AppLayout><Success /></AppLayout>} />
              
              {/* Merchant Routes - use AppLayout */}
              <Route path="/merchant" element={<MainLayout><VendorSignup /></MainLayout>} />
              <Route path="/merchant/dashboard" element={<AppLayout><MerchantDashboard /></AppLayout>} />
              <Route path="/merchant/products" element={<AppLayout><ProductManagement /></AppLayout>} />
              <Route path="/merchant/settlements" element={<AppLayout><Settlements /></AppLayout>} />
              <Route path="/vendor/signup" element={<MainLayout><VendorSignup /></MainLayout>} />
              <Route path="/vendor/login" element={<MainLayout><VendorLogin /></MainLayout>} />
              <Route path="/vendor/dashboard" element={<AppLayout><VendorDashboard /></AppLayout>} />
              <Route path="/vendor/products" element={<AppLayout><VendorProducts /></AppLayout>} />
              <Route path="/vendor/analytics" element={<AppLayout><VendorAnalytics /></AppLayout>} />
              
              {/* Admin Routes - use AppLayout */}
              <Route path="/admin/overview" element={<AppLayout><SystemOverview /></AppLayout>} />
              <Route path="/admin/users" element={<AppLayout><UserManagement /></AppLayout>} />
              <Route path="/admin/contracts" element={<AppLayout><ContractControls /></AppLayout>} />
              <Route path="/admin/fraud-risk" element={<AppLayout><FraudRisk /></AppLayout>} />
              
              {/* User Credit Routes - use AppLayout */}
              <Route path="/user/credit/upload" element={<AppLayout><UserCreditUpload /></AppLayout>} />
              <Route path="/user/credit/review" element={<AppLayout><UserCreditReview /></AppLayout>} />
              
              {/* Investor Routes - use AppLayout */}
              <Route path="/invest" element={<AppLayout><InvestLanding /></AppLayout>} />
              <Route path="/invest/pool/:symbol" element={<AppLayout><PoolDetail /></AppLayout>} />
              <Route path="/invest/dashboard" element={<AppLayout><InvestorDashboard /></AppLayout>} />
              
              {/* Treasury Routes - use AppLayout */}
              <Route path="/treasury" element={<AppLayout><TreasuryDashboard /></AppLayout>} />
              <Route path="/treasury/risk" element={<AppLayout><TreasuryRisk /></AppLayout>} />
              
              {/* Error Routes */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
