import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Essential",
      price: "999",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 locations",
        "24/7 AI monitoring",
        "Basic threat detection",
        "Email support",
        "Mobile app access",
        "7-day video storage"
      ],
      highlighted: false
    },
    {
      name: "Professional",
      price: "2,499",
      description: "Ideal for growing organizations",
      features: [
        "Up to 20 locations",
        "Advanced AI analytics",
        "Priority incident response",
        "24/7 phone support",
        "Custom alert rules",
        "30-day video storage",
        "Access control integration",
        "Regular security audits"
      ],
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large-scale operations",
      features: [
        "Unlimited locations",
        "Custom AI models",
        "Dedicated response team",
        "24/7 premium support",
        "Advanced integration APIs",
        "Unlimited video storage",
        "Custom reporting",
        "Quarterly security consulting"
      ],
      highlighted: false
    }
  ];

  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Security Solutions for Every Scale
          </h2>
          <p className="text-xl text-gray-300">
            Choose the perfect plan for your security needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white transform scale-105'
                  : 'bg-white text-gray-900'
              }`}
            >
              <div className="mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <p className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-bold mx-2">{plan.price}</span>
                  <span>/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${
                      plan.highlighted ? 'text-blue-100' : 'text-blue-600'
                    }`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-8 rounded-lg flex items-center justify-center gap-2 font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;