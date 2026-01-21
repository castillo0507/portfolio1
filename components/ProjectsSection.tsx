"use client";

import { useState, useEffect } from "react";

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
  },
  {
    id: 2,
    title: "AI-Powered Task Manager",
    description:
      "A modern task management application with AI-powered suggestions. Built with Next.js and TypeScript, featuring real-time updates and smart task categorization. I learned valuable lessons about performance optimization and user experience design through this project.",
    category: "learned",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "OpenAI API"],
    link: "#",
    demoLink: "#",
  },
  {
    id: 3,
    title: "Machine Learning Dashboard",
    description:
      "An interactive data visualization dashboard for ML model analysis. Currently exploring deep learning concepts and data science tools. This project represents my ambition to combine frontend expertise with AI/ML capabilities.",
    category: "aspiring",
    tags: ["Python", "TensorFlow", "React", "D3.js", "FastAPI"],
    link: "#",
    demoLink: "#",
  },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "know" | "learned" | "aspiring">("all");
  const [isMounted, setIsMounted] = useState(false);

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
                <div className="text-4xl font-bold text-accent/30 group-hover:text-accent/50 transition-colors duration-300">
                  {project.id}
                </div>
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
                  <a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-accent text-white rounded-lg text-center font-medium hover:bg-blue-600 transition-colors"
                  >
                    View
                  </a>
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      className="flex-1 px-4 py-2 border border-accent text-accent rounded-lg text-center font-medium hover:bg-accent/5 transition-colors"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
