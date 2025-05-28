
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnhancedConnectWalletButton from '@/components/invest/EnhancedConnectWalletButton';
import { Mail } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Register = () => {
  const navigate = useNavigate();
  const { register, loginWithGoogle, connectWallet } = useAuth();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      await register(formData);
      toast({
        title: "Account created successfully",
        description: "Welcome to Kelo!"
      });
      navigate('/tutorial');
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      await loginWithGoogle();
      toast({
        title: "Account created successfully",
        description: "Welcome to Kelo!"
      });
      navigate('/tutorial');
    } catch (error) {
      toast({
        title: "Google signup failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  const handleWalletConnect = async (address: string, chain: any, wallet: any) => {
    try {
      await connectWallet(address, chain, wallet);
      toast({
        title: "Wallet connected",
        description: "Welcome to Kelo!"
      });
      navigate('/tutorial');
    } catch (error) {
      toast({
        title: "Wallet connection failed",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Create your account</h1>
            <p className="mt-2 text-gray-600">
              Sign up to get started with Kelo
            </p>
          </div>
          
          {/* Alternative Sign-Up Methods */}
          <div className="bg-white p-8 shadow-md rounded-xl border border-gray-100">
            <div className="space-y-4 mb-6">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleGoogleSignUp}
              >
                <Mail className="mr-2 h-5 w-5" />
                Sign up with Google
              </Button>
              
              <EnhancedConnectWalletButton 
                className="w-full" 
                variant="outline"
                onConnect={handleWalletConnect}
              />
            </div>
            
            {/* Separator */}
            <div className="flex items-center my-6">
              <Separator className="flex-grow" />
              <span className="px-4 text-sm text-gray-500">OR</span>
              <Separator className="flex-grow" />
            </div>
          
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="firstName"
                    type="text"
                    autoComplete="given-name"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="lastName"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+254 7XX XXX XXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <p className="text-xs text-gray-500">
                  We'll send a verification code to this number
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1" />
                <label
                  htmlFor="terms"
                  className="text-sm text-gray-600"
                >
                  I agree to the{' '}
                  <Link to="/terms" className="font-medium text-kelo-primary hover:text-kelo-primary/90">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-kelo-primary hover:text-kelo-primary/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-kelo-primary hover:bg-kelo-primary/90"
                disabled={isLoading}
              >
                {isLoading ? 'Creating account...' : 'Create account'}
              </Button>
            </form>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-kelo-primary hover:text-kelo-primary/90">
              Sign in
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
