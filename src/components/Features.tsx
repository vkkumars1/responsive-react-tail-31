
import React from 'react';
import { Truck, RefreshCw, Shield } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-10 w-10 text-purple" />,
    title: 'Free Shipping',
    description: 'Free shipping on all orders over $50'
  },
  {
    icon: <RefreshCw className="h-10 w-10 text-purple" />,
    title: 'Easy Returns',
    description: '30-day money back guarantee'
  },
  {
    icon: <Shield className="h-10 w-10 text-purple" />,
    title: 'Secure Payments',
    description: 'Your data is protected with us'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card bg-white p-8 rounded-lg text-center shadow-sm"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
