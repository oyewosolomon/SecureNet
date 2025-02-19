import React, { useState, useEffect } from 'react';
import { Shield, Award, Users, Globe, Building, Check } from 'lucide-react';

const AboutSection = () => {
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

    const element = document.getElementById('about-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: <Building className="w-6 h-6" />, value: "10,000+", label: "Locations Protected" },
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Security Experts" },
    { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries" },
    { icon: <Award className="w-6 h-6" />, value: "99.9%", label: "Detection Accuracy" }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "/images/man.jpg",
      bio: "20+ years in security and AI technology"
    },
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "/images/man.jpg",
      bio: "Former Head of AI at Major Tech"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      image: "/images/man.jpg",
      bio: "PhD in Computer Vision and AI"
    },
    {
      name: "James Park",
      role: "Security Operations Director",
      image: "/images/man.jpg",
      bio: "Ex-Military Intelligence Officer"
    }
  ];

  return (
    <div id="about-section" className="bg-white py-24">
      <div className="container mx-auto px-6">
        {/* Mission Statement */}
        <div className={`text-center max-w-3xl mx-auto mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Securing the Future with AI
          </h2>
          <p className="text-xl text-gray-600">
            SecureNet Systems is revolutionizing security surveillance through cutting-edge AI technology. 
            Our mission is to create safer spaces by providing intelligent, reliable, and scalable security solutions.
          </p>
        </div>

        {/* Stats */}
        <div className={`grid md:grid-cols-4 gap-8 mb-20 transform transition-all duration-1000 delay-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className={`transform transition-all duration-1000 delay-500 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                    <p className="text-white">{member.bio}</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;