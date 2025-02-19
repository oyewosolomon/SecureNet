import React, { useState } from 'react';
import { Camera, Users, Bell, Shield, Activity, Lock } from 'lucide-react';

// Define types for the feature object
type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  demo: string;
};

type Features = {
  [key: string]: Feature;
};

const DemoShowcase = () => {
  const [activeFeature, setActiveFeature] = useState<string>('monitoring');

  const features: Features = {
    monitoring: {
      title: "Live Monitoring",
      description: "Real-time video feeds with AI-enhanced motion detection and object recognition.",
      icon: <Camera className="w-8 h-8" />,
      demo: "/images/access.jpg"
    },
    access: {
      title: "Access Control",
      description: "Biometric authentication and visitor management system.",
      icon: <Users className="w-8 h-8" />,
      demo: "/images/access.jpg"
    },
    alerts: {
      title: "Smart Alerts",
      description: "Instant notification system with threat level classification.",
      icon: <Bell className="w-8 h-8" />,
       demo: "/images/access.jpg"
    }
  };

  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See SecureNet in Action
          </h2>
          <p className="text-xl text-gray-600">
            Experience our cutting-edge security features
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Feature Navigation */}
          <div className="space-y-4">
            {Object.entries(features).map(([key, feature]) => (
              <button
                key={key}
                onClick={() => setActiveFeature(key)}
                className={`w-full p-6 rounded-xl text-left transition-all ${
                  activeFeature === key
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-100'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`${
                    activeFeature === key ? 'text-white' : 'text-blue-600'
                  }`}>
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                    <p className={`${
                      activeFeature === key ? 'text-blue-100' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Demo Display */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <img
                src={features[activeFeature].demo}
                alt={features[activeFeature].title}
                className="w-full h-96 object-cover rounded-lg mb-6"
              />
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Activity className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold">Real-time Analysis</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Shield className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold">Threat Detection</h4>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <Lock className="w-6 h-6 text-blue-600 mb-2" />
                  <h4 className="font-semibold">Secure Access</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemoShowcase;