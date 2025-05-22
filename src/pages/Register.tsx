
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ConnectWalletButton from '@/components/invest/ConnectWalletButton';
import { Google } from 'lucide-react';

const Register = () => {
  const handleGoogleSignUp = () => {
    console.log('Google sign-up clicked');
    // Implement Google OAuth flow here
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
                <Google className="mr-2 h-5 w-5" />
                Sign up with Google
              </Button>
              
              <ConnectWalletButton 
                className="w-full" 
                variant="outline"
              />
            </div>
            
            {/* Separator */}
            <div className="flex items-center my-6">
              <Separator className="flex-grow" />
              <span className="px-4 text-sm text-gray-500">OR</span>
              <Separator className="flex-grow" />
            </div>
          
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    placeholder="John"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    placeholder="Doe"
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
                  <Link to="/terms" className="font-medium text-kelo-blue hover:text-kelo-blue/90">
                    Terms of Service
                  </Link>{' '}
                  and{' '}
                  <Link to="/privacy" className="font-medium text-kelo-blue hover:text-kelo-blue/90">
                    Privacy Policy
                  </Link>
                </label>
              </div>

              <Button type="submit" className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
                Create account
              </Button>
            </form>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-kelo-blue hover:text-kelo-blue/90">
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
