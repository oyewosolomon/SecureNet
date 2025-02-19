import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Security Director",
      company: "Global Retail Corp",
      image: "/api/placeholder/80/80",
      quote: "SecureNet's AI detection has reduced our false alarms by 95% and improved response times dramatically. It's completely transformed how we manage security across our 200+ locations.",
      stats: "95% reduction in false alarms"
    },
    {
      name: "Michael Rodriguez",
      role: "Facility Manager",
      company: "Metropolitan Museum",
      image: "/api/placeholder/80/80",
      quote: "The automated threat detection has been a game-changer for our museum. We can now monitor all areas efficiently with fewer staff, while maintaining the highest security standards.",
      stats: "50% reduction in security staff needs"
    },
    {
      name: "David Park",
      role: "Operations Head",
      company: "TechHub Offices",
      image: "/api/placeholder/80/80",
      quote: "Implementation was smooth and the results were immediate. Our insurance premiums dropped significantly due to the enhanced security measures.",
      stats: "30% reduction in insurance costs"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-gray-900 py-24" id='testimonials'>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-300">
            See how SecureNet is transforming security operations worldwide
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="overflow-hidden relative">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-2xl p-8 shadow-xl">
                    <div className="flex items-center gap-4 mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        <p className="text-blue-600">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg text-gray-700 mb-4">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-blue-700 font-semibold">{testimonial.stats}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;