
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  User, 
  Building, 
  CreditCard,
  Target
} from 'lucide-react';
import MainLayout from '@/components/layouts/MainLayout';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Tutorial = () => {
  const navigate = useNavigate();
  const { user, updateProfile } = useAuth();
  const [currentStep, setCurrentStep] = useState(0);
  const [tutorialData, setTutorialData] = useState({
    profilePicture: '',
    bio: '',
    occupation: '',
    monthlyIncome: '',
    spendingCategory: '',
    businessType: '',
    businessDescription: '',
    monthlyRevenue: '',
    goals: []
  });

  const steps = user?.isVendor ? [
    {
      title: 'Welcome to Kelo',
      description: 'Let\'s get you set up as a vendor',
      icon: CheckCircle,
      content: 'welcome'
    },
    {
      title: 'Business Information',
      description: 'Tell us about your business',
      icon: Building,
      content: 'business'
    },
    {
      title: 'Financial Details',
      description: 'Help us understand your revenue',
      icon: CreditCard,
      content: 'financial'
    },
    {
      title: 'Your Goals',
      description: 'What do you want to achieve?',
      icon: Target,
      content: 'goals'
    }
  ] : [
    {
      title: 'Welcome to Kelo',
      description: 'Let\'s personalize your experience',
      icon: CheckCircle,
      content: 'welcome'
    },
    {
      title: 'Personal Information',
      description: 'Tell us about yourself',
      icon: User,
      content: 'personal'
    },
    {
      title: 'Financial Profile',
      description: 'Help us understand your needs',
      icon: CreditCard,
      content: 'financial'
    },
    {
      title: 'Your Goals',
      description: 'What do you want to achieve?',
      icon: Target,
      content: 'goals'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setTutorialData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      completeTutorial();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTutorial = () => {
    updateProfile({ tutorialCompleted: true });
    toast({
      title: "Tutorial skipped",
      description: "You can complete your profile later in settings."
    });
    navigate(user?.isVendor ? '/vendor/dashboard' : '/dashboard');
  };

  const completeTutorial = () => {
    updateProfile({ 
      tutorialCompleted: true,
      profileCompleted: Object.values(tutorialData).some(val => val !== '' && val.length > 0),
      ...tutorialData
    });
    toast({
      title: "Welcome to Kelo!",
      description: "Your profile has been set up successfully."
    });
    navigate(user?.isVendor ? '/vendor/dashboard' : '/dashboard');
  };

  const renderStepContent = () => {
    const step = steps[currentStep];
    
    switch (step.content) {
      case 'welcome':
        return (
          <div className="text-center space-y-6">
            <div className="mx-auto w-24 h-24 bg-kelo-primary rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">Welcome to Kelo!</h2>
              <p className="text-gray-600 max-w-md mx-auto">
                {user?.isVendor 
                  ? "We're excited to help you grow your business with our Buy Now, Pay Later platform. Let's set up your vendor profile."
                  : "We're excited to help you shop smarter with our Buy Now, Pay Later platform. Let's personalize your experience."
                }
              </p>
            </div>
          </div>
        );

      case 'personal':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">Tell us about yourself</h2>
              <p className="text-gray-600">This information helps us provide better recommendations</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="bio">Bio (Optional)</Label>
                <Textarea
                  id="bio"
                  placeholder="Tell us a bit about yourself..."
                  value={tutorialData.bio}
                  onChange={(e) => handleInputChange('bio', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="occupation">Occupation (Optional)</Label>
                <Input
                  id="occupation"
                  placeholder="e.g., Software Engineer, Teacher, Student"
                  value={tutorialData.occupation}
                  onChange={(e) => handleInputChange('occupation', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 'business':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">About your business</h2>
              <p className="text-gray-600">Help us understand your business better</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="businessType">Business Type</Label>
                <Select onValueChange={(value) => handleInputChange('businessType', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your business type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="retail">Retail</SelectItem>
                    <SelectItem value="restaurant">Restaurant/Food Service</SelectItem>
                    <SelectItem value="services">Services</SelectItem>
                    <SelectItem value="technology">Technology</SelectItem>
                    <SelectItem value="healthcare">Healthcare</SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="businessDescription">Business Description (Optional)</Label>
                <Textarea
                  id="businessDescription"
                  placeholder="Describe what your business does..."
                  value={tutorialData.businessDescription}
                  onChange={(e) => handleInputChange('businessDescription', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 'financial':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">Financial Information</h2>
              <p className="text-gray-600">This helps us provide appropriate credit limits (Optional)</p>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="income">
                  {user?.isVendor ? 'Monthly Revenue Range' : 'Monthly Income Range'}
                </Label>
                <Select onValueChange={(value) => handleInputChange(user?.isVendor ? 'monthlyRevenue' : 'monthlyIncome', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-50k">KSh 0 - 50,000</SelectItem>
                    <SelectItem value="50k-100k">KSh 50,000 - 100,000</SelectItem>
                    <SelectItem value="100k-250k">KSh 100,000 - 250,000</SelectItem>
                    <SelectItem value="250k-500k">KSh 250,000 - 500,000</SelectItem>
                    <SelectItem value="500k+">KSh 500,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {!user?.isVendor && (
                <div>
                  <Label htmlFor="spendingCategory">Primary Spending Category</Label>
                  <Select onValueChange={(value) => handleInputChange('spendingCategory', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="What do you shop for most?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="groceries">Groceries & Food</SelectItem>
                      <SelectItem value="electronics">Electronics</SelectItem>
                      <SelectItem value="fashion">Fashion & Clothing</SelectItem>
                      <SelectItem value="home">Home & Garden</SelectItem>
                      <SelectItem value="health">Health & Beauty</SelectItem>
                      <SelectItem value="education">Education & Learning</SelectItem>
                      <SelectItem value="entertainment">Entertainment</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>
        );

      case 'goals':
        return (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h2 className="text-xl font-bold mb-2">Your Goals</h2>
              <p className="text-gray-600">
                {user?.isVendor 
                  ? "What do you want to achieve with Kelo as a vendor?"
                  : "What do you want to achieve with Kelo?"
                }
              </p>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {(user?.isVendor ? [
                'Increase sales volume',
                'Attract new customers',
                'Improve cash flow',
                'Expand product range',
                'Better payment options',
                'Analytics and insights'
              ] : [
                'Better budgeting',
                'Build credit history',
                'Access to products I need',
                'Flexible payment options',
                'Financial education',
                'Save money on purchases'
              ]).map((goal) => (
                <label key={goal} className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-kelo-primary focus:ring-kelo-primary"
                    onChange={(e) => {
                      const goals = tutorialData.goals || [];
                      if (e.target.checked) {
                        handleInputChange('goals', [...goals, goal]);
                      } else {
                        handleInputChange('goals', goals.filter(g => g !== goal));
                      }
                    }}
                  />
                  <span className="text-sm font-medium">{goal}</span>
                </label>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="kelo-container max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-kelo-primary/10 rounded-lg">
                    <steps[currentStep].icon className="h-6 w-6 text-kelo-primary" />
                  </div>
                  <div>
                    <CardTitle>{steps[currentStep].title}</CardTitle>
                    <CardDescription>{steps[currentStep].description}</CardDescription>
                  </div>
                </div>
                <Button variant="ghost" onClick={skipTutorial}>
                  Skip for now
                </Button>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-gray-500">
                  <span>Step {currentStep + 1} of {steps.length}</span>
                  <span>{Math.round(((currentStep + 1) / steps.length) * 100)}%</span>
                </div>
                <Progress value={((currentStep + 1) / steps.length) * 100} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="min-h-[400px]">
                {renderStepContent()}
              </div>
              
              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back
                </Button>
                
                <Button
                  onClick={handleNext}
                  className="bg-kelo-primary hover:bg-kelo-primary/90"
                >
                  {currentStep === steps.length - 1 ? 'Complete' : 'Next'}
                  {currentStep !== steps.length - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Tutorial;
