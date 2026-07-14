"use client";

import { useState } from "react";

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
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filters: Category[] = ["All", "Web Development", "Mobile Development", "Desktop Development", "Databases", "Ideation & Design"];
  
  const filteredTech = activeFilter === "All" 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  return (
    <section className="tech-section">
      <div className="section-heading">
        <div><span className="section-index">02</span><p>Tools of the trade</p></div>
        <h2>Technologies we work with</h2>
      </div>

      <div className="tech-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="tech-grid">
        {filteredTech.map((tech, index) => (
          <article key={`${tech.name}-${index}`} className="tech-card">
            <span className="card-number">{String(index + 1).padStart(2, "0")}</span>
            <div className="tech-icon-wrapper">
              <img 
                src={`/icons/${tech.icon}`} 
                alt={`${tech.name} logo`} 
                className="tech-icon" 
              />
            </div>
            <h3>{tech.name}</h3>
            <p>{tech.category}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
