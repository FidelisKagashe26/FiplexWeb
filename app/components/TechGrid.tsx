"use client";

import { useState } from "react";
import { useAppContext } from "../providers";

type Category = "All" | "Web Development" | "Mobile Development" | "Desktop Development" | "Databases" | "Ideation & Design";

interface Tech {
  name: string;
  category: Category;
  icon: string;
}

const technologies: Tech[] = [
  { name: "React", category: "Web Development", icon: "react.svg" },
  { name: "Next.js", category: "Web Development", icon: "nextjs.svg" },
  { name: "Node.js", category: "Web Development", icon: "nodejs.svg" },
  { name: "Express", category: "Web Development", icon: "express.svg" },
  { name: "Django", category: "Web Development", icon: "django.svg" },
  { name: "Python", category: "Web Development", icon: "python.svg" },
  { name: "Golang", category: "Web Development", icon: "go.svg" },
  { name: "Spring Boot", category: "Web Development", icon: "spring.svg" },
  { name: "Java", category: "Web Development", icon: "java.svg" },
  { name: "Angular", category: "Web Development", icon: "angular.svg" },
  { name: "Vue.js", category: "Web Development", icon: "vue.svg" },
  { name: "Tailwind", category: "Web Development", icon: "tailwindcss.svg" },
  { name: "Bootstrap", category: "Web Development", icon: "bootstrap.svg" },
  { name: "React Native", category: "Mobile Development", icon: "react.svg" },
  { name: "Flutter", category: "Mobile Development", icon: "flutter.svg" },
  { name: "Kotlin", category: "Mobile Development", icon: "kotlin.svg" },
  { name: "Electron", category: "Desktop Development", icon: "electron.svg" },
  { name: "PostgreSQL", category: "Databases", icon: "postgresql.svg" },
  { name: "MongoDB", category: "Databases", icon: "mongodb.svg" },
  { name: "Figma", category: "Ideation & Design", icon: "figma.svg" },
];

export default function TechGrid() {
  const { language } = useAppContext();
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filters: Category[] = ["All", "Web Development", "Mobile Development", "Desktop Development", "Databases", "Ideation & Design"];
  
  const filteredTech = activeFilter === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  const title = language === "sw" ? "Teknolojia tunazotumia" : "Technologies we work with";
  const eyebrow = language === "sw" ? "ZANA ZA KAZI" : "TOOLS OF THE TRADE";

  const getFilterLabel = (filter: Category) => {
    if (language === "en") return filter;
    if (filter === "All") return "Zote";
    if (filter === "Web Development") return "Web";
    if (filter === "Mobile Development") return "Mobile";
    if (filter === "Desktop Development") return "Desktop";
    if (filter === "Databases") return "Database";
    if (filter === "Ideation & Design") return "Ubunifu";
    return filter;
  };

  const getCategoryLabel = (category: Category) => {
    if (language === "en") return category;
    if (category === "Web Development") return "Ubunifu wa Web";
    if (category === "Mobile Development") return "Ubunifu wa Mobile";
    if (category === "Desktop Development") return "Ubunifu wa Desktop";
    if (category === "Databases") return "Database";
    if (category === "Ideation & Design") return "Ubunifu";
    return category;
  };

  return (
    <section className="tech-section">
      <div className="tech-header">
        <p className="tech-eyebrow">{eyebrow}</p>
        <h2 className="tech-title">{title}</h2>
      </div>

      <div className="tech-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {getFilterLabel(filter)}
          </button>
        ))}
      </div>

      <div className="tech-grid">
        {filteredTech.map((tech, index) => (
          <div key={`${tech.name}-${index}`} className="tech-card">
            <div className="tech-icon-wrapper">
              <img 
                src={`/icons/${tech.icon}`} 
                alt={`${tech.name} logo`} 
                className="tech-icon" 
              />
            </div>
            <h3 className="tech-name">{tech.name}</h3>
            <p className="tech-category">{getCategoryLabel(tech.category)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
