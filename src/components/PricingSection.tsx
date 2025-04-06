
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const freeTierFeatures = [
    'Basic AI pet care recommendations',
    'Limited community access',
    'Basic health tracking',
    'Email support',
    'Mobile app access'
  ];

  const premiumTierFeatures = [
    'Advanced AI pet health analysis',
    'Full community features access',
    'Real-time health monitoring',
    'Priority support 24/7',
    'Veterinary teleconsultations',
    'Custom diet and exercise plans',
    'Emergency assistance coordination'
  ];

  return (
    <section id="pricing" className="section bg-blue-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-petblue-dark mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that's right for you and your furry friends.
            No hidden fees, cancel anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Free Tier */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden transition-transform hover:scale-105 duration-300">
            <div className="p-8 border-b">
              <h3 className="text-xl font-bold text-petblue-dark mb-2">Free</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-gray-900">$0</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600">
                Perfect for casual pet parents looking for basic support.
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {freeTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-petgreen mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-gray-100 hover:bg-gray-200 text-petblue-dark">
                Get Started
              </Button>
            </div>
          </div>
          
          {/* Premium Tier */}
          <div className="bg-gradient-to-br from-petblue-light/30 to-petblue/30 rounded-2xl shadow-lg overflow-hidden border-2 border-petblue relative transition-transform hover:scale-105 duration-300">
            <div className="absolute top-0 right-0 bg-petblue text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
              Most Popular
            </div>
            <div className="p-8 border-b border-petblue/20">
              <h3 className="text-xl font-bold text-petblue-dark mb-2">Premium</h3>
              <div className="flex items-baseline mb-4">
                <span className="text-4xl font-extrabold text-gray-900">$19.99</span>
                <span className="text-gray-600 ml-1">/month</span>
              </div>
              <p className="text-gray-600">
                Complete care solution for dedicated pet parents.
              </p>
            </div>
            <div className="p-8">
              <ul className="space-y-4 mb-8">
                {premiumTierFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-petblue mr-3 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="w-full bg-petblue hover:bg-petblue-dark text-white">
                Get Premium
              </Button>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12 bg-white py-8 px-6 rounded-xl shadow-sm max-w-3xl mx-auto">
          <h4 className="text-xl font-bold text-petblue-dark mb-4">
            Need a custom plan for your rescue organization?
          </h4>
          <p className="text-gray-600 mb-6">
            We offer special pricing and features for animal shelters and rescue groups.
            Contact our team to learn more about our nonprofit support program.
          </p>
          <Button variant="outline" className="border-petblue text-petblue hover:bg-petblue/10">
            Contact for Custom Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
