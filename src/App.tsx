import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";

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
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/help" element={<Help />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/maintenance" element={<Maintenance />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tutorial" element={<Tutorial />} />
            
            {/* Consumer Routes */}
            <Route path="/dashboard" element={<MobileDashboard />} />
            <Route path="/consumer" element={<Marketplace />} />
            <Route path="/consumer/catalog" element={<ProductCatalog />} />
            <Route path="/consumer/checkout" element={<CheckoutFlow />} />
            <Route path="/consumer/loan-summary" element={<LoanSummary />} />
            
            {/* Mobile-specific routes */}
            <Route path="/market" element={<MobileMarket />} />
            <Route path="/market/store/:storeId" element={<StoreDetail />} />
            <Route path="/market/product/:id" element={<ProductDetail />} />
            <Route path="/wallet-addresses" element={<WalletAddresses />} />
            <Route path="/card" element={<KeloCard />} />
            <Route path="/scan" element={<QRScanner />} />
            <Route path="/purchases" element={<Purchases />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/more" element={<More />} />
            
            {/* Marketplace Routes */}
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/vertical/:slug" element={<VerticalDetail />} />
            <Route path="/partner/:id" element={<PartnerDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            
            {/* Merchant Routes */}
            <Route path="/merchant" element={<VendorSignup />} />
            <Route path="/merchant/dashboard" element={<MerchantDashboard />} />
            <Route path="/merchant/products" element={<ProductManagement />} />
            <Route path="/merchant/settlements" element={<Settlements />} />
            <Route path="/vendor/signup" element={<VendorSignup />} />
            <Route path="/vendor/login" element={<VendorLogin />} />
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
            <Route path="/vendor/products" element={<VendorProducts />} />
            <Route path="/vendor/analytics" element={<VendorAnalytics />} />
            
            {/* Admin Routes */}
            <Route path="/admin/overview" element={<SystemOverview />} />
            <Route path="/admin/users" element={<UserManagement />} />
            <Route path="/admin/contracts" element={<ContractControls />} />
            <Route path="/admin/fraud-risk" element={<FraudRisk />} />
            
            {/* User Credit Routes */}
            <Route path="/user/credit/upload" element={<UserCreditUpload />} />
            <Route path="/user/credit/review" element={<UserCreditReview />} />
            
            {/* Investor Routes */}
            <Route path="/invest" element={<InvestLanding />} />
            <Route path="/invest/pool/:symbol" element={<PoolDetail />} />
            <Route path="/invest/dashboard" element={<InvestorDashboard />} />
            
            {/* Treasury Routes */}
            <Route path="/treasury" element={<TreasuryDashboard />} />
            <Route path="/treasury/risk" element={<TreasuryRisk />} />
            
            {/* Error Routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
