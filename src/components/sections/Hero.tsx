import React, { useState, useEffect } from 'react';
import { Shield, Eye, BellRing, ArrowRight } from 'lucide-react';

// Define types for StatsCard props
type StatsCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-black opacity-50">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,#1a365d_12%,transparent_12.5%,transparent_87%,#1a365d_87.5%,#1a365d)] bg-[length:30px_30px]"></div>
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
              Secure Your World with AI-Powered Surveillance
            </h1>
            <p className="text-xl text-gray-300">
              Protecting 10,000+ locations with advanced AI threat detection and instant response systems.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center gap-2 transform transition hover:scale-105">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white/20 hover:border-white/40 text-white px-8 py-4 rounded-lg flex items-center gap-2 backdrop-blur-sm transform transition hover:scale-105">
                Watch Demo
              </button>
            </div>
          </div>

          {/* Right content - Stats */}
          <div className={`grid grid-cols-2 gap-6 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
            <StatsCard 
              icon={<Shield className="w-8 h-8 text-blue-400" />}
              title="90% Reduction"
              description="in False Alarms"
            />
            <StatsCard 
              icon={<Eye className="w-8 h-8 text-blue-400" />}
              title="24/7 Monitoring"
              description="Real-time surveillance"
            />
            <StatsCard 
              icon={<BellRing className="w-8 h-8 text-blue-400" />}
              title="Instant Alerts"
              description="AI-powered detection"
            />
            <StatsCard 
              icon={<Shield className="w-8 h-8 text-blue-400" />}
              title="10,000+"
              description="Protected locations"
            />
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </div>
  );
};

// StatsCard component with TypeScript props
const StatsCard: React.FC<StatsCardProps> = ({ icon, title, description }) => (
  <div className="bg-white/10 backdrop-blur-lg p-6 rounded-xl hover:bg-white/15 transition-all duration-300 transform hover:scale-105">
    <div className="flex flex-col gap-4">
      {icon}
      <h3 className="text-2xl font-bold text-white">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

export default HeroSection;