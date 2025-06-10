
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layouts/MainLayout';

const Privacy = () => {
  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="kelo-container max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4">1. Information We Collect</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We collect information necessary to provide our Buy Now Pay Later services:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Personal identification (name, ID number, phone, email)</li>
                    <li>Financial information (M-Pesa transaction history, income)</li>
                    <li>Device and usage data (IP address, browser type, app usage)</li>
                    <li>Location data for fraud prevention</li>
                    <li>Credit bureau information and alternative data sources</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">2. How We Use Your Information</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Your information is used for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Credit assessment and loan underwriting</li>
                    <li>Processing payments and managing accounts</li>
                    <li>Fraud detection and prevention</li>
                    <li>Compliance with regulatory requirements</li>
                    <li>Customer support and service improvement</li>
                    <li>Marketing communications (with consent)</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">3. Information Sharing</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    We may share your information with:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Credit bureaus for credit reporting and assessment</li>
                    <li>Payment processors (M-Pesa, banks) for transaction processing</li>
                    <li>Regulatory authorities as required by law</li>
                    <li>Merchant partners for order fulfillment</li>
                    <li>Service providers who assist in our operations</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">4. Data Security</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We implement robust security measures including encryption, secure data 
                    centers, access controls, and regular security audits. Our systems are 
                    designed to protect your personal and financial information from 
                    unauthorized access, use, or disclosure.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">5. Your Rights</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Under the Data Protection Act 2019, you have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Access your personal data we hold</li>
                    <li>Correct inaccurate or incomplete information</li>
                    <li>Request deletion of your data (subject to legal obligations)</li>
                    <li>Object to processing for marketing purposes</li>
                    <li>File complaints with the Data Protection Commissioner</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">6. Data Retention</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We retain your personal data for as long as necessary to provide our services 
                    and comply with legal obligations. Transaction records are typically retained 
                    for 7 years as required by banking regulations.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">7. Cookies and Tracking</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our website and app use cookies and similar technologies to improve user 
                    experience, analyze usage patterns, and prevent fraud. You can control 
                    cookie settings through your browser preferences.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">8. Third-Party Services</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Our services integrate with third-party providers including payment processors, 
                    credit bureaus, and analytics services. These partners have their own privacy 
                    policies governing the use of your information.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">9. Updates to This Policy</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We may update this privacy policy periodically to reflect changes in our 
                    practices or legal requirements. Material changes will be communicated 
                    via email or app notification.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">10. Contact Us</h2>
                  <p className="text-gray-600 leading-relaxed">
                    For privacy-related questions or to exercise your rights, contact our 
                    Data Protection Officer at:
                  </p>
                  <div className="mt-4 text-gray-600">
                    <p>Email: privacy@kelo.co.ke</p>
                    <p>Phone: +254 700 123 456</p>
                    <p>Address: Westlands, Nairobi, Kenya</p>
                  </div>
                </section>

                <div className="pt-8 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    Last updated: January 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </MainLayout>
  );
};

export default Privacy;
