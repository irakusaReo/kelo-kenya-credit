
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import MainLayout from '@/components/layouts/MainLayout';

const Terms = () => {
  return (
    <MainLayout showFloatingCart={false}>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="kelo-container max-w-4xl mx-auto">
          <Card>
            <CardContent className="p-8">
              <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-xl font-semibold mb-4">1. Agreement to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    By accessing and using Kelo's services, you accept and agree to be bound by the terms 
                    and provision of this agreement. Kelo is a licensed financial service provider 
                    regulated by the Central Bank of Kenya.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">2. Buy Now Pay Later Services</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Kelo provides Buy Now Pay Later (BNPL) services allowing you to purchase goods 
                    and services and pay for them in installments. Key terms include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Payment is split into 4 equal installments over 6 weeks</li>
                    <li>First payment is due at the time of purchase</li>
                    <li>No interest charges apply when payments are made on time</li>
                    <li>Late fees may apply for missed payments</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">3. Credit Assessment</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kelo conducts credit assessments to determine your eligibility for our services. 
                    We may access credit bureau information and use alternative data sources to 
                    evaluate creditworthiness. Not all applications will be approved.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">4. Payment Terms</h2>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Payment obligations include:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Payments are automatically collected via M-Pesa on due dates</li>
                    <li>You must maintain sufficient funds in your M-Pesa account</li>
                    <li>Failed payments may result in late fees and collection activities</li>
                    <li>Early payment is allowed without penalty</li>
                  </ul>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">5. Fees and Charges</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kelo does not charge interest on purchases when payments are made on time. 
                    Late payment fees of KES 500 or 5% of the overdue amount (whichever is higher) 
                    may apply after a 3-day grace period.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">6. Data Protection</h2>
                  <p className="text-gray-600 leading-relaxed">
                    We collect and process personal data in accordance with the Data Protection Act 
                    2019 and our Privacy Policy. Your data is used for credit assessment, fraud 
                    prevention, and service improvement.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">7. Dispute Resolution</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Any disputes arising from these terms shall be resolved through mediation or 
                    arbitration in accordance with Kenyan law. The courts of Kenya shall have 
                    exclusive jurisdiction.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
                  <p className="text-gray-600 leading-relaxed">
                    Kelo reserves the right to modify these terms at any time. Changes will be 
                    communicated via email or SMS notification. Continued use of our services 
                    constitutes acceptance of revised terms.
                  </p>
                </section>

                <section>
                  <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
                  <p className="text-gray-600 leading-relaxed">
                    For questions about these terms, contact us at:
                  </p>
                  <div className="mt-4 text-gray-600">
                    <p>Email: legal@kelo.co.ke</p>
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

export default Terms;
