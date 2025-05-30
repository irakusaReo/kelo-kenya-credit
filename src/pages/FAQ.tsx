
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import MainLayout from '@/components/layouts/MainLayout';

const FAQ = () => {
  const consumerFAQs = [
    {
      question: "How does Kelo's Buy Now Pay Later work?",
      answer: "With Kelo, you can split your purchase into 4 equal payments. Pay 25% today and the remaining 75% over 6 weeks with no interest or hidden fees."
    },
    {
      question: "What do I need to qualify for Kelo?",
      answer: "You need to be 18+ years old, have a valid Kenyan ID, an active M-Pesa account, and pass our credit assessment which takes less than 60 seconds."
    },
    {
      question: "Are there any fees?",
      answer: "Kelo charges no interest or hidden fees when you pay on time. Late payment fees may apply if you miss scheduled payments."
    },
    {
      question: "How do I make payments?",
      answer: "Payments are automatically collected via M-Pesa on your scheduled due dates. You'll receive SMS reminders before each payment."
    },
    {
      question: "What happens if I miss a payment?",
      answer: "We'll send you a reminder and give you a 3-day grace period. After that, a late fee may apply. Contact our support team if you're having difficulties."
    },
    {
      question: "Can I pay early or in full?",
      answer: "Yes! You can pay off your balance early at any time through the Kelo app or by calling our customer service."
    }
  ];

  const merchantFAQs = [
    {
      question: "How do I integrate Kelo into my store?",
      answer: "Sign up for a merchant account, integrate our API or use our plugins for popular e-commerce platforms. We provide full technical support during setup."
    },
    {
      question: "When do I get paid?",
      answer: "You receive the full payment amount (minus our fee) within 24 hours of the customer's purchase, regardless of their payment schedule."
    },
    {
      question: "What are the merchant fees?",
      answer: "Our merchant fee is competitive at 3.5% per transaction. No monthly fees, setup costs, or hidden charges."
    },
    {
      question: "What if a customer defaults?",
      answer: "Kelo takes on all credit risk. You're paid in full regardless of whether the customer completes their payment plan."
    }
  ];

  const investorFAQs = [
    {
      question: "How does Kelo's investment platform work?",
      answer: "Investors can deposit USDC or KES into our yield-bearing pools that fund BNPL transactions. Earn competitive returns while supporting financial inclusion."
    },
    {
      question: "What returns can I expect?",
      answer: "Our pools typically generate 8-15% APY depending on risk level and market conditions. Returns are paid weekly and can be reinvested or withdrawn."
    },
    {
      question: "Is my investment secured?",
      answer: "Investments are backed by our diversified loan portfolio and over-collateralized through our risk management framework."
    },
    {
      question: "Can I withdraw my investment anytime?",
      answer: "Yes, liquidity is available daily. Withdrawal requests are processed within 24 hours for USDC and 48 hours for KES."
    }
  ];

  return (
    <MainLayout showFloatingCart={false}>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kelo-blue to-kelo-teal text-white py-16">
        <div className="kelo-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl opacity-90">
            Find answers to common questions about Kelo's services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="kelo-container max-w-4xl mx-auto">
          <Tabs defaultValue="consumers" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="consumers">Consumers</TabsTrigger>
              <TabsTrigger value="merchants">Merchants</TabsTrigger>
              <TabsTrigger value="investors">Investors</TabsTrigger>
            </TabsList>

            <TabsContent value="consumers" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">For Consumers</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {consumerFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`consumer-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="merchants" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">For Merchants</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {merchantFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`merchant-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="investors" className="mt-8">
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">For Investors</h2>
                  <Accordion type="single" collapsible className="w-full">
                    {investorFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`investor-${index}`}>
                        <AccordionTrigger className="text-left">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent>
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="kelo-container text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-gray-600 mb-8">
            Our support team is here to help you 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:support@kelo.co.ke" className="inline-block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Email Support</h3>
                  <p className="text-kelo-blue">support@kelo.co.ke</p>
                </CardContent>
              </Card>
            </a>
            <a href="tel:+254700123456" className="inline-block">
              <Card className="hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Phone Support</h3>
                  <p className="text-kelo-blue">+254 700 123 456</p>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;
