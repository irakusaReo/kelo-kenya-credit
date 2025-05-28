
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FAQs from "./pages/FAQs";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";
import Tutorial from "./pages/Tutorial";

// New pages
import Marketplace from "./pages/Marketplace";
import VerticalDetail from "./pages/VerticalDetail";
import PartnerDetail from "./pages/PartnerDetail";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

// Vendor Portal Pages
import VendorSignup from "./pages/vendor/Signup";
import VendorLogin from "./pages/vendor/Login";
import VendorDashboard from "./pages/vendor/Dashboard";
import VendorProducts from "./pages/vendor/Products";
import VendorAnalytics from "./pages/vendor/Analytics";

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
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/tutorial" element={<Tutorial />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQs />} />
            
            {/* New routes for sections in navbar */}
            <Route path="/consumer" element={<Marketplace />} />
            <Route path="/merchant" element={<VendorSignup />} />
            
            {/* New routes */}
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/vertical/:slug" element={<VerticalDetail />} />
            <Route path="/partner/:id" element={<PartnerDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            
            {/* Vendor Portal Routes */}
            <Route path="/vendor/signup" element={<VendorSignup />} />
            <Route path="/vendor/login" element={<VendorLogin />} />
            <Route path="/vendor/dashboard" element={<VendorDashboard />} />
            <Route path="/vendor/products" element={<VendorProducts />} />
            <Route path="/vendor/analytics" element={<VendorAnalytics />} />
            
            {/* User Credit Scoring Routes */}
            <Route path="/user/credit/upload" element={<UserCreditUpload />} />
            <Route path="/user/credit/review" element={<UserCreditReview />} />
            
            {/* Investor Yield Module Routes */}
            <Route path="/invest" element={<InvestLanding />} />
            <Route path="/invest/pool/:symbol" element={<PoolDetail />} />
            <Route path="/invest/dashboard" element={<InvestorDashboard />} />
            <Route path="/treasury" element={<TreasuryDashboard />} />
            <Route path="/treasury/risk" element={<TreasuryRisk />} />
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
