import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Cloud, Database, Zap } from "lucide-react";

const About = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL", "HTML/CSS"]
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Frameworks",
      skills: ["Spring Boot", "React", "Next.js", "FastAPI", "Pytest", "JUnit", "Pandas"]
    },
    {
      icon: <Cloud className="w-6 h-6" />,
      title: "Cloud & DevOps",
      skills: ["AWS", "Azure", "Docker", "CI/CD", "Git", "GCP", "Kubernetes", "Terraform"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Databases",
      skills: ["PostgreSQL", "MongoDB", "OpenSearch", "Kafka", "Redis", "NoSQL"]
    }
  ];

  return (
    <section id="about" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in building scalable systems 
            and solving complex optimization problems. Currently pursuing my MS in Computer Science 
            at UNC Chapel Hill while contributing to production systems.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          {/* Professional Summary */}
          <Card className="card-gradient border-primary/20 shadow-elevated">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-gradient">Professional Summary</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Full-stack SDE intern experienced in building production-grade 
                  document-processing pipelines on AWS and applying advanced optimization 
                  models to solve NP-hard resource allocation problems.
                </p>
                <p>
                  Contributed to a <span className="text-primary font-semibold">$1M+ Performance Management System</span> by 
                  delivering a key proof-of-concept using React/Next.js and Python/Flask.
                </p>
                <p>
                  Reduced asset-tracking costs by <span className="text-accent font-semibold">37%</span> by developing a 
                  device-management portal for 10,000+ employees.
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
              <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all hover:scale-105 group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary group-hover:text-accent transition-colors">
                      {category.icon}
                    </div>
                    <h4 className="font-bold text-lg">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
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
          <h4 className="text-xl font-semibold mb-4 text-muted-foreground">Core Concepts</h4>
          <div className="flex flex-wrap justify-center gap-3">
            {["System Design", "Distributed Systems", "Microservices", "Algorithms", "Data Structures"].map((concept, index) => (
              <Badge key={index} variant="outline" className="text-sm px-4 py-2">
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