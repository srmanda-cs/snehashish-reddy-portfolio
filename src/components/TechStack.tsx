import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Cloud,
  Database,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    {
      id: "languages",
      name: "Languages",
      icon: <Code2 className="w-5 h-5" />,
      color: "from-blue-400 to-cyan-500",
      technologies: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "SQL",
        "KQL",
        "C++",
        "C#",
      ],
    },
    {
      id: "frontend",
      name: "Frontend",
      icon: <Layers className="w-5 h-5" />,
      color: "from-purple-400 to-pink-500",
      technologies: [
        "React",
        "Next.js",
        "Fluent UI",
        "HTML/CSS",
        "Flutter",
        "Jinja2",
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Database className="w-5 h-5" />,
      color: "from-green-400 to-emerald-500",
      technologies: [
        "Node.js",
        "Flask",
        "FastAPI",
        "Spring Boot",
        "REST API",
        "GraphQL",
        "Microservices",
      ],
    },
    {
      id: "cloud",
      name: "Cloud & DevOps",
      icon: <Cloud className="w-5 h-5" />,
      color: "from-orange-400 to-red-500",
      technologies: [
        "AWS Lambda",
        "AWS S3",
        "Azure AD",
        "Kubernetes",
        "Docker",
        "Serverless",
        "CI/CD",
      ],
    },
    {
      id: "data",
      name: "Data & ML",
      icon: <Sparkles className="w-5 h-5" />,
      color: "from-yellow-400 to-amber-500",
      technologies: [
        "Pandas",
        "NumPy",
        "Scikit-learn",
        "PyTorch",
        "NLP",
        "ETL",
        "Data Pipelines",
        "UMAP",
      ],
    },
  ];

  const allTechnologies = categories.flatMap((cat) =>
    cat.technologies.map((tech) => ({
      name: tech,
      category: cat.id,
      color: cat.color,
    }))
  );

  const displayedTechnologies =
    activeCategory === "all"
      ? allTechnologies
      : categories
          .find((cat) => cat.id === activeCategory)
          ?.technologies.map((tech) => ({
            name: tech,
            category: activeCategory,
            color:
              categories.find((cat) => cat.id === activeCategory)?.color || "",
          })) || [];

  return (
    <section className="py-16 bg-gray-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 scroll-animate">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technology{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Arsenal
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Production-tested technologies across the full stack, from frontend
            to cloud infrastructure
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 scroll-animate">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 min-h-[44px] ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg scale-105"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
            }`}
          >
            All Technologies
          </button>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2 min-h-[44px] ${
                activeCategory === category.id
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:scale-105"
              }`}
            >
              {category.icon}
              <span className="hidden sm:inline">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 max-w-7xl mx-auto">
          {displayedTechnologies.length > 0 ? (
            displayedTechnologies.map((tech, index) => (
              <div
                key={`${tech.category}-${tech.name}`}
                className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 scroll-animate"
                style={{ animationDelay: `${index * 30}ms` }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white group-hover:text-primary transition-colors duration-300">
                    {tech.name}
                  </h3>
                  <ChevronRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-400 text-lg">
                No technologies in this category
              </p>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto scroll-animate">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
              {allTechnologies.length}
            </div>
            <div className="text-sm text-gray-400">Technologies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
              {categories.length}
            </div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent mb-2">
              Full Stack
            </div>
            <div className="text-sm text-gray-400">Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
