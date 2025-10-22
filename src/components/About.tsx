import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code,
  Cloud,
  Database,
  Zap,
  Layers,
  Wrench,
  Brain,
  Settings,
} from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: [
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
      icon: <Layers className="w-6 h-6" />,
      title: "Frontend Technologies",
      skills: [
        "React",
        "Next.js",
        "Fluent UI",
        "HTML/CSS",
        "Flutter",
        "Jinja2",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Backend & APIs",
      skills: [
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
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: [
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
      icon: <Database className="w-6 h-6" />,
      title: "Databases & Storage",
      skills: [
        "MySQL",
        "PostgreSQL",
        "Redis",
        "OpenSearch",
        "MongoDB",
        "Database Design",
      ],
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Data & ML",
      skills: [
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
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: [
        "Git",
        "Jira",
        "Trello",
        "LaTeX",
        "Linux",
        "Agile",
        "Microsoft Teams",
      ],
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Specialized Skills",
      skills: [
        "Algorithm Design",
        "System Architecture",
        "Performance Optimization",
        "Security",
      ],
    },
  ];

  return (
    <section
      id="about"
      className="py-16 px-4 bg-gray-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack Software Development Engineer with expertise in building
            scalable systems, automation platforms, and solving complex
            optimization problems. Currently pursuing MS in Computer Science at
            UNC Chapel Hill (4.0 GPA) while developing production systems that
            drive measurable business impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16 scroll-animate">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated card-hover-lift glow-on-hover">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Professional Summary
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Software Development Engineer experienced in building
                  production-grade automation platforms, event-driven
                  architectures, and intelligent systems. Track record of
                  delivering measurable impact:{" "}
                  <span className="text-primary font-semibold">
                    60% workload reduction
                  </span>
                  ,
                  <span className="text-primary font-semibold">
                    {" "}
                    99.9% time savings
                  </span>
                  , and
                  <span className="text-primary font-semibold">
                    {" "}
                    $1M+ budget approvals
                  </span>
                  .
                </p>
                <p>
                  Led development of Python autograding platform using NLP and
                  ML, adopted by
                  <span className="text-accent font-semibold">
                    {" "}
                    13 instructors
                  </span>{" "}
                  across multiple courses. Architected event-driven systems
                  processing{" "}
                  <span className="text-accent font-semibold">
                    1000-page reports
                  </span>{" "}
                  in <span className="text-accent font-semibold"> 1 day</span>{" "}
                  (previously 3-6+ months).
                </p>
                <p>
                  Proven ability to convince skeptical stakeholders, lead intern
                  teams, and deliver production systems under tight deadlines.
                  Passionate about building tools that eliminate manual work and
                  enable data-driven decision making.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          <h3 className="text-3xl font-bold text-center scroll-animate">
            <span className="text-gradient">Skills</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className={`card-gradient border-primary/20 shadow-elevated card-hover-lift glow-on-hover group ${
                  index % 2 === 0
                    ? "scroll-animate-left"
                    : "scroll-animate-right"
                }`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
