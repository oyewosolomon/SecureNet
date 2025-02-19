import React, { useState, useEffect } from 'react';
import { Camera, Brain, Shield, Bell, ArrowRight, Check } from 'lucide-react';

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('how-it-works');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: <Camera className="w-12 h-12" />,
      title: "Video Capture",
      description: "High-definition cameras capture real-time footage across all monitored locations",
      details: [
        "4K resolution cameras",
        "Wide-angle coverage",
        "Night vision capability",
        "Weather-resistant hardware"
      ]
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Analysis",
      description: "Advanced AI algorithms process video feeds to detect potential security threats",
      details: [
        "Real-time processing",
        "Pattern recognition",
        "Behavioral analysis",
        "Object detection"
      ]
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Threat Detection",
      description: "System identifies and classifies potential security risks with high accuracy",
      details: [
        "99.9% accuracy rate",
        "Minimal false positives",
        "Multi-level classification",
        "Continuous learning"
      ]
    },
    {
      icon: <Bell className="w-12 h-12" />,
      title: "Instant Response",
      description: "Immediate alerts and automated response protocols are triggered",
      details: [
        "Real-time notifications",
        "Automated responses",
        "Emergency services integration",
        "Incident logging"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="how-it-works" className="bg-gray-50 py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How SecureNet Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI-powered security platform works seamlessly to protect your assets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Interactive Display */}
          <div className={`relative h-96 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'
          }`}>
            <div className="absolute inset-0 bg-blue-600 rounded-3xl transform -rotate-6"></div>
            <div className="absolute inset-0 bg-white rounded-3xl shadow-xl">
              <div className="p-8">
                <div className="mb-8">
                  {steps[activeStep].icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {steps[activeStep].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {steps[activeStep].description}
                </p>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-600" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className={`space-y-6 transform transition-all duration-1000 ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
          }`}>
            {steps.map((step, index) => (
              <button
                key={index}
                className={`w-full p-6 rounded-xl text-left transition-all transform hover:scale-105 ${
                  activeStep === index
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white hover:bg-gray-100'
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="flex items-center gap-4">
                  <div className={activeStep === index ? 'text-white' : 'text-blue-600'}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                    <p className={activeStep === index ? 'text-blue-100' : 'text-gray-600'}>
                      {step.description}
                    </p>
                  </div>
                  <ArrowRight className={`w-6 h-6 ml-auto ${
                    activeStep === index ? 'text-white' : 'text-blue-600'
                  }`} />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;