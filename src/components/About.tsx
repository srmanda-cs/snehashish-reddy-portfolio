import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: [
        "Python",
        "JavaScript",
        "TypeScript",
        "Java",
        "SQL",
        "C++",
        "C#",
      ],
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Frameworks & Tools",
      skills: [
        "React",
        "Next.js",
        "FastAPI",
        "Flask",
        "Spring Boot",
        "Pandas",
        "NumPy",
      ],
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: [
        "AWS Lambda",
        "AWS S3",
        "Azure AD",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Git",
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Databases",
      skills: [
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "OpenSearch",
        "Redis",
        "Database Design",
      ],
    },
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Full-stack software engineer with expertise in building scalable
            systems, automation platforms, and solving complex optimization
            problems. Currently pursuing MS in Computer Science at UNC Chapel
            Hill (4.0 GPA) while developing production systems that drive
            measurable business impact.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">
                Professional Summary
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Software engineer experienced in building production-grade
                  automation platforms, event-driven architectures, and
                  intelligent systems. Track record of delivering measurable
                  impact:{" "}
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
          <h3 className="text-3xl font-bold text-center">
            Areas of <span className="text-gradient">Expertise</span>
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs"
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

        {/* Core Concepts */}
        <div className="mt-12 text-center">
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">
            Core Concepts
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "System Architecture",
              "Event-Driven Design",
              "NLP & ML",
              "Algorithm Design",
              "Performance Optimization",
              "Automation",
            ].map((concept, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-sm px-4 py-2"
              >
                {concept}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
