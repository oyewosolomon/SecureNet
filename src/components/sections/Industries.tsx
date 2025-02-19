import React, { useState } from 'react';
import { Building2, Ban, Hospital, Landmark, GraduationCap, ShoppingBag, ArrowRight, Check } from 'lucide-react';

interface Industry {
  icon: JSX.Element;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  stats: {
    locations: string;
    reduction: string;
    savings: string;
  };
}

type IndustryKey = 'retail' | 'banking' | 'healthcare' | 'government';

const IndustriesSection: React.FC = () => {
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('retail');

  const industries: Record<IndustryKey, Industry> = {
    retail: {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "Retail",
      description: "Protect merchandise, prevent theft, and ensure customer safety across multiple locations.",
      benefits: [
        "Reduce shrinkage by up to 40%",
        "Real-time inventory monitoring",
        "Customer behavior analytics",
        "Automated POS integration"
      ],
      image: "/images/access.jpg",
      stats: {
        locations: "2,500+",
        reduction: "40%",
        savings: "$2.5M"
      }
    },
    banking: {
      icon: <Ban className="w-8 h-8" />,
      title: "Banking & Finance",
      description: "Secure financial institutions with advanced threat detection and access control.",
      benefits: [
        "24/7 vault monitoring",
        "ATM security integration",
        "Facial recognition",
        "Regulatory compliance"
      ],
      image: "/images/access.jpg",
      stats: {
        locations: "1,200+",
        reduction: "45%",
        savings: "$3.2M"
      }
    },
    healthcare: {
      icon: <Hospital className="w-8 h-8" />,
      title: "Healthcare",
      description: "Protect patients, staff, and sensitive medical facilities with intelligent surveillance.",
      benefits: [
        "Patient safety monitoring",
        "Asset tracking",
        "Staff authentication",
        "HIPAA compliance"
      ],
      image: "/images/access.jpg",
      stats: {
        locations: "800+",
        reduction: "35%",
        savings: "$1.8M"
      }
    },
    government: {
      icon: <Landmark className="w-8 h-8" />,
      title: "Government",
      description: "Secure government facilities with military-grade surveillance and access control.",
      benefits: [
        "Perimeter security",
        "Classified area monitoring",
        "Personnel tracking",
        "Incident response"
      ],
      image: "/images/access.jpg",
      stats: {
        locations: "500+",
        reduction: "50%",
        savings: "$4.5M"
      }
    }
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Industry Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tailored security solutions for every sector
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Industry Navigation */}
          <div className="lg:col-span-2 space-y-4">
            {(Object.entries(industries) as [IndustryKey, Industry][]).map(([key, industry]) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key)}
                className={`w-full p-6 rounded-xl text-left transition-all transform hover:scale-105 ${
                  activeIndustry === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={activeIndustry === key ? 'text-white' : 'text-blue-600'}>
                    {industry.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{industry.title}</h3>
                    <p className={`text-sm ${
                      activeIndustry === key ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {industry.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-5 h-5 ${
                    activeIndustry === key ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
              </button>
            ))}
          </div>

          {/* Industry Details */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img
                src={industries[activeIndustry].image}
                alt={industries[activeIndustry].title}
                className="w-full h-64 object-cover rounded-lg mb-8"
              />

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-1">
                    {industries[activeIndustry].stats.locations}
                  </p>
                  <p className="text-sm text-gray-600">Protected Locations</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-1">
                    {industries[activeIndustry].stats.reduction}
                  </p>
                  <p className="text-sm text-gray-600">Incident Reduction</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <p className="text-2xl font-bold text-blue-600 mb-1">
                    {industries[activeIndustry].stats.savings}
                  </p>
                  <p className="text-sm text-gray-600">Annual Savings</p>
                </div>
              </div>

              <h4 className="text-xl font-bold mb-4">Key Benefits</h4>
              <ul className="space-y-3">
                {industries[activeIndustry].benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-blue-100 p-1 rounded-full">
                      <Check className="w-4 h-4 text-blue-600" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustriesSection;