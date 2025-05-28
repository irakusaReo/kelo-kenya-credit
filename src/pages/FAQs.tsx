import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is Kelo?",
      answer: "Kelo is a Buy Now Pay Later (BNPL) platform that allows consumers to purchase products and services in installments, while merchants receive their payment in full upfront."
    },
    {
      question: "How does the investment module work?",
      answer: "Our investment module allows investors to provide liquidity to the BNPL system through various investment pools across different blockchains. Each pool comes with its own risk profile and expected returns."
    },
    {
      question: "What chains are supported?",
      answer: "Currently, we support Ethereum, Arbitrum, Avalanche, Solana, Aptos, Sui, Celo, and Starknet. Our omnichain architecture allows you to deposit native tokens directly without wrapping, while maintaining composable liquidity across all supported chains."
    },
    {
      question: "What is the minimum investment amount?",
      answer: "The minimum investment varies by pool, but typically starts at the equivalent of $100 USD in the native token of the chain."
    },
    {
      question: "How are returns generated?",
      answer: "Returns are generated from a combination of BNPL interest fees paid by consumers and base yield from chain-native staking mechanisms."
    },
    {
      question: "How safe are my investments?",
      answer: "Each pool has a risk score from 1-5, indicating the relative risk level. We implement multiple security measures, including keeping funds on their native chains to reduce bridge risks."
    },
    {
      question: "How can I become a vendor?",
      answer: "Merchants can sign up through our vendor portal and complete the onboarding process, which includes KYC verification and business documentation."
    },
    {
      question: "How do I qualify for BNPL as a consumer?",
      answer: "Consumers go through a quick credit assessment during checkout. This may include uploading statements or connecting to financial data providers securely."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow kelo-container py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h2 className="text-xl font-medium mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-4">
              Our support team is ready to help you with any questions or concerns you may have.
            </p>
            <a 
              href="mailto:support@kelo.com" 
              className="text-kelo-blue hover:underline"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQs;
