
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        {/* Hero section */}
        <div className="bg-gradient-to-b from-kelo-blue to-kelo-blue/80 text-white py-20">
          <div className="kelo-container text-center">
            <h1 className="text-4xl font-bold mb-4">About Kelo</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Pioneering the future of financial inclusion through innovative Buy Now, Pay Later solutions in Kenya and beyond.
            </p>
          </div>
        </div>
        
        {/* Mission section */}
        <div className="py-16 kelo-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 mb-4">
                At Kelo, we're on a mission to democratize access to financial services in Kenya and across Africa. 
                We believe that everyone deserves access to flexible payment options that help them build their financial future.
              </p>
              <p className="text-gray-600">
                By combining innovative blockchain technology with traditional financial systems, we're creating a bridge between 
                Web3 and everyday commerce that benefits consumers, merchants, and investors alike.
              </p>
            </div>
            <div className="bg-gray-100 h-80 rounded-lg flex items-center justify-center">
              {/* Placeholder for mission image */}
              <p className="text-gray-400">Mission Image</p>
            </div>
          </div>
        </div>
        
        {/* Values section */}
        <div className="bg-gray-50 py-16">
          <div className="kelo-container">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-kelo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-kelo-blue font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Inclusion</h3>
                <p className="text-gray-600">
                  We design our products to serve everyone, regardless of their financial background or technological expertise.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-kelo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-kelo-blue font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-600">
                  We leverage cutting-edge technology to create solutions that address real-world financial challenges.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="h-12 w-12 bg-kelo-blue/20 rounded-full flex items-center justify-center mb-4">
                  <span className="text-kelo-blue font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with transparency and fairness in all our dealings with customers, partners, and investors.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Team section */}
        <div className="py-16 kelo-container">
          <h2 className="text-3xl font-bold mb-10 text-center">Our Team</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="text-center">
                <div className="h-60 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400">Photo</span>
                </div>
                <h3 className="font-bold">Team Member {i}</h3>
                <p className="text-gray-500">Position</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Contact section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="kelo-container text-center">
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="mb-8 max-w-2xl mx-auto">
              Have questions about Kelo or want to learn more about our services? 
              Our team is always ready to help.
            </p>
            <a 
              href="mailto:contact@kelo.com" 
              className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium inline-block"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
