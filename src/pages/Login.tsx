
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
import { Mail } from 'lucide-react';
import useAuthProvider from '@/hooks/useAuthProvider';

const Login = () => {
  const auth = useAuthProvider();
  
  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
    auth.loginWithGoogle();
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome back</h1>
            <p className="mt-2 text-gray-600">
              Sign in to access your Kelo account
            </p>
          </div>
          
          <div className="bg-white p-8 shadow-md rounded-xl border border-gray-100">
            {/* Email/Password Form */}
            <form className="space-y-6" action="#" method="POST">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="/forgot-password" className="text-sm font-medium text-kelo-blue hover:text-kelo-blue/90">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <label
                  htmlFor="remember"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember me
                </label>
              </div>

              <Button type="submit" className="w-full bg-kelo-blue hover:bg-kelo-blue/90">
                Sign in with Email
              </Button>
            </form>
            
            {/* Separator */}
            <div className="flex items-center my-6">
              <Separator className="flex-grow" />
              <span className="px-4 text-sm text-gray-500">OR</span>
              <Separator className="flex-grow" />
            </div>
            
            {/* Alternative Sign-In Methods */}
            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full" 
                onClick={handleGoogleSignIn}
              >
                <Mail className="mr-2 h-5 w-5" />
                Sign in with Google
              </Button>
              
              <ConnectWalletButton 
                className="w-full" 
                variant="outline"
              />
            </div>
          </div>
          
          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="font-medium text-kelo-blue hover:text-kelo-blue/90">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
