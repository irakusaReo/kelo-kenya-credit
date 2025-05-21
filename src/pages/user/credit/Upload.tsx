
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import FileUploadCard from '@/components/user/FileUploadCard';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, Shield } from 'lucide-react';

const UserCreditUpload = () => {
  const navigate = useNavigate();
  const [bankStatementFile, setBankStatementFile] = useState<File | null>(null);
  const [mpesaFile, setMpesaFile] = useState<File | null>(null);
  const [consentGiven, setConsentGiven] = useState(false);

  const handleBankStatementUpload = (file: File) => {
    setBankStatementFile(file);
  };

  const handleMpesaUpload = (file: File) => {
    setMpesaFile(file);
  };

  const handleSubmit = () => {
    // In a real app, you would upload these files to the server
    console.log('Files to upload:', { bankStatementFile, mpesaFile });
    
    // Navigate to the review page
    navigate('/user/credit/review');
  };

  const canProceed = (bankStatementFile || mpesaFile) && consentGiven;

  return (
    <div className="min-h-screen bg-kelo-background">
      <Navbar />
      
      <div className="kelo-container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Credit Score Application</h1>
          
          <div className="space-y-6">
            {/* Data Consent Card */}
            <Card className={consentGiven ? "border-green-300" : ""}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <Shield className="text-kelo-blue h-8 w-8 flex-shrink-0" />
                  <div>
                    <CardTitle>Data Privacy & Consent</CardTitle>
                    <CardDescription>
                      We take your privacy seriously. Your data will only be used for credit assessment.
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-4 rounded-lg text-sm space-y-4">
                  <p>
                    By uploading your financial statements, you give Kelo permission to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Analyze your transaction history to assess creditworthiness</li>
                    <li>Store your data securely for the duration of your account</li>
                    <li>Use anonymized data for improving our credit models</li>
                  </ul>
                  <p>
                    Your data will never be sold to third parties. You can request deletion at any time.
                  </p>
                  
                  <div className="flex items-center pt-2">
                    <input 
                      type="checkbox" 
                      id="consent" 
                      checked={consentGiven}
                      onChange={(e) => setConsentGiven(e.target.checked)}
                      className="rounded border-gray-300 text-kelo-blue focus:ring-kelo-blue h-4 w-4"
                    />
                    <label htmlFor="consent" className="ml-2 text-sm font-medium">
                      I understand and consent to the processing of my financial data
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Bank Statement Upload */}
              <FileUploadCard
                title="Bank Statement"
                description="Upload your last 3 months of bank statements"
                fileTypes={['.pdf', '.csv']}
                onFileUpload={handleBankStatementUpload}
              />
              
              {/* M-Pesa Statement Upload */}
              <FileUploadCard
                title="M-Pesa Statement"
                description="Upload your M-Pesa statement (PDF or ZIP)"
                fileTypes={['.pdf', '.zip']}
                onFileUpload={handleMpesaUpload}
              />
            </div>
            
            <div className="flex justify-center mt-8">
              <Button 
                onClick={handleSubmit}
                disabled={!canProceed}
                className="bg-kelo-blue hover:bg-kelo-blue/90 px-8"
              >
                Continue to Analysis
              </Button>
            </div>
            
            {!canProceed && (
              <p className="text-center text-sm text-gray-500">
                Please upload at least one statement and give consent to proceed
              </p>
            )}
            
            <div className="bg-gray-50 p-4 rounded-lg mt-6">
              <h3 className="font-medium mb-2 flex items-center">
                <Check className="h-4 w-4 mr-2 text-green-600" /> 
                Why This Helps Your Application
              </h3>
              <p className="text-sm text-gray-600">
                Providing your financial statements helps us analyze your spending patterns and income stability.
                This allows us to offer you better credit terms and higher limits compared to basic KYC alone.
                All processing is done securely and in compliance with data protection laws.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCreditUpload;
