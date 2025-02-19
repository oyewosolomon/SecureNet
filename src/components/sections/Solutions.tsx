import React, { useState } from 'react';
import { 
  Building2, GraduationCap, Music, Briefcase,
  ArrowRight, Users, Clock, Globe2
} from 'lucide-react';

// Define types
type Metric = {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
};

type CaseStudy = {
  client: string;
  description: string;
  results: string[];
};

type Solution = {
  title: string;
  subtitle: string;
  metrics: Metric[];
  caseStudy: CaseStudy;
};

type Tab = {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
};

// Enum for tab IDs
enum TabIds {
  Corporate = 'corporate',
  Education = 'education',
  Entertainment = 'entertainment',
  Business = 'business',
}

const SolutionsShowcase = () => {
  const [activeTab, setActiveTab] = useState<TabIds>(TabIds.Corporate);

  const solutions: Record<TabIds, Solution> = {
    [TabIds.Corporate]: {
      title: "Corporate Events",
      subtitle: "Global Town Halls & Conferences",
      metrics: [
        { icon: Users, value: "50,000+", label: "Attendees" },
        { icon: Clock, value: "8 Hours", label: "Duration" },
        { icon: Globe2, value: "25+", label: "Countries" }
      ],
      caseStudy: {
        client: "TechCorp International",
        description: "Annual virtual shareholder meeting connecting 50,000 investors across 25 countries with real-time translation and interactive Q&A sessions.",
        results: [
          "98% attendance rate",
          "45% increase in engagement",
          "$2M saved in travel costs"
        ]
      }
    },
    [TabIds.Education]: {
      title: "Educational Events",
      subtitle: "Virtual Classrooms & Seminars",
      metrics: [
        { icon: Users, value: "25,000+", label: "Students" },
        { icon: Clock, value: "12 Hours", label: "Daily" },
        { icon: Globe2, value: "15+", label: "Countries" }
      ],
      caseStudy: {
        client: "Global Learning Institute",
        description: "Continuous virtual learning platform supporting 25,000 students with interactive workshops and real-time collaboration.",
        results: [
          "96% student satisfaction",
          "40% better retention rates",
          "500+ courses delivered"
        ]
      }
    },
    [TabIds.Entertainment]: {
      title: "Entertainment Events",
      subtitle: "Concerts & Performances",
      metrics: [
        { icon: Users, value: "100,000+", label: "Viewers" },
        { icon: Clock, value: "4 Hours", label: "Duration" },
        { icon: Globe2, value: "40+", label: "Countries" }
      ],
      caseStudy: {
        client: "WorldStage Music Festival",
        description: "Virtual music festival featuring 20 artists performing for over 100,000 concurrent viewers with synchronized light shows.",
        results: [
          "99.9% stream uptime",
          "2M+ total views",
          "$5M in ticket sales"
        ]
      }
    },
    [TabIds.Business]: {
      title: "Business Conferences",
      subtitle: "Trade Shows & Expos",
      metrics: [
        { icon: Users, value: "75,000+", label: "Participants" },
        { icon: Clock, value: "3 Days", label: "Duration" },
        { icon: Globe2, value: "30+", label: "Countries" }
      ],
      caseStudy: {
        client: "Global Trade Connect",
        description: "Virtual trade show connecting 75,000 businesses with interactive booths and networking opportunities.",
        results: [
          "10,000+ business matches",
          "50,000+ meetings scheduled",
          "92% exhibitor satisfaction"
        ]
      }
    }
  };

  const tabs: Tab[] = [
    { id: TabIds.Corporate, icon: Building2, label: 'Corporate' },
    { id: TabIds.Education, icon: GraduationCap, label: 'Education' },
    { id: TabIds.Entertainment, icon: Music, label: 'Entertainment' },
    { id: TabIds.Business, icon: Briefcase, label: 'Business' }
  ];

  const activeSolution = solutions[activeTab];

  return (
    <div className="bg-gray-50 py-24" id='solutions'>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Solutions for Every 
            <span className="text-purple-600"> Industry</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover how VirtualStage transforms events across different sectors, 
            delivering exceptional experiences for every use case.
          </p>
        </div>

        {/* Solution Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as TabIds)}
              className={`flex items-center px-6 py-3 rounded-full transition-all
                ${activeTab === id 
                  ? 'bg-purple-600 text-white' 
                  : 'bg-white text-gray-600 hover:bg-purple-50'}`}
            >
              <Icon className="w-5 h-5 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Active Solution Content */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column - Metrics */}
            <div>
              <h3 className="text-3xl font-bold mb-2">{activeSolution.title}</h3>
              <p className="text-purple-600 text-xl mb-8">{activeSolution.subtitle}</p>
              
              <div className="grid grid-cols-3 gap-6 mb-8">
                {activeSolution.metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <metric.icon className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                    <div className="text-2xl font-bold mb-1">{metric.value}</div>
                    <div className="text-gray-600 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Case Study */}
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="text-sm text-purple-600 font-medium mb-4">CASE STUDY</div>
              <h4 className="text-xl font-bold mb-4">{activeSolution.caseStudy.client}</h4>
              <p className="text-gray-600 mb-6">{activeSolution.caseStudy.description}</p>
              
              <div className="space-y-4">
                {activeSolution.caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <ArrowRight className="w-5 h-5 text-purple-600 mr-2" />
                    {result}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <button className="bg-purple-600 text-white px-8 py-4 rounded-full font-medium hover:bg-purple-700 transition-colors">
            See More Success Stories
          </button>
        </div>
      </div>
    </div>
  );
};

export default SolutionsShowcase;