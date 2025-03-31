import React, { useState, useEffect } from 'react';
import { Linkedin, Twitter, ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const team = [
    
    {
      name: "Michael Rodriguez",
      role: "Chief Technology Officer",
      image: "/images/c.jpg",
      bio: "Former Head of AI at TechCorp. Built machine learning systems deployed to millions of devices.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      image: "/images/g.jpg",
      bio: "20+ years in security and AI technology. Led three successful security startups to acquisition.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      image: "/images/r.jpg",
      bio: "PhD in Computer Vision from MIT. Published 50+ papers on object detection algorithms.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "James Park",
      role: "Security Operations Director",
      image: "/images/man.jpg",
      bio: "Decorated military intelligence officer with 15 years of field experience.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        // Auto-rotate team members
        const interval = setInterval(() => {
          setActiveIndex((prev) => (prev + 1) % team.length);
        }, 5000);
        return () => clearInterval(interval);
      }
    }, { threshold: 0.1 });

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const nextMember = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const prevMember = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  return (
    <div id="about-section" className="bg-white py-16">
      <div className="container mx-auto px-6">
        {/* Team Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
            MEET THE TEAM
          </span>
          <h3 className="text-4xl font-bold text-gray-900 mb-4">
            Leadership That Delivers
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our executive team combines decades of security expertise with cutting-edge AI innovation
          </p>
        </div>

        {/* Interactive Team Display */}
        <div className={`relative max-w-6xl mx-auto ${isVisible ? 'opacity-100' : 'opacity-0'} transition-opacity duration-1000`}>
          {/* Main Profile Card */}
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white z-10 w-1/2 p-12 flex flex-col justify-center">
              <h4 className="text-4xl font-bold text-gray-900 mb-2">{team[activeIndex].name}</h4>
              <p className="text-blue-600 text-xl font-medium mb-6">{team[activeIndex].role}</p>
              <p className="text-gray-600 text-lg mb-8">{team[activeIndex].bio}</p>
              <div className="flex gap-4">
                <a href={team[activeIndex].social.linkedin} className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-600 transition-all">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={team[activeIndex].social.twitter} className="w-12 h-12 rounded-full bg-blue-100 hover:bg-blue-200 flex items-center justify-center text-blue-600 transition-all">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full">
              <img 
                src={team[activeIndex].image} 
                alt={team[activeIndex].name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Team Member Selector */}
          <div className="flex justify-center gap-4 mt-8">
            {team.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                aria-label={`View ${team[index].name}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevMember}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextMember}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-12 h-12 rounded-full bg-white shadow-md flex items-center justify-center text-gray-600 hover:text-blue-600 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Team Grid (for smaller screens) */}
        <div className="grid grid-cols-2 gap-6 mt-16 md:hidden">
          {team.map((member, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-6 text-center">
              <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h4>
              <p className="text-blue-600 text-sm mb-3">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;