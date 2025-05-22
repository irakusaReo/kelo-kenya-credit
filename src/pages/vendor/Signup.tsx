
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import { Google } from 'lucide-react';

const VendorSignup = () => {
  const [formData, setFormData] = React.useState({
    businessName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // Here would go the API call to register the vendor
  };

  const handleGoogleSignUp = () => {
    console.log('Google sign-up clicked');
    // Implement Google OAuth flow for vendor signup here
  };

  return (
    <div className="min-h-screen bg-kelo-background">
      <Navbar />
      
      <div className="kelo-container py-12">
        <div className="max-w-md mx-auto">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Create Vendor Account</CardTitle>
              <CardDescription className="text-center">
                Join Kelo to offer your products to customers with Buy Now, Pay Later options
              </CardDescription>
            </CardHeader>
            
            {/* Google Sign-Up */}
            <CardContent className="space-y-4">
              <Button 
                type="button"
                variant="outline" 
                className="w-full" 
                onClick={handleGoogleSignUp}
              >
                <Google className="mr-2 h-5 w-5" />
                Sign up with Google
              </Button>
              
              {/* Separator */}
              <div className="flex items-center my-4">
                <Separator className="flex-grow" />
                <span className="px-4 text-sm text-gray-500">OR</span>
                <Separator className="flex-grow" />
              </div>
            
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="businessName">Business Name</Label>
                    <Input 
                      id="businessName" 
                      name="businessName" 
                      placeholder="Your business name" 
                      value={formData.businessName} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>

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
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      placeholder="+254 7XX XXX XXX" 
                      value={formData.phone} 
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

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <Input 
                      id="confirmPassword" 
                      name="confirmPassword" 
                      type="password" 
                      value={formData.confirmPassword} 
                      onChange={handleChange} 
                      required 
                    />
                  </div>
                
                  <Button 
                    type="submit" 
                    className="w-full mt-4 bg-kelo-blue hover:bg-kelo-blue/90"
                  >
                    Create Account
                  </Button>
                </div>
              </form>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <div className="text-center text-sm">
                Already have an account?{' '}
                <Link to="/vendor/login" className="text-kelo-blue hover:underline">
                  Sign in
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VendorSignup;
