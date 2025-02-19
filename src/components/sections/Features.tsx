import React from 'react';
import { Shield, Camera, Brain, Bell, Lock, Activity } from 'lucide-react';

// Define types for FeatureCard props
type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeaturesSection = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Security Features
          </h2>
          <p className="text-xl text-gray-600">
            Our AI-powered platform provides comprehensive security solutions with cutting-edge technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Brain className="w-12 h-12 text-blue-600" />}
            title="AI Threat Detection"
            description="Advanced machine learning algorithms identify potential threats in real-time with 99.9% accuracy."
          />
          <FeatureCard
            icon={<Camera className="w-12 h-12 text-blue-600" />}
            title="Smart Surveillance"
            description="24/7 monitoring with intelligent camera systems that adapt to environmental changes."
          />
          <FeatureCard
            icon={<Bell className="w-12 h-12 text-blue-600" />}
            title="Instant Alerts"
            description="Receive immediate notifications on potential security breaches with detailed incident reports."
          />
          <FeatureCard
            icon={<Lock className="w-12 h-12 text-blue-600" />}
            title="Access Control"
            description="Secure biometric authentication and multi-factor authorization systems."
          />
          <FeatureCard
            icon={<Activity className="w-12 h-12 text-blue-600" />}
            title="Real-time Analytics"
            description="Comprehensive dashboard with instant insights and security metrics."
          />
          <FeatureCard
            icon={<Shield className="w-12 h-12 text-blue-600" />}
            title="Incident Response"
            description="Automated emergency protocols and coordinated response systems."
          />
        </div>
      </div>
    </div>
  );
};

// FeatureCard component with TypeScript props
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="bg-blue-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default FeaturesSection;