"use client";

import { useState, useEffect } from "react";

interface LearningItem {
  id: number;
  title: string;
  description: string;
  progress: number;
  category: string;
  resources?: string[];
}

const LEARNING_ITEMS: LearningItem[] = [
  {
    id: 1,
    title: "Advanced TypeScript",
    description: "Mastering generics, utility types, and advanced type patterns for robust applications.",
    progress: 75,
    category: "Languages",
    resources: ["TypeScript Handbook", "Advanced TypeScript Course"],
  },
  {
    id: 2,
    title: "Web Performance Optimization",
    description: "Learning Core Web Vitals, lazy loading, code splitting, and performance monitoring.",
    progress: 60,
    category: "Performance",
    resources: ["Web.dev", "Performance Audit Tools"],
  },
  {
    id: 3,
    title: "GraphQL & Apollo",
    description: "Building efficient APIs with GraphQL and state management with Apollo Client.",
    progress: 50,
    category: "Backend",
    resources: ["GraphQL Official Docs", "Apollo Tutorial"],
  },
  {
    id: 4,
    title: "Cloud Deployment",
    description: "Deploying applications to AWS, GCP, and mastering containerization with Docker.",
    progress: 55,
    category: "DevOps",
    resources: ["AWS Documentation", "Docker Guide"],
  },
  {
    id: 5,
    title: "UI/UX Design Principles",
    description: "Understanding design systems, accessibility, and user-centered design methodologies.",
    progress: 65,
    category: "Design",
    resources: ["Design Laws", "A11y Best Practices"],
  },
  {
    id: 6,
    title: "Web3 & Blockchain",
    description: "Exploring smart contracts, Web3.js, and building decentralized applications.",
    progress: 40,
    category: "Emerging Tech",
    resources: ["Solidity Docs", "Web3 Dev"],
  },
];

export default function LearningSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [selectedStat, setSelectedStat] = useState<string | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const categories = Array.from(new Set(LEARNING_ITEMS.map((item) => item.category)));
  const avgProgress = Math.round(LEARNING_ITEMS.reduce((a, b) => a + b.progress, 0) / LEARNING_ITEMS.length);

  const stats = [
    { 
      label: "Topics Learning", 
      value: LEARNING_ITEMS.length,
      id: "topics",
      detail: `Learning ${LEARNING_ITEMS.length} different topics to expand my skills`
    },
    { 
      label: "Avg Progress", 
      value: `${avgProgress}%`,
      id: "progress",
      detail: `Average progress across all learning topics is ${avgProgress}%`
    },
    { 
      label: "Categories", 
      value: categories.length,
      id: "categories",
      detail: `Covering ${categories.length} categories: ${categories.join(", ")}`
    },
    { 
      label: "Total Hours", 
      value: "150+",
      id: "hours",
      detail: "Over 150 hours invested in continuous learning and skill development"
    },
  ];

  return (
    <section id="learning" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideInUp">
          <p className="text-accent font-semibold mb-2">Growth Mindset</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Currently Learning</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Continuous learning is at the core of my development journey. Here's what I'm exploring right now.
          </p>
        </div>

        {/* Learning Items */}
        {isMounted && (
          <div className="space-y-4">
            {LEARNING_ITEMS.map((item, index) => (
              <div
                key={item.id}
                className="group bg-white rounded-lg border border-gray-200 hover:border-accent overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 animate-slideInUp"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <button
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                        {item.title}
                      </h3>
                      <span className="px-2 py-1 text-xs font-semibold bg-accent/10 text-accent rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-secondary text-sm">{item.description}</p>
                  </div>

                  {/* Expand Icon */}
                  <svg
                    className={`w-5 h-5 text-accent ml-4 transition-transform duration-300 ${
                      expandedId === item.id ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>

                {/* Expanded Content */}
                {expandedId === item.id && (
                  <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 animate-slideInDown">
                    {/* Progress Bar */}
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-semibold text-primary">Progress</span>
                        <span className="text-sm font-bold text-accent">{item.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-accent to-blue-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Resources */}
                    {item.resources && item.resources.length > 0 && (
                      <div>
                        <p className="text-sm font-semibold text-primary mb-2">Resources</p>
                        <div className="space-y-2">
                          {item.resources.map((resource) => (
                            <div key={resource} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                              <span className="text-sm text-secondary">{resource}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, index) => (
            <button
              key={stat.id}
              onClick={() => setSelectedStat(selectedStat === stat.id ? null : stat.id)}
              className="bg-white rounded-lg p-4 text-center border-2 border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300 animate-slideInUp transform hover:scale-105 cursor-pointer relative overflow-hidden group"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
              }}
            >
              {/* Animated background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <p className="text-sm text-secondary mb-1 font-medium">{stat.label}</p>
                <p className={`text-2xl md:text-3xl font-bold transition-all duration-300 ${
                  selectedStat === stat.id ? "text-accent scale-110" : "text-accent"
                }`}>
                  {stat.value}
                </p>
                
                {/* Expanded detail */}
                {selectedStat === stat.id && (
                  <div className="mt-3 pt-3 border-t border-gray-200 animate-slideInDown">
                    <p className="text-sm text-secondary leading-relaxed">{stat.detail}</p>
                  </div>
                )}
              </div>

              {/* Visual indicator for interactive elements */}
              <div className="absolute top-2 right-2 w-2 h-2 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
