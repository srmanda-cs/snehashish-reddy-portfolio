import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Zap,
  Brain,
  Target,
  Rocket,
} from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Jobbernaut Tailor",
      description:
        "Intelligence-driven resume tailoring system with 13-step pipeline. Reduced tailoring time by 98% (30-40min to 30sec) while achieving 90%+ ATS compatibility across 200+ applications with zero hallucinations.",
      icon: <Rocket className="w-8 h-8" />,
      achievements: [
        {
          metric: "98% Time Reduction",
          description:
            "Reduced resume tailoring from 30-40 minutes to 30 seconds through automated intelligence-driven pipeline",
        },
        {
          metric: "200+ Applications, Zero Hallucinations",
          description:
            "Processed 200+ applications worldwide with zero instances of AI hallucination or factual errors",
        },
        {
          metric: "90%+ ATS Compatibility",
          description:
            "Achieved 90%+ ATS compatibility on Enhancv and Jobscan - unheard of for automated tools",
        },
      ],
      technologies: [
        "Python",
        "FastAPI",
        "OpenAI API",
        "Jinja2",
        "LaTeX",
        "Pydantic",
        "YAML",
        "CLI",
      ],
      category: "AI/Automation",
      gradient: "from-green-500 to-emerald-500",
      githubUrl: "https://github.com/Jobbernaut/jobbernaut-tailor",
    },
    {
      title: "Cervical Cancer Detection Demonstration",
      description:
        "Advanced machine learning pipeline for medical image classification using novel CNN-UMAP-SVM architecture to improve early detection accuracy.",
      icon: <Brain className="w-8 h-8" />,
      achievements: [
        {
          metric: "12% F1 Score Increase",
          description:
            "Enhanced model performance through innovative CNN-UMAP-SVM pipeline architecture",
        },
        {
          metric: "<2% False Negatives",
          description:
            "Achieved critical accuracy threshold for medical diagnostics applications",
        },
      ],
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "scikit-learn",
        "UMAP",
        "OpenCV",
        "Pandas",
        "NumPy",
        "Jupyter",
      ],
      category: "Machine Learning",
      gradient: "from-purple-500 to-pink-500",
      githubUrl:
        "https://www.kaggle.com/code/ashishreddy9000/fyp-track-4-darknet-feat-ext-umap-svm-rbf",
    },
    {
      title: "MatchWise - Resource Optimization",
      description:
        "Intelligent resource allocation system using Integer Linear Programming to solve NP-hard assignment problems with real-time optimization capabilities.",
      icon: <Target className="w-8 h-8" />,
      achievements: [
        {
          metric: "90% Time Reduction",
          description:
            "Dramatically reduced manual allocation time through automated ILP optimization",
        },
        {
          metric: "<200ms Response Time",
          description:
            "Real-time API performance enabling interactive optimization workflows",
        },
      ],
      technologies: [
        "Python",
        "FastAPI",
        "PuLP",
        "OR-Tools",
        "Flutter",
        "Dart",
        "Firebase",
        "GitHub Actions",
      ],
      category: "Optimization",
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/orgs/yashas-hm-unc/teams/523/repositories",
    },
  ];

  const getGradientClasses = (gradient: string) => {
    return `bg-gradient-to-br ${gradient}`;
  };

  return (
    <section
      id="projects"
      className="py-16 px-4 bg-gray-800 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Innovative solutions combining machine learning, optimization
            algorithms, and modern web technologies to solve real-world
            challenges.
          </p>
        </div>

        <div className="relative px-0 md:px-16">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 5000,
                stopOnInteraction: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2"
                >
                  <div className="h-full min-h-[500px] md:min-h-[600px]">
                    <Card className="card-gradient border-primary/20 shadow-elevated card-hover-lift glow-on-hover group overflow-hidden h-full flex flex-col">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <div
                            className={`p-3 rounded-xl ${getGradientClasses(
                              project.gradient
                            )} text-white shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                          >
                            {project.icon}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <Badge variant="secondary" className="text-xs">
                                {project.category}
                              </Badge>
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-colors">
                              {project.title}
                            </h3>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-4 md:space-y-6 flex-grow flex flex-col px-4 md:px-6">
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {project.description}
                        </p>

                        {/* Key Achievements */}
                        <div className="space-y-3">
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Key Achievements
                          </h4>
                          {project.achievements.map((achievement, achIndex) => (
                            <div
                              key={achIndex}
                              className="flex gap-3 p-3 bg-background/50 rounded-lg border border-primary/10 hover:border-primary/30 hover:bg-background/70 transition-all duration-300 group/achievement"
                            >
                              <div className="flex-shrink-0 mt-0.5">
                                <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center group-hover/achievement:bg-primary/30 group-hover/achievement:scale-110 transition-all duration-300">
                                  <Zap className="w-3 h-3 text-primary group-hover/achievement:rotate-12 transition-transform duration-300" />
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
                        <div className="flex-grow">
                          <h4 className="text-sm font-semibold text-foreground mb-3">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2 min-h-[60px]">
                            {project.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs hover:bg-primary/10 hover:border-primary/50 hover:scale-105 transition-all duration-200 cursor-default"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3 pt-4 mt-auto">
                          <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full min-h-[44px] active:scale-95 transition-transform"
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="w-4 h-4" />
                              Source Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="w-10 h-10 md:w-12 md:h-12" />
            <CarouselNext className="w-10 h-10 md:w-12 md:h-12" />
          </Carousel>

          {/* Mobile Navigation Dots - Visual indicator only */}
          <div className="flex justify-center gap-2 mt-6 md:hidden">
            {projects.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/50 transition-all"
                aria-label={`Project ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
