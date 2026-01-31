"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface Project {
  id: number;
  title: string;
  description: string;
  category: "know" | "learned" | "aspiring";
  tags: string[];
  link: string;
  demoLink?: string;
  image?: string;
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include product catalog, shopping cart, payment integration, and admin dashboard. This project demonstrates my core expertise in building scalable web applications.",
    category: "know",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    link: "#",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    title: "AI-Powered Task Manager",
    description:
      "A modern task management application with AI-powered suggestions. Built with Next.js and TypeScript, featuring real-time updates and smart task categorization. I learned valuable lessons about performance optimization and user experience design through this project.",
    category: "learned",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    link: "#",
    demoLink: "#",
    image: "https://dotsolved.com/wp-content/uploads/2024/09/7-AI-Powered-Automations-to-Free-up-your-Work-Hours-featuredimage.webp",
  },
  {
    id: 7,
    title: "Machine Learning Dashboard",
    description:
      "An interactive data visualization dashboard for ML model analysis. Currently exploring deep learning concepts and data science tools. This project represents my ambition to combine frontend expertise with AI/ML capabilities.",
    category: "aspiring",
    tags: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
    link: "#",
    demoLink: "#",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "know" | "learned" | "aspiring">("all");
  const [isMounted, setIsMounted] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"view" | "demo" | null>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const filteredProjects =
    activeCategory === "all" ? PROJECTS : PROJECTS.filter((p) => p.category === activeCategory);

  const categoryLabels = {
    know: "What I Know",
    learned: "What I Learned",
    aspiring: "What I'm Aspiring To",
  };

  const handleViewClick = (projectId: number, mode: "view" | "demo") => {
    setSelectedProject(projectId);
    setViewMode(mode);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setViewMode(null);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-slideInUp">
          <p className="text-accent font-semibold mb-2">Portfolio</p>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">The Big Three</h2>
          <p className="text-lg text-secondary max-w-2xl mx-auto">
            Three projects that showcase my growth as a developer
          </p>
        </div>

        {/* Category Filter */}
        {isMounted && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === "all"
                  ? "bg-accent text-white shadow-lg"
                  : "bg-gray-100 text-secondary hover:bg-gray-200"
              }`}
            >
              All
            </button>
            {(["know", "learned", "aspiring"] as const).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-white shadow-lg"
                    : "bg-gray-100 text-secondary hover:bg-gray-200"
                }`}
              >
                {categoryLabels[category]}
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 animate-slideInUp"
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* Project Header */}
              <div className="h-32 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/10 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">
                    {project.id}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="mb-3">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-sm font-semibold ${
                      project.category === "know"
                        ? "bg-blue-100 text-blue-700"
                        : project.category === "learned"
                        ? "bg-green-100 text-green-700"
                        : "bg-purple-100 text-purple-700"
                    }`}
                  >
                    {categoryLabels[project.category]}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-secondary text-sm mb-4 line-clamp-3">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleViewClick(project.id, "view")}
                    className="flex-1 px-4 py-2 bg-accent text-white rounded-lg text-center font-medium hover:bg-blue-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
                  >
                    View
                  </button>
                  {project.demoLink && (
                    <button
                      onClick={() => handleViewClick(project.id, "demo")}
                      className="flex-1 px-4 py-2 border-2 border-accent text-accent rounded-lg text-center font-medium hover:bg-accent/10 hover:shadow-lg transform hover:scale-105 transition-all duration-300 active:scale-95"
                    >
                      Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isMounted && selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-96 overflow-y-auto animate-slideInUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-accent/10 to-accent/5 border-b border-gray-200 p-6 flex justify-between items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary">
                  {PROJECTS.find((p) => p.id === selectedProject)?.title}
                </h3>
                <p className="text-secondary text-sm mt-1">
                  {viewMode === "view" ? "Project Overview" : "Live Demo"}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-200 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {viewMode === "view" ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-primary mb-2">Project Description</h4>
                    <p className="text-secondary leading-relaxed">
                      {PROJECTS.find((p) => p.id === selectedProject)?.description}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-primary mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {PROJECTS.find((p) => p.id === selectedProject)?.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <p className="text-sm text-secondary mb-4">Ready to learn more?</p>
                    <button className="w-full px-4 py-2 bg-accent text-white rounded-lg font-medium hover:bg-blue-600 transition-colors">
                      View Full Project →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center min-h-40">
                    <div className="text-center">
                      <svg className="w-16 h-16 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-secondary font-medium">Interactive Demo</p>
                      <p className="text-sm text-gray-500 mt-1">Click the button below to experience the live demo</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-200">
                    <button className="w-full px-4 py-2 bg-gradient-to-r from-accent to-blue-600 text-white rounded-lg font-medium hover:shadow-lg transition-all transform hover:scale-105">
                      Launch Live Demo →
                    </button>
                    <p className="text-xs text-secondary text-center mt-2">Demo opens in a new tab</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}


