import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, TrendingUp, Zap, Brain, Target } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cervical Cancer Detection Demonstration",
      description: "Advanced machine learning pipeline for medical image classification using novel CNN-UMAP-SVM architecture to improve early detection accuracy.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "12% F1 Score Increase",
          description: "Enhanced model performance through innovative CNN-UMAP-SVM pipeline architecture"
        },
        {
          metric: "<2% False Negatives",
          description: "Achieved critical accuracy threshold for medical diagnostics applications"
        }
      ],
      technologies: ["Python", "TensorFlow", "Keras", "scikit-learn", "UMAP", "OpenCV", "Pandas", "NumPy", "Jupyter"],
      category: "Machine Learning",
      gradient: "from-purple-500 to-pink-500",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      title: "MatchWise - Resource Optimization",
      description: "Intelligent resource allocation system using Integer Linear Programming to solve NP-hard assignment problems with real-time optimization capabilities.",
      icon: <Target className="w-8 h-8" />,
      achievements: [
        {
          metric: "90% Time Reduction",
          description: "Dramatically reduced manual allocation time through automated ILP optimization"
        },
        {
          metric: "<200ms Response Time",
          description: "Real-time API performance enabling interactive optimization workflows"
        }
      ],
      technologies: ["Python", "FastAPI", "PuLP", "OR-Tools", "Flutter", "Dart", "Firebase", "GitHub Actions"],
      category: "Optimization",
      gradient: "from-blue-500 to-cyan-500",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section id="projects" className="py-24 px-4 bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining machine learning, optimization algorithms, 
            and modern web technologies to solve real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-gradient border-primary/20 shadow-elevated hover:shadow-lg transition-all group overflow-hidden h-full flex flex-col">
                    <CardHeader className="pb-4">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl ${getGradientClasses(project.gradient)} text-white shadow-lg group-hover:scale-110 transition-transform`}>
                          {project.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <Badge variant="secondary" className="text-xs">
                              {project.category}
                            </Badge>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                            {project.title}
                          </h3>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6 flex-grow flex flex-col">
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>

                      {/* Key Achievements */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements</h4>
                        {project.achievements.map((achievement, achIndex) => (
                          <div key={achIndex} className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10">
                            <div className="flex-shrink-0 mt-0.5">
                              <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center">
                                <Zap className="w-3 h-3 text-primary" />
                              </div>
                            </div>
                            <div>
                              <div className="text-primary font-semibold text-sm">
                                {achievement.metric}
                              </div>
                              <p className="text-xs text-muted-foreground">
                                {achievement.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4 mt-auto">
                        <Button variant="default" size="sm" asChild className="flex-1">
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                            View Demo
                          </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild className="flex-1">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="card-gradient border-primary/20 shadow-elevated max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Interested in <span className="text-gradient">Collaboration?</span>
              </h3>
              <p className="text-muted-foreground mb-6">
                I'm always excited to work on challenging problems and innovative solutions. 
                Let's discuss how we can build something amazing together.
              </p>
              <Button variant="gradient" size="lg" asChild>
                <a href="mailto:srmanda.cs@gmail.com">
                  Get In Touch
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;