import React, { useState, useEffect } from 'react';
import { Plus, Minus, Search } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface CategoryData {
  id: string;
  name: string;
}

interface FAQCategory {
  [key: string]: FAQ[];
}

const FAQSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('general');
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filteredFAQs, setFilteredFAQs] = useState<FAQ[]>([]);

  const categories: CategoryData[] = [
    { id: 'general', name: 'General' },
    { id: 'technical', name: 'Technical' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'support', name: 'Support' }
  ];

  const faqs: FAQCategory = {
    general: [
      {
        question: "How does SecureNet's AI technology work?",
        answer: "SecureNet uses advanced artificial intelligence algorithms to analyze video feeds in real-time. Our system can detect suspicious behavior, unauthorized access, and potential security threats with 99.9% accuracy. The AI continuously learns and improves based on new data and scenarios."
      },
      {
        question: "What types of locations can SecureNet protect?",
        answer: "SecureNet is designed to protect various facilities including retail stores, banks, healthcare facilities, government buildings, educational institutions, and corporate offices. Our system is scalable and can be customized for locations of any size."
      },
      {
        question: "How quickly can SecureNet be implemented?",
        answer: "Typical implementation takes 2-4 weeks, depending on the size and complexity of your location. This includes hardware installation, software setup, system integration, and staff training."
      }
    ],
    technical: [
      {
        question: "What hardware requirements are needed?",
        answer: "SecureNet is compatible with most modern IP cameras and security systems. We provide a detailed hardware compatibility list and can assess your existing infrastructure to determine any necessary upgrades."
      },
      {
        question: "How is the system maintained and updated?",
        answer: "We provide regular over-the-air software updates and AI model improvements. Our system performs automatic health checks and preventive maintenance to ensure optimal performance."
      },
      {
        question: "Can SecureNet integrate with existing security systems?",
        answer: "Yes, SecureNet is designed to integrate with most major security systems and platforms. We provide APIs and standard protocols for seamless integration with access control systems, alarm systems, and building management systems."
      }
    ],
    pricing: [
      {
        question: "What are the pricing models available?",
        answer: "We offer flexible pricing based on location size, number of cameras, and required features. Our plans start from $999/month for small locations. Custom enterprise pricing is available for large-scale deployments."
      },
      {
        question: "Are there any additional costs?",
        answer: "The monthly subscription includes software updates, maintenance, and basic support. Hardware costs, if needed, are separate. Premium support and consulting services are available as add-ons."
      },
      {
        question: "Is there a minimum contract period?",
        answer: "We offer flexible contract terms starting from 12 months. Long-term commitments come with significant discounts. All plans include a 30-day satisfaction guarantee."
      }
    ],
    support: [
      {
        question: "What kind of support is included?",
        answer: "All plans include 24/7 technical support via email and phone. Enterprise plans include dedicated account managers and on-site support when needed."
      },
      {
        question: "How do I get help if there's an issue?",
        answer: "You can reach our support team through multiple channels: 24/7 phone support, email, live chat, or our online portal. Emergency issues are addressed within 15 minutes."
      },
      {
        question: "Do you provide training for our staff?",
        answer: "Yes, we provide comprehensive training for your security team. This includes system operation, alert management, and basic troubleshooting. Advanced training programs are available for enterprise clients."
      }
    ]
  };

  useEffect(() => {
    if (searchQuery) {
      const allFAQs = Object.values(faqs).flat();
      const filtered = allFAQs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFAQs(filtered);
    } else {
      setFilteredFAQs([]);
    }
  }, [searchQuery]);

  const toggleItem = (question: string) => {
    setOpenItems(prev => 
      prev.includes(question)
        ? prev.filter(item => item !== question)
        : [...prev, question]
    );
  };

  const FAQItem: React.FC<{ faq: FAQ }> = ({ faq }) => (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => toggleItem(faq.question)}
        className="w-full py-6 text-left focus:outline-none"
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900 pr-8">
            {faq.question}
          </h3>
          <div className="text-blue-600">
            {openItems.includes(faq.question) ? (
              <Minus className="w-5 h-5" />
            ) : (
              <Plus className="w-5 h-5" />
            )}
          </div>
        </div>
        <div className={`mt-3 overflow-hidden transition-all duration-300 ${
          openItems.includes(faq.question) ? 'max-h-96' : 'max-h-0'
        }`}>
          <p className="text-gray-600">
            {faq.answer}
          </p>
        </div>
      </button>
    </div>
  );

  return (
    <div className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about SecureNet's AI-powered security solutions
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search FAQ..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Category Tabs */}
          {!searchQuery && (
            <div className="flex flex-wrap gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          )}

          {/* FAQ List */}
          <div className="bg-white rounded-xl">
            {searchQuery ? (
              filteredFAQs.length > 0 ? (
                filteredFAQs.map((faq, index) => (
                  <FAQItem key={index} faq={faq} />
                ))
              ) : (
                <p className="text-center py-8 text-gray-600">
                  No matching questions found. Try a different search term.
                </p>
              )
            ) : (
              faqs[activeCategory].map((faq, index) => (
                <FAQItem key={index} faq={faq} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;