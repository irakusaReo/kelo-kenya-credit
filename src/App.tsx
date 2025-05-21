
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

// New pages
import Marketplace from "./pages/Marketplace";
import VerticalDetail from "./pages/VerticalDetail";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          
          {/* New routes */}
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/vertical/:slug" element={<VerticalDetail />} />
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
          
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
