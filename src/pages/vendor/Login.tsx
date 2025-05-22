
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Google } from 'lucide-react';

const VendorLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted:', formData);
    // Here would be the API call to authenticate the vendor
    navigate('/vendor/dashboard'); // Navigate to dashboard after login
  };

  const handleGoogleSignIn = () => {
    console.log('Google sign-in clicked');
    // Implement Google OAuth flow for vendors here
  };

  return (
    <div className="min-h-screen bg-kelo-background">
      <Navbar />
      
      <div className="kelo-container py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Vendor Login</CardTitle>
              <CardDescription className="text-center">
                Sign in to your Kelo Vendor account to manage your products
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="you@yourbusiness.com" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    required 
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="remember"
                      className="rounded border-gray-300 text-kelo-blue focus:ring-kelo-blue"
                    />
                    <Label htmlFor="remember" className="text-sm font-normal">Remember me</Label>
                  </div>
                  
                  <Link to="/vendor/forgot-password" className="text-sm text-kelo-blue hover:underline">
                    Forgot password?
                  </Link>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-kelo-blue hover:bg-kelo-blue/90"
                >
                  Sign In
                </Button>
                
                {/* Separator */}
                <div className="flex items-center my-4">
                  <Separator className="flex-grow" />
                  <span className="px-4 text-sm text-gray-500">OR</span>
                  <Separator className="flex-grow" />
                </div>
                
                {/* Google Sign-In */}
                <Button 
                  type="button"
                  variant="outline" 
                  className="w-full" 
                  onClick={handleGoogleSignIn}
                >
                  <Google className="mr-2 h-5 w-5" />
                  Sign in with Google
                </Button>
              </CardContent>

              <CardFooter className="flex flex-col space-y-4">
                <div className="text-center text-sm">
                  Don't have an account?{' '}
                  <Link to="/vendor/signup" className="text-kelo-blue hover:underline">
                    Create an account
                  </Link>
                </div>
              </CardFooter>
            </form>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VendorLogin;
